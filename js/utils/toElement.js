// This module converts an html template into an element

function toElement(template) {
    return document.createRange().createContextualFragment(template).children[0];
}

export { toElement };