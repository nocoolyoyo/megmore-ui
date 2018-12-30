/**
 * 断点
 * breakpoints constant
 * @type {string[]}
 */
//

export const ELEVATION_MIN = 0

export const ELEVATION_DEFAULT = 2

export const ELEVATION_MAX = 24

export enum STATUS {
  success = 0,
  pending = 1,
  failure = 2
}

export enum BREAKPOINT {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}
// export const BREAKPOINTS = Object.values(BREAKPOINT)
export const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl']

export enum VARIETY {
  normal = 'normal',
  flat = 'flat',
  outline = 'outline'
}

export const SHAPES = ['square', 'corner', 'round', 'circle']

export enum SHAPE {
  circle = 'circle',
  round = 'round',
  corner = 'corner',
  square = 'square'
}

export const COLORS = ['primary', 'error', 'success', 'warning']

export enum COLOR {
  primary = 'primary',
  error = 'error',
  success = 'success',
  warning = 'warning'
}

export enum FILL {
  left = 'left',
  both = 'both',
  right = 'right',
  none = 'none'
}
