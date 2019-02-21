import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator'
// import { getStyle } from '@megmore/es-helper'
import MButton from '../../button'
import MIcon from '../../icon'
import { Color, color, Variety, Shape, DateTimeValueType, dateTimeValueType } from '../../core/constant'

const compName = 'm-time-picker-panel-time'
// const baseFont: any = getStyle(document.documentElement, 'font-size')
// const clockSize = 12 * Number(baseFont.substring(0, baseFont.length - 2))
// const clockStyle = {
//     height: `${clockSize}px`,
//     width:  `${clockSize}px`,
// }

@Component({ components: { MButton, MIcon } })
export default class MTimePickerPanelTime extends Vue {
  @Prop({ type: String, default: Color.primary })
  color!: color

  @Prop({ type: Number, default: 1 })
  hourStep!: number

  @Prop({ type: Number, default: 1 })
  minuteStep!: number

  @Inject()
  DateStore!: any

  @Emit('pick')
  onClick (val: number, type: dateTimeValueType): void {
    this.DateStore.SET_ACTIVE_TYPE(type)
    this.DateStore.UPDATE(
      (type === DateTimeValueType.hours && this.DateStore.ampm && !this.DateStore.am)
        ? val + 12
        : val,
      type
    )
  }

  RList (type: dateTimeValueType) {
    const { color, onClick, hourStep, minuteStep } = this
    const { ampm } = this.DateStore
    const min = 0
    const max = type === DateTimeValueType.hours ? ampm ? 11 : 23 : 59
    const step = type === DateTimeValueType.hours ? hourStep : minuteStep
    const time = this.DateStore[type]
    const Temps: any = []

    for (let tempTime = min; tempTime <= max; tempTime += step) {
      const isCurrent = tempTime === time
      Temps.push(
        <div v-m-ripple
             staticClass='m-time-picker-cell'
             class={{'m--checked': isCurrent}}
             onClick={() => onClick(tempTime, type)}>
          {tempTime}
        </div>
      )
    }

    return (
      <div staticClass={`${compName}__list ${compName}__list-${type}`}>
        {Temps}
      </div>
    )
  }

  render () {
    const { RList } = this
    const Result: any = []

    Result.push(RList(DateTimeValueType.hours))
    Result.push(RList(DateTimeValueType.minutes))

    return (
      <div staticClass={compName}>{Result}</div>
    )
  }
}
