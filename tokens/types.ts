interface IRootObject {
    color: IColor;
    font: IFont;
    typography: ITypography;
}
interface IColor {
    fuschia: IFuschia;
    iris: IIris;
}
interface IFuschia {
    60: I60;
    80: I80;
    100: I100;
}
interface I60 {
    description: string;
    type: string;
    value: string;
    blendMode: string;
    extensions: IExtensions;
}
interface IExtensions {
    'org.lukasoppermann.figmaDesignTokens': {
        styleId: string;
        exportKey: string;
    };
}
interface I80 {
    description: string;
    type: string;
    value: string;
    blendMode: string;
    extensions: IExtensions;
}
interface I100 {
    description: string;
    type: string;
    value: string;
    blendMode: string;
    extensions: IExtensions;
}
interface IIris {
    60: I60;
    80: I80;
    100: I100;
}
interface IFont {
    'header 1': {
        type: string;
        value: IValue;
        extensions: IExtensions;
    };
    'header 2': {
        type: string;
        value: IValue;
        extensions: IExtensions;
    };
    body: IBody;
}
interface IValue {
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
    type?: string;
    value?: IValue;
    extensions?: IExtensions;
    fontSize?: IFontSize;
    textDecoration?: ITextDecoration;
    fontFamily?: IFontFamily;
    fontWeight?: IFontWeight;
    fontStyle?: IFontStyle;
    fontStretch?: IFontStretch;
    letterSpacing?: ILetterSpacing;
    lineHeight?: ILineHeight;
    paragraphIndent?: IParagraphIndent;
    paragraphSpacing?: IParagraphSpacing;
    textCase?: ITextCase;
}
interface ITypography {
    'header 1': {
        fontSize: IFontSize;
        textDecoration: ITextDecoration;
        fontFamily: IFontFamily;
        fontWeight: IFontWeight;
        fontStyle: IFontStyle;
        fontStretch: IFontStretch;
        letterSpacing: ILetterSpacing;
        lineHeight: ILineHeight;
        paragraphIndent: IParagraphIndent;
        paragraphSpacing: IParagraphSpacing;
        textCase: ITextCase;
    };
    'header 2': {
        fontSize: IFontSize;
        textDecoration: ITextDecoration;
        fontFamily: IFontFamily;
        fontWeight: IFontWeight;
        fontStyle: IFontStyle;
        fontStretch: IFontStretch;
        letterSpacing: ILetterSpacing;
        lineHeight: ILineHeight;
        paragraphIndent: IParagraphIndent;
        paragraphSpacing: IParagraphSpacing;
        textCase: ITextCase;
    };
    body: IBody;
}
interface IFontSize {
    type: string;
    value: number;
}
interface ITextDecoration {
    type: string;
    value: string;
}
interface IFontFamily {
    type: string;
    value: string;
}
interface IFontWeight {
    type: string;
    value: number;
}
interface IFontStyle {
    type: string;
    value: string;
}
interface IFontStretch {
    type: string;
    value: string;
}
interface ILetterSpacing {
    type: string;
    value: number;
}
interface ILineHeight {
    type: string;
    value: number;
}
interface IParagraphIndent {
    type: string;
    value: number;
}
interface IParagraphSpacing {
    type: string;
    value: number;
}
interface ITextCase {
    type: string;
    value: string;
}

