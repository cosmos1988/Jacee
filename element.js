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
    value_length: (id) => {},
    set_value: (id, value) => {},
    text: (id) => {},
    text_length: (id) => {},
    set_text: (id, text) => {},
    inner_html: (id) => {},
    outer_html: (id) => {},
    set_inner_html: (id, html) => {}, /* <div><p>변경</p></div> */
    set_outer_html: (id, html) => {}, /* <p>변경</p> */
    beforebegin_html: (id, html) => {}, /* <p>추가</p><div>대상</div> */
    afterbegin_html: (id, html) => {}, /* <div><p>추가</p>대상</div> */
    beforeend_html: (id, html) => {}, /* <div>대상<p>추가</p></div> */
    afterend_html: (id, html) => {}, /* <div>대상</div><p>추가</p> */
    remove: (id) => {},
    remove_by_name: (name) => {},
    disabled: (id) => {},
    set_disabled: (id, _bool) => {},
    set_disabled_by_name: (name, _bool) => {},
    set_disabled_for_form: (form_id, _bool) => {},
    readonly: (id) => {},
    set_readonly: (id, _bool) => {},
    set_readonly_by_name: (name, _bool) => {},
    set_readonly_for_form: (form_id, _bool) => {},
    add_display_none: (id) => {},
    remove_display_none: (id) => {},
    add_class: (id, class_name) => {},
    add_class_by_name: (name, class_name) => {},
    remove_class: (id, class_name) => {},
    remove_class_by_name: (name, class_name) => {},
    selected_value: (id) => {}, // select
    select_by_value: (id, value) => {}, // select
    select_by_text: (id, value) => {}, // select
    select_by_index: (id, index) => {}, // select
    add_option: (select_id, text, value) => {}, // select
    remove_all_options: (select_id) => {}, // select
    remove_option_by_index: (select_id, index) => {}, // select
    remove_option_by_text: (select_id, text) => {}, // select
    remove_option_by_value: (select_id, value) => {}, // select
    checked_count: (name) => {}, // checkbox
    checked_sum: (name) => {}, // checkbox
    check: (id, _bool) => {}, // checkbox, radio
    check_by_value: (name, value, _bool) => {}, // checkbox, radio
    check_all: (name, _bool) => {}, // checkbox
};

/**
 * @param {object} element
 */
JElement.dispatch_event = (element) => {

    let inputEvent = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });
    element.dispatchEvent(inputEvent);

    let changeEvent = new Event('change', {
        'bubbles': true,
        'cancelable': true
    });
    element.dispatchEvent(changeEvent);
}

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
 */
JElement.value_length = (id) => {
    let element = JElement.get(id);
    if (element != null && element.value != null) return element.value.length;
    else return 0;
}

/**
 * @param {string} id
 * @param {string} value
 */
JElement.set_value = (id, value) => {
    let element = JElement.get(id);
    if (element != null) {
        element.value = value;
        JElement.dispatch_event(element);
    }
}

/**
 * @param {string} id
 */
JElement.text = (id) => {
    let element = JElement.get(id);
    if (element != null) return element.textContent;
    else return "";
}

/**
 * @param {string} id
 */
JElement.text_length = (id) => {
    let element = JElement.get(id);
    if (element != null && element.textContent != null) return element.textContent.length;
    else return 0;
}

/**
 * @param {string} id
 * @param {string} text
 */
JElement.set_text = (id, text) => {
    let element = JElement.get(id);
    if (element != null) {
        element.textContent = text;
    }
}

/**
 * @param {string} id
 */
JElement.inner_html = (id) => {
    let element = JElement.get(id);
    if (element != null) return element.innerHTML;
    else return "";
}

/**
 * @param {string} id
 */
JElement.outer_html = (id) => {
    let element = JElement.get(id);
    if (element != null) return element.outerHTML;
    else return "";
}

/**
 * @param {string} id
 * @param {string} html
 */
JElement.set_inner_html = (id, html) => {
    let element = JElement.get(id);
    if (element != null) {
        element.innerHTML = html;
    }
}

/**
 * @param {string} id
 * @param {string} html
 */
JElement.set_outer_html = (id, html) => {
    let element = JElement.get(id);
    if (element != null) {
        element.outerHTML = html;
    }
}

