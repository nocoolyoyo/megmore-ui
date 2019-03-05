import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator';
import { DateValueType } from '../../core/constant';
const compName = 'm-time-picker-panel-year';
let MTimePickerPanelYear = class MTimePickerPanelYear extends Vue {
    onClick(year) {
        this.DateStore.UPDATE(year, DateValueType.year);
    }
    RCols() {
        const { min, max, onClick } = this;
        const { year } = this.DateStore;
        const Cols = [];
        for (let tempYear = min; tempYear <= max; tempYear++) {
            const isCurrent = tempYear === year;
            Cols.push(<div v-m-ripple staticClass='m-time-picker-cell' class={{ 'm--checked': isCurrent }} onClick={() => onClick(tempYear)}>
          {tempYear}
        </div>);
        }
        return Cols;
    }
    render() {
        const { RCols } = this;
        return (<div staticClass={compName}>
        {RCols()}
      </div>);
    }
};
tslib_1.__decorate([
    Prop({ type: Number, default: 2100 })
], MTimePickerPanelYear.prototype, "max", void 0);
tslib_1.__decorate([
    Prop({ type: Number, default: 1900 })
], MTimePickerPanelYear.prototype, "min", void 0);
tslib_1.__decorate([
    Inject()
], MTimePickerPanelYear.prototype, "DateStore", void 0);
tslib_1.__decorate([
    Emit('pick')
], MTimePickerPanelYear.prototype, "onClick", null);
MTimePickerPanelYear = tslib_1.__decorate([
    Component
], MTimePickerPanelYear);
export default MTimePickerPanelYear;
//# sourceMappingURL=panel-year.jsx.map