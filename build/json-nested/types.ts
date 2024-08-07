interface IRootObject {
    color: IColor;
    font: IFont;
    'collection 1': {
        headerbig: number;
    };
    typography: ITypography;
}
interface IColor {
    fuschia: IFuschia;
    iris: IIris;
}
interface IFuschia {
    60: string;
    80: string;
    100: string;
}
interface IIris {
    60: string;
    80: string;
    100: string;
}
interface IFont {
    'header 1': {
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
    };
    'header 2': {
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
    };
    body: IBody;
}
interface IBody {
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
interface ITypography {
    'header 1': {
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
    };
    'header 2': {
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
    };
    body: IBody;
}

