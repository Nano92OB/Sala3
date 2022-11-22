const greeting = require('./greeting')


test('0 a 1 expect love-15', () => {
    expect(greeting.getScore()).toBe("love-15");
});

test('add one point to player2',() =>{
    greeting.wonPoint("player1")
    expect(greeting.getScore()).toBe("15-all");
})



