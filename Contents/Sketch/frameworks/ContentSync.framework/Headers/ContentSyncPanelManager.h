//
//  ContentSyncPanelManager.h
//  ContentSync
//
//  Created by David Brody on 2/26/17.
//  Copyright © 2017 Syncify. All rights reserved.
//

#import "Globals.h"
#import "CSDocumentState.h"
#import "CSLogger.h"
#import "NotificationListeners/MSDocumentWindowNotificationListener.h"
#import "NotificationListeners/AllNotificationsListener.h"

NSString* const globalnotificationID;

@interface ContentSyncPanelManager : NSObject

+ (ContentSyncPanelManager*)sharedManager;

- (NSString*)toggleContentSync;
- (NSString*)loadContentSync;
- (NSString*)unloadContentSync;

@end
