describe('math',function(){
    // case 1
    var add = require('../../lib/math/math.js');
    it('should return the sum of two operands',function(){
        
        // Give and When
        var sum = add(1,2);
        //then
        expect(sum).toEqual(3);

    })
})