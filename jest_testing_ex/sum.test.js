const calculations = require('./sum');


//Test Suite - You can have multiple Test
describe("Does calculations to add numbers", ()=>{


    
    //Single Fail Test case #1
    test('adds 1 + 2 to NOT EQUAL 5', () => {

        //Arrange - Two numbers that do not equal 5
        var outputCalculation = calculations.sum(1,2);
        //Assert and Act
        expect(outputCalculation).not.toBe(5);

    });

    //Single Passing test case #2
    test('adds 1 + 2 TO EQUAL 3', () => {

        //Arrange
       var outputCalculation = calculations.sum(2,3);
        //Assert and Act
        expect(outputCalculation).toBe(5);

      });



})



