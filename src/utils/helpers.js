// Здесь хранятся хелперы для работы с объектами, прилетающими
// из БД
export const toArray = obj =>
  Object.keys(obj).map(prop => obj[prop]);

const accumToArrayAndHandle = convertingFunc => {
  const f = (object, levels = 2, currLevel = 0, accum = []) => {

    if (currLevel === levels - 1) {
      accum.push(...convertingFunc(object));
    } else {
      convertingFunc(object)
        .forEach(nested => {
          if (typeof nested === 'object') {
            f(nested, levels, currLevel + 1, accum)
          }
        })
    }
    
    return accum;
  }

  return f;
};

export const transformToNotNestedArray = accumToArrayAndHandle(toArray);

export const iterateByObjAndApplyFuncToEveryElem = func => (iteratedObject, ...args) => {
  const accum = {};

  Object
    .keys(iteratedObject)
    .forEach( func.bind(null, accum, iteratedObject, ...args) );
  
  return accum;
}

export const filterObject = iterateByObjAndApplyFuncToEveryElem((accum, iteratedObject, objectToDelete, key) => {
  if (key !== objectToDelete.id) {
    accum[key] = iteratedObject[key]
  }
});

export const addTimeStamp = iterateByObjAndApplyFuncToEveryElem((accum, iteratedObject, key) => {
  accum[key] = {
    ...iteratedObject[key],
    timestamp: new Date().toLocaleDateString('ru'),
  }
});

export const increaseTargetCount = iterateByObjAndApplyFuncToEveryElem((accum, iteratedObject, objectToIncreaseCount, key) => {
  if (key !== objectToIncreaseCount.id) {
    accum[key] = iteratedObject[key];
  } else {
    accum[key] = {
      ...iteratedObject[key],
      count: iteratedObject[key].count + 1
    }
  }
});

export const decreaseTargetCount = iterateByObjAndApplyFuncToEveryElem((accum, iteratedObject, objectToDecreaseCount, key) => {
  if (key !== objectToDecreaseCount.id) {
    accum[key] = iteratedObject[key];
  } else if (iteratedObject[key].count !== 1) {
    accum[key] = {
      ...iteratedObject[key],
      count: iteratedObject[key].count - 1
    }
  }
});


export const find = (object, key) =>
  Object.keys(object).find(subObject => subObject.id === key);

