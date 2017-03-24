describe('math',function(){
    // case 1
    var math = require('../../lib/math/math.js');
    it('should return the sum of two operands',function(){
    
        // Give and When
        var sum = math.add(1,2);
        //then
        expect(sum).toEqual(3);

    })
    it('should return the substraction of operands',function(){
        var substraction = math.minus(3,2);
        expect(substraction).toEqual(1);
    })
})