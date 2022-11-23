const greeting = require('./greeting')


test('0 a 1 expect love-15', () => {
    expect(greeting.getScore()).toBe("love-15");
});

test('player get Adv',() =>{
    greeting.wonPoint("playerOne")
    expect(greeting.getScore()).toBe('Adv-1');
})



