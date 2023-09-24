/**
 * @name Jooice Script Library
 * @version 0.0.1
 * @author cosmos1988 <https://github.com/cosmos1988/jooice/>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JCheck = {

    /** 
     * 공통 경고창을 띄우는 함수 설정: JCheck.alert_fn = (msg) => { }
	 * @param {string} msg
	 */
    alert_fn: null,

    /**
     * 패스워드 패턴 
     * 
     * (?=.*[a-z]): 문자열에 최소 하나의 소문자 알파벳이 포함되어 있어야 합니다.
     * (?=.*[A-Z]): 문자열에 최소 하나의 대문자 알파벳이 포함되어 있어야 합니다.
     * (?=.*\d): 문자열에 최소 하나의 숫자가 포함되어 있어야 합니다.
     * (?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/]): 문자열 내에 이러한 특수 문자 중 최소 하나가 포함되어 있어야 합니다.
     * [A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?/]{8,}: 전체 문자열은 위의 소문자, 대문자, 숫자, 특수 문자들로만 구성되어 있어야 하며, 최소 길이는 8자 이상이어야 합니다.
     */
    password_pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?/]{8,}$/,

    /**
     * 강력한 패스워드 패턴
     * 
     * (?=.*[a-z]): 문자열에 최소 하나의 소문자 알파벳이 포함되어 있어야 합니다.
     * (?=.*[A-Z]): 문자열에 최소 하나의 대문자 알파벳이 포함되어 있어야 합니다.
     * (?=.*\d): 문자열에 최소 하나의 숫자가 포함되어 있어야 합니다.
     * (?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/]): 문자열에 최소 하나의 이 특수 문자들 중 하나가 포함되어 있어야 합니다.
     * .*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/]: 이 조건은 문자열에 위의 특수 문자들 중 적어도 하나가 포함되어 있어야 한다는 것을 추가로 확인합니다. (특수 문자 최소 두 개)
     * [A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?/]{12,}: 문자열은 소문자 알파벳, 대문자 알파벳, 숫자, 위의 특수 문자들 중 하나 이상으로 구성되어야 하며, 최소 길이는 12자 이상이어야 합니다.
     */
    password_lv2_pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/].*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?/]{12,}$/,

    result: {
        empty: (id) => {},
        not_empty: (id, msg) => {},
        number: (id) => {},
        min_size: (id, min) => {},
        min_length: (id, min) => {},
        max_size: (id, max) => {},
        max_length: (id, max) => {},
        size_range: (id, min, max) => {},
        length_range: (id, min, max) => {},
        english: (id) => {},
        english_number: (id) => {},
        contains_spchars: (id) => {},
        contains_number_spchars: (id) => {},
        contains_spchars_space: (id) => {},
        contains_number_spchars_space: (id) => {},
        id: (id) => {},
        password: (id) => {},
        password_lv2: (id) => {},
        email: (id) => {},
        phone_number: (id) => {},
        zip_code: (id) => {},
        selected: (id) => {},
        checked: (name) => {},
        checked_sum: (name) => {},
        min_checked_count: (name, min) => {},
        min_checked_sum: (name) => {},
        max_checked_count: (name, max) => {},
        max_checked_sum: (name) => {},
        checked_count_range: (name, min, max) => {},
        checked_sum_range: (name, min, max) => {},
    },

    alert: {
        alert_and_focus: (id, msg, result) => {},
        empty: (id, msg) => {},
        number: (id, msg) => {},
        min_size: (id, min, msg) => {},
        min_length: (id, min, msg) => {},
        max_size: (id, max, msg) => {},
        max_length: (id, max, msg) => {},
        size_range: (id, min, max, msg) => {},
        length_range: (id, min, max, msg) => {},
        english: (id, msg) => {},
        english_number: (id, msg) => {},
        contains_spchars: (id, msg) => {},
        contains_number_spchars: (id, msg) => {},
        contains_spchars_space: (id, msg) => {},
        contains_number_spchars_space: (id, msg) => {},
        id: (id, msg) => {},
        password: (id, msg) => {},
        password_lv2: (id, msg) => {},
        email: (id, msg) => {},
        phone_number: (id, msg) => {},
        zip_code: (id, msg) => {},
        selected: (id, msg) => {},
        checked: (name, msg) => {},
        min_checked_count: (name, min, msg) => {},
        min_checked_sum: (name, min, msg) => {},
        max_checked_count: (name, max, msg) => {},
        max_checked_sum: (name, max, msg) => {},
        checked_count_range: (name, min, max, msg) => {},
        checked_sum_range: (name, min, max, msg) => {},
    },

    input: {
        number: (id, _msg) => {},
        english: (id, _msg) => {},
        english_number: (id, _msg) => {},
        exclude_spchars: (id, _msg) => {},
        exclude_number_spchars: (id, _msg) => {},
        exclude_spchars_space: (id, _msg) => {},
        exclude_number_spchars_space: (id, _msg) => {},
        max_size: (id, max, _msg) => {},
        max_length: (id, max, _msg) => {},
        id: (id, _msg) => {},
        password: (id, fn) => {},
        email: (id, _msg) => {},
        phone_number: (id, _msg) => {},
        zip_code: (id, _msg) => {},
    },

    focusout: {
        password: (id, del, _msg) => {},
        email: (id, del, _msg) => {},
        phone_number: (id, del, _msg) => {},
        zip_code: (id, del, _msg) => {},
    },

    change: {
        min_checked_count: (name, min) => {},
        min_checked_sum: (name, min) => {},
        max_checked_count: (name, max) => {},
        max_checked_sum: (name, max) => {},
        checked_count_range: (name, min, max) => {},
        checked_sum_range: (name, min, max) => {},
    },
};

