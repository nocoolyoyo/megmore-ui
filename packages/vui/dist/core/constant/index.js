import Elevation from './elevation';
import Palette from './palette';
export { Elevation, Palette };
export const ELEVATION = Elevation.map((item, index) => index);
export var Status;
(function (Status) {
    Status[Status["success"] = 0] = "success";
    Status[Status["pending"] = 1] = "pending";
    Status[Status["failure"] = 2] = "failure";
})(Status || (Status = {}));
export var Breakpoint;
(function (Breakpoint) {
    Breakpoint[Breakpoint["xs"] = 0] = "xs";
    Breakpoint[Breakpoint["sm"] = 576] = "sm";
    Breakpoint[Breakpoint["md"] = 768] = "md";
    Breakpoint[Breakpoint["lg"] = 992] = "lg";
    Breakpoint[Breakpoint["xl"] = 1200] = "xl";
})(Breakpoint || (Breakpoint = {}));
export const BREAKPOINT = ['xs', 'sm', 'md', 'lg', 'xl'];
export var Size;
(function (Size) {
    Size["xs"] = "xs";
    Size["sm"] = "sm";
    Size["md"] = "md";
    Size["lg"] = "lg";
    Size["xl"] = "xl";
})(Size || (Size = {}));
export const SIZE = Object.keys(Size);
export var Variety;
(function (Variety) {
    Variety["default"] = "default";
    Variety["flat"] = "flat";
    Variety["outline"] = "outline";
})(Variety || (Variety = {}));
export const VARIETY = Object.keys(Variety);
export var Shape;
(function (Shape) {
    Shape["circle"] = "circle";
    Shape["round"] = "round";
    Shape["corner"] = "corner";
    Shape["square"] = "square";
})(Shape || (Shape = {}));
export const SHAPE = Object.keys(Shape);
export var Color;
(function (Color) {
    Color["primary"] = "primary";
    Color["error"] = "error";
    Color["success"] = "success";
    Color["warning"] = "warning";
    Color["default"] = "default";
})(Color || (Color = {}));
export const COLOR = Object.keys(Color);
export var Mode;
(function (Mode) {
    Mode["day"] = "day";
    Mode["night"] = "night";
})(Mode || (Mode = {}));
export var Fill;
(function (Fill) {
    Fill["left"] = "left";
    Fill["both"] = "both";
    Fill["right"] = "right";
    Fill["none"] = "none";
})(Fill || (Fill = {}));
export const FILL = Object.keys(Fill);
export var FlexJustify;
(function (FlexJustify) {
    FlexJustify["start"] = "start";
    FlexJustify["center"] = "center";
    FlexJustify["end"] = "end";
    FlexJustify["between"] = "between";
    FlexJustify["around"] = "around";
    FlexJustify["evenly"] = "evenly";
    FlexJustify["none"] = "none";
})(FlexJustify || (FlexJustify = {}));
export const FLEX_JUSTIFY = Object.keys(FlexJustify);
export var FlexWrap;
(function (FlexWrap) {
    FlexWrap["normal"] = "normal";
    FlexWrap["reverse"] = "reverse";
    FlexWrap["none"] = "none";
})(FlexWrap || (FlexWrap = {}));
export const FLEX_WRAP = Object.keys(FlexWrap);
export var FlexAlign;
(function (FlexAlign) {
    FlexAlign["start"] = "start";
    FlexAlign["center"] = "center";
    FlexAlign["end"] = "end";
    FlexAlign["stretch"] = "stretch";
})(FlexAlign || (FlexAlign = {}));
export const FLEX_ALIGN = Object.keys(FlexAlign);
export var Align;
(function (Align) {
    Align["left"] = "left";
    Align["center"] = "center";
    Align["right"] = "right";
})(Align || (Align = {}));
export const ALIGN = Object.keys(Align);
export var DateValueFormat;
(function (DateValueFormat) {
    DateValueFormat["timestamp"] = "timestamp";
    DateValueFormat["Date"] = "Date";
})(DateValueFormat || (DateValueFormat = {}));
export var DatePickerType;
(function (DatePickerType) {
    DatePickerType["datetime"] = "datetime";
    DatePickerType["date"] = "date";
    DatePickerType["year"] = "year";
    DatePickerType["month"] = "month";
    DatePickerType["time"] = "time";
})(DatePickerType || (DatePickerType = {}));
export var DateValueType;
(function (DateValueType) {
    DateValueType["year"] = "year";
    DateValueType["month"] = "month";
    DateValueType["week"] = "week";
    DateValueType["date"] = "date";
    DateValueType["time"] = "time";
    DateValueType["hours"] = "hours";
    DateValueType["minutes"] = "minutes";
})(DateValueType || (DateValueType = {}));
export var DateTimeValueType;
(function (DateTimeValueType) {
    DateTimeValueType["time"] = "time";
    DateTimeValueType["hours"] = "hours";
    DateTimeValueType["minutes"] = "minutes";
})(DateTimeValueType || (DateTimeValueType = {}));
//# sourceMappingURL=index.js.map