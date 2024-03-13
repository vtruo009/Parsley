/**
 * Available color that can be used with multiselect, text, and select
 */
export enum Color {
    BLUE = 'blue',
    BROWN = 'brown',
    DEFAULT = 'default',
    GRAYP = 'gray',
    GREEN = 'green',
    ORANGE = 'orange',
    PINK = 'pink',
    PURPLE = 'purple',
    RED = 'red',
    YELLOW = 'yellow',
}

/**
 * Available background color that can be used with texts and blocks
 */
export enum BackgroundColor {
    BLUE = 'blue_background',
    BROWN = 'brown_background',
    GRAY = 'gray_background',
    GREEN = 'green_background',
    ORANGE = 'orange_background',
    PINK = 'pink_background"',
    PURPLE = 'purple_background',
    RED = 'red_background',
    YELLOW = 'yellow_background',
}

export type TextColor = Color | BackgroundColor;

export interface Select {
    name: string;
    color: Color;
    id?: string;
}
