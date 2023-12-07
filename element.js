/**
 * @name Jacee
 * @version v2023.20231125
 * @author cosmos1988 <https://github.com/cosmos1988/Jacee>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JElement = {

    idgen_separator: '-',
    idgen: (...parts) => {},
    
    not_null: (id) => {},
    get: (id) => {},
    element: (id) => {},
    elements: (name) => {},
    elements_by_class: (class_name) => {},
    remove: (id) => {},
    remove_by_name: (name) => {},

    value: (id) => {},
    value_length: (id) => {},
    set_value: (id, _value) => {},
    text: (id) => {},
    text_length: (id) => {},
    set_text: (id, text) => {},
    set_text_by_name: (name, text) => {},
    set_text_by_class: (class_name, text) => {},

    inner_html: (id) => {}, // <p>inner</p>
    outer_html: (id) => {}, // <div id='target'><p>inner</p></div>
    set_inner_html: (id, html) => {}, // <div id='target'><p>change</p></div>
    set_outer_html: (id, html) => {}, // <p>change</p>
    remove_inner_html: (id) => {}, // <div id='target'>(remove)</div>
    remove_outer_html: (id) => {}, // (remove)
    beforebegin_html: (id, html) => {}, // <p>add</p><div>target</div>
    afterbegin_html: (id, html) => {}, // <div><p>add</p>target</div>
    beforeend_html: (id, html) => {}, // <div>target<p>add</p></div>
    afterend_html: (id, html) => {}, // <div>target</div><p>add</p>

    disabled: (id) => {},
    set_disabled: (id, _bool) => {},
    set_disabled_by_name: (name, _bool) => {},
    set_disabled_by_class: (class_name, _bool) => {},
    set_disabled_in_form: (form_id, _bool) => {},
    readonly: (id) => {},
    set_readonly: (id, _bool) => {},
    set_readonly_by_name: (name, _bool) => {},
    set_readonly_by_class: (class_name, _bool) => {},
    set_readonly_in_form: (form_id, _bool) => {},
    add_display_none: (id) => {},
    add_display_none_by_name: (name) => {},
    add_display_none_by_class: (class_name) => {},
    add_display_none_in_form: (form_id) => {},
    remove_display_none: (id) => {},
    remove_display_none_by_name: (name) => {},
    remove_display_none_by_class: (class_name) => {},
    remove_display_none_in_form: (form_id) => {},
    add_class: (id, class_name) => {},
    add_class_by_name: (name, class_name) => {},
    add_class_by_class: (target_class_name, class_name) => {},
    add_class_in_form: (form_id, class_name) => {},
    remove_class: (id, class_name) => {},
    remove_class_by_name: (name, class_name) => {},
    remove_class_by_class: (target_class_name, class_name) => {},
    remove_class_in_form: (form_id, class_name) => {},

    selected_value: (id) => {}, // select
    selected_text: (id) => {}, // select
    select_by_value: (id, _value) => {}, // select
    select_by_text: (id, _value) => {}, // select
    select_by_index: (id, _index) => {}, // select
    add_option: (select_id, text, _value) => {}, // select
    remove_all_options: (select_id) => {}, // select
    remove_option_by_index: (select_id, _index) => {}, // select
    remove_option_by_text: (select_id, text) => {}, // select
    remove_option_by_value: (select_id, _value) => {}, // select
    checked: (id) => {}, // checkbox, radio
    checked_value: (name) => {}, // radio
    checked_values: (name) => {}, // checkbox
    checked_count: (name) => {}, // checkbox
    checked_sum: (name) => {}, // checkbox
    check: (id, _bool) => {}, // checkbox, radio
    check_by_value: (name, _value, _bool) => {}, // checkbox, radio
    check_all: (name, _bool) => {}, // checkbox

    /**
     * Whether to display console errors
     * 콘솔 에러를 표시할지 여부
     */
    console_error_enabled: true,
};

/**
 * Trigger an event.
 * 이벤트를 발생시킨다.
 * 
 * @param {Element} element
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
 * Generate an ID string.
 * 아이디 문자열을 생성한다.
 * 
 * @param {...string} parts
 * @returns {string}
 */
JElement.idgen = (...parts) => {
    let separator = JElement.idgen_separator;
    if (separator == null) {
        separator = '-';
    }
    return parts.join(separator);
}

