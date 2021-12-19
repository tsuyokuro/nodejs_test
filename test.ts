const enum TYPE {
  ERROR_LINE = 'ERROR_LINE',
  CRASH = 'CRASH'
}

interface ICheckedItem {
  type : TYPE
  lines : Array<string>
}

interface ICheckResult {
  errorCount : number
  crashCount : number
  itemList : Array<ICheckedItem>
  createItem(type : TYPE, line? : string) : ICheckedItem
  pushItem(item : ICheckedItem) : ICheckedItem
}

const createCheckResult = () : ICheckResult => {
  return {
    errorCount : 0,
    crashCount : 0,
    itemList : new Array<ICheckedItem>(),
    
    createItem(type : TYPE, line? : string) : ICheckedItem {
      var item = {
        type : type,
        lines : new Array<string>(),
      }
    
      if (line != null) {
        item.lines.push(line);
      }

      return item
    },

    pushItem(item : ICheckedItem) : ICheckedItem {
      this.itemList.push(item)
      return item;
    }
  }
}

var r = createCheckResult()

var a = r.createItem(TYPE.ERROR_LINE, "100.0 E invalid data!");
r.pushItem(a)

a = r.createItem(TYPE.CRASH)
a.lines.push("Null pointer exception")
a.lines.push("AndroidRuntime at getDisplayName")

r.pushItem(a)

console.log(JSON.stringify(r, null, "  "))



