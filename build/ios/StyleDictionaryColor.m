
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Tue, 06 Aug 2024 10:30:45 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.988f green:0.867f blue:0.925f alpha:1.000f],
[UIColor colorWithRed:0.945f green:0.471f blue:0.714f alpha:1.000f],
[UIColor colorWithRed:0.937f green:0.365f blue:0.659f alpha:1.000f],
[UIColor colorWithRed:0.647f green:0.651f blue:0.965f alpha:1.000f],
[UIColor colorWithRed:0.471f green:0.475f blue:0.945f alpha:1.000f],
[UIColor colorWithRed:0.365f green:0.373f blue:0.937f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
