[![GitHub version](https://badge.fury.io/gh/contentsync%2FSketchContentSync.svg)](https://badge.fury.io/gh/contentsync%2FSketchContentSync.sketchplugin)

# SketchContentSync 2.4.6

ContentSync Sketch Plugin.

Abstract, version, and translate your Sketch.app design content. Sync to Google Documents and more.


## Getting Started

### ContentSync Platform

We require an account to allow ContentSync to integrate with your Google Documents and more. Don't worry, we only require access to documents we create so all your other documents remain secure and private.

Register for free at [www.contentsync.io](http://contentsync.io/) and get started easily.

### SketchContentSync Plugin

[![Install SketchContentSync with Sketchpacks](http://sketchpacks-com.s3.amazonaws.com/assets/badges/sketchpacks-badge-install.png "Install SketchContentSync with Sketchpacks")](https://sketchpacks.com/contentsync/SketchContentSync.sketchplugin/install)

Or install manually:

+ Download plugin [here](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/SketchContentSync-2.4.6.zip)
+ Open zip file
+ Double click on the .sketchplugin file.

# Overview

## Pull Data From Google Spreadsheets into Sketch.app

![PUSH](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/feature_pull.jpg)

## Push Data From Sketch.app into Google Spreadsheets

![PUSH](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/feature_push.jpg)


# Interface Flow

SketchContentSync works by integrating this plugin with the ContentSync.app.

### ContentSync.app

![Welcome](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/welcome_sign_in.png)

### Create Projects

![Create Project](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/create_project.png)

### Link To Google Document

![Create Project](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/create_google_doc.png)

### Main Project Menu

![Create Project](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/actions.png)

## Pushing Data

Pushing data allows you to create a new version of data in your spreadsheet. This will _**write**_ to your google document.

Takes a regular Sketch design...

![PUSH](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/push_sketch_before.png)

Prompts which fields to push and which version to push to...

![PUSH](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/push.png)

You can push to a new version or overwrite an existing one.

![After Push](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/push_sheet.png)


## Pulling Data

Pulling data allows you to update you Sketch design from your Google spreadsheet. This will _**write**_ to your sketch file.

### Take version from your spreadsheet:

![PUSH](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/pull_sheet.png)

### Prompts which version to pull from...

![PUSH](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/pull.png)

### Updates your sketch file...

![After Push](https://github.com/contentsync/SketchContentSync.sketchplugin/blob/master/docs/contentsyncapp/pull_sketch_after.png)

# Support / Bugs / Feature Requests

Please submit an issue or contact [support@contentsync.io](mailto:support@contentsync.io).

# Roadmap

- [x] Support each Sketch.app design page as a separate Spreadsheet Sheet
- [x] Support advanced text styling per layer (various fonts, sizes, weights, etc)
- [x] Better support of nested symbols
- [ ] Support image previews of contextual content
- [ ] Improved naming scheme for additional use cases
- [ ] Support one click design translation
