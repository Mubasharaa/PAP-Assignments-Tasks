// Call Back
function f1(){
    console.log("This is  1 function ");
    f2();
    return
  }
 function f2(){
    console.log("This is  2 function");
   return
  }
  f1();
 
 //Memory Heap and Stack
 
 const student = {
    name: 'Saira',
    Fname:'Razak'
  };
  const name = 'Seher';
  function getName(name){
    console.log(name);
    return
  }
  const newStudent = student;
 
  getName('Mubashara');
  console.log(student);
 

//setTimeout(function() { myFunction("The Life is Roller Coaster !!!"); }, 3000);

//function myFunction(value) {
 //document.getElementById("demo").innerHTML = value;
 //console.log(myFunction)
//}
