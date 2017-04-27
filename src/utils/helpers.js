export const toArray = obj =>
  Object.keys(obj).map(prop => obj[prop]);

export const accumToArrayAndHandle = (convertingFunc => {
  const f = (object, levels = 2, currLevel = 0, accum = []) => {

    if (currLevel === levels - 1) {
      accum.push(...convertingFunc(object));
    } else {
      convertingFunc(object).forEach(nested => f(nested, levels, currLevel + 1, accum))
    }
    
    return accum;
  }

  return f;
});

export const transformToNotNestedArray = accumToArrayAndHandle(toArray);