import {Utility} from "../support/Utilities/utility";

let utility = new Utility;

describe('Unit tests to test the function by passing various numbers', ()=>{

    it('Unit test to check number is divisible by 3 and then print Fizz', ()=>{
        let result = utility.divisionOfNumbers(3);
        expect(result).to.contain("Fizz");
    });

    it('Unit test to check number is divisible by 5 and then print Buzz', ()=>{
        let result = utility.divisionOfNumbers(5);
        expect(result).to.contain("Buzz");
    });

    it('Unit test to check number 15 is divisible by both 3 and 5, if yes, then print Fizz Buzz ', ()=>{
        let result = utility.divisionOfNumbers(15);
        expect(result).to.contain("Fizz Buzz");
    });

    it('Unit test to check number 94 is not divisible either by 3 nor by 5 and thus print ', ()=>{
        let result = utility.divisionOfNumbers(94);
        expect(result).to.contain("Neither divisible by three nor by five");
    });
});

describe('Javascript function to check the number from 1 to 100 number divisible by 3 or 5 or both', ()=>{
    it('Function to run 1 to 100 numbers', ()=>{
        // please check the cypress test runner console.log() to see js run result or loop100NumbersDivisibleBy js function in utility.js 
        let result = utility.loop100NumbersDivisibleBy(100);
    });
    
});