/**
 * Plugin
 *
 * Defines the plugin structure and metadata.
 */


import * as commands from './commands'

export const SketchContentSyncExtension = {
  name: 'SketchContentSync',
  bundleName: 'SketchContentSync',
  description: 'Abstract, version, and translate your design content. Sync to Google Documents and more.',
  author: 'Syncify',
  authorEmail: 'support@contentsync.io',
  version: '2.0.0',
  identifier: 'com.syncify.sketch.contentsync',
  compatibleVersion: '3.7',
  repository: {
    url: 'https://github.com/contentsync/SketchContentSync'
  },
  menu:{
    "title":"Toggle ContentSync",
    "isRoot":true,
    "items":[
      "commandOpenOSXApp"
    ]
  },
  commands: {
    commandPull: {
      run: commands.pull
    },
    commandPush: {
      run: commands.push
    },
    commandGetFileName: {
      run: commands.getFileName
    },
    commandOpenOSXApp: {
      name: 'Toggle ContentSync',
      shortcut: 'cmd =',
      run: commands.openOSXApp
    }
  }
}
