import styled, { injectGlobal } from 'vue-styled-components';
import { genColor, genFontColor, genSize, genElevation } from '../core/util';
injectGlobal `
	.m-chip {
    // selection
    --m-chip-size-xs: 1.5rem;
    --m-chip-size-sm: 1.75rem;
    --m-chip-size-md: 2rem;
    --m-chip-size-lg: 2.25rem;
    --m-chip-size-xl: 2.5rem;

    // default
    --m-chip-color: var(--m-color-primary);
    //--m-chip-hover-color: var(--m-color-main);
    --m-chip-font-color: var(--m-bg-color);
    --m-chip-elevation: var(--m-elevation-2);
    --m-chip-shape: var(--m-chip-size-md);

    --m-chip-size: var(--m-button-size-md);
    --m-chip-border-size: .2rem;

    --m-chip__close-size: calc(var(--m-chip-size) / 1.3);
    
    height: var(--m-chip-size);
    min-height: var(--m-chip-size);
    max-height: var(--m-chip-size);
    box-shadow: var(--m-chip-elevation);
    color: var(--m-chip-font-color);
    background-color: var(--m-chip-color);
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    word-break: keep-all;
    user-select: none;
    line-height: 1;

    &[closeable] {
        padding-right: calc(var(--m-chip__close-size) / 1.5);
    }
    
    &[closeover] {
        padding-right: 0;
        .m-chip__close {
            opacity: 0;
            pointer-events: none;
        }
        &:hover {
            padding-right: calc(var(--m-chip__close-size) / 1.5);
            .m-chip__close {
                opacity: 1;
                pointer-events: auto;
            }
        }
        transition: padding-right ease .3s;
    }
    // variety
    &[variety="outline"] {
        border-style: solid;
        border-width: 1px;
    }
    // shape
    &[shape="circle"] {
        border-radius: var(--m-chip-size);
        .m-chip__media {
            border-radius: 50%;
        }
    }
    &[shape="round"] {
        border-radius: var(--m-shape-round);
    }
    &[shape="square"] {
        border-radius: var(--m-shape-square);
    }
	}
	
  .m-chip__media {
      height: var(--m-chip-size);
      width: var(--m-chip-size);
      margin-right: calc(var(--m-chip-size) / -4);
  }
  .m-chip__main {
      padding-left: calc(var(--m-chip-size) / 1.5);
      padding-right: calc(var(--m-chip-size) / 1.5);
      font-size: calc(var(--m-chip-size) / 2);
  }
  .m-chip__close {
      position: absolute;
      z-index: 1;
      right: calc(var(--m-chip-size) / 10);
      height: var(--m-chip__close-size);
      width: var(--m-chip__close-size);
      transition: opacity ease .3s;
      &:hover {
          opacity: .8 !important;
      }
  }
`;
export default styled.div `
  ${props => genColor('m-chip', props.color)}
  ${props => genFontColor('m-chip', props.fontColor)}
  ${props => genSize('m-chip', props.size)}
  ${props => genElevation('m-chip', props.elevation)}
`;
//# sourceMappingURL=chip.style.js.map