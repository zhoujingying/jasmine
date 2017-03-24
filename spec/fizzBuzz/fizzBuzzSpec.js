describe('FizzBuzz',function(){
    var fizzBuzz = require('../../lib/fizzBuzz/fizzBuzz.js');
    it('number to string',function(){
        var result = fizzBuzz.putString(4);
        expect(result).toEqual('4');
    })

})