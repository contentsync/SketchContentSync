//
//  ContentSync.h
//  ContentSyncRealtime
//
//  Created by David Brody on 7/15/21.
//  Copyright © 2021 Syncify. All rights reserved.
//

#ifndef ContentSync_h
#define ContentSync_h

#import <ContentSyncRuntime.h>
#import "ContentSyncAPI.h"

//! Project version number for ContentSync.
FOUNDATION_EXPORT double ContentSyncVersionNumber;

//! Project version string for ContentSync.
FOUNDATION_EXPORT const unsigned char ContentSyncVersionString[];


@interface ContentSync : NSObject

@property (class, readonly) ContentSyncAPI* API;

@end



#endif /* ContentSync_h */