/**
 * Check if an element exists.
 * 엘리먼트가 있는지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JElement.not_null = (id) => {
    let element = document.getElementById(id);
    if (element != null) {
        return true;
    }
    return false;
}

/**
 * Get the element.
 * 엘리먼트를 가져온다.
 * 
 * @param {string} id
 * @returns {Element}
 */
JElement.get = (id) => {
    return JElement.element(id);
}

/**
 * Get the element
 * 엘리먼트를 가져온다.
 * 
 * @param {string} id
 * @returns {Element}
 */
JElement.element = (id) => {
    let element = document.getElementById(id);
    if (element == null) {
        if (JElement.console_error_enabled) {
            console.error(`Element (id: ${id}) is null`);
        }
    }
    return element;
}

/**
 * Get the elements.
 * 엘리먼트들을 가져온다.
 * 
 * @param {string} class_name
 * @returns {NodeList}
 */
JElement.elements = (class_name) => {
    let elements = document.getElementsByName(class_name);
    if (elements.length === 0) {
        if (JElement.console_error_enabled) {
            console.error(`Elements (class name: ${class_name}) is a length of 0`);
        }
        return;
    }
    return elements;
}

/**
 * Get the elements by class name.
 * 클래스이름으로 엘리먼트들을 가져온다.
 * 
 * @param {string} class_name
 * @returns {NodeList}
 */
JElement.elements_by_class = (class_name) => {
    let elements = document.querySelectorAll('.' + class_name);
    if (elements.length === 0) {
        if (JElement.console_error_enabled) {
            console.error(`Elements (name: ${class_name}) is a length of 0`);
        }
        return;
    }
    return elements;
}

/**
 * Get the value.
 * 값을 가져온다.
 * 
 * @param {string} id
 * @returns {string}
 */
JElement.value = (id) => {
    let element = JElement.element(id);
    if (element != null) return element.value;
    else return '';
}

/**
 * Get the length of the value.
 * 값의 길이를 가져온다.
 * 
 * @param {string} id
 * @returns {number}
 */
JElement.value_length = (id) => {
    let element = JElement.element(id);
    if (element != null && element.value != null) return element.value.length;
    else return 0;
}

/**
 * Set the value.
 * 값을 설정한다.
 * 
 * @param {string} id
 * @param {string} value
 */
JElement.set_value = (id, value = null) => {
    let element = JElement.element(id);
    if (element != null) {
        if (element.value != value) {
            element.value = value;
            JElement.dispatch_event(element);
        }
    }
}

/**
 * Get the text.
 * 텍스트를 가져온다.
 * 
 * @param {string} id
 * @returns {string}
 */
JElement.text = (id) => {
    let element = JElement.element(id);
    if (element != null) return element.textContent;
    else return '';
}

/**
 * Get the length of the text.
 * 텍스트의 길이를 가져온다.
 * 
 * @param {string} id
 * @returns {number}
 */
JElement.text_length = (id) => {
    let element = JElement.element(id);
    if (element != null && element.textContent != null) return element.textContent.length;
    else return 0;
}

/**
 * Set the text.
 * 텍스트를 설정한다.
 * 
 * @param {string} id
 * @param {string} text
 */
JElement.set_text = (id, text) => {
    let element = JElement.element(id);
    if (element != null) {
        element.textContent = text;
    }
}

/**
 * Set the text by name.
 * 이름으로 텍스트를 설정한다.
 * 
 * @param {string} id
 * @param {string} text
 */
JElement.set_text_by_name = (name, text) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.textContent = text;
    }
}

/**
 * Set the text by class name.
 * 클래스 이름으로 텍스트를 설정한다.
 * 
 * @param {string} class
 * @param {string} text
 */
JElement.set_text_by_class = (class_name, text) => {
    let elements = JElement.elements_by_class(class_name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.textContent = text;
    }
}

/**
 * Get the HTML inside the element.
 * 엘리먼트 안의 html을 가져온다.
 * ※ <p>inner</p>
 * 
 * @param {string} id
 * @returns {string}
 */
JElement.inner_html = (id) => {
    let element = JElement.element(id);
    if (element != null) return element.innerHTML;
    else return '';
}

