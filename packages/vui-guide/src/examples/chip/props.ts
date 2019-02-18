import Megmore from '@megmore/vui'
import { PropsPropertries } from '@/global'
const { COLOR, Color, SIZE, Size, Variety, VARIETY, Shape, SHAPE, ELEVATION } = Megmore.constant

const props: Array<PropsPropertries> = [
  {
    name: 'size',
    type: 'radio',
    default: Size.md,
    value: SIZE
  },
  {
    name: 'color',
    type: 'radio',
    default: Color.primary,
    value: COLOR
  },
  {
    name: 'elevation',
    type: 'radio',
    default: 2,
    value: ELEVATION
  },
  {
    name: 'variety',
    type: 'radio',
    default: Variety.default,
    value: VARIETY
  },
  {
    name: 'shape',
    type: 'radio',
    default: Shape.corner,
    value: SHAPE
  },
  {
    name: 'closeable',
    type: 'radio',
    default: false,
    value: [true, false]
  },
  {
    name: 'closeover',
    type: 'radio',
    default: false,
    value: [true, false]
  }
]

export default props
