function onlyVersion1(object, propertyNames) {
    const entries = Object.entries(object);
    const result = {};

    Object.entries(object).forEach(([propertyName, propertyValue]) => {
        if (propertyNames.includes(propertyName)) {
            result[propertyName] = propertyValue;
        }
    });
    return result;
};

function onlyVersion2(object, propertyNames) {
    const result = {};

    propertyNames.forEach((propertyName) => {
       if (Object.keys(object).includes(propertyName)){
            result[propertyName] = object[propertyName];
       }
    });

    return result;

};

function onlyVersion3(object, propertyNames) {
    const result = {};

    propertyNames.forEach((propertyName) => {
        if(object.hasOwnProperty(propertyName)){
            result[propertyName] = object[propertyName];
        }
    });

    return result;

};

const numbers = {
    a: 1,
    b: 2,
    c: false,
    d: 4,
}

console.log(
    'onlyVersion3(numbers, ["b", "c", "k"])',
    onlyVersion3(numbers, ["b", "c", "k"])
);

/*console.log('Object.values(numbers)', Object.values(numbers));
console.log('Object.keys(numbers)', Object.keys(numbers));
console.log('Object.entries(numbers)', Object.entries(numbers));
const result = ['foo', 'bar', 'baz']
    .map((item) => `${item}!`)
    .map((item) => `${item}!!`);*/

//console.log('result', result);