/**
 * Get the HTML of the element.
 * 엘리먼트의 html을 가져온다.
 * ※ <div id='target'><p>inner</p></div>
 * 
 * @param {string} id
 * @returns {string}
 */
JElement.outer_html = (id) => {
    let element = JElement.element(id);
    if (element != null) return element.outerHTML;
    else return '';
}

/**
 * Set the HTML inside the element.
 * 엘리먼트 안의 html을 설정한다.
 * ※ <div id='target'><p>change</p></div>
 * 
 * @param {string} id
 * @param {string} html
 */
JElement.set_inner_html = (id, html) => {
    let element = JElement.element(id);
    if (element != null) {
        element.innerHTML = html;
    }
}

/**
 * Set the HTML of the element.
 * 엘리먼트의 html을 설정한다.
 * ※ <p>change</p>
 * 
 * @param {string} id
 * @param {string} html
 */
JElement.set_outer_html = (id, html) => {
    let element = JElement.element(id);
    if (element != null) {
        element.outerHTML = html;
    }
}

/**
 * Remove the HTML inside the element.
 * 엘리먼트 안의 html을 지운다.
 * ※ <div id='target'>(remove)</div>
 * 
 * @param {string} id
 * @param {string} html
 */
JElement.remove_inner_html = (id) => {
    let element = JElement.element(id);
    if (element != null) {
        element.innerHTML = '';
    }
}

/**
 * Remove the HTML of the element.
 * 엘리먼트의 html을 지운다.
 * ※ (remove)
 * 
 * @param {string} id
 * @param {string} html
 */
JElement.remove_outer_html = (id) => {
    let element = JElement.element(id);
    if (element != null) {
        element.outerHTML = '';
    }
}

/**
 * Insert new HTML before the element.
 * 엘리먼트의 앞에 새로운 html를 넣는다.
 * ※ <p>add</p><div>target</div>
 * 
 * @param {string} id
 * @param {string} html
 */
JElement.beforebegin_html = (id, html) => {
    let element = JElement.element(id);
    if (element != null) {
        element.insertAdjacentHTML('beforebegin', html);
    }
}

/**
 * Insert new HTML before the HTML inside the element.
 * 엘리먼트 안의 html 앞에 새로운 html을 넣는다.
 * ※ <div><p>add</p>target</div>
 * 
 * @param {string} id
 * @param {string} html
 */
JElement.afterbegin_html = (id, html) => {
    let element = JElement.element(id);
    if (element != null) {
        element.insertAdjacentHTML('afterbegin', html);
    }
}

/**
 * Insert new HTML after the HTML inside the element.
 * 엘리먼트 안의 html 뒤에 새로운 html을 넣는다.
 * ※ <div>target<p>add</p></div>
 * 
 * @param {string} id
 * @param {string} html
 */
JElement.beforeend_html = (id, html) => {
    let element = JElement.element(id);
    if (element != null) {
        element.insertAdjacentHTML('beforeend', html);
    }
}

/**
 * Insert new HTML after the element.
 * 엘리먼트 뒤에 새로운 html를 넣는다.
 * ※ <div>target</div><p>add</p>
 * 
 * @param {string} id
 * @param {string} html
 */
JElement.afterend_html = (id, html) => {
    let element = JElement.element(id);
    if (element != null) {
        element.insertAdjacentHTML('afterend', html);
    }
}

/**
 * 엘리먼트를 지운다.
 * 
 * @param {string} id
 */
JElement.remove = (id) => {
    let element = JElement.element(id);
    if (element != null) {
        element.remove();
    }
}

/**
 * Remove the element.
 * 엘리먼트를 이름으로 지운다.
 * 
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
 * Get the disabled state.
 * 비활성 상태를 가져온다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JElement.disabled = (id) => {
    let element = JElement.element(id);
    if (element != null) return element.disabled;
    else return false;
}

/**
 * Set the disabled state.
 * 비활성 상태를 설정한다.
 * 
 * @param {string} id
 * @param {boolean} bool
 */
JElement.set_disabled = (id, bool = true) => {
    let element = JElement.element(id);
    if (element != null) element.disabled = bool;
}

/**
 * Set the disabled state by name.
 * 비활성 상태를 이름으로 설정한다.
 * 
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
 * Set the disabled state by class name.
 * 비활성 상태를 클래스 이름으로 설정한다.
 * 
 * @param {string} class_name
 * @param {boolean} bool
 */
