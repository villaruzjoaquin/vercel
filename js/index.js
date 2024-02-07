import { getToDoData } from "./lib/firebase/api";


// Single source of truth
// Creating a blank array
let store = [];

async function appInit() {
    const toDos = await getToDoData();
    console.log(toDos);
    console.log("Yo");

    // Access the keys inside "toDos" then forEach key 
    // assign them a variable called "toDo" and log each of them
    // Object.keys(toDos).forEach(toDo => console.log(toDo));

    // Object.values(toDos).forEach(toDo => console.log(toDo));

    // to get the values from the object we use the Object.values(obj) / Object.keys(obj) / Object.entries(obj)

    // The array we made stores values of the object in this variable
    // store = [...Object.values(toDos)];

    // // Create your own todo data
    // // find method
    // const key = "-NpB-eTM3CAL9ana07fx";

    // // Get the list of keys inside toDos
    // const keys = Object.keys(toDos);
    // const item = keys.find((item) => {
    //     if (item === key) {
    //         return item;
    //     }
    // })

    // console.log(item);


}

appInit();


/*

    RTDB returns Object of Object....
    [objects]

*/
