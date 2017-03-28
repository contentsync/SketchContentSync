var gulp = require('gulp');
var rename = require("gulp-rename");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var fs = require('fs');
var path = require('path');
var runSequence = require('run-sequence');
var del = require('del');
var async = require('async');
var fse = require('fs-extra');
var expandTilde = require('expand-tilde');

var release = require('gulp-github-release');
var zip = require('gulp-zip');

var sketch = require('gulp-sketch');

var SKETCH_PLUGINS_FOLDER = path.join(expandTilde('~'),'/Library/Application Support/com.bohemiancoding.sketch3/Plugins');

var ManifestProcessorOptions = {
    pluginManifestDescriberName: 'SketchContentSyncExtension',
    startingManifestTag: '__$begin_of_manifest_\n',
    endingManifestTag: '__$end_of_manifest_\n',
    scriptFileName: 'plugin.js',
    globalVarName: '__globals'
};

var currentManifest = {};


function extractManifestObject() {
    var data = fs.readFileSync(path.join(__dirname,'build',ManifestProcessorOptions.scriptFileName),'utf8');
    var startTag = ManifestProcessorOptions.startingManifestTag;
    var endTag = ManifestProcessorOptions.endingManifestTag;

    var startIndex = data.indexOf(startTag);
    var endIndex = data.indexOf(endTag);

    if(startIndex === -1 || endIndex === -1) {
        return;
    }

    return JSON.parse(data.substring(startIndex+startTag.length,endIndex));
}

gulp.task('assets',function(callback) {

});

gulp.task('clean', function () {
    return del(['build/**','dist/**','packaged/**']);
});

gulp.task('prepare-manifest',function(callback) {
    var manifest = extractManifestObject();
    fse.outputJsonSync(path.join(__dirname,'build/manifest.json'),manifest);
    currentManifest = manifest;
    callback(null);
});

gulp.task('prepare-folders',function(callback) {
    async.parallel({
        build: function(callback) {
            fse.ensureDir(path.join(__dirname,'build'),callback);
        },
        dist: function(callback) {
            fse.ensureDir(path.join(__dirname,'dist'),callback);
        },
        packaged: function(callback) {
            fse.ensureDir(path.join(__dirname,'packaged'),callback);
        }
    },callback);
});


gulp.task('assemble-plugin-bundle',function(callback) {

    function normalizePluginFileName(name) {
        return name;
    }

    var bundlePath = path.join(__dirname,'dist',normalizePluginFileName(currentManifest.bundleName || currentManifest.name) + '.sketchplugin');

    async.parallel({
        manifest: function(callback) {
            fse.outputJson(path.join(bundlePath,'Contents','Sketch','manifest.json'),currentManifest,callback);
        },
        runtime: function(callback) {
            var script = fs.readFileSync(path.join(__dirname,'build',ManifestProcessorOptions.scriptFileName),'utf8');
            script = ["var "+ManifestProcessorOptions.globalVarName+" = this;",script].join("");

            fse.outputFile(path.join(bundlePath,'Contents','Sketch',ManifestProcessorOptions.scriptFileName),script,callback);
        }
    },function(err,data) {
        callback(null);
    });
});

gulp.task('assemble-plugin-resources',function(callback) {
    function normalizePluginFileName(name) {
        return name;
    }

    return gulp.src('src/resources/**/*.*')
        .pipe(gulp.dest(path.join(__dirname,'dist',normalizePluginFileName(currentManifest.bundleName || currentManifest.name)+'.sketchplugin','Contents/Resources')));
});

gulp.task('assemble-frameworks',function(callback) {
    function normalizePluginFileName(name) {
        return name;
    }
    return gulp.src([
        'src/frameworks/ContentSync.framework/Debug/ContentSync.framework/Versions/A/**/*'
        // 'src/frameworks/**/*.framework/Debug/*.framework/**/*.*',
        // '!src/frameworks/**/*.framework/Debug/*.framework/Versions',
        // '!src/frameworks/**/*.framework/Debug/*.framework/Resources',
        // '!src/frameworks/**/*.framework/Debug/*.framework/Modules',
        // '!src/frameworks/**/*.framework/Debug/*.framework/Headers'
        ])
        // .pipe(rename(function(path){
        //     path.dirname = path.dirname.split('\/').splice(2).join('\/');
        // }))
        .pipe(gulp.dest(path.join(__dirname,'dist',normalizePluginFileName(currentManifest.bundleName || currentManifest.name)+'.sketchplugin','Contents/Sketch/frameworks/ContentSync.framework/')));
});

