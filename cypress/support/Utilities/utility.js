export class Utility {

    getBaseUrl(){
        return cy.visit('/');
    }

    getRandomNumber(){
        const item = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const random = Math.floor(Math.random() * item.length);
        return item[random] ;
    }
    
    waitForPageLoad() {
        return cy.wait(2000);
    }

    setItemToBrowserLocalStorage(key, value) {
        window.localStorage.setItem(key, value);
    }

    getItemFromBrowserLocalStorage(key) {
        return window.localStorage.getItem(key);
    }

    divisionOfNumbers(number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return "Fizz Buzz";
          } else if (number % 3 === 0) {
            return "Fizz";
          } else if (number % 5 === 0) {
            return "Buzz";
          } else {
            return "Neither divisible by three nor by five "+number;
          }
    }

    loop100NumbersDivisibleBy(range){
         for (var i = 1; i <= range; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
              console.log("Fizz Buzz");
            } else if (i % 3 === 0) {
              console.log("Fizz");
            } else if (i % 5 === 0) {
              console.log("Buzz");
            } else {
              console.log("Neither divisible by three nor by five::"+i);
            }
          } 

    }
}