JCheck.element = (id) => {
    let element = document.getElementById(id);
    if (element == null) {
        console.log("Element (id: " + id + ") is null");
    }
    return element;
}

JCheck.elements = (name) => {
    let elements = document.getElementsByName(name);
    if (elements == null) {
        console.log("Element (name: " + name + ") is null");
    }
    return elements;
}

JCheck.length = (id) => {
    let element = JCheck.element(id);
    if (element != null && element.value != null) {
        return element.value.length;
    } else {
        return 0;
    }
}

/* result */
/**
 * @param {string} id
 */
JCheck.result.empty = (id) => {
    let element = JCheck.element(id);
    if (element == null) return true;
    if (element.value == null || element.value == '') return true;
    return false
};
   
/**
 * @param {string} id
 */
JCheck.result.not_empty = (id) => {
    return !JCheck.result.empty()
}

/**
 * @param {string} id
 */
JCheck.result.number = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    if (!isNaN(element.value)) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 * @param {number} min
 */
JCheck.result.min_size = (id, min) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    if (JCheck.result.number(id)) {
        if (min <= Number(element.value)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * @param {string} id
 * @param {number} min
 */
JCheck.result.min_length = (id, min) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    if (min <= element.value.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 * @param {number} max
 */
JCheck.result.max_size = (id, max) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    if (JCheck.result.number(id)) {
        if (max >= Number(element.value)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * @param {string} id
 * @param {number} max
 */
JCheck.result.max_length = (id, max) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    if (max >= element.value.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 * @param {number} min
 * @param {number} max
 */
JCheck.result.size_range = (id, min, max) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    if (JCheck.result.number(id)) {
        if (min <= Number(element.value)  && max >= Number(element.value)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * @param {string} id
 * @param {number} min
 * @param {number} max
 */
JCheck.result.length_range = (id, min, max) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    if (min <= element.value.length && max >= element.value.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.english = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /[a-zA-Z]$/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.english_number = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /[0-9a-zA-Z]$/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.contains_spchars = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+).*/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.contains_number_spchars = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+).*/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.contains_spchars_space = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? \s]+).*/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.contains_number_spchars_space = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? \s]+).*/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.id = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /^[a-zA-Z0-9-_.]+$/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.password = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = JCheck.password_pattern;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.password_lv2 = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = JCheck.password_lv2_pattern;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.email = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /^[a-zA-Z0-9]+[a-zA-Z0-9.+]*[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+[a-zA-Z0-9.]*[a-zA-Z0-9]+$/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.phone_number = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /^\+?[1-9]\d{1,14}$/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.zip_code = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /^[a-zA-Z0-9\s-]+$/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} id
 */
JCheck.result.selected = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    return element.options[element.selectedIndex].value;
}

/**
 * @param {string} id
 */
JCheck.result.checked = (name) => {
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
JCheck.result.checked_sum = (name) => {
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
 * @param {number} min
 */
JCheck.result.min_checked_count = (name, min) => {
    let count = JCheck.result.checked(name);
    if (min <= count) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} name
 * @param {number} min
 */
JCheck.result.min_checked_sum = (name, min) => {
    let sum = JCheck.result.checked_sum(name);
    if (min <= sum) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} name
 * @param {number} max
 */
JCheck.result.max_checked_count = (name, max) => {
    let count = JCheck.result.checked(name);
    if (max >= count) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} name
 * @param {number} max
 */
JCheck.result.max_checked_sum = (name, max) => {
    let sum = JCheck.result.checked_sum(name);
    if (max >= sum) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} name
 * @param {number} min
 * @param {number} max
 */
JCheck.result.checked_count_range = (name, min, max) => {
    let count = JCheck.result.checked(name);
    if (min <= count && max >= count) {
        return true;
    } else {
        return false;
    }
}

/**
 * @param {string} name
 * @param {number} min
 * @param {number} max
 */
JCheck.result.checked_sum_range = (name, min, max) => {
    let sum = JCheck.result.checked_sum(name);
    if (min <= sum && max >= sum) {
        return true;
    } else {
        return false;
    }
}


/* alert */
/**
 * @param {string} id
 * @param {string} msg
 * @param {boolean} result
 */
JCheck.alert.alert_and_focus = (id, msg, result) => {
    if (result == undefined || result) {
        if (JCheck.alert_fn != null && JCheck.alert_fn instanceof Function) {
            JCheck.alert_fn(msg);
        } else {
            alert(msg);
        }
        let element = JCheck.element(id);
        if (element != null && element.focus != undefined && document.activeElement !== element) element.focus();
    };
    return result;
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.empty = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, JCheck.result.empty(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.number = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.number(id));
}

/**
 * @param {string} id
 * @param {number} min
 * @param {string} msg
 */
JCheck.alert.min_size = (id, min, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.min_size(id, min));
}

/**
 * @param {string} id
 * @param {number} min
 * @param {string} msg
 */
JCheck.alert.min_length = (id, min, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.min_length(id, min));
}

/**
 * @param {string} id
 * @param {number} max
 * @param {string} msg
 */
JCheck.alert.max_size = (id, max, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.max_size(id, max));
}

/**
 * @param {string} id
 * @param {number} max
 * @param {string} msg
 */
JCheck.alert.max_length = (id, max, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.max_length(id, max));
}

