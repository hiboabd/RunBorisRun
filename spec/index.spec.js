require ('../js/index.js');
require('jest-canvas-mock');


it("recognises gameState", function(){
    expect(gameState).toBeInstanceOf(Object)
});