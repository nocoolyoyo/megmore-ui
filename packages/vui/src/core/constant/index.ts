import ELEVATION from './elevation'
import PALETTE from './palette'

export {
  ELEVATION,
  PALETTE
}

export const ELEVATIONS: number[] = ELEVATION.map((item, index) => index)

export type elevation = number

export enum STATUS {
  success = 0,
  pending = 1,
  failure = 2
}

export type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export enum BREAKPOINT {
  xs = 0,
  sm = 576,
  md = 768,
  lg = 992,
  xl = 1200
}

export const BREAKPOINTS = Object.values(BREAKPOINT)

export type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string | number

export enum SIZE {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

export const SIZES = Object.values(SIZE)

export const COLS = 24

export enum variety {
  normal = 'normal',
  flat = 'flat',
  outline = 'outline'
}

export enum VARIETY {
  normal = 'normal',
  flat = 'flat',
  outline = 'outline'
}

export const VARIETYS = Object.values(VARIETY)

export enum shape {
  circle = 'circle',
  round = 'round',
  corner = 'corner',
  square = 'square'
}

export enum SHAPE {
  circle = 'circle',
  round = 'round',
  corner = 'corner',
  square = 'square'
}

export const SHAPES = Object.values(SHAPE)

export enum color {
  primary = 'primary',
  error = 'error',
  success = 'success',
  warning = 'warning',
  default = 'default'
}

export enum COLOR {
  primary = 'primary',
  error = 'error',
  success = 'success',
  warning = 'warning',
  default = 'default'
}

export const COLORS = Object.values(COLOR)

export type mode = 'day' | 'night'

export enum MODE {
  day = 'day',
  night = 'night'
}

export const MODES = Object.values(MODE)

export type fill = 'left' | 'both' | 'right' | 'none'

export enum FILL {
  left = 'left',
  both = 'both',
  right = 'right',
  none = 'none'
}

export type flexJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'none'

export enum FLEX_JUSTIFY {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
  evenly = 'evenly',
  none = 'none'
}

export type flexWrap = 'normal' | 'reverse' | 'none'

export enum FLEX_WRAP {
  normal = 'normal',
  reverse = 'reverse',
  none = 'none'
}

export type flexAlign = 'start' | 'center' | 'end' | 'stretch'

export enum FLEX_ALIGN {
  start = 'start',
  center = 'center',
  end = 'end',
  stretch = 'stretch',
}

export type align = 'left' | 'center' | 'right' //  水平轴