/* eslint-disable */
import { DirectiveOptions, PluginFunction, VNodeDirective, VueConstructor } from 'vue'
import { genColor, genFontColor, genSize, genElevation, getScrollBarStyles } from '../core/util'
import './ripple.scss'

const name = 'MRipple'

function style(el: HTMLElement, value: string) {
  el.style.transform = value
  el.style.webkitTransform = value
}

declare global {
  interface Element {
      getElementsByClassName(classNames: string): NodeListOf<HTMLElement>
  }

  interface HTMLElement {
    _ripple: undefined | {
      enabled?: boolean
      centered?: boolean
      class?: string,
    }
  }
}

interface RippleOptions {
  class?: string
  center?: boolean
}

const ripple = {
  show(e: MouseEvent, el: HTMLElement, value: RippleOptions = {}) {
    if (!el._ripple || !el._ripple.enabled) {
      return
    }

    const container = document.createElement('span')
    const animation = document.createElement('span')

    container.appendChild(animation)
    container.className = 'v-ripple__container'

    if (value.class) {
      container.className += ` ${value.class}`
    }

    const size = Math.max(el.clientWidth, el.clientHeight) * (value.center ? 1 : 2)
    const halfSize = size / 2
    animation.className = 'v-ripple__animation'
    animation.style.width = `${size}px`
    animation.style.height = `${size}px`

    el.appendChild(container)
    const computed = window.getComputedStyle(el)
    if (computed.position !== 'absolute' && computed.position !== 'fixed') { el.style.position = 'relative' }

    const offset = el.getBoundingClientRect()
    const x = value.center ? 0 : e.clientX - offset.left - halfSize
    const y = value.center ? 0 : e.clientY - offset.top - halfSize

    animation.classList.add('v-ripple__animation--enter')
    animation.classList.add('v-ripple__animation--visible')
    style(animation, `translate(${x}px, ${y}px) scale3d(0, 0, 0)`)
    animation.dataset.activated = String(performance.now())

    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--enter')
      style(animation, `translate(${x}px, ${y}px)  scale3d(1, 1, 1)`)
    }, 0)
  },

  hide(el: HTMLElement | null) {
    if (!el || !el._ripple || !el._ripple.enabled) { return }

    const ripples = el.getElementsByClassName('v-ripple__animation')

    if (ripples.length === 0) { return }
    const animation = ripples[ripples.length - 1]

    if (animation.dataset.isHiding) { return } else { animation.dataset.isHiding = 'true' }

    const diff = performance.now() - Number(animation.dataset.activated)
    const delay = Math.max(300 - diff, 0)

    setTimeout(() => {
      animation.classList.remove('v-ripple__animation--visible')

      setTimeout(() => {
        const $ripples = el.getElementsByClassName('v-ripple__animation')
        if ($ripples.length === 0) { el.style.position = null }
        if (animation.parentNode) { el.removeChild(animation.parentNode) }
      }, 300)
    }, delay)
  },
}

function isRippleEnabled(value: any): value is true {
  return typeof value === 'undefined' || !!value
}

function rippleShow(e: MouseEvent): void {
  const value: RippleOptions = {}
  const element = e.currentTarget as HTMLElement
  if (!element) { return }
  value.center = element._ripple!.centered
  if (element._ripple!.class) {
    value.class = element._ripple!.class
  }
  ripple.show(e, element, value)
}

function rippleHide(e: Event) {
  ripple.hide(e.currentTarget as HTMLElement | null)
}

function updateRipple(el: HTMLElement, binding: VNodeDirective, wasEnabled: boolean) {
  const enabled = isRippleEnabled(binding.value)
  if (!enabled) {
    ripple.hide(el)
  }
  el._ripple = el._ripple || {}
  el._ripple.enabled = enabled
  const value = binding.value || {}
  if (value.center) {
    el._ripple.centered = true
  }
  if (value.class) {
    el._ripple.class = binding.value.class
  }
  if (enabled && !wasEnabled) {
    if ('ontouchstart' in window) {
      el.addEventListener('touchend', rippleHide, false)
      el.addEventListener('touchcancel', rippleHide, false)
    }

    el.addEventListener('mousedown', rippleShow, false)
    el.addEventListener('mouseup', rippleHide, false)
    el.addEventListener('mouseleave', rippleHide, false)
    el.addEventListener('dragstart', rippleHide, false)
    } else if (!enabled && wasEnabled) {
      removeListeners(el)
    }
}

function removeListeners(el: HTMLElement) {
  el.removeEventListener('mousedown', rippleShow, false)
  el.removeEventListener('touchend', rippleHide, false)
  el.removeEventListener('touchcancel', rippleHide, false)
  el.removeEventListener('mouseup', rippleHide, false)
  el.removeEventListener('mouseleave', rippleHide, false)
  el.removeEventListener('dragstart', rippleHide, false)
}

function directive(el: HTMLElement, binding: VNodeDirective) {
  updateRipple(el, binding, false)
}

function unbind(el: HTMLElement) {
  delete el._ripple
  removeListeners(el)
}

function update(el: HTMLElement, binding: VNodeDirective) {
  if (binding.value === binding.oldValue) {
    return
  }

  const wasEnabled = isRippleEnabled(binding.oldValue)
  updateRipple(el, binding, wasEnabled)
}

const MRipple: DirectiveOptions = {
  name,
  bind: directive,
  unbind,
  update,
}

export default MRipple
