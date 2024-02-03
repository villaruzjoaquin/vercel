/*
    Read Data from RTDB
    
*/

import { ref, child, get } from 'firebase/database';

import { db } from './../../config/firebase/firebaseInit';


/*

    connect to the to do list
        reference ref
         const dbRef = ref(db, "/todos");

    asking for the data from the ref    path to a node in the JSON file...
    get(ref) ===> data snapshot
    get();

    extracting the data
    snapshot.val();

*/

async function getToDoData(){
    // references "todos.json";
    const dbRef = ref(db, "/todos");
    const dataSnapshot = await get(dbRef);

    // return a promise
    return await dataSnapshot.val();
}

export { getToDoData };