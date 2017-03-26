describe('analyze a text file to get correct result',function(){
    var analyzeFile = require('../../lib/file/file.js');
    
    it('should return a string',function(){
        expect(analyzeFile.ToArray('sky forest sunshine wind forest forest sunshine')).toEqual(
            ['sky','forest','sunshine','wind','forest','forest','sunshine']
        );
    })

    // it('should return an array',function(){
    //     expect(analyzeFile.toArray()).toEqual(
    //         
    //     )
    // })
    
})