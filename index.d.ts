export interface BarChartData {
    name: string;
    value: number;
}

export interface RadarChartMargin {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export interface RadarChartLegend {
    title: string;
    translateX: number;
    translateY: number;
}

export interface BarChartOptions {
    w?: number;                     // Width of the circle
    h?: number;                     // Height of the circle
    margin?: RadarChartMargin;      // The margins of the SVG
}

export interface SVGOptions {
    selector?: string;
    svgStyle?: string;
    container?: string;
    radius?: number;
}

export type BarGenerateType = 'svg' | 'html'
export interface BarGenerateOptions {
    write?: boolean;
    dest?: string;
    fileName?: string;
}

export type BarChartImage = 'png' | 'jpeg'
export interface BarImageOptions {
    width?: number;
    height?: number;
    quality?: number;
    dest?: string;
    fileName?: string;
}

export function BarChart(data: BarChartData[], options: BarChartOptions, svgOptions?: SVGOptions): any;
export function generateString(d3n: any, type?: BarGenerateType, options?: BarGenerateOptions): string
export function generateImage(d3n: any, type?: BarChartImage, options?: BarImageOptions): any;