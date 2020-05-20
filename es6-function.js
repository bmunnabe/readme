// --------------------------------------------------------------------------------------------//
//                                   FAT ARROW function                                        //
// --------------------------------------------------------------------------------------------//


// In JS this refers to the OBJECT or from where it has been caled
// In below example, method called via object obj. So this will be refer to obj Object.
// And also issue on below example is method will be pushed to queue,
// So after timeout printAge will be executed(called) from queue(call stack).
// So this will refer to window or this refer will be unbinded from object

function Munna() {
  this.age = 0;
  this.printAge = function () {
    setTimeout( function() { console.log( this.age + 5 ) }, 1000 );
  }
}
obj = new Munna();
obj.printAge()

// To fix the above issue, We will store this object into some variable and use it as workaround(fix) like below

function Munna() {
  this.age = 0;
  this.printAge = function () {
    _this = this;
    setTimeout( function() { console.log( _this.age + 5 ) }, 1000 );
  }
}
obj = new Munna();
obj.printAge()

// In some other scenarios like when pass function to other class or function. We will use bind, call, apply to bind this to that method.
// But on Fat arrow function, this issue is fixed. So when you declare function as arrow function and call it.
// It doen't from where it has been called or who called it. THIS on arrow function always refer to its parent (Class, function)

function Munna() {
  this.age = 0;
  this.printAge = function () {
    setTimeout( () => console.log( this.age + 5 ), 1000 );
  }
}
obj = new Munna();
obj.printAge()


// --------------------------------------------------------------------------------------------//
//                                 ASYNC AWAIT function                                        //
// --------------------------------------------------------------------------------------------//

    let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'; 
    fetch(url)
    .then(response => response.json())
    .then(
      commits => console.log(commits[0].author.login)
    );

    async function munna(){
      let response = await fetch(url);
      let commits = await response.json(); // read response body and parse as JSON
      console.log(commits[0].author);
    }
    
    // asyn on fat arrow
    const munna = async () => {
      let response = await fetch(url);
      let commits = await response.json(); // read response body and parse as JSON
      console.log(commits[0].author);
    }
    
    munna();
    
 
