import '../icon/icons/cancel';
import colorable from '../core/mixin/colorable';
import sizeable from '../core/mixin/sizeable';
import elevated from '../core/mixin/elevated';
import variable from '../core/mixin/variable';
import shapeable from '../core/mixin/shapeable';
declare const MChip_base: import("vue-class-component/lib/declarations").VueClass<colorable & sizeable & elevated & variable & shapeable>;
export default class MChip extends MChip_base {
    closeable: boolean;
    closeover: boolean;
    onClose(e: MouseEvent): void;
    onClick(e: MouseEvent): void;
    readonly styles: {};
    readonly classes: {
        'm--closeable': boolean;
        'm--closeover': boolean;
    };
    RMedia(): import("vue").VNode[] | undefined;
    RClose(): JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
