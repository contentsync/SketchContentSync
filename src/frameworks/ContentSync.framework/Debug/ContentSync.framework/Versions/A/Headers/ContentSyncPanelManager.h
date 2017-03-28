//
//  ContentSyncPanelManager.h
//  ContentSync
//
//  Created by David Brody on 2/26/17.
//  Copyright © 2017 Syncify. All rights reserved.
//

#import "Globals.h"
#import "Listeners/ContentSyncListener.h"
#import "Interface/Interface.h"
#import "Commands/CommandGetFileName.h"
#import "Commands/CommandOpenOSX.h"
#import "Commands/CommandPush.h"
#import "Commands/CommandPull.h"

@interface ContentSyncPanelManager : NSObject

+ (ContentSyncPanelManager*)sharedManager;

// Commands
- (NSString*)openOSXApp;
- (NSString*)getFileName;
- (NSString*)pull;
- (NSString*)push;

// Listeners
- (NSString*)onStartup;
- (NSString*)onOpenDocument;

@end
