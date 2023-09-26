/**
 * @name Jooice Script Library
 * @version 0.0.1
 * @author cosmos1988 <https://github.com/cosmos1988/jooice/>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JElement = {
    not_null: (id) => {},
    get: (id) => {},
    element: (id) => {},
    elements: (name) => {},
    value: (id) => {},
    set_value: (id, value) => {},
    length: (id) => {},
    disabled: (id) => {},
    set_disabled: (id, bool) => {},
    set_disabled_by_name: (name, bool) => {},
    set_disabled_for_form: (form_id, bool) => {},
    readonly: (id) => {},
    set_readonly: (id, bool) => {},
    set_readonly_by_name: (name, bool) => {},
    set_readonly_for_form: (form_id, bool) => {},
    add_class: (id, class_name) => {},
    add_class_by_name: (name, class_name) => {},
    remove_class: (id, class_name) => {},
    remove_class_by_name: (name, class_name) => {},
    selected_value: (id) => {},
    select_by_value: (id, value) => {},
    select_by_index: (id, index) => {},
    add_option: (select_id, text, value) => {},
    remove_all_options: (select_id) => {},
    remove_option_by_index: (select_id, index) => {},
    remove_option_by_text: (select_id, text) => {},
    remove_option_by_value: (select_id, value) => {},
    checked_count: (name) => {},
    checked_sum: (name) => {},
    check_by_value: (name, value, bool) => {},
    check_all: (name, bool) => {},
};

/**
 * @param {string} id
 */
JElement.not_null = (id) => {
    let element = document.getElementById(id);
    if (element != null) {
        return true;
    }
    return false;
}

/**
 * @param {string} id
 */
JElement.get = (id) => {
    let element = document.getElementById(id);
    if (element == null) {
        console.error("Element (id: " + id + ") is null");
    }
    return element;
}

/**
 * @param {string} id
 */
JElement.element = (id) => {
    return JElement.get(id);
}

/**
 * @param {string} name
 */
JElement.elements = (name) => {
    let elements = document.getElementsByName(name);
    if (elements == null) {
        console.error("Elements (name: " + name + ") is null");
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
    if (element != null) element.value = value;
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
 * @param {string} id
 */
JElement.disabled = (id) => {
    let element = JElement.get(id);
    if (element != null && element.value != null) return element.disabled;
    else return false;
}

/**
 * @param {string} id
 * @param {boolean} bool
 */
JElement.set_disabled = (id, bool) => {
    let element = JElement.get(id);
    if (element != null && element.value != null) element.disabled = bool;
}

/**
 * @param {string} name
 * @param {boolean} bool
 */
JElement.set_disabled_by_name = (name, bool) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = bool;
    }
}

/**
 * @param {string} form_id
 * @param {boolean} bool
 */
JElement.set_disabled_for_form = (form_id, bool) => {
    let form = JElement.get(form_id);
    if (form == null) return;
    let elements = form.querySelectorAll('input, select, textarea, button');
    elements.forEach(element => {
        element.disabled = bool;
    });
}

/**
 * @param {string} id
 */
JElement.readonly = (id) => {
    let element = JElement.get(id);
    if (element != null && element.value != null) return element.readOnly;
    else return false;
}

/**
 * @param {string} id
 * @param {boolean} bool
 */
JElement.set_readonly = (id, bool) => {
    let element = JElement.get(id);
    if (element != null && element.value != null) element.readOnly = bool;
}

/**
 * @param {string} name
 * @param {boolean} bool
 */
JElement.set_readonly_by_name = (name, bool) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].readOnly = bool;
    }
}

/**
 * @param {string} form_id
 * @param {boolean} bool
 */
JElement.set_readonly_for_form = (form_id, bool) => {
    let form = JElement.get(form_id);
    if (form == null) return;
    let elements = form.querySelectorAll('input, select, textarea, button');
    elements.forEach(element => {
        element.readOnly = bool;
    });
}

/**
 * @param {string} id
 * @param {boolean} bool
 */
JElement.add_class = (id, class_name) => {
    let element = JElement.get(id);
    if (element == null) return;
    element.classList.add(class_name);
}

/**
 * @param {string} name
 * @param {boolean} bool
 */
JElement.add_class_by_name = (name, class_name) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(class_name);
    }
}

/**
 * @param {string} id
 * @param {boolean} bool
 */
JElement.remove_class = (id, class_name) => {
    let element = JElement.get(id);
    if (element == null) return;
    element.classList.remove(class_name);
}

/**
 * @param {string} name
 * @param {boolean} bool
 */
JElement.remove_class_by_name = (name, class_name) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(class_name);
    }
}

/**
 * @param {string} id
 */
JElement.selected_value = (id) => {
    let element = JElement.get(id);
    if (element == null) return false;
    return element.options[element.selectedIndex].value;
}

/**
 * @param {string} id
 * @param {string} value
 */
JElement.select_by_value = (id, value) => {
    let element = JElement.get(id);
    if (element == null) return;
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
    let element = JElement.get(id);
    if (element == null) return;
    let options = element.options;
    for (i = 0; i < options.length; i++) {
        if (i == index) {
            options[i].selected = true;
        }
    }
}

/**
 * @param {string} select_id
 * @param {number} index
 */
JElement.add_option = (select_id, text, value) => {
    let element = JElement.get(select_id);
    if (element == null) return;
    var option = new Option(text, value);
    element.add(option);
}

/**
 * @param {string} select_id
 * @param {number} index
 */
JElement.remove_all_options = (select_id) => {
    let element = JElement.get(select_id);
    if (element == null) return;
    while (element.options.length > 0) {
        element.remove(0);
    }
}

/**
 * @param {string} select_id
 * @param {number} index
 */
JElement.remove_option_by_index = (select_id, index) => {
    let element = JElement.get(select_id);
    if (element == null) return;
    element.remove(index);
}

/**
 * @param {string} select_id
 * @param {string} text
 */
JElement.remove_option_by_text = (select_id, text) => {
    let element = JElement.get(select_id);
    if (element == null) return;
    let options = element.options;
    for (i = 0; i < options.length; i++) {
        if (options[i].text == text) {
            element.remove(i);
        }
    }
}

/**
 * @param {string} select_id
 * @param {string} value
 */
JElement.remove_option_by_value = (select_id, value) => {
    let element = JElement.get(select_id);
    if (element == null) return;
    let options = element.options;
    for (i = 0; i < options.length; i++) {
        if (options[i].value == value) {
            element.remove(i);
        }
    }
}

/**
 * @param {string} name
 */
JElement.checked_count = (name) => {
    let elements = JElement.elements(name);
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
    let elements = JElement.elements(name);
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
    let elements = JElement.elements(name);
    if (elements == null) return;
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
    let elements = JElement.elements(name);
    if (elements != null || elements.length > 0) {
        for (i = 0; i < elements.length; i++) {
            let element = elements[i];
            if (element.checked != undefined) {
                element.checked = bool;
            }
        }
    }
}
