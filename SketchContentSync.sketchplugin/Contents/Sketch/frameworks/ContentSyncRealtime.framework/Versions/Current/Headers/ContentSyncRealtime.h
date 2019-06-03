//
//  ContentSyncRealtime.h
//  ContentSyncRealtime
//
//  Created by David Brody on 1/17/18.
//  Copyright © 2018 Syncify. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <ContentSyncRuntime.h>
#import "NSObject+DumpClassInfo.h"

//! Project version number for ContentSyncRealtime.
FOUNDATION_EXPORT double ContentSyncRealtimeVersionNumber;

//! Project version string for ContentSyncRealtime.
FOUNDATION_EXPORT const unsigned char ContentSyncRealtimeVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <ContentSyncRealtime/PublicHeader.h>


@interface ContentSyncRealtime : NSObject

@property (strong, retain) COScript* coscript;

+ (void)load;
+ (void)unload;

+ (void)actionToggle:(MSDocument*)doc;
+ (void)actionPush:(MSDocument*)doc;
+ (void)actionPull:(MSDocument*)doc;

+ (void)actionSelectedLayersDisable:(MSDocument*)doc;
+ (void)actionSelectedLayersEnable:(MSDocument*)doc;

@end

