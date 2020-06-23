require ('../js/index.js')
require ('../js/phaser.min.js')

it("recognises gameState", function(){
    expect(gameState).toBeInstanceOf(Object)
});