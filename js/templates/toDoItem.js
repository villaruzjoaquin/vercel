/*

template is jsx

react component

component return jsx + data

*/


import { toElement } from "./../utils/toElement";

function toDoItemTemplate(todo) {
    const template = `

    <div class="grid grid-cols-12 gap-4">
        <section class="bg-zinc-50 mb-2 border-l-4 border-purple-600 shadow-sm rounded-xl p-4 md:p-6 lg:p-8 space-y-2 hover:bg-zinc-100 transition-colors duration-300 ease-in-out">
        <p class="text-gray-800 text-sm md:text-base lg:text-lg font-medium whitespace-pre-line">${todo}</p>
        </section>  
    </div>

    `;

    return toElement(template);
}


export { toDoItemTemplate };