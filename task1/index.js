
const mapAny = (data, cb, isToArray) => {
  return isToArray ?
    Array.from(Object.values(data).map(cb))
    : Object.values(data).map(cb);
}

const composeZ = (...functions) => {
  let result = 0;
  let newArr = functions.slice();  
  while (newArr.length) {  
    const firstFunc = newArr[0];
    const lastFunc = newArr[newArr.length - 1];
    result = firstFunc(lastFunc(result));
    newArr.splice(0, 1);
    newArr.splice(newArr.length - 1, 1);
  };
  return result;
}

const merge = (firstObj, secondObj) => {
  return {
    ...firstObj, ...secondObj
  };
}

const advancedMarge = (...objects) => {
  let finalObj = {};
  objects.forEach(obj => {
    finalObj = {
      ...finalObj, ...obj
    }
  });
  return finalObj;
}

const normalizer = obj => {
  let normalizedObj = {};
  const isNested = (key, value) => {  
    if (Object.keys(value).length) {
      Object.keys(value).forEach(key => {
        return isNested(key, value[key]);
      })
    } else {
      return Object.assign(normalizedObj, {[key]: value});
    }
  };
  Object.keys(obj).forEach(key => isNested(key, obj[key]));
 return normalizedObj;
}

const autoCurry = (fn, ...args) => args.length === fn.length ? fn(...args) : curry.bind(this, fn, ...args);
