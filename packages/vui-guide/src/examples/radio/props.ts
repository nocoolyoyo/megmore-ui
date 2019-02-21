import Megmore from '@megmore/vui'
import { PropsPropertries } from '@/global'
const { COLOR, Color, SIZE, Size } = Megmore.constant

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
  }
]

export default props
