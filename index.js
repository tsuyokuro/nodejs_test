"use strict";
exports.__esModule = true;
var createCheckResult = function () {
    return {
        errorCount: 0,
        crashCount: 0,
        itemList: new Array(),
        createItem: function (type, line) {
            var item = {
                type: type,
                lines: new Array()
            };
            if (line != null) {
                item.lines.push(line);
            }
            return item;
        },
        pushItem: function (item) {
            this.itemList.push(item);
            return item;
        }
    };
};
var r = createCheckResult();
var a = r.createItem("ERROR_LINE" /* ERROR_LINE */, "100.0 E invalid data!");
r.pushItem(a);
a = r.createItem("CRASH" /* CRASH */);
a.lines.push("Null pointer exception");
a.lines.push("AndroidRuntime at getDisplayName");
r.pushItem(a);
console.log(JSON.stringify(r, null, "  "));
