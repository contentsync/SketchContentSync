Abstract, version, and translate your Sketch.app design content.

Check out our new **[ContentSync Desktop App](https://github.com/contentsync/contentsync-desktop)** too!

# SketchContentSync 4.2.14

Sync to Google Documents and more. **Directly from within Sketch.**

Visit [www.contentsync.io](http://www.contentsync.io) for more details.

![Plugin Features](./docs/plugin_features.png)
![Spreadsheets Features](./docs/spreadsheet_features.png)

### ContentSync Platform

We require an account to allow ContentSync to integrate with your Google Documents and more. Don't worry, we only require access to documents we create so all your other documents remain secure and private.

Register for free at [www.contentsync.io](http://www.contentsync.io/) and get started easily.

### SketchContentSync Plugin

#### Install with Sketch Runner
With Sketch Runner, just go to the `install` command and search for `SketchContentSync`. Runner allows you to manage plugins and do much more to speed up your workflow in Sketch. [Download Runner here](http://www.sketchrunner.com).

![Sketch Runner screenshot](./docs/sketchrunner.png)


#### Install Manually
+ [Download plugin here](https://s3-us-west-2.amazonaws.com/contentsync-sketch-releases/SketchContentSync-latest-stable.zip)
+ Open zip file
+ Double click on the .sketchplugin file.


## Support / Bugs / Feature Requests

Create a github issue or contact [support@contentsync.io](mailto:support@contentsync.io).

### Changelog

#### 4.2.14
+ Updates for Sketch 52

#### 4.2.13
+ Fix override parsing bug that would result in [NSInvalidArgumentException: NSDictionaryM isNull] errors.

#### 4.2.12
+ Fixes toggling ContentSync toolbar
+ Removes 'Add Context' setting - use mapping functions instead

#### 4.2.11
+ Updates build for better formatting and automatic version recogition
+ Fix layer/symbol position and sizing for Desktop (and soon to come new platform)
+ Fix isNull bug when syncing with styles enabled
+ Fix to ensure project settings are updated before commands are run
+ Improved error reporting and displaying

#### 4.2.5
+ Fixes issues when pushing library symbols
+ Fixes positioning and sizing of text layers on exported artboards for ContentSync Desktop
+ Fixes ignoring hidden layers for artboart exporting for ContentSync Desktop
+ Ignored artboards with no text layers for ContentSync Desktop

#### 4.2.4
+ [#79](https://github.com/contentsync/SketchContentSync/issues/79) Fixes manifest version for updates

#### 4.2.3

+ [#77](https://github.com/contentsync/SketchContentSync/issues/77) Fixes version dropdown updates when versions removed
+ [#76](https://github.com/contentsync/SketchContentSync/issues/76) Supports Sketch Midnight theming
+ Improves speed of push

#### 4.2.2

+ Automatically pushes all keys for overrides - even blank ones
+ Fixes version dropdown / selection when creating a new version
+ [#74](https://github.com/contentsync/SketchContentSync/issues/74) Fixes handling of cases of MSImmutableTextLayer
+ Better error capturing/reporting for support help

#### 4.2.1

+ Fixes positioning of embedded layers in groups for ContentSync Desktop
+ Fixes issues syncing when symbol instance has image override
