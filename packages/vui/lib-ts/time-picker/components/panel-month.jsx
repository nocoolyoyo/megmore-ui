import * as tslib_1 from "tslib";
import { Component, Prop, Emit, Vue, Inject } from 'vue-property-decorator';
import MButton from '../../button';
import { DateValueType } from '../../core/constant';
const compName = 'm-time-picker-panel-month';
const MonthMap = ['一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'];
let MTimePickerPanelMonth = class MTimePickerPanelMonth extends Vue {
    handleClick(month) {
        this.DateStore.UPDATE(month, DateValueType.month);
    }
    RCols() {
        const { handleClick } = this;
        const { month } = this.DateStore;
        const Cols = [];
        for (let tempValue = 0; tempValue <= 11; tempValue++) {
            const isCurrent = tempValue === month;
            Cols.push(<div v-m-ripple staticClass='m-time-picker-cell' class={{ 'm--checked': isCurrent }} onClick={() => handleClick(tempValue)}>
          {MonthMap[tempValue]}
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
    Prop({ type: Array })
], MTimePickerPanelMonth.prototype, "disabledValue", void 0);
tslib_1.__decorate([
    Inject()
], MTimePickerPanelMonth.prototype, "DateStore", void 0);
tslib_1.__decorate([
    Emit('pick')
], MTimePickerPanelMonth.prototype, "handleClick", null);
MTimePickerPanelMonth = tslib_1.__decorate([
    Component({ components: { MButton } })
], MTimePickerPanelMonth);
export default MTimePickerPanelMonth;
//# sourceMappingURL=panel-month.jsx.map