interface IRootObject {
    color: IColor;
    font: IFont;
    typography: ITypography;
}
interface IColor {
    grey: IGrey;
    red: IRed;
    green: IGreen;
    orange: IOrange;
    blue: IBlue;
    purple: IPurple;
    brand: IBrand;
}
interface IGrey {
    4: string;
    5: string;
    10: string;
    15: string;
    24: string;
    40: string;
    50: string;
    80: string;
    90: string;
    'light grey': string;
    '2 5': string;
}
interface IRed {
    5: string;
    10: string;
    20: string;
    60: string;
    pressed: string;
    hover: string;
    'default': string;
}
interface IGreen {
    5: string;
    10: string;
    20: string;
    60: string;
    pressed: string;
    hover: string;
    'default': string;
}
interface IOrange {
    5: string;
    10: string;
    20: string;
    60: string;
    pressed: string;
    hover: string;
    'default': string;
}
interface IBlue {
    5: string;
    10: string;
    20: string;
    60: string;
    pressed: string;
    hover: string;
    'default': string;
}
interface IPurple {
    5: string;
    10: string;
    20: string;
    60: string;
    pressed: string;
    hovered: string;
    'default': string;
}
interface IBrand {
    'dark grey': string;
    'smart red': string;
    'grey 30': string;
    white: string;
}
interface IFont {
    header: IHeader;
    subtitle: ISubtitle;
    body: IBody;
    buttons: IButtons;
}
interface IHeader {
    xxlarge: IXxlarge;
    xlarge: IXlarge;
    large: ILarge;
    medium: IMedium;
    base: IBase;
}
interface IXxlarge {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
}
interface IXlarge {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
}
interface ILarge {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
}
interface IMedium {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
}
interface IBase {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
}
interface ISubtitle {
    large: ILarge;
    medium: IMedium;
    base: IBase;
    small: ISmall;
}
interface ISmall {
    fontSize: number;
    textDecoration: string;
    fontFamily: string;
    fontWeight: number;
    fontStyle: string;
    fontStretch: string;
    letterSpacing: number;
    lineHeight: number;
    paragraphIndent: number;
    paragraphSpacing: number;
    textCase: string;
}
interface IBody {
    medium: IMedium;
    base: IBase;
    small: ISmall;
}
interface IButtons {
    medium: IMedium;
    base: IBase;
    small: ISmall;
}
interface ITypography {
    header: IHeader;
    subtitle: ISubtitle;
    body: IBody;
    buttons: IButtons;
}

