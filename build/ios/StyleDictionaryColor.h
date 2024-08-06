
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 06 Aug 2024 10:30:45 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorFuschia60,
ColorFuschia80,
ColorFuschia100,
ColorIris60,
ColorIris80,
ColorIris100
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
