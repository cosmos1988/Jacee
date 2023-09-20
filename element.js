/**
 * @name Jooice Script Library
 * @version 0.0.1
 * @author cosmos1988 <https://github.com/cosmos1988/jooice/>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JElement = {
    element: (id) => {},
    elements: (name) => {},
    value: (id) => {},
    set_value: (id, value) => {},
    length: (id) => {},
    json: (form_id) => {},
    disabled: (id) => {},
    set_disabled: (id, bool) => {},
};

/**
 * @param {string} id
 */
JElement.get = (id) => {
    let element = document.getElementById(id);
    if (element == null) {
        console.log("Element (id: " + id + ") is null");
    }
    return element;
}

/**
 * @param {string} name
 */
JElement.elements = (name) => {
    let elements = document.getElementsByName(name);
    if (elements == null) {
        console.log("Element (name: " + name + ") is null");
    }
    return elements;
}

/**
 * @param {string} id
 */
JElement.value = (id) => {
    let element = JElement.get(id);
    if (element != null) return element.value;
    else return "";
}

/**
 * @param {string} id
 * @param {string} value
 */
JElement.set_value = (id, value) => {
    let element = JElement.get(id);
    if (element != null) return element.value = value;
}

/**
 * @param {string} id
 */
JElement.length = (id) => {
    let element = JElement.get(id);
    if (element != null && element.value != null) return element.value.length;
    else return 0;
}

/**
 * @param {string} form_id
 */
JElement.json = (form_id) => {
    let element = JElement.get(id);
    if (element == null) return JSON.stringify({});

    const formData = new FormData(element);
    let json = {};
    for (const [key, value] of formData.entries()) {
        json[key] = value;
    }
    return JSON.stringify(json);
}

/**
 * @param {string} id
 */
JElement.disabled = (id) => {
    let element = JAction.element(id);
    if (element != null && element.value != null) return element.disabled;
    else return false;
}

/**
 * @param {string} id
 * @param {boolean} bool
 */
JElement.set_disabled = (id, bool) => {
    let element = JAction.element(id);
    if (element != null && element.value != null) element.disabled = bool;
}
