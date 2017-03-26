describe('FizzBuzz',function(){
    var fizzBuzz = require('../../lib/fizzBuzz/fizzBuzz.js');
    it('number to string',function(){
        var result = fizzBuzz.putString(4);
        expect(result).toEqual('4');
    })
    it('number to Fizz',function(){
        
        expect(fizzBuzz.putString(3)).toEqual('Fizz');
    })
    it('number to Buzz',function(){
        var result = fizzBuzz.putString(5);
        expect(result).toEqual('Buzz');
    })
    it('number to FizzBuzz',function(){
        var result = fizzBuzz.putString(15);
        expect(result).toEqual('FizzBuzz');
    })

})