/**
 * @param {string} id
 * @param {string} html
 */
JElement.beforebegin_html = (id, html) => {
    let element = JElement.get(id);
    if (element != null) {
        element.insertAdjacentHTML("beforebegin", html);
    }
}

/**
 * @param {string} id
 * @param {string} html
 */
JElement.afterbegin_html = (id, html) => {
    let element = JElement.get(id);
    if (element != null) {
        element.insertAdjacentHTML("afterbegin", html);
    }
}

/**
 * @param {string} id
 * @param {string} html
 */
JElement.beforeend_html = (id, html) => {
    let element = JElement.get(id);
    if (element != null) {
        element.insertAdjacentHTML("beforeend", html);
    }
}

/**
 * @param {string} id
 * @param {string} html
 */
JElement.afterend_html = (id, html) => {
    let element = JElement.get(id);
    if (element != null) {
        element.insertAdjacentHTML("afterend", html);
    }
}

/**
 * @param {string} id
 */
JElement.remove = (id) => {
    let element = JElement.get(id);
    if (element != null) {
        element.remove();
    }
}

/**
 * @param {string} name
 */
JElement.remove_by_name = (name) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.remove();
    }
}

/**
 * @param {string} id
 */
JElement.disabled = (id) => {
    let element = JElement.get(id);
    if (element != null) return element.disabled;
    else return false;
}

/**
 * @param {string} id
 * @param {boolean} bool
 */
JElement.set_disabled = (id, bool = true) => {
    let element = JElement.get(id);
    if (element != null) element.disabled = bool;
}

/**
 * @param {string} name
 * @param {boolean} bool
 */
JElement.set_disabled_by_name = (name, bool = true) => {
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
JElement.set_disabled_for_form = (form_id, bool = true) => {
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
    if (element != null) return element.readOnly;
    else return false;
}

/**
 * @param {string} id
 * @param {boolean} bool
 */
JElement.set_readonly = (id, bool = true) => {
    let element = JElement.get(id);
    if (element != null) element.readOnly = bool;
}

/**
 * @param {string} name
 * @param {boolean} bool
 */
JElement.set_readonly_by_name = (name, bool = true) => {
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
JElement.set_readonly_for_form = (form_id, bool = true) => {
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
JElement.add_display_none = (id) => {
    let element = JElement.get(id);
    if (element != null) {
        element.style.display = "none";
    }
}

/**
 * @param {string} id
 */
JElement.remove_display_none = (id) => {
    let element = JElement.get(id);
    if (element != null) {
        element.style.display = "";
    }
}

/**
 * @param {string} id
 * @param {string} class_name
 */
JElement.add_class = (id, class_name) => {
    let element = JElement.get(id);
    if (element == null) return;
    element.classList.add(class_name);
}

/**
 * @param {string} name
 * @param {string} class_name
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
 * @param {string} class_name
 */
JElement.remove_class = (id, class_name) => {
    let element = JElement.get(id);
    if (element == null) return;
    element.classList.remove(class_name);
}

/**
 * @param {string} name
 * @param {string} class_name
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
            JElement.dispatch_event(element);
        }
    }
}

/**
 * @param {string} id
 * @param {string} text
 */
JElement.select_by_text = (id, text) => {
    let element = JElement.get(id);
    if (element == null) return;
    let options = element.options;
    for (i = 0; i < options.length; i++) {
        let option = options[i];
        if (option.text == text) {
            option.selected = true;
            JElement.dispatch_event(element);
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
            JElement.dispatch_event(element);
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
 * @param {string} id
 * @param {boolean} bool
 */
JElement.check = (id, bool = true) => {
    let element = JElement.element(id);
    if (element == null) return;
    element.checked = bool;
    JElement.dispatch_event(element);
}

/**
 * @param {string} name
 * @param {string} value
 * @param {boolean} bool
 */
JElement.check_by_value = (name, value, bool = true) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.value == value) {
            element.checked = bool;
            JElement.dispatch_event(element);
        }
    }
}

/**
 * @param {string} name
 * @param {boolean} bool
 */
JElement.check_all = (name, bool = true) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.checked != undefined) {
            element.checked = bool;
            JElement.dispatch_event(element);
        }
    }
}
