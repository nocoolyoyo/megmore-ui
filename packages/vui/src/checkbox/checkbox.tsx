import { Component, Prop, Emit, Mixins } from 'vue-property-decorator'
import MIcon from '../icon'
import colorable from '../core/mixin/colorable'
import sizeable from '../core/mixin/sizeable'
import { genColor, genFontColor, genSize } from '../core/util'

const compName = 'm-checkbox'

@Component({
  components: { MIcon }
})
export default class MCheckbox extends Mixins (
  colorable,
  sizeable
) {
  @Prop({ type: [Array, Number, String, Boolean], default: false })
  value!: any

  @Prop({ type: [Array, Number, String, Boolean], default: true })
  label!: any

  @Prop({ type: String, default: 'check_box' })
  checkedIcon!: string

  @Prop({ type: String, default: 'check_box_outline_blank' })
  uncheckIcon!: string

  @Prop({ type: String, default: 'indeterminate_check_box' })
  incheckIcon!: string

  @Prop({ type: Boolean })
  disabled!: boolean

  @Emit('input')
  onInput (val: any): void { }

  isArrayValue: boolean = false

  isArrayLabel: boolean = false

  isBooleanValue: boolean = false

  get styles () {
    const { fontColor, size, color } = this
    const styles = {}

    genFontColor(styles, compName, fontColor)
    genColor(styles, compName, color)
    genSize(styles, compName, size)

    return styles
  }

  get classes () {
    const { checked, disabled } = this
    const classes = {
      'm--checked': checked,
      'm--disabled': disabled
    }

    return classes
  }

  get checked () {
    const { value, label, isArrayValue, isArrayLabel } = this

    let isCheck = false

    if (isArrayValue && isArrayLabel) {
      // Allcheck下value是数组, label也是数组
      if (value.length > 0) {
        isCheck = true
      }
    } else if (isArrayValue) {
      // value是数组, label单值
      if (value.includes(label)) {
        isCheck = true
      }
    } else {
      if (value === label) {
        isCheck = true
      }
    }

    return isCheck
  }

  handleClick (): void {
    const { disabled, isBooleanValue, isArrayValue, isArrayLabel, label, value, onInput, checked } = this

    if (disabled) { return }

    if (isArrayValue && isArrayLabel) {
      if (checked) {
        onInput([])
      } else {
        onInput(label)
      }
    } else if (isArrayValue) {
      const result: any = [].concat(value)
      if (checked) {
        const index = result.findIndex(item => item === label)
        result.splice(index, 1)
        onInput(result)
      } else {
        result.push(label)
        onInput(result)
      }
    } else if (isBooleanValue) {
      onInput(!value)
    } else {
      if (checked) {
        onInput(null)
      } else {
        onInput(label)
      }
    }
  }

  RCheckbox () {
    const { size, checkedIcon, uncheckIcon, incheckIcon,
            value, label, checked, isArrayValue, isArrayLabel } = this

    let checkIcon = checkedIcon

    if (
      isArrayValue &&
      isArrayLabel &&
      checked &&
      (label.length > value.length)
    ) {
      // Allcheck下value是数组, label也是数组
      checkIcon = incheckIcon
    }

    return (
      <a staticClass={`${compName}__checkbox`}>
        <transition name='m-transition-scale'>
          {!checked ? undefined
            : <MIcon staticClass={`${compName}__checked-icon`}
                     name={checkIcon}
                     size={size}/>
          }
        </transition>
        <MIcon staticClass={`${compName}__uncheck-icon`} size={size} name={uncheckIcon} />
        <div v-m-ripple staticClass={`${compName}__checkbox-wrapper`} />
      </a>
    )
  }

  RDefault () {
    const { $slots } = this
    return $slots.default === undefined ? undefined : (
      <span staticClass={`${compName}__label`}>{$slots.default}</span>
    )
  }

  render () {
    const { classes, styles, RCheckbox, RDefault, handleClick, value, label } = this

    this.isArrayValue = value instanceof Array
    this.isArrayLabel = label instanceof Array
    // boolean模式下等价于switch
    this.isBooleanValue = typeof value === 'boolean'

    return (
      <div staticClass={compName}
           class={classes}
           style={styles}
           onClick={() => handleClick()}>
        {RCheckbox()}
        {RDefault()}
      </div>
    )
  }
}
