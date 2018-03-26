console.log('hello world');

// console.clear();
// var s1="FMR" ;//string literal
// var s2 =String("FMR");// string object s1.substr(0,2);
// console.log(s2==s1);
// console.log(s1.length);

// var d1 = new Date();
// var d2 = new Date();
// console.log(d1);
// console.log(typeof(d2));

// console.log(d1==d2);
// console.log(typeof(Date));
// d1 ='ram';
// console.log(typeof(d1));

//----------Arrays----
// var numbers = [2,4];
// console.log(numbers.length);
// numbers.push(-1);
// // numbers[4]=-1;
// console.log(numbers);
// numbers.sort(function(a,b){
//   return a>b ? -1:1;
// });
// console.log('after sort', numbers);

// function add(array){
//   // second();
//   var sum=0;
//   // for(var count=0;count< array.length;count++){
//   //   sum=sum+array[count];
//   // }
//   var incrementedArray = array.map(function(number, index){
//     return number+2;
//     console.log(index);
//     sum=sum+number;
//   })
//   console.log(incrementedArray);
//   console.log('original array=',array);
//   return sum;
// }
// function getEven(array){
//   return array.filter(function(element){
//     return !element%2;
//   })
// }

function outer() {//DOM tree
  console.log(this);
}

var inner = function () {
  console.log(this);
}
function customObject() {
  var user = {//JSON
    name: 'Ajay',
    age: 30,
    address: {
      state: 'ka',
      pin: 344534,
    },  //composition
    work: function () {
      this.walk();
    },
    walk: function () {
      console.log(this.address.state + ' is walking');
    }
  }
  user.work();
  console.log(user.age);
  user.age = 45;
  console.log(user.age);
  user.dob = new Date();//add new properties even after creation
  if (user.dob) {
    //logic
  }
  delete user.dob;
}

customObject();
function second() {
  console.log('second function');
}
// https://bit.ly/2G8NcBq
// console.log(add([3,4]));