JElement.set_disabled_by_class = (class_name, bool = true) => {
    let elements = JElement.elements_by_class(class_name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].disabled = bool;
    }
}

/**
 * Set the disabled state of the form
 * 폼의 비활성 상태를 설정한다.
 * 
 * @param {string} form_id
 * @param {boolean} bool
 */
JElement.set_disabled_in_form = (form_id, bool = true) => {
    let form = JElement.element(form_id);
    if (form == null) return;
    let elements = form.querySelectorAll('input, select, textarea, button');
    elements.forEach(element => {
        element.disabled = bool;
    });
}

/**
 * Get the read-only state.
 * 읽기전용 상태를 가져온다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JElement.readonly = (id) => {
    let element = JElement.element(id);
    if (element != null) return element.readOnly;
    else return false;
}

/**
 * Set the read-only state.
 * 읽기전용 상태를 설정한다.
 * 
 * @param {string} id
 * @param {boolean} bool
 */
JElement.set_readonly = (id, bool = true) => {
    let element = JElement.element(id);
    if (element != null) element.readOnly = bool;
}

/**
 * Set the read-only state by name.
 * 읽기전용 상태를 이름으로 설정한다.
 * 
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
 * Set the read-only state by class name.
 * 읽기전용 상태를 클래스 이름으로 설정한다.
 * 
 * @param {string} class_name
 * @param {boolean} bool
 */
JElement.set_readonly_by_class = (class_name, bool = true) => {
    let elements = JElement.elements_by_class(class_name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].readOnly = bool;
    }
}

/**
 * Set the read-only state of the form.
 * 폼의 읽기전용 상태를 설정한다.
 * 
 * @param {string} form_id
 * @param {boolean} bool
 */
JElement.set_readonly_in_form = (form_id, bool = true) => {
    let form = JElement.element(form_id);
    if (form == null) return;
    let elements = form.querySelectorAll('input, select, textarea, button');
    elements.forEach(element => {
        element.readOnly = bool;
    });
}

/**
 * Add hidden styles.
 * 비표시 스타일을 추가한다.
 * 
 * @param {string} id
 * @param {boolean} bool
 */
JElement.add_display_none = (id) => {
    let element = JElement.element(id);
    if (element != null) {
        element.style.display = 'none';
    }
}

/**
 * Add hidden by name.
 * 비표시 스타일을 이름으로 추가한다.
 * 
 * @param {string} name
 * @param {string} class_name
 */
JElement.add_display_none_by_name = (name) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}

/**
 * Add hidden by class name.
 * 비표시 스타일을 클래스 이름으로 추가한다.
 * 
 * @param {string} class_name
 */
JElement.add_display_none_by_class = (class_name) => {
    let elements = JElement.elements_by_class(class_name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}

/**
 * Add hidden of the form.
 * 폼의 비표시 스타일을 추가한다.
 * 
 * @param {string} form_id
 */
JElement.add_display_none_in_form = (form_id) => {
    let form = JElement.element(form_id);
    if (form == null) return;
    let elements = form.querySelectorAll('input, select, textarea, button');
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}

/**
 * Remove hidden styles.
 * 비표시 스타일을 지운다.
 * 
 * @param {string} id
 */
JElement.remove_display_none = (id) => {
    let element = JElement.element(id);
    if (element != null) {
        element.style.display = '';
    }
}

/**
 * Remove hidden styles by name.
 * 이름으로 비표시 스타일을 지운다.
 * 
 * @param {string} name
 */
JElement.remove_display_none_by_name = (name) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = '';
    }
}

/**
 * Remove hidden styles by name.
 * 이름으로 비표시 스타일을 지운다.
 * 
 * @param {string} class_name
 */
JElement.remove_display_none_by_class = (class_name) => {
    let elements = JElement.elements_by_class(class_name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = '';
    }
}

/**
 * Remove hidden styles of the form.
 * 폼의 비표시 스타일을 지운다.
 * 
 * @param {string} form_id
 */
JElement.remove_display_none_in_form = (form_id) => {
    let form = JElement.element(form_id);
    if (form == null) return;
    let elements = form.querySelectorAll('input, select, textarea, button');
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = '';
    }
}

