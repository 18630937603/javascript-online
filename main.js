"use strict";
var Main;
(function (Main) {
    Main[Main["A"] = 0] = "A";
    Main[Main["B"] = 1] = "B";
    Main[Main["C"] = 2] = "C";
})(Main || (Main = {}));
console.log(Main.B);
//# sourceMappingURL=main.js.map