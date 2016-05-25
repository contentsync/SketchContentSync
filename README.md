[![GitHub version](https://badge.fury.io/gh/ideo%2FSketchContentSync.sketchplugin.svg)](https://badge.fury.io/gh/ideo%2FSketchContentSync.sketchplugin)

# Sketch Content Sync

Dynamically update content within sketch files.

Current support:

+ Google Spreadsheets

# How to Install It

+ Download the Zip File
+ Double click on the .sketchplugin file
+ Available in Sketch under `Plugins` > `SketchContentSync`


# How to use it

## 1. Create Google Document

Create a google document with the content you want to use. The first column is the `[key]` of the content, and each column to the right is a translation / varition of that content.

![Doc Screen](./docs/doc_screen.png)

## 2. Create text field(s)

Naming a text field with a name as `sync:[key]`, replacing `[key]` with the key used in the google document will cause it to be synchronized. Other text fields will be ignored.

![Start](./docs/start.png)


## 3. Run ContentSync Sketch Plugin

### 3.1 Run Plugin

![Run](./docs/run.png)

### 3.2 Enter Google Doc URL

The URL must be public. To get the Google Document URL use either:

+ Share doc via `File` > `Publish to the web...`
+ Use https://sheetsu.com

![Run](./docs/google_path.png)

### 3.3 Choose Language / Variation

The language/variation is each of the columns in the google document.

![Run](./docs/variant.png)

### 3.4 Voila!

![Run](./docs/result.png)


## References

This was created using concepts from:

+ http://developer.sketchapp.com/
+ https://github.com/rodi01/RenameIt
+ https://github.com/nolastan/sync.sketchplugin
