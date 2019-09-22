const extraPropertyName = 'isEmployee';

const person = {
    firstName: 'Jan',
    lastName: 'Nowak',
    [extraPropertyName]: false
};

person.age = 70;
person['place of birth'] = 'Warszawa';

console.log('person', person);
