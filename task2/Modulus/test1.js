modulus.store('2key',2);
modulus.store ('1key', 5);
modulus.store('someVal', {2:4, 'test': 2});
modulus.store('arr', [1,2,5,222]);
modulus.store(function doSomething() {});
modulus.store(1);
console.log(modulus.retrieve('doSomething'));