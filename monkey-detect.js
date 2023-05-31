// lazy integrity checks
var functionCheck = "{ [native code] }"
if(!Reflect.apply.toString().endsWith(functionCheck)) 
  block()
if(!Proxy.constructor.toString().endsWith(functionCheck)) 
  block()
if(!"".__proto__.includes.toString().endsWith(functionCheck)) 
  block()

var isSelf = 0;
const __Reflect_apply = Reflect.apply
const hook = (_class, blacklist, callback) => {
  Object.getOwnPropertyNames(_class).forEach(funcName => {
    if (!blacklist.includes(funcName) && typeof _class[funcName] === 'function') {
      try {
        _class[funcName] = new Proxy(_class[funcName], {
          apply(target, _this, args) {
            if(isSelf === 1) 
              return __Reflect_apply(target, _this, args);

            let stackarr = new Error().stack.split("at ").slice(2);
            if (stackarr.some(stackEntry => stackEntry.includes("dhdgffkkebhmkfjojejmpbldmpobfkfo/userscript.html"))) { 
              callback()
            }

            isSelf = 1;
            const ret = __Reflect_apply(target, _this, args);
            isSelf = 0;
            return ret;
          }
        });
      } catch {}
    }
  });
};
