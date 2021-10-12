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

    let a = array
    let b = a + "," + a 
    let c = b.split(",")
    return c

    /*
    var cloned_array = [].concat(array)

    let b = cloned_array + cloned_array;
    let c = b.split("")
    let d = c

    return [b]; */
}

let stringToNumber = (string) => {

    var nb=parseInt(string)

    return nb;
}

let calculateAverage = (array) => {

    let a = array

    function ArrayAvg(a) {
        var i = 0, summ = 0, ArrayLen = a.length;
        while (i < ArrayLen) {
            summ = summ + a[i++];
    }
        return summ / ArrayLen;
    }
    
    var b = ArrayAvg(a);
    

    return b;
}

let getElementsUntilGreaterThanFive = (array) => {

    
        let newArray = [];
    
        for (let elem of array) {
            if (elem < 6) {
                newArray.push(elem);
            } else {
                break;
            }
        }
        return newArray;
    

    


    /*

    function suffisammentGrand(element) {
        return element <= 5;
      }
      var filtre = a.filter(suffisammentGrand);

    return filtre;*/
}

let convertArrayToObject = (array) => {

    let a = []


   

    while (array.length>0) {
        a.push(array.splice(0,2)) 
    }

  // let b = Object.assign( {}, a) 

  

    return Object.fromEntries(a);
}

let getAllLetters = (array) => {

    let a = array

    let b = a.toString()

    let c = b.split('')

    let d = c.sort()

    let f = ","

    e = d.filter(function(element) {
        return element !== f;

    });

    
    g = e.filter(function(ele , pos){
        return e.indexOf(ele) == pos;
    }) 

    

    return g;
}

let swapKeysAndValues = (object) => {

    let a = object

    function inverse(obj){
        var retobj = {};
        for(var key in obj){
          retobj[obj[key]] = key;
        }
        return retobj;
      }
    


    return inverse(a);
}

let sumKeysAndValues = (object) => {

    let a = object

    function sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
          if( obj.hasOwnProperty( el ) ) {
            sum += parseFloat( obj[el] );
          }
        }
        return sum;
      }
          
      
     let  summed = sum( a);

     Object.prototype.getKeyByValue = function( value ) {
        for( var prop in this ) {
            if( this.hasOwnProperty( prop ) ) {
                 if( this[ prop ] === value )
                     return prop;
            }
        }
    }

    let u= a.getKeyByValue(3)
    let v = a.getKeyByValue(7)
    let z = parseInt(v)
    let j = parseInt(u)
    let w = z + j
    let r = u + v


      return summed + w
   
/*

    let b = a.toString()
    let c = a.split("")
*/
    return c;
}

let removeCapitals = (string) => {
    let a = string
   let d = a.replace( /[^a-z]/,' ' );
   let e = d.trim()


    let c = e.replace ('K', '' )
    
    return c;
   
}

let roundUp = (number) => {

    let a = number

    return Math.ceil(a);
}

let formatDateNicely = (date) => {

    let a = date

    let b ="0" +a.getDate() + "/" + "0" + (a.getMonth() + 1) + "/" + a.getFullYear()



    return b;
}

let getDomainName = (string) => {

    let a = string
    var b = a.substring(a.lastIndexOf("@") +1);
    let c = b.replace(".com", "")
    return c;
}

let titleize = (string) => {

   
        String.prototype.capitalize = function() {
            return this.charAt(0).toLocaleUpperCase() + this.slice(1);
        }
    
        string = string.split(" ");
        string[0] = string[0].capitalize();
    
        string.forEach((element, index) => {
            if (element.toLowerCase() === "the") {
                string[index +1] = string[index + 1].capitalize();
            }
            else if (element.endsWith(".")) {
                string[index + 1] = string[index + 1].capitalize();
            }
        })
    
        string = string.join(" ");
        return string;
    

    /*
    let a = string
    let d = /The/gi
    let j = /And/gi
    let w= /. and/gi
    let z =/Witc/gi

    function toUpper(str) {
        return str
            .toLowerCase()
            .split(' ')
            .map(function(word) {
                return word[0].toUpperCase() + word.substr(1);
            })
            .join(' ');
         }
         
         let b = toUpper(a)

         let c = b.replace(d, "the")
        // let d = c[0].toUpperCase()
         let g= c.charAt(0).toUpperCase() + c.slice(1);
         let h= g.replace(j, "and")
         let x= g.replace(w, ". And")
         let v = x.replace("Witc", "Witch")
    return g

    */

}

let checkForSpecialCharacters = (string) => {

    let a = string

    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

if(format.test(a)){
  return true;
} else {
  return false;
}

    return 'Write your method here';
}

let squareRoot = (number) => {

    let a = number

   let b=  Math.sqrt(a)

    return b;
}

let factorial = (number) => {

    let a = number

    function factorielle(n) {
        let res = 1;
        //on saute 1
        for (let i = 2; i < n + 1; i++) {
          res = res * i;
        }
        return res
      }

      return factorielle(a)



}

let findAnagrams = (string) => {

    let a = string

    function allAnagrams (word) {
        if (word.length < 2) {
          return [word];
        } else {
            var allAnswers = [];
            for (var i = 0; i < word.length; i++) {
              var letter = word[i];
              var shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
              var shortwordArray = allAnagrams(shorterWord);
              for (var j = 0; j < shortwordArray.length; j++) {
                allAnswers.push(letter + shortwordArray[j]);
              }
            }
            return allAnswers;
        }
      }
      
      return allAnagrams(a)
     FindAllPermutations(a);
}


let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
