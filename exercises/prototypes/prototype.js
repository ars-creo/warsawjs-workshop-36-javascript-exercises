const a = {
    propertyA: 'A',
    sayHello() { console.log('hello') },
    propertyAB: 'in A',
};

const b = Object.create(a);
b.propertyB = 'B';
b.propertyAB = 'in B';

const c = Object.create(b);
c.propertyC = 'C';

b.sayHello();

/*console.log('a.propertyA', a.propertyA);
console.log('b.propertyB', b.propertyB);
console.log('b.propertyA', b.propertyA);
console.log(b.__proto__);*/

console.log('c.propertyC', c.propertyC);
console.log(a.isPrototypeOf(b));
console.log('a.propertyAB', a.propertyAB);
console.log('b.propertyAB', b.propertyAB);
console.log('c.propertyAB', c.propertyAB);
console.log('Object.getOwnPropertyDescriptors(Object.prototype)', Object.getOwnPropertyDescriptors(Object.prototype))
