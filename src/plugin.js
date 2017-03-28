/**
 * Plugin
 *
 * Defines the plugin structure and metadata.
 */


import * as commands from './commands'
import * as listeners from './listeners'

export const SketchContentSyncExtension = {
  name: 'SketchContentSync',
  bundleName: 'SketchContentSync',
  description: 'Abstract, version, and translate your design content. Sync to Google Documents and more.',
  author: 'Syncify',
  authorEmail: 'support@contentsync.io',
  version: '2.2.0',
  identifier: 'com.syncify.sketch.contentsync',
  compatibleVersion: '3.7',
  repository: {
    url: 'https://github.com/contentsync/SketchContentSync'
  },
  menu:{
    "title":"Toggle ContentSync",
    "isRoot":true,
    "items":[
      "commandTogglePanels"
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
      run: commands.openOSXApp
    },
    commandTogglePanels: {
      name: 'Toggle ContentSync',
      shortcut: 'cmd =',
      run: commands.togglePanels
    },
    listenerOnStartup: {
      run: listeners.onStartup
    },
    listenerOnDocumentOpen: {
      run: listeners.onDocumentOpen
    },
    startUp: {
      handlers: {
        actions: {
          "Startup": "___listenerOnStartup_run_handler_",
          "OpenDocument": "___listenerOnDocumentOpen_run_handler_"
        }
      }
    }
  }
}
