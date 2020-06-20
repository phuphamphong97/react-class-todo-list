const objectToArray = (object) =>
  Object.keys(object).reduce((acc, curVal) => {
    acc.push(object[curVal]);
    return acc;
  }, []);

  export default objectToArray;