/*

template is jsx

react component

component return jsx + data

*/


import { toElement } from "./../utils/toElement";

function toDoItemTemplate(todo) {
    const template =
        `
    <section class="bg-zinc-50 border-l-4 border-purple-600 shadow-sm rounded-xl p-4 md:p-5">
        ${todo}
      </section>
    `;

    return toElement(template);
}

export { toDoItemTemplate };