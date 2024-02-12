/*

template is jsx

react component

component return jsx + data

*/


import { toElement } from "./../utils/toElement";

function toDoItemTemplate(todo) {
    const template = `

    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 mb-5 dark:shadow-slate-700/[.7]">
        <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            ${todo}
            </h3>
        </div>
    </div>
    `;

    return toElement(template);
}


export { toDoItemTemplate };