//Excercise 1

function excercise1(array){
    let result=[];
    for (let i = 0; i < array.length; i++) {
    result.push(array[i]*5)
    }
    return result
};

let arrayOfNumbers = [4,3,2,1]
console.log(excercise1(arrayOfNumbers))
//

//Excercise 2

function excercise2(array){
    let result
   for (let i=0; i<array.length; i++){
    if(array[i]>12){
    result = i
    break
    }
   }
   return result
   
};

let arrayOfIndex=[9,11,17,31]
console.log(excercise2(arrayOfIndex))
//

//Excercise 3

function excercise3(array){
    for (let i = 0; i< array.length; i++) {
        if(array[i] % 6 !== 0){
        return false
        }
    }
return true
};

let arrayOfFalse=[8,6,4,2]
console.log(excercise3(arrayOfFalse))
//

//Excercise 4

  function excercise4(array){
    for (let i = 0; i < array.length; i++) {
      if(array[i]>20){
        return true
      } 
    }
    return false
    };
    
    let arrayOfTrue=[12,5,3,1]
    console.log(excercise4(arrayOfTrue))
    //

    //Excercise 5

    function excercise5(array){
        let result=[];
        for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'string' && array[i].length === 1){
            result.push(array[i])
        }
        }
        return result
    };
    
    let arrayOfLetter=['a',2,'b',1]
    console.log(excercise5(arrayOfLetter))
    //
    
    //Excercise 6

    function excercise6(array){
        let result
        for (let i = 0; i < array.length; i++) {
            if(array[i]>5){
                result = array[i]
                break;
            }
            }
            return result
        };
    
        let arrayOfEx6=[8,'6',4,'3']
        console.log(excercise6(arrayOfEx6))
    //

    //Excercise 7

    function excercise7(array){
        let result=[];
        for (let i = 0; i < array.length; i++) {
            result.push(array[i]*2)
        }
        return result
    };

    let arrayofex7=[4,3,2,1]
    console.log(excercise7(arrayofex7))
    //

    //Excercise 8

    function excercise8(array){
        for (let i = 0; i < array.length; i++) {
          if (typeof array[i] === 'number' && array[i]>9){
            return false
          } 
        }
        return true
        };
        
        let arrayOfEx8=[7,5,3,1]
        console.log(excercise8(arrayOfEx8))
    //

    //Excercise 9

    function excercise9(array){
        let result=[];
        for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] % 2 ){
        result.push(array[i])
        }      
        }
        return result
    };

    let arrayOfEx9=[6,5,4,3,2,1]
    console.log(excercise9(arrayOfEx9))
    //

    //Excercise 10
    function excercise10(array){
        let result=[];
        for (let i = 0; i < array.length; i++) {
            result.push(array[i] + '-java')     
        }
        return result
    };

    let arrayofwords=['apple','mango','banana']
    console.log(excercise10(arrayofwords))
   //

   //Excercise 11
   function excercise11(array){
    let result
    for (let i = 0; i < array.length; i++) {
    if ( array[i].length>2)    
    result = i
    break
    }
    return result
};

let arrayofex11=["hello", "world", "programming", "computer"]
console.log(excercise11(arrayofex11))
//

//Excercise 12
function excercise12(array){
    for (let i = 0; i < array.length; i++) {
      if ( array[i].length<4){
        return false
      } 
    }
    return true
    };
    
    let arrayOfEx12=["cat", "dog", "elephant", "fox"]
    console.log(excercise12(arrayOfEx12))
//

//Excercise 13
function excercise13(array){
    for (let i = 0; i < array.length; i++) {
        let word= array[i]
      if (word.charAt(0).toLowerCase()==='b'){
        return true
      } 
    }
    return false
    };
    
    let arrayOfEx13=["apple", "banana", "cherry", "date"]
    console.log(excercise13(arrayOfEx13))
    //

    //Excercise 14

    function excercise14(array){
        let result=[];

        for (let i = 0; i < array.length; i++) {
            let word= array[i]
          if (word.charAt(word.length - 1).toLowerCase()==='e'){
            result.push(word)
          } 
        }
        return result
        };
        
        let arrayOfEx14=["apple", "banana", "orange", "grape"]
        console.log(excercise14(arrayOfEx14))
        //

        //Excercise 15

        function excercise15(array){
            let result
            for (let i = 0; i < array.length; i++) {
                let word= array[i]
              if (word.charAt(0).toLowerCase()==='b'){
                result = word
              } 
            }
            return result
            };
            
            let arrayOfEx15=["apple", "banana", "cherry"]
            console.log(excercise15(arrayOfEx15))
            //



            //////

            const adi ={
              date: "06/09/2000",
              country: "Jerusalem",
              freinds: [
                "Ibrahim",
                "neymar",
                "messi"
              ],
              FavMovie: "I Am Legend"
            }




