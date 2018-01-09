//
//  ContentSyncPanelManager.h
//  ContentSync
//
//  Created by David Brody on 2/26/17.
//  Copyright © 2017 Syncify. All rights reserved.
//

#import "Globals.h"
#import "CSLogger.h"
#import "Runtime/CSRuntime.h"

NSString* const globalnotificationID;

@interface ContentSyncPanelManager : NSObject

+ (ContentSyncPanelManager*)sharedManager;

- (NSString*)toggleContentSync;
- (NSString*)loadContentSync;
- (NSString*)unloadContentSync;

- (NSString*)actionPush;
- (NSString*)actionPull;

@end
