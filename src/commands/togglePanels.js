/**
 * Push
 *
 */

import Context from '../context';
import * as FrameworkManager from '../library/framework_manager';

export default (context) => {
  Context(context)
  FrameworkManager.loadContentSyncFramework();
  let main = ContentSyncPanelManager.alloc().init();
  let response = main.togglePanels();
  log(response);
}
