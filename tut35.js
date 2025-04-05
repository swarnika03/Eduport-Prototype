// const arr=["One","two","three",{},[],34];
// // for(let i=0;i<arr.length;i++){
// //     console.log(arr[i]);
// // }
// arr.forEach(num=>{
//     console.log(num);
// });
// const elem=document.querySelectorAll("li");
// console.log(elem);
// // console.log(elem);
// elem.forEach((node,index)=>{
//     node.innerText=`sid i love u ${index}`;
// });
// elem.forEach(node=>{
// node.classList.add("pari","sid");
// });
// function addnum(num1,num2){
//     return num1*num2;
// }
// const total=addnum(2,6);
// // const total2=addnum(1,3);
// function name(name2){
//     return `the name is ${name2}`;
// }
// console.log(name("sid"));
// function addnum(name,...Number){
//     let total=0;
//     for(index in Number){
//         total=total+Number[index];
//     }
//     return `${name} ............${total}`
// }
// console.log(addnum("sid",4,5,6,7));
// person={
//     'name':'pari',
//     'age':34,
//     'height':"6'0\"",
//     'speak': function(want='cookie'){
//         console.log(`I want to have ${want}`);
//     },
//     talk(to='laren'){
//         console.log(`${to}`);
//     }


// }
// person['fav']="pizza";
// console.log(person['fav']);
// console.log(person['name']);
// console.log(person.talk('sid'));
const name = document.getElementById("name"); // Fill this in 
const age = document.getElementById("age"); // Fill this in.
const dogYears = document.getElementById("dogyears"); // Fill this in. 

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here
name.innerText="swarnika";
age.innerText=19;

function showDogYears(age) {
  // Step 3. Cast `age` as a number
  dogYears.innerText = Number(age) * 7;
  return Number(age) * 7
}

// Step 4. Set the parameter of showDogyears()
dogYears.innerText = showDogYears("4")

// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about. 
const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
  node.classList.add("real-input");
  node.classList.remove("fake-input")
});