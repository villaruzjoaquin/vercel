/*

template is jsx

react component

component return jsx + data

*/


import { toElement } from "./../utils/toElement";

function toDoItemTemplate(todo) {
    const template = `

    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-4">${todo}</div>
    </div>
    `;

    return toElement(template);
}


export { toDoItemTemplate };