/**
 * Add class.
 * 클래스를 추가한다.
 * 
 * @param {string} id
 * @param {string} class_name
 */
JElement.add_class = (id, class_name) => {
    let element = JElement.element(id);
    if (element == null) return;
    element.classList.add(class_name);
}

/**
 * Add class by name.
 * 클래스를 이름으로 추가한다.
 * 
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
 * Add class by class name.
 * 클래스를 클래스 이름으로 추가한다.
 * 
 * @param {string} target_class_name
 * @param {string} class_name
 */
JElement.add_class_by_class = (target_class_name, class_name) => {
    let elements = JElement.elements_by_class(target_class_name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(class_name);
    }
}

/**
 * Add class of the form.
 * 폼의 클래스를 추가한다.
 * 
 * @param {string} form_id
 * @param {string} class_name
 */
JElement.add_class_in_form = (form_id, class_name) => {
    let form = JElement.element(form_id);
    if (form == null) return;
    let elements = form.querySelectorAll('input, select, textarea, button');
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(class_name);
    }
}

/**
 * Remove class.
 * 클래스를 지운다.
 * 
 * @param {string} id
 * @param {string} class_name
 */
JElement.remove_class = (id, class_name) => {
    let element = JElement.element(id);
    if (element == null) return;
    element.classList.remove(class_name);
}

/**
 * Remove class by name.
 * 클래스를 이름으로 지운다.
 * 
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
 * Remove class by class name.
 * 클래스를 클래스 이름으로 지운다.
 * 
 * @param {string} target_class_name
 * @param {string} class_name
 */
JElement.remove_class_by_class = (target_class_name, class_name) => {
    let elements = JElement.elements_by_class(target_class_name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(class_name);
    }
}

/**
 * Remove class of the form.
 * 폼의 클래스를 지운다.
 * 
 * @param {string} form_id
 * @param {string} class_name
 */
JElement.add_class_in_form = (form_id, class_name) => {
    let form = JElement.element(form_id);
    if (form == null) return;
    let elements = form.querySelectorAll('input, select, textarea, button');
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(class_name);
    }
}

/**
 * Get the selected value.
 * 선택된 값을 가져온다.
 * ※ select
 * 
 * @param {string} id
 * @returns {string}
 */
JElement.selected_value = (id) => {
    let element = JElement.element(id);
    if (element == null) return false;
    return element.options[element.selectedIndex].value;
}

/**
 * Get the selected text.
 * 선택된 텍스트를 가져온다.
 * ※ select
 * 
 * @param {string} id
 * @returns {string}
 */
JElement.selected_text = (id) => {
    let element = JElement.element(id);
    if (element == null) return false;
    return element.options[element.selectedIndex].text;
}

/**
 * Select by value.
 * 값으로 선택한다.
 * ※ select
 * 
 * @param {string} id
 * @param {string} value
 */
JElement.select_by_value = (id, value = null) => {
    let element = JElement.element(id);
    if (element == null) return;
    let options = element.options;
    let count = 0;
    for (i = 0; i < options.length; i++) {
        let option = options[i];
        if (option.value == value) {
            option.selected = true;
            count++
        }
    }
    if (count > 0) {
        JElement.dispatch_event(element);
    }
}

/**
 * Select by text value.
 * 텍스트값으로 선택한다.
 * ※ select
 * 
 * @param {string} id
 * @param {string} text
 */
JElement.select_by_text = (id, text) => {
    let element = JElement.element(id);
    if (element == null) return;
    let options = element.options;
    let count = 0;
    for (i = 0; i < options.length; i++) {
        let option = options[i];
        if (option.text == text) {
            option.selected = true;
            count++
        }
    }
    if (count > 0) {
        JElement.dispatch_event(element);
    }
}

/**
 * Select by index value.
 * 인덱스값으로 선택한다.
 * ※ select
 * 
 * @param {string} id
 * @param {number} index
 */
JElement.select_by_index = (id, index = 0) => {
    let element = JElement.element(id);
    if (element == null) return;
    let options = element.options;
    let count = 0;
    for (i = 0; i < options.length; i++) {
        if (i == index) {
            options[i].selected = true;
            count++
        }
    }
    if (count > 0) {
        JElement.dispatch_event(element);
    }
}

