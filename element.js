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
    selected_value: (id) => {},
    select_by_value: (id, value) => {},
    select_by_index: (id, index) => {},
    checked_count: (name) => {},
    checked_sum: (name) => {},
    check_by_value: (name, value, bool) => {},
    check_all: (name, bool) => {},
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

/**
 * @param {string} id
 */
JElement.selected_value = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    return element.options[element.selectedIndex].value;
}

/**
 * @param {string} id
 * @param {string} value
 */
JElement.select_by_value = (id, value) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    let options = element.options;
    for (i = 0; i < options.length; i++) {
        let option = options[i];
        if (option.value == value) {
            option.selected = true;
        }
    }
}

/**
 * @param {string} id
 * @param {number} index
 */
JElement.select_by_index = (id, index) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    let options = element.options;
    for (i = 0; i < options.length; i++) {
        if (i == index) {
            options[i].selected = true;
        }
    }
}

/**
 * @param {string} name
 */
JElement.checked_count = (name) => {
    let elements = JCheck.elements(name);
    if (elements == null) return 0;
    let count = 0;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element == null) return 0;
        if (element.checked == null) return 0;
        if (element.checked) {
            count++;
        }
    }
    return count;
}

/**
 * @param {string} name
 */
JElement.checked_sum = (name) => {
    let elements = JCheck.elements(name);
    if (elements == null) return 0;
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element == null) return 0;
        if (element.checked == null) return 0;
        if (element.checked) {
            if (!NaN(element.value)) {
                sum += Number(element.value);
            }
        }
    }
    return sum;
}

/**
 * @param {string} name
 * @param {string} value
 * @param {boolean} bool
 */
JElement.check_by_value = (name, value, bool) => {
    let elements = JCheck.elements(name);
    if (elements == null) return 0;
    let count = 0;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.value == value) {
            element.checked = bool;
        }
    }
}

/**
 * @param {string} name
 * @param {boolean} bool
 */
JElement.check_all = (name, bool) => {
    let elements = JAction.elements(name);
    if (elements != null || elements.length > 0) {
        for (i = 0; i < elements.length; i++) {
            let element = elements[i];
            if (element.checked != undefined) {
                element.checked = bool;
            }
        }
    }
}
