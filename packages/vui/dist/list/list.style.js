import styled, { injectGlobal } from 'vue-styled-components';
import { genSize } from '../core/util';
injectGlobal `
	.m-list {
    --m-list-size-xs: 2rem;
    --m-list-size-sm: 3rem;
    --m-list-size-md: 4rem;
    --m-list-size-lg: 5rem;
    --m-list-size-xl: 6rem;

     // default
    --m-list-color: var(--m-bg-color-main);
    --m-list-font-color: var(--m-font-color-main);
    --m-list-active-color: var(--m-color-main);
    --m-list-size: var(--m-list-size-md);
    
    background-color: var(--m-list-color);
    color: var(--m-list-font-color);
    min-height: var(--m-list-size);
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: var(--m-space-sm);
    padding-right: var(--m-space-sm);
    font-size: 1.4rem;
	}
`;
export default styled.div `
  ${props => genSize('m-list', props.size)}
`;
//# sourceMappingURL=list.style.js.map