gulp.task('assemble-plugin-presets',function(callback) {
    function normalizePluginFileName(name) {
        return name;
    }

    return gulp.src('src/presets/**/*.*')
        .pipe(gulp.dest(path.join(__dirname,'dist',normalizePluginFileName(currentManifest.bundleName || currentManifest.name)+'.sketchplugin','Presets')));
});

//custom Presets
gulp.task('assemble-plugin-custompresets',function(callback) {
    function normalizePluginFileName(name) {
        return name;
    }

    return gulp.src('src/custom-presets/**/*.*')
        .pipe(gulp.dest(path.join(__dirname,'dist',normalizePluginFileName(currentManifest.bundleName || currentManifest.name)+'.sketchplugin','Presets')));
});

gulp.task('uninstall-plugin', ['prepare-manifest'], function(){
    function normalizePluginFileName(name) {
        return name;
    }
    var name = normalizePluginFileName(currentManifest.bundleName || currentManifest.name)+'.sketchplugin';
    return del([SKETCH_PLUGINS_FOLDER + '/' + name], { force: true });
});

gulp.task('install-plugin', ['uninstall-plugin', 'install-root'], function(){
    return gulp.src(["dist/**/*.*", "dist/**/*"])
        .pipe(gulp.dest(SKETCH_PLUGINS_FOLDER));
});

gulp.task('uninstall-root', ['prepare-manifest'], function(){
    function normalizePluginFileName(name) {
        return name;
    }
    var name = normalizePluginFileName(currentManifest.bundleName || currentManifest.name)+'.sketchplugin';
    return del([__dirname + '/' + name], { force: true });
});

gulp.task('install-root', ['uninstall-root'], function(){
    return gulp.src(["dist/**/*.*", "dist/**/*"])
        .pipe(gulp.dest(__dirname));
});

gulp.task('build',function(callback) {
    runSequence('clean','prepare-folders','bundle','prepare-manifest','assemble-plugin-bundle','assemble-plugin-resources', 'assemble-frameworks', 'assemble-plugin-presets','install-plugin', 'zip',callback);
});

gulp.task('build-custom',function(callback) {
    runSequence('clean','assets','prepare-folders','bundle','prepare-manifest','assemble-plugin-bundle','assemble-plugin-resources', 'assemble-frameworks', 'assemble-plugin-presets','assemble-plugin-custompresets','install-plugin', 'zip',callback);
});


gulp.task('bundle',function() {
    var filePath = './src/plugin.js';
    var extensions = ['.js'];

    var bundler = browserify({
        entries: [filePath],
        extensions: extensions,
        debug: true
    });

    bundler.transform({ global: true }, babelify.configure({
        presets: ["es2015"],
        plugins: ["transform-object-rest-spread", ["babel-plugin-sketch-manifest-processor",ManifestProcessorOptions]]
    }));

    return bundler.bundle()
        .pipe(source(ManifestProcessorOptions.scriptFileName))
        .pipe(gulp.dest('./build/'));
});


gulp.task('watch', function(){
    runSequence('build', function() {
        gulp.watch('./src/**/*.*',function() {
            console.log("Watching...");
            runSequence('clean','build',function(){
                console.log("Rebuild complete!");
            });
        });
    });
});

gulp.task('default',function(callback) {
    runSequence('assets','build', callback);
});

gulp.task('zip', function() {
  return gulp.src('./dist/*.sketchplugin/**/*')
    .pipe(zip('SketchContentSync.zip'))
    .pipe(gulp.dest('packaged'))
});

gulp.task('release', ['zip'], function() {
  return gulp.src('./packaged/SketchContentSync.zip')
    .pipe(release({
      //token: 'token',                     // or you can set an env var called GITHUB_TOKEN instead
      //owner: 'syncify',                    // if missing, it will be extracted from manifest (the repository.url field)
      //repo: '',            // if missing, it will be extracted from manifest (the repository.url field)
      //tag: 'v1.0.0',                      // if missing, the version will be extracted from manifest and prepended by a 'v'
      //name: 'publish-release v1.0.0',     // if missing, it will be the same as the tag
      //notes: 'Fix for Sketch Version 42',                // if missing it will be left undefined
      draft: false,                       // if missing it's false
      prerelease: false,                  // if missing it's false
      manifest: require('./build/manifest.json') // package.json from which default values will be extracted if they're missing
    }));
});
