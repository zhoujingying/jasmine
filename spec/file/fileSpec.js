describe('analyze a text file to get correct result',function(){
    var analyzeFile = require('../../lib/file/file.js');
    
    it('should return a string',function(){
        expect(analyzeFile.ToArray('sky forest sunshine forest forest sunshine')).toEqual(
            ['sky','forest','sunshine','forest','forest','sunshine']
        );
    })

    it('should return an another array consist of some object which have name and number',function(){
        expect(analyzeFile.toArrayWithObj(['sky','forest','sunshine','forest','forest','sunshine'])).toEqual(
            [
                {name:'sky',
                number:1},
                {name:'forest',
                number:3},
                {name:'sunshine',
                number:2}
            ]
        )
    })

    it('should return a array which form big to small sort',function(){
        expect(analyzeFile.sortArr([{name:'sky',number:1},{name:'forest',number:3},{name:'sunshine',number:2}])).toEqual(
            [
                {name:'forest',
                number:3},
                {name:'sunshine',
                number:2},
                {name:'sky',
                number:1}
            ])
    })
    
})