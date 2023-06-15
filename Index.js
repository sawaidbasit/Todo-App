// // Create a function
// // Call All HTML Elements
// // Create a Array
// // Create a On Click button
// // push The Array into Element
// // Console Array

// // Create a On Click delete
// // create a new Variable
// // Create If Condition If Array Element not Foubd console "Sorry We Can't Find This Element" and return
// // use Splice Method to Convert String into Array Element
// // console Array

// // Create a Onclick button
// // Create a prompt box to get New Task
// // Get The Index of Old task using IndexOf 
// // arr[Index] = Prompt ;
// // console.log(arr)
// // Call The Function



// // let head = document.createElement("h1")
// // let heading = document.createTextNode("TO DO APP ");
// // head.appendChild(heading);
// // let newHeading = document.getElementById("h1");
// // newHeading.append(head);  
// // newHeading.style.color ="red";
// // newHeading.style.textAlign = "center";

// let todo = document.getElementById("todo");
// todo.style.textAlign = "center";
 

//     let input = document.getElementById("input");
//     document.getElementById("input").placeholder = "Type name here..";
//     let button = document.getElementById("submit");
//     let edit = document.getElementById("edit");

//     let arr = [];
// button.onclick = () => {
//   let value = input.value;

//   // Check if the value is already in the array
//   if (!arr.includes(value)) {
//     arr.push(value);
//     let li = document.createElement("li");
//     li.setAttribute("id", value);
//     let html = `<div>
//       <p>${value}</p>
//       <button onclick="remove()">Delete</button>
//     </div>`;
//     li.innerHTML = html;
//     document.getElementById("list").appendChild(li);
//   } else {
//     alert("Please Change The Task");
//   }

//   if (value === "") {
//     alert("Please Add a task")
//   }
// };



//     edit.onclick = () => {
//     let  newValue = prompt("Please Enter a New Task")
//     let Index2 = arr.indexOf(input.value);
//     if (Index2 === -1) {
//       console.log("Sorry We Can't Find This Value");
//      return;
//     }
//      arr[Index2] =  newValue;


//      let li = document.createElement("li");
//       li.innerHTML = arr;
//       document.getElementById("list").appendChild(li); 
//     // console.log(arr);

// }
     

//  del.onclick = () => {
//   function remove() {
//     let Index = arr.indexOf(input.value);
//     if (Index === -1) {
//       alert("Sorry We Can't Find This Value");
//       return;
//     }
//     arr.splice(Index,1);

//   let li = document.getElementById(input.value);
//   li.remove(input.value);
//   }

//  }
  


//     // console.log(arr);
//   // }
//   // }
// // let arr  = [0,9,2,3,4,5,6,1,89];
// // arr[1] = 5;
// // console.log(arr);

// // function handleChange(input) {
// //   console.log(input.value)
// // }

// // DOM REMOVE Element
// // ADD Element
// // Kooi Class Kaise Change karte hai 


let input = document.getElementById("input");
let list = document.getElementById("list");

function addTask() {
  let arr = [];
  if (input.value === '') {
    alert("Please Write some words");
  }
  else {
    let newList = document.createElement("li");
    // newList.innerHTML = input.value;
    list.appendChild(newList);

    let span = document.createElement("span");
    span.className = "span.";
    span.innerText = input.value;
    newList.append(span);

    let Ebutton = document.createElement("button");
    Ebutton.className = "edit";
    Ebutton.innerText = "Edit";
    newList.append(Ebutton);

    let button = document.createElement("button");
    button.className = "delete";
    button.innerText = "Delete";
    newList.append(button);
  }
input.value = "";
}


list.addEventListener('click', function(e){
if (e.target.className === "delete") {
    e.target.parentElement.remove()

}
if (e.target.className === "edit") {
    let newValue = prompt("Please Enter a new Value");
    e.target.previousElementSibling.innerText = newValue; 

}
 }
)
