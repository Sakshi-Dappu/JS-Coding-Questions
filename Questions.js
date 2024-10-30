const user = {
    name: 'Raj',
    age: 20,
    address: {
        city: 'Delhi'
    }
}
const newUser = Object.assign({}, user);

newUser.age = '24';
newUser.address.city = 'Gurugram';

const {age, address: {city}} = user;
console.log(age);
console.log(city);