export interface BarChartData {
    name: string;
    value: number;
}

export interface ChartMargin {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

export interface BarChartOptions {
    w?: number;                     // Width of the circle
    h?: number;                     // Height of the circle
    margin?: ChartMargin;      // The margins of the SVG
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

export function BarChart(data: BarChartData[], options?: BarChartOptions, svgOptions?: SVGOptions): any;
export function generateString(d3n: any, type?: BarGenerateType, options?: BarGenerateOptions): string
export function generateImage(d3n: any, type?: BarChartImage, options?: BarImageOptions): any;