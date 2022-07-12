"use strict";
//  1. ստեղծել սեփական forEach ֆեւնկցիա, որը լրիվ նույն կերպ կաշխատի ինչպես forEach-ը

function forEach (arr, func){
  for(let i = 0; i < arr.length; i++){
    func(arr[i]);
  }
}

forEach([1, 2, 3], function(val){
   console.log(val * 2);
});


// ստեղծել օբջեքթ ու քոփի անել մեր անցած մեթոդներով

// 1st variant object function
const student1 = {
  name: "Alexander",
  lastName: "Jackson",
  age: 19
};

function copyObj (mainStud) {
  const studCopy = {};
  for(let key in mainStud){
    studCopy[key] = mainStud[key];
  }
  return studCopy;
}
const copyStudent = copyObj(student1);
console.log(copyStudent);


// 2nd variant object assign
const userNames = {
  name1: "Jane",
  name2: "Joe",
  name3: "Alex"
};

const tel = {
  tel1: 8182546954,
  tel2: 818425634,
  tel3: 818458352
};

console.log(Object.assign(userNames, tel));

//3rd variant spread operator
const rating = {
  jack : 19,
  jane : 19,
  alex : 18,
  victoria : 17
};

const rt = {...rating};
console.group(rt);


// ստեղծել զանգված ու քոփի անել մեր անցած մեթոդներով

// 1st variant array function
function copyArr(mainArr){
  const copyArray = [];
  for(let index in mainArr){
    copyArray[index] = mainArr[index];
  }
  return copyArray;
}

const array = [15, 25, 65];
const arrayCopy = copyArr(array);
console.log(arrayCopy);


// 2nd variant array slice
const names = ["Ann", "Leo"];
const namesCopy = names.slice();

names[0] = "Monica";

console.log(names);
console.log(namesCopy);


// 3rd variant array spread

const carsGroup1 = ["Mercedes", "BMW", "Lambo"];
const carsGroup2 = ["Ferrari", "Tesla", "Range Rover"];
const allCars = ["Mazda", ...carsGroup1, ...carsGroup2];

console.log(allCars);



// ստեղծել ֆունկցիա, որը կաշխատի split-ի նման (տողը կվերցնի, կկտրի կդարձնի զանգված)

function splitfunc (str) {
  let result = [];              
  let string = "";

  for(let i = 0; i < str.length; i++){ 

    if(str[i] !== " "){            
        string = string + str[i];        
    } else {               
        result.push(string.trim());
        string = "";             
    }
  }   
      result.push(string);    
      return result;                
}

const testString = "my name is Maria";
console.log(splitfunc(testString));



//  Ոչ պարտադիր / Բարդ
//  ստեղծել ֆունկցիա SORT անունով, որը կաշխատի այնպես ինչպես SORT ալգորիմթը

function sort(array){
  let val;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (array[i] > array[j]) {
        val = array[i];
        array[i] = array[j];
        array[j] = val;
    }
  }
}
  return array;
}

let arr = [-10, 77, 105, 5, 8, 1, 95];
console.log(sort(arr));
