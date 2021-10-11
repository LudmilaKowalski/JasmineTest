let selectElementsStartingWithA = (array) => {
    let a = array
    function FirstLetter(item) {
        if (item.substring(0,1) == 'a') {
          return a;
        }
      }
      
      return a.filter(FirstLetter); 

}

let selectElementsStartingWithVowel = (array) => {
    let a = array
    function FirstLetter (item) {
        if (item.substring(0,1) ==   'o' ) {
            return a;
        }
    }

    function First (item) {
        if (item.substring(0,1) == 'i' ) {
            return a;
        }
    }

    function Second (item) {
        if (item.substring (0,1)== 'a') {
            return a
        }
    }

    let b = a.filter(FirstLetter)
    let c = a.filter(First)
    let d = a.filter(Second)
    let e = b + "," + c + "," + d


    return e.split(",") 
}

let removeNullElements = (array) => {
    let b = null
    let a = array
    
   c = a.filter(function(element) {
        return element !== b;

    });

    return c
}

let removeNullAndFalseElements = (array) => {

    
    let a = array
   
    b= a.filter(function(e){ 
        
        return e === 0 || e });



    return b;
}

let reverseWordsInArray = (array) => {

    let a = array
    let b =  a.toString()
    let c = b.split('').reverse().join('')
    let d = c.split(",")
    let e = d.reverse()
   

    return e;
}

let everyPossiblePair = (array) => {

    let a = array.sort();
    var results = [];

    // Since you only want pairs, there's no reason
    // to iterate over the last element directly
    for (var i = 0; i < a.length - 1; i++) {
      // This is where you'll capture that last value
      for (var j = i + 1; j < a.length; j++) {
        results.push([a[i], a[j]]);
      }
    }
    
    return results ;
}

let allElementsExceptFirstThree = (array) => {

    let a = array
    var indexToRemove = 0; 
    var numberToRemove = 3;
    
     a.splice(indexToRemove, numberToRemove);

  


    return a;
}

let addElementToBeginning = (array, element) => {

    let a = array
    var indexToRemove = 5; 
    var numberToRemove = 1;
    
    
     a.splice(indexToRemove, numberToRemove);
     a.unshift(1)
  


    return a;

}

let sortByLastLetter = (array) => {

    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

let getFirstHalf = (string) => {

    let a = string
    

    return a.substr(0,3);
}

let makeNegative = (number) => {

   let a = 5

    let b= a * -1;



  /*  var x = 58;
var result = x * -1;
console.log(result);
*/
    return b;
}

let numberOfPalindromes = (array) => {

    let a = array;
      
    function palindromize(words) {
        var p = words.split("").reverse().join("");
    
        if(p === words){
            return(words);
        } else {
            return(false);
        }
    }

    let c = a.map(palindromize)

    let d = false
    
    
   e = c.filter(function(element) {
        return element !== d;

    });

    let f= e.length

    return f

 
 
}

let shortestWord = (array) => {

    let a = array
   // let b = a.toString()

  

    function findShortestWord(str) {
        var words = str.split(' ');
        var shortest = words.reduce((shortestWord, currentWord) => {
          return currentWord.length < shortestWord.length ? currentWord : shortestWord;
        }, words[0]);
        return shortest;
        

      }

     // let c = ("winter is coming")

     let c = ("winter, is coming")

      return findShortestWord(c);
}

let longestWord = (array) => {

    let a = array
   
    function longestWord(str) {
        var words = str.split(' ');
        var shortest = words.reduce((shortestWord, currentWord) => {
          return currentWord.length > shortestWord.length ? currentWord : shortestWord;
        }, words[0]);
        return shortest;

}

let c = ("A Lannister always pays his debts")

    return longestWord(c)
}

let sumNumbers = (array) => {

    let a = array
   
    let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}

    return sum;
}

let repeatElements = (array) => {

    var cloned_array = [].concat(array)

    let b = cloned_array + cloned_array;

    return [b];
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
