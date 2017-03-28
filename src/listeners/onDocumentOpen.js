/**
 * Git File Name
 *
 * Returns the currently open and selected sketch file.
 */

import Context from '../context'
import * as FrameworkManager from '../library/framework_manager'

export default (context) => {
  Context(context)
  FrameworkManager.loadContentSyncFramework();
  let main = ContentSyncPanelManager.sharedManager();
  let response = main.onOpenDocument();
}
