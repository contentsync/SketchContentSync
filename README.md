[![GitHub version](https://badge.fury.io/gh/contentsync%2FSketchContentSync.svg)](https://badge.fury.io/gh/contentsync%2FSketchContentSync.sketchplugin)

# SketchContentSync

ContentSync Sketch Plugin.

Abstract, version, and translate your Sketch.app design content. Sync to Google Documents and more.


## Downloading & ContentSync Platform

Register for free at [www.contentsync.io](http://contentsync.io/) and get started easily.

Download plugin [here](./packaged/SketchContentSync.zip). Open zip file and double click on the .sketchplugin file.

# Overview

## Pull Data From Google Spreadsheets into Sketch.app

![PUSH](./docs/contentsyncapp/feature_pull.jpg)

## Push Data From Sketch.app into Google Spreadsheets

![PUSH](./docs/contentsyncapp/feature_push.jpg)


# Interface Flow

SketchContentSync works by integrating this plugin with the ContentSync.app.

### ContentSync.app

![Welcome](./docs/contentsyncapp/welcome_sign_in.png)

### Create Projects

![Create Project](./docs/contentsyncapp/create_project.png)

### Link To Google Document

![Create Project](./docs/contentsyncapp/create_google_doc.png)

### Main Project Menu

![Create Project](./docs/contentsyncapp/actions.png)

## Pushing Data

Pushing data allows you to create a new version of data in your spreadsheet. This will _**write**_ to your google document.

Takes a regular Sketch design...

![PUSH](./docs/contentsyncapp/push_sketch_before.png)

Prompts which fields to push and which version to push to...

![PUSH](./docs/contentsyncapp/push.png)

You can push to a new version or overwrite an existing one.

![After Push](./docs/contentsyncapp/push_sheet.png)


## Pulling Data

Pulling data allows you to update you Sketch design from your Google spreadsheet. This will _**write**_ to your sketch file.

### Take version from your spreadsheet:

![PUSH](./docs/contentsyncapp/pull_sheet.png)

### Prompts which version to pull from...

![PUSH](./docs/contentsyncapp/pull.png)

### Updates your sketch file...

![After Push](./docs/contentsyncapp/pull_sketch_after.png)

# Support / Bugs / Feature Requests

Please submit an issue or contact [support@contentsync.io](mailto:support@contentsync.io).

# Roadmap

+ Support each Sketch.app design page as a separate Spreadsheet Sheet
+ Support advanced text styling per layer (various fonts, sizes, weights, etc)
+ Support image previews of contextual content
+ Better support of nested symbols
+ Improved naming scheme for additional use cases
+ Support one click design translation