/**
 * Add options.
 * 옵션을 추가한다.
 * ※ select
 * 
 * @param {string} select_id
 * @param {number} index
 */
JElement.add_option = (select_id, text, value = null) => {
    let element = JElement.element(select_id);
    if (element == null) return;
    var option = new Option(text, value);
    element.add(option);
}

/**
 * Remove all options.
 * 모든 옵션을 지운다.
 * ※ select
 * 
 * @param {string} select_id
 * @param {number} index
 */
JElement.remove_all_options = (select_id) => {
    let element = JElement.element(select_id);
    if (element == null) return;
    while (element.options.length > 0) {
        element.remove(0);
    }
}

/**
 * Remove options by index value.
 * 옵션을 인덱스값으로 지운다.
 * ※ select
 * 
 * @param {string} select_id
 * @param {number} index
 */
JElement.remove_option_by_index = (select_id, index = 0) => {
    let element = JElement.element(select_id);
    if (element == null) return;
    element.remove(index);
}

/**
 * Remove options by text value.
 * 옵션을 텍스트값으로 지운다.
 * ※ select
 * 
 * @param {string} select_id
 * @param {string} text
 */
JElement.remove_option_by_text = (select_id, text) => {
    let element = JElement.element(select_id);
    if (element == null) return;
    let options = element.options;
    for (i = 0; i < options.length; i++) {
        if (options[i].text == text) {
            element.remove(i);
        }
    }
}

/**
 * Remove options by value.
 * 옵션을 값으로 지운다.
 * ※ select
 * 
 * @param {string} select_id
 * @param {string} value
 */
JElement.remove_option_by_value = (select_id, value = null) => {
    let element = JElement.element(select_id);
    if (element == null) return;
    let options = element.options;
    for (i = 0; i < options.length; i++) {
        if (options[i].value == value) {
            element.remove(i);
        }
    }
}

/**
 * Get the checked state.
 * 체크 상태를 가져온다.
 * ※ checkbox, radio
 * 
 * @param {string} id
 * @returns {number}
 */
JElement.checked = (id) => {
    let element = JElement.element(id);
    if (element == null) return false;
    if (element.checked == null) return false;
    return element.checked;
}

/**
 * Get the checked value.
 * 체크된 값을 가져온다.
 * ※ radio
 * 
 * @param {string} name
 * @returns {number}
 */
JElement.checked_value = (name) => {
    let elements = JElement.elements(name);
    if (elements == null) return "";
    let value = "";
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element == null) return "";
        if (element.checked == null) return "";
        if (element.checked) {
            value = element.value;
            break;
        }
    }
    return value;
}

/**
 * Get the checked values.
 * 체크된 값들을 가져온다.
 * ※ checkbox
 * 
 * @param {string} name
 * @returns {number}
 */
JElement.checked_values = (name) => {
    let elements = JElement.elements(name);
    if (elements == null) return 0;
    let values = [];
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element == null) return 0;
        if (element.checked == null) return 0;
        if (element.checked) {
            values.push(element.value);
        }
    }
    return values;
}

/**
 * Get the count of checked items.
 * 체크된 갯수를 가져온다.
 * ※ checkbox
 * 
 * @param {string} name
 * @returns {number}
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
 * Get the sum of checked values.
 * 체크된 값의 합계를 가져온다.
 * ※ checkbox
 * 
 * @param {string} name
 * @returns {number}
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
 * Check.
 * 체크한다
 * ※ checkbox, radio
 * 
 * @param {string} id
 * @param {boolean} bool
 */
JElement.check = (id, bool = true) => {
    let element = JElement.element(id);
    if (element == null) return;
    if (element.checked != bool) {
        element.checked = bool;
        JElement.dispatch_event(element);
    }
}

/**
 * Check by value.
 * 값으로 체크한다.
 * ※ checkbox, radio
 * 
 * @param {string} name
 * @param {string} value
 * @param {boolean} bool
 */
JElement.check_by_value = (name, value = null, bool = true) => {
    let elements = JElement.elements(name);
    if (elements == null) return;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.value == value) {
            element.checked = bool;
        }
    }
}

/**
 * Check all.
 * 모두 체크한다.
 * ※ checkbox
 * 
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
        }
    }
}