/**
 * @param {string} id
 * @param {number} min
 * @param {number} max
 * @param {string} msg
 */
JCheck.alert.size_range = (id, min, max, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.size_range(id, min, max));
}

/**
 * @param {string} id
 * @param {number} min
 * @param {number} max
 * @param {string} msg
 */
JCheck.alert.length_range = (id, min, max, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.length_range(id, min, max));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.english = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.english(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.english_number = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.english_number(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.contains_spchars = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, JCheck.result.contains_spchars(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.contains_number_spchars = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, JCheck.result.contains_number_spchars(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.contains_spchars_space = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, JCheck.result.contains_spchars_space(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.contains_number_spchars_space = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, JCheck.result.contains_number_spchars_space(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.id = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.id(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.password = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.password(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.password_lv2 = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.password_lv2(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.email = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.email(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.phone_number = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.phone_number(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.zip_code = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.zip_code(id));
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.alert.selected = (id, msg) => {
    return JCheck.alert.alert_and_focus(id, msg, !JCheck.result.selected(id));
}

/**
 * @param {string} name
 * @param {string} msg
 */
JCheck.alert.checked = (name, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert.alert_and_focus(elements[0].id, msg, !JCheck.result.checked(name));
}

/**
 * @param {string} name
 * @param {number} min
 * @param {string} msg
 */
JCheck.alert.min_checked_count = (name, min, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert.alert_and_focus(elements[0].id, msg, !JCheck.result.min_checked_count(name, min));
}

/**
 * @param {string} name
 * @param {number} min
 * @param {string} msg
 */
JCheck.alert.min_checked_sum = (name, min, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert.alert_and_focus(elements[0].id, msg, !JCheck.result.min_checked_sum(name, min));
}

/**
 * @param {string} name
 * @param {number} max
 * @param {string} msg
 */
JCheck.alert.max_checked_count = (name, max, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert.alert_and_focus(elements[0].id, msg, !JCheck.result.max_checked_count(name, max));
}

/**
 * @param {string} name
 * @param {number} max
 * @param {string} msg
 */
JCheck.alert.checked_count_range = (name, max, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert.alert_and_focus(elements[0].id, msg, !JCheck.result.checked_count_range(name, max));
}

/**
 * @param {string} name
 * @param {number} min
 * @param {number} max
 * @param {string} msg
 */
JCheck.alert.checked_sum_range = (name, min, max, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert.alert_and_focus(elements[0].id, msg, !JCheck.result.checked_sum_range(name, min, max));
}


/* JCheck.input */
/**
 * @param {string} id
 * @param {function} fn
 */
JCheck.input.add_event = (id, fn) => {
    try {
        let element = JCheck.element(id);
        if (element == null) return;
        element.addEventListener("input", fn);
    } catch(e) {
        console.log(e)
    }
}

/**
 * @param {string} id
 * @param {RegExp} pattern
 * @param {string} replacement
 * @param {string} msg
 */
JCheck.input.add_replace_event = (id, pattern, replacement, msg) => {
    let fn = (e) => {
        let element = JCheck.element(id);
        if (element == null) return;
        let test = pattern.test(element.value);
        if (test) {
            element.value = element.value.replace(pattern, replacement);
        }
        if (msg != null) {
            JCheck.alert.alert_and_focus(id, msg, test);
        }
    };
    JCheck.input.add_event(id, fn);
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.number = (id, msg) => {
    let pattern = /\D/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.english = (id, msg) => {
    let pattern = /[^a-zA-Z]/g
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.english_number = (id, msg) => {
    let pattern = /[^a-zA-Z0-9]/g
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.exclude_spchars = (id, msg) => {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.exclude_number_spchars = (id, msg) => {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.exclude_spchars_space = (id, msg) => {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]+/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.exclude_number_spchars_space = (id, msg) => {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s0-9]+/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * @param {string} id
 * @param {number} max
 * @param {string} msg
 */
JCheck.input.max_size = (id, max, msg) => {
    let fn = (e) => {
        let element = JCheck.element(id);
        if (element == null) return;
        let test = JCheck.result.max_size(id, max);
        if (!test) {
            if (JCheck.result.number(id)) {
                element.value = max;
            } else {
                element.value = 0;
            }
            if (msg != null) {
                JCheck.alert.alert_and_focus(id, msg, !test);
            }
        } else {
            element.value = element.value.replace(/\b0+(\d+)\b/g, "$1");
        }
    };
    JCheck.input.add_event(id, fn);
}

/**
 * @param {string} id
 * @param {number} max
 * @param {string} msg
 */
JCheck.input.max_length = (id, max, msg) => {
    let fn = (e) => {
        let test = JCheck.result.max_length(id, max)
        if (!test) {
            let element = JCheck.element(id);
            if (element == null) return;
            element.value = element.value.slice(0, max);
            if (msg != null) {
                JCheck.alert.alert_and_focus(id, msg, !test);
            }
        }
    };
    JCheck.input.add_event(id, fn);
}
JCheck.input.id = (id, msg) => {
    let pattern = /[^a-zA-Z0-9-_.]/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JCheck.input.password = (id, fn) => {
    let event_fn = (e) => {
        let id = e.target.id;
        let element = JCheck.element(id);
        if (element == null) return;
        let test_lv1 = JCheck.result.password(id);
        let test_lv2 = JCheck.result.password_lv2(id);

        if (fn != null && fn instanceof Function) {
            fn(test_lv1, test_lv2);
        }
    }
    JCheck.input.add_event(id, event_fn);
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.email = (id, msg) => {
    let pattern = /[^a-zA-Z0-9-.@+]/g;
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.phone_number = (id, msg) => {
    let pattern = /[^\d+()-]/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.zip_code = (id, msg) => {
    let pattern = /[^a-zA-Z0-9\s\-]/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}


/* focusout */
/**
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 * @param {function} fn
 */
JCheck.focusout.alert_and_focus = (id, del, msg, fn) => {
    let element = JCheck.element(id);
    if (element == null) return;
    element.addEventListener("focusout", () => {
            if (JCheck.result.empty(id)) return;
            let test = fn(id);
            if (!test) {
                element.focus();
                setTimeout(function() {
                    if (document.activeElement !== element) {
                        JCheck.alert.alert_and_focus(id, msg, !test);
                    }
                    if (del) element.value = null;
                }, 0);
            }
        }
    );
}

/**
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.password = (id, del, msg) => {
    JCheck.focusout.alert_and_focus(id, del, msg, JCheck.result.password(id));
}

/**
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.email = (id, del, msg) => {
    JCheck.focusout.alert_and_focus(id, del, msg, JCheck.result.email(id));
}

/**
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.phone_number = (id, del, msg) => {
    JCheck.focusout.alert_and_focus(id, del, msg, JCheck.result.phone_number(id));
}

/**
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.zip_code = (id, del, msg) => {
    JCheck.focusout.alert_and_focus(id, del, msg, JCheck.result.zip_code(id));
}

/* change */
/**
 * @param {string} name
 * @param {string} msg
 */
JCheck.change.add_events = (name, fn) => {
    try {
        let elements = JCheck.elements(name);
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("change", fn);
        }
    } catch(e) {
        console.log(e)
    }
}

/**
 * @param {string} name
 * @param {number} min
 * @param {string} msg
 */
JCheck.change.min_checked_count = (name, min, msg) => {
    let fn = (e) => {
        let test = JCheck.result.min_checked_count(name, min);
        if (!test) {
            e.target.checked = false;
            if (msg != null) {
                JCheck.alert.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * @param {string} name
 * @param {number} min
 */
JCheck.change.min_checked_sum = (name, min) => {
    let fn = (e) => {
        let test = JCheck.result.min_checked_sum(name, min);
        if (!test) {
            e.target.checked = false;
            if (msg != null) {
                JCheck.alert.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * @param {string} name
 * @param {number} min
 */
JCheck.change.max_checked_count = (name, min) => {
    let fn = (e) => {
        let test = JCheck.result.max_checked_count(name, min);
        if (!test) {
            e.target.checked = false;
            if (msg != null) {
                JCheck.alert.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * @param {string} name
 * @param {number} min
 */
JCheck.change.max_checked_sum = (name, min) => {
    let fn = (e) => {
        let test = JCheck.result.max_checked_sum(name, min);
        if (!test) {
            e.target.checked = false;
            if (msg != null) {
                JCheck.alert.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * @param {string} name
 * @param {number} min
 * @param {number} max
 */
JCheck.change.checked_count_range = (name, min, max) => {
    let fn = (e) => {
        let test = JCheck.result.checked_count_range(name, min, max);
        if (!test) {
            e.target.checked = false;
            if (msg != null) {
                JCheck.alert.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * @param {string} name
 * @param {number} min
 * @param {number} max
 */
JCheck.change.checked_sum_range = (name, min, max) => {
    let fn = (e) => {
        let test = JCheck.result.checked_sum_range(name, min, max);
        if (!test) {
            e.target.checked = false;
            if (msg != null) {
                JCheck.alert.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}
