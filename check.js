/**
 * @name Jacee
 * @version v2023.20231106
 * @author cosmos1988 <https://github.com/cosmos1988/Jacee>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JCheck = {

    alert: (msg) => {},
    alert_and_focus: (id, msg, _result) => {},

    result: {
        empty: (id) => {},
        not_empty: (id) => {},
        equal: (id, value) => {},
        not_equal: (id, value) => {},
        number: (id) => {},
        min_value: (id, min) => {},
        min_length: (id, min) => {},
        max_value: (id, max) => {},
        max_length: (id, max) => {},
        value_range: (id, min, max) => {},
        length_range: (id, min, max) => {},
        english: (id) => {},
        lowercase: (id) => {},
        uppercase: (id) => {},
        language: (id, lang) => {},
        english_number: (id) => {},
        number_hyphen: (id) => {},
        not_spchars: (id) => {},
        not_number_spchars: (id) => {},
        not_spchars_space: (id) => {},
        not_number_spchars_space: (id) => {},
        id: (id) => {},
        password: (id) => {},
        password_lv2: (id) => {},
        email: (id) => {},
        uri: (id) => {},
        phone_number: (id) => {},
        postal_code: (id) => {},
        selected: (id) => {},
        checked: (name) => {},
        checked_sum: (name) => {},
        min_checked_count: (name, min) => {},
        min_checked_sum: (name) => {},
        max_checked_count: (name, max) => {},
        max_checked_sum: (name) => {},
        checked_count_range: (name, min, max) => {},
        checked_sum_range: (name, min, max) => {},
        test: (id, pattern) => {},
    },

    alert: {
        not_empty: (id, msg) => {},
        equal: (id, value, msg) => {},
        not_equal: (id, value, msg) => {},
        number: (id, msg) => {},
        min_value: (id, min, msg) => {},
        min_length: (id, min, msg) => {},
        max_value: (id, max, msg) => {},
        max_length: (id, max, msg) => {},
        value_range: (id, min, max, msg) => {},
        length_range: (id, min, max, msg) => {},
        english: (id, msg) => {},
        lowercase: (id, msg) => {},
        uppercase: (id, msg) => {},
        language: (id, lang, msg) => {},
        english_number: (id, msg) => {},
        number_hyphen: (id, msg) => {},
        not_spchars: (id, msg) => {},
        not_number_spchars: (id, msg) => {},
        not_spchars_space: (id, msg) => {},
        not_number_spchars_space: (id, msg) => {},
        id: (id, msg) => {},
        password: (id, msg) => {},
        password_lv2: (id, msg) => {},
        email: (id, msg) => {},
        uri: (id, msg) => {},
        phone_number: (id, msg) => {},
        postal_code: (id, msg) => {},
        selected: (id, msg) => {},
        checked: (name, msg) => {},
        min_checked_count: (name, min, msg) => {},
        min_checked_sum: (name, min, msg) => {},
        max_checked_count: (name, max, msg) => {},
        max_checked_sum: (name, max, msg) => {},
        checked_count_range: (name, min, max, msg) => {},
        checked_sum_range: (name, min, max, msg) => {},
        test: (id, pattern, msg) => {},
    },

    input: {
        number: (id, _msg) => {},
        english: (id, _msg) => {},
        lowercase: (id, _msg) => {},
        uppercase: (id, _msg) => {},
        language: (id, lang, _msg) => {},
        english_number: (id, _msg) => {},
        number_hyphen: (id, _msg) => {},
        not_spchars: (id, _msg) => {},
        not_number_spchars: (id, _msg) => {},
        not_spchars_space: (id, _msg) => {},
        not_number_spchars_space: (id, _msg) => {},
        max_value: (id, max, _msg) => {},
        max_length: (id, max, _msg) => {},
        id: (id, _msg) => {},
        password_level: (id, fn) => {}, /* fn(test_lv1, test_lv2) */
        email: (id, _msg) => {},
        uri: (id, _msg) => {},
        phone_number: (id, _msg) => {},
        postal_code: (id, _msg) => {},
        test: (id, pattern, _msg) => {},
    },

    focusout: {
        id: (id, del, _msg) => {},
        password: (id, del, _msg) => {},
        email: (id, del, _msg) => {},
        uri: (id, del, _msg) => {},
        phone_number: (id, del, _msg) => {},
        postal_code: (id, del, _msg) => {},
    },

    change: {
        min_checked_count: (name, min) => {},
        min_checked_sum: (name, min) => {},
        max_checked_count: (name, max) => {},
        max_checked_sum: (name, max) => {},
        checked_count_range: (name, min, max) => {},
        checked_sum_range: (name, min, max) => {},
    },

    /** 
     * Alert output function
     * 경고창 출력 함수 
     * Example: JAction.alert_fn = (msg) => { }
     * 
     * @param {string} msg
     */
    alert_fn: null,

    /**
     * ID pattern
     * 아이디 패턴
     */
    id_pattern: /^[a-zA-Z0-9-_.]+$/,
    
    /**
     * ID input pattern
     * 아이디 입력 패턴
     */
    id_input_pattern: /[^a-zA-Z0-9-_.]/g,

    /**
     * Password pattern
     * 패스워드 패턴
     * 
     * Default:
     * (?=.*[a-z]): The string must contain at least one lowercase alphabetical character.
     * (?=.*[A-Z]): The string must contain at least one uppercase alphabetical character.
     * (?=.*\d): The string must contain at least one digit.
     * (?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]): The string must contain at least one of these special characters.
     * [A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{8,}: The overall string should only be made up of the aforementioned lowercase letters,
     * uppercase letters, numbers, and special characters, and its minimum length should be at least 8 characters.
     * 
     * 기본값:
     * (?=.*[a-z]): 문자열에 최소 하나의 소문자 알파벳이 포함되어 있어야 합니다.
     * (?=.*[A-Z]): 문자열에 최소 하나의 대문자 알파벳이 포함되어 있어야 합니다.
     * (?=.*\d): 문자열에 최소 하나의 숫자가 포함되어 있어야 합니다.
     * (?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]): 문자열 내에 이러한 특수 문자 중 최소 하나가 포함되어 있어야 합니다.
     * [A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{8,}: 전체 문자열은 위의 소문자, 대문자, 숫자, 특수 문자들로만 구성되어 있어야 하며, 최소 길이는 8자 이상이어야 합니다.
     */
    password_pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{8,}$/,

    /**
     * Strong Password pattern
     * 강력한 패스워드 패턴
     * 
     * Default:
     * (?=.*[a-z]): The string must contain at least one lowercase alphabetical character.
     * (?=.*[A-Z]): The string must contain at least one uppercase alphabetical character.
     * (?=.*\d): The string must contain at least one digit.
     * (?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]): The string must contain at least one of these special characters.
     * .*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]: This condition further confirms that the string must contain at least one of the aforementioned special characters.
     * (Minimum two special characters in total when combined with the previous condition)
     * [A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{12,}: The overall string should be composed of at least one of the mentioned lowercase letters, uppercase letters,
     * numbers, and special characters, and its minimum length should be at least 12 characters.
     * 
     * 기본값:
     * (?=.*[a-z]): 문자열에 최소 하나의 소문자 알파벳이 포함되어 있어야 합니다.
     * (?=.*[A-Z]): 문자열에 최소 하나의 대문자 알파벳이 포함되어 있어야 합니다.
     * (?=.*\d): 문자열에 최소 하나의 숫자가 포함되어 있어야 합니다.
     * (?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]): 문자열에 최소 하나의 이 특수 문자들 중 하나가 포함되어 있어야 합니다.
     * .*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]: 이 조건은 문자열에 위의 특수 문자들 중 적어도 하나가 포함되어 있어야 한다는 것을 추가로 확인합니다. (특수 문자 최소 두 개)
     * [A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{12,}: 문자열은 소문자 알파벳, 대문자 알파벳, 숫자, 위의 특수 문자들 중 하나 이상으로 구성되어야 하며, 최소 길이는 12자 이상이어야 합니다.
     */
    password_lv2_pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/].*[!@#$%^&*()-_=+\[\]{}|;:'',.<>?/])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'',.<>?/]{12,}$/,

    /**
     * Email pattern
     * 이메일 패턴
     */
    email_pattern: /^[a-zA-Z0-9]+[a-zA-Z0-9.+]*[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+[a-zA-Z0-9.]*[a-zA-Z0-9]+$/,

    /**
     * Email input pattern
     * 이메일 입력 패턴
     */
    email_input_pattern: /[^a-zA-Z0-9-.@+]/g,

    /**
     * URI pattern
     * URI 패턴
     */
    uri_pattern: /^([a-z][a-z0-9+\-.]*):\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,

    /**
     * URI input pattern
     * URI 입력 패턴
     */
    uri_input_pattern: /[^a-zA-Z0-9-._~]/g,

    /**
     * Phone number pattern
     * 전화번호 패턴
     */
    phone_number_pattern: /^(?:\+?\d{1,3}-?)?(?:0\d{1,2}|\d{1,3})(?:-\d{1,4}){0,2}$/,
    
    /**
     * Phone number input pattern
     * 전화번호 입력 패턴
     */
    phone_number_input_pattern: /[^\d+-]/g,

    /**
     * Zip code pattern
     * 우편번호 패턴
     */
    postal_code_pattern: /^[a-zA-Z0-9\s-]+$/,
    
    /**
     * Zip code input pattern
     * 우편번호 입력 패턴
     */
    postal_code_input_pattern:  /[^a-zA-Z0-9\s\-]/g,
};

/**
 * 엘리먼트를 가져온다.
 * 
 * @param {string} id 
 * @returns {Element}
 */
JCheck.element = (id) => {
    let element = document.getElementById(id);
    if (element == null) {
        console.error(`Element (id: ${id}) is null`);
    }
    return element;
}

/**
 * Get the elements.
 * 엘리먼트들을 가져온다.
 * 
 * @param {string} name 
 * @returns {Element}
 */
JCheck.elements = (name) => {
    let elements = document.getElementsByName(name);
    if (elements.length === 0) {
        console.error(`Elements (name: ${name}) is a length of 0`);
        return;
    }
    return elements;
}

/**
 * Get the length.
 * 길이를 얻는다.
 * 
 * @param {string} id 
 * @returns {number}
 */
JCheck.length = (id) => {
    let element = JCheck.element(id);
    if (element != null && element.value != null) {
        return element.value.length;
    } else {
        return 0;
    }
}

/**
 * Pop up a check alert
 * 체크 경고창을 띄운다.
 * 
 * @param {string} msg
 */
JCheck.alert = (msg) => {
    if (JCheck.alert_fn != null && JCheck.alert_fn instanceof Function) {
        JCheck.alert_fn(msg);
    } else {
        alert(msg);
    }
}

/**
 * Pop up a check alert and focus on it
 * 체크 경고창을 띄우고 포커스한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @param {boolean} result
 * @returns {boolean}
 */
JCheck.alert_and_focus = (id, msg, result = true) => {
    if (result) {
        if (JCheck.alert_fn != null && JCheck.alert_fn instanceof Function) {
            JCheck.alert_fn(msg);
        } else {
            alert(msg);
        }
        let element = JCheck.element(id);
        if (element != null 
            && element.focus != undefined 
            && document.activeElement !== element) element.focus();
    };
    return result;
}

/**
 * Check if it is empty.
 * 빈값인지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.empty = (id) => {
    let element = JCheck.element(id);
    if (element == null) return true;
    if (element.value == null || element.value.trim() == '') return true;
    return false;
};
   
/**
 * Check if it is not empty.
 * 빈값이 아닌지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.not_empty = (id) => {
    return !JCheck.result.empty(id)
}

/**
 * Check if the values are the same.
 * 같은 값인지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.equal = (id, value) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value === value) return true;
    else return false;
};
   
/**
 * Check if the values are not equal.
 * 같은 값이 아닌지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.not_equal = (id, value) => {
    return !JCheck.result.equal(id, value)
}

/**
 * Check if the value is numeric.
 * 값이 숫자인지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
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
 * Check the minimum value of the value.
 * 값의 최소값을 확인한다.
 * 
 * @param {string} id
 * @param {number} min
 * @returns {boolean}
 */
JCheck.result.min_value = (id, min) => {
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
 * Check the minimum length of the value.
 * 값의 최소길이를 확인한다.
 * 
 * @param {string} id
 * @param {number} min
 * @returns {boolean}
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
 * Check the maximum value of the value.
 * 값의 최대값을 확인한다.
 * 
 * @param {string} id
 * @param {number} max
 * @returns {boolean}
 */
JCheck.result.max_value = (id, max) => {
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
 * Check the maximum length of the value.
 * 값의 최대길이를 확인한다.
 * 
 * @param {string} id
 * @param {number} max
 * @returns {boolean}
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
 * Check the range of the value.
 * 값의 범위를 확인한다.
 * 
 * @param {string} id
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
JCheck.result.value_range = (id, min, max) => {
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
 * Check the length range of the value.
 * 값의 길이 범위를 확인한다.
 * 
 * @param {string} id
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
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
 * Check if the value is in English.
 * 값이 영어인지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
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
 * Check if the value is in lowercase.
 * 값이 소문자인지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.lowercase = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /[a-z]/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check if the value is in uppercase.
 * 값이 대문자인지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.uppercase = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /[A-Z]/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check if the value is in the specified language.
 * 값이 해당 언어인지 확인한다.
 * 
 * @param {string} id
 * @param {string} lang
 * @returns {boolean}
 */
JCheck.result.language = (id, pattern) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;

    switch (pattern.toLowerCase()) {
        case 'english':
        return JCheck.result.english(id);
        case 'korean':
        pattern = /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
        break;
        case 'japanese':
        pattern = /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]+$/;
        break;
        case 'chinese':
        pattern = /^[\u4E00-\u9FFF]+$/;
        break;
    }

    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check if the value is alphanumeric.
 * 값이 영어, 숫자인지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
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
 * Check if the value is English or '-'.
 * 값이 영어, '-'인지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.number_hyphen = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /^[0-9\-]+$/;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check if the value contains no special characters.
 * 값에 특수문자가 없는지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.not_spchars = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /(?=.*[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]+).*/;
    if (pattern.test(element.value)){
        return false;
    } else {
        return true;
    }
}

/**
 * Check if the value contains no numbers or special characters.
 * 값에 숫자, 특수문자가 없는지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.not_number_spchars = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]+).*/;
    if (pattern.test(element.value)){
        return false;
    } else {
        return true;
    }
}

/**
 * Check if the value contains no special characters or spaces.
 * 값에 특수문자, 띄워쓰기가 없는지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.not_spchars_space = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /(?=.*[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/? \s]+).*/;
    if (pattern.test(element.value)){
        return false;
    } else {
        return true;
    }
}

/**
 * Check if the value contains no numbers, special characters, or spaces.
 * 값에 숫자, 특수문자, 띄워쓰기가 없는지 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.not_number_spchars_space = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = /(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/? \s]+).*/;
    if (pattern.test(element.value)){
        return false;
    } else {
        return true;
    }
}

/**
 * Check the format of the ID.
 * 아이디 형식 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.id = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = JCheck.id_pattern;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check the format of the password.
 * 비밀번호 형식 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
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
 * Check for a strong password format.
 * 강력한 비밀번호 형식 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
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
 * Check the email format.
 * 이메일 형식 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.email = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = JCheck.email_pattern;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check the URI format.
 * URI형식 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.uri = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = JCheck.uri_pattern;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check the phone number format.
 * 전화번호 형식 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.phone_number = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = JCheck.phone_number_pattern;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check the postal code format.
 * 우편번호 형식 확인한다.
 * 
 * @param {string} id
 * @returns {boolean}
 */
JCheck.result.postal_code = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    let pattern = JCheck.postal_code_pattern;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check the pattern of the value.
 * 값의 패턴 확인한다.
 * 
 * @param {string} id
 * @param {string} pattern
 * @returns {boolean}
 */
JCheck.result.test = (id, pattern) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.value == null) return false;
    if (pattern == null) return false;
    if (pattern.test(element.value)){
        return true;
    } else {
        return false;
    }
}

/**
 * Check if the value is selected.
 * 값이 선택되어 있는지 확인한다.
 * 
 * @param {string} id
 */
JCheck.result.selected = (id) => {
    let element = JCheck.element(id);
    if (element == null) return false;
    if (element.selectedIndex === -1) return false;
    let selected_value = element.options[element.selectedIndex].value;
    if (selected_value == "") return false;
    else return true;
}

/**
 * Check if the value is checked.
 * 값이 체크되어 있는지 확인한다.
 * 
 * @param {string} id
 * @returns {number}
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
 * Check the sum of the checked values."
 * 체크된 값의 합계를 확인한다.
 * 
 * @param {string} name
 * @returns {number}
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
 * Check the minimum number of checks.
 * 최소 체크 갯수를 확인한다.
 * 
 * @param {string} name
 * @param {number} min
 * @returns {boolean}
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
 * Check the minimum sum of the checked values.
 * 최소 체크 값 합계를 확인한다.
 * 
 * @param {string} name
 * @param {number} min
 * @returns {boolean}
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
 * Check the maximum number of checks.
 * 최대 체크 갯수를 확인한다.
 * 
 * @param {string} name
 * @param {number} max
 * @returns {boolean}
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
 * Check the minimum sum of checked values.
 * 최소 체크 값 합계를 확인한다.
 * 
 * @param {string} name
 * @param {number} max
 * @returns {boolean}
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
 * Check the range of check counts.
 * 체크 건수 범위를 확인한다.
 * 
 * @param {string} name
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
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
 * Check the range of the sum of checked values.
 * 체크 값의 합계 범위를 확인한다.
 * 
 * @param {string} name
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
JCheck.result.checked_sum_range = (name, min, max) => {
    let sum = JCheck.result.checked_sum(name);
    if (min <= sum && max >= sum) {
        return true;
    } else {
        return false;
    }
}

/**
 * If not empty, display an alert and return true.
 * 빈값이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.not_empty = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, JCheck.result.empty(id));
}

/**
 * If the values are not the same, display an alert and return true.
 * 같은 값이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} value
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.equal = (id, value, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.equal(id, value));
}

/**
 * If the values are the same, display an alert and return true.
 * 같은 값이면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} value
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.not_equal = (id, value, msg) => {
    return JCheck.alert_and_focus(id, msg, JCheck.result.equal(id, value));
}

/**
 * If the value is not a number, display an alert and return true.
 * 값이 숫자가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.number = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.number(id));
}

/**
 * If the value is not the minimum, display an alert and return true.
 * 값이 최소값이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {number} min
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.min_value = (id, min, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.min_value(id, min));
}

/**
 * If the value does not meet the minimum length, display an alert and return true.
 * 값이 최소길이가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {number} min
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.min_length = (id, min, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.min_length(id, min));
}

/**
 * If the value exceeds the maximum, display an alert and return true.
 * 값이 최대값이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {number} max
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.max_value = (id, max, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.max_value(id, max));
}

/**
 * If the value exceeds the maximum length, display an alert and return true.
 * 값이 최대길이가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {number} max
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.max_length = (id, max, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.max_length(id, max));
}

/**
 * If the value exceeds the range, display an alert and return true.
 * 값의 범위를 넘으면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {number} min
 * @param {number} max
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.value_range = (id, min, max, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.value_range(id, min, max));
}

/**
 * If the length of the value exceeds the specified range, display an alert and return true.
 * 값의 길이 범위를 넘으면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {number} min
 * @param {number} max
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.length_range = (id, min, max, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.length_range(id, min, max));
}

/**
 * If the value is not in English, display an alert and return true.
 * 값이 영어가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.english = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.english(id));
}

/**
 * If the value is not lowercase, display an alert and return true.
 * 값이 소문자가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.lowercase = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.lowercase(id));
}

/**
 * If the value is not uppercase, display an alert and return true.
 * 값이 대문자가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.uppercase = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.uppercase(id));
}

/**
 * If the value is not in the specified language, display an alert and return true.
 * 값이 해당 언어가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} lang
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.language = (id, lang, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.language(id, lang));
}

/**
 * If the value is not alphanumeric, display an alert and return true.
 * 값이 영어, 숫자가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.english_number = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.english_number(id));
}

/**
 * If the value is not English letters or '-', display an alert and return true.
 * 값이 영어, '-'가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.number_hyphen = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.number_hyphen(id));
}

/**
 * If the value contains special characters, display an alert and return true.
 * 값에 특수문자가 있으면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.not_spchars = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.not_spchars(id));
}

/**
 * If the value contains numbers or special characters, display an alert and return true.
 * 값에 숫자, 특수문자가 있으면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.not_number_spchars = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.not_number_spchars(id));
}

/**
 * If the value contains special characters or spaces, display an alert and return true.
 * 값에 특수문자, 띄워쓰기가 있으면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.not_spchars_space = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.not_spchars_space(id));
}

/**
 * If the value contains numbers, special characters, or spaces, display an alert and return true.
 * 값에 숫자, 특수문자, 띄워쓰기가 있으면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.not_number_spchars_space = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.not_number_spchars_space(id));
}

/**
 * If it is not a valid ID format, display an alert and return true.
 * 아이디 형식이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.id = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.id(id));
}

/**
 * If the format is not a valid password, display an alert and return true.
 * 비밀번호 형식이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.password = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.password(id));
}

/**
 * If it is not a strong password format, display an alert and return true.
 * 강력한 비밀번호 형식이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.password_lv2 = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.password_lv2(id));
}

/**
 * If it is not in email format, display an alert and return true.
 * 이메일 형식이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.email = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.email(id));
}

/**
 * If it is not in URI format, display an alert and return true.
 * URI형식이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.uri = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.uri(id));
}

/**
 * If the format is not a valid phone number, display an alert and return true.
 * 전화번호 형식이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.phone_number = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.phone_number(id));
}

/**
 * If the format is not a valid postal code, display an alert and return true.
 * 우편번호 형식이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.postal_code = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.postal_code(id));
}

/**
 * If the value does not match the pattern, display an alert and return true.
 * 값의 패턴이 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} pattern
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.test = (id, pattern, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.test(id, pattern));
}

/**
 * If the value is not selected, display an alert and return true.
 * 값이 선택되어 있지 않으면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} id
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.selected = (id, msg) => {
    return JCheck.alert_and_focus(id, msg, !JCheck.result.selected(id));
}

/**
 * If the value is not checked, display an alert and return true.
 * 값이 체크되어 있지 않으면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} name
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.checked = (name, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert_and_focus(elements[0].id, msg, !JCheck.result.checked(name));
}

/**
 * If the number of checks does not meet the minimum requirement, display an alert and return true.
 * 최소 체크 갯수가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} name
 * @param {number} min
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.min_checked_count = (name, min, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert_and_focus(elements[0].id, msg, !JCheck.result.min_checked_count(name, min));
}

/**
 * If the sum of the checked values does not meet the minimum requirement, display an alert and return true.
 * 최소 체크 값 합계가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} name
 * @param {number} min
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.min_checked_sum = (name, min, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert_and_focus(elements[0].id, msg, !JCheck.result.min_checked_sum(name, min));
}

/**
 * If the number of checks exceeds the maximum allowed, display an alert and return true.
 * 최대 체크 갯수가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} name
 * @param {number} max
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.max_checked_count = (name, max, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert_and_focus(elements[0].id, msg, !JCheck.result.max_checked_count(name, max));
}

/**
 * If the number of checks is out of range, display an alert and return true.
 * 체크 건수 범위가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} name
 * @param {number} max
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.checked_count_range = (name, max, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert_and_focus(elements[0].id, msg, !JCheck.result.checked_count_range(name, max));
}

/**
 * If the sum of the checked values is out of range, display an alert and return true.
 * 체크 값의 합계 범위가 아니면 경고창을 띄우고 true를 반환한다.
 * 
 * @param {string} name
 * @param {number} min
 * @param {number} max
 * @param {string} msg
 * @returns {boolean}
 */
JCheck.alert.checked_sum_range = (name, min, max, msg) => {
    let elements = JCheck.elements(name);
    if(elements == null || elements.length == 0) return;
    return JCheck.alert_and_focus(elements[0].id, msg, !JCheck.result.checked_sum_range(name, min, max));
}

/**
 * Add an input event.
 * 인풋 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JCheck.input.add_event = (id, fn) => {
    let element = JCheck.element(id);
    if (element == null) return;
    element.addEventListener('input', fn);
}

/**
 * Add an event to replace the value.
 * 값을 치환하는 이벤트를 추가한다.
 * 
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
            JCheck.alert_and_focus(id, msg, test);
        }
    };
    JCheck.input.add_event(id, fn);
}

/**
 * Allow only numeric input.
 * 숫자인 값만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.number = (id, msg) => {
    let pattern = /\D/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow only English alphabet input.
 * 영어인 값만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.english = (id, msg) => {
    let pattern = /[^a-zA-Z]/g
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow only lowercase input.
 * 소문자인 값만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.lowercase = (id, msg) => {
    let pattern = /[^a-z]/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow only uppercase input.
 * 대문자인 값만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.uppercase = (id, msg) => {
    let pattern = /[^A-Z]/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow only input in the specified language.
 * 해당 언어인 값만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} lang
 * @param {string} msg
 */
JCheck.input.language = (id, lang, msg) => {

    let pattern = /[^a-zA-Z]/g;
    switch (lang.toLowerCase()) {
        case 'english':
        return JCheck.input.english(id, msg);
        case 'korean':
        pattern = /[^ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        break;
        case 'japanese':
        pattern = /[^\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/g;
        break;
        case 'chinese':
        pattern = /[^\u4E00-\u9FFF]/g;
        break;
    }
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow input of only English letters and numbers.
 * 영어, 숫자인 값만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.english_number = (id, msg) => {
    let pattern = /[^a-zA-Z0-9]/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow input of only numbers and '-'.
 * 숫자, '-'인 값만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.number_hyphen = (id, msg) => {
    let pattern = /[^0-9\-]/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Disallow the input of special characters.
 * 특수문자의 입력을 허용하지 않는다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.not_spchars = (id, msg) => {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?]+/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Disallow the input of numbers and special characters.
 * 숫자, 특수문자의 입력을 허용하지 않는다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.not_number_spchars = (id, msg) => {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?0-9]+/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Disallow the input of special characters and spaces.
 * 특수문자, 띄워쓰기의 입력을 허용하지 않는다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.not_spchars_space = (id, msg) => {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?\s]+/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Disallow the input of numbers, special characters, and spaces.
 * 숫자, 특수문자, 띄워쓰기의 입력을 허용하지 않는다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.not_number_spchars_space = (id, msg) => {
    let pattern = /[!@#$%^&*()_+\-=\[\]{};':'\\|,.<>\/?\s0-9]+/g;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Limit the maximum value.
 * 최대 값을 제한한다.
 * 
 * @param {string} id
 * @param {number} max
 * @param {string} msg
 */
JCheck.input.max_value = (id, max, msg) => {
    let fn = (e) => {
        let element = JCheck.element(id);
        if (element == null) return;
        let test = JCheck.result.max_value(id, max);
        if (!test) {
            if (JCheck.result.number(id)) {
                element.value = max;
            } else {
                element.value = 0;
            }
            if (msg != null) {
                JCheck.alert_and_focus(id, msg, !test);
            }
        } else {
            element.value = element.value.replace(/\b0+(\d+)\b/g, '$1');
        }
    };
    JCheck.input.add_event(id, fn);
}

/**
 * Limit the maximum length.
 * 최대 길이를 제한한다.
 * 
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
                JCheck.alert_and_focus(id, msg, !test);
            }
        }
    };
    JCheck.input.add_event(id, fn);
}
JCheck.input.id = (id, msg) => {
    let pattern = JCheck.id_input_pattern;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Perform real-time password level checks during input.
 * 입력시 비밀번호 레벨 체크를 실시간으로 체크한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JCheck.input.password_level = (id, fn) => {
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
 * Allow input in email format only.
 * 이메일 형식만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.email = (id, msg) => {
    let pattern = JCheck.email_input_pattern;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow input in URI format only.
 * URI 형식만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.uri = (id, msg) => {
    let pattern = JCheck.uri_input_pattern;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow input in phone number format only.
 * 전화번호 형식만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.phone_number = (id, msg) => {
    let pattern = JCheck.phone_number_input_pattern;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow input in postal code format only.
 * 우편번호 형식만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} msg
 */
JCheck.input.postal_code = (id, msg) => {
    let pattern = JCheck.postal_code_input_pattern;
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Allow input with the specified pattern only.
 * 해당 패턴만 입력을 허용한다.
 * 
 * @param {string} id
 * @param {string} pattern
 * @param {string} msg
 */
JCheck.input.test = (id, pattern, msg) => {
    JCheck.input.add_replace_event(id, pattern, '', msg);
}

/**
 * Add an event that displays an alert when the focus-out event occurs.
 * 포커스아웃 이벤트가 발생할 때 경고창을 띄우는 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 * @param {function} fn
 */
JCheck.focusout.add_event_alert_and_focus = (id, del, msg, fn) => {
    let element = JCheck.element(id);
    if (element == null) return;
    element.addEventListener('focusout', () => {
            if (JCheck.result.empty(id)) return;
            let test = fn(id);
            if (!test) {
                element.focus();
                setTimeout(function() {
                    if (document.activeElement !== element) {
                        JCheck.alert_and_focus(id, msg, !test);
                    }
                    if (del) element.value = null;
                }, 0);
            }
        }
    );
}

/**
 * Check the ID format when the focus-out event occurs.
 * 포커스아웃 될 때 아이디 형식 확인한다.
 * 
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.id = (id, del, msg) => {
    JCheck.focusout.add_event_alert_and_focus(id, del, msg, JCheck.result.id);
}

/**
 * Check the password format when the focus-out event occurs.
 * 포커스아웃 될 때 비밀번호 형식 확인한다.
 * 
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.password = (id, del, msg) => {
    JCheck.focusout.add_event_alert_and_focus(id, del, msg, JCheck.result.password);
}

/**
 * Check the email format when the focus-out event occurs.
 * 포커스아웃 될 때 이메일 형식 확인한다.
 * 
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.email = (id, del, msg) => {
    JCheck.focusout.add_event_alert_and_focus(id, del, msg, JCheck.result.email);
}

/**
 * Check the URI format when the focus-out event occurs.
 * 포커스아웃 될 때 URI형식 확인한다.
 * 
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.uri = (id, del, msg) => {
    JCheck.focusout.add_event_alert_and_focus(id, del, msg, JCheck.result.uri);
}

/**
 * Check the phone number format when the focus-out event occurs.
 * 포커스아웃 될 때 전화번호 형식 확인한다.
 * 
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.phone_number = (id, del, msg) => {
    JCheck.focusout.add_event_alert_and_focus(id, del, msg, JCheck.result.phone_number);
}

/**
 * Check the postal code format when the focus-out event occurs.
 * 포커스아웃 될 때 우편번호 형식 확인한다.
 * 
 * @param {string} id
 * @param {boolean} del
 * @param {string} msg
 */
JCheck.focusout.postal_code = (id, del, msg) => {
    JCheck.focusout.add_event_alert_and_focus(id, del, msg, JCheck.result.postal_code);
}

/**
 * Add events that occur when the value is changed.
 * 값이 변경 될 때 발생하는 이벤트들을 추가한다.
 * 
 * @param {string} name
 * @param {string} msg
 */
JCheck.change.add_events = (name, fn) => {
    let elements = JCheck.elements(name);
    if (elements.length === 0) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('change', fn);
    }
}

/**
 * Check the minimum number of checks when the value changes.
 * 값이 변경 될 때 최소 체크 갯수를 확인한다.
 * 
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
                JCheck.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * Check the minimum sum of checked values when the value changes.
 * 값이 변경 될 때 최소 체크 값 합계를 확인한다.
 * 
 * @param {string} name
 * @param {number} min
 */
JCheck.change.min_checked_sum = (name, min) => {
    let fn = (e) => {
        let test = JCheck.result.min_checked_sum(name, min);
        if (!test) {
            e.target.checked = false;
            if (msg != null) {
                JCheck.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * Check the maximum number of checks when the value changes.
 * 값이 변경 될 때 최대 체크 갯수를 확인한다.
 * 
 * @param {string} name
 * @param {number} min
 */
JCheck.change.max_checked_count = (name, min) => {
    let fn = (e) => {
        let test = JCheck.result.max_checked_count(name, min);
        if (!test) {
            e.target.checked = false;
            if (msg != null) {
                JCheck.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * Check the minimum sum of checked values when the value changes.
 * 값이 변경 될 때 최소 체크 값 합계를 확인한다.
 * 
 * @param {string} name
 * @param {number} min
 */
JCheck.change.max_checked_sum = (name, min) => {
    let fn = (e) => {
        let test = JCheck.result.max_checked_sum(name, min);
        if (!test) {
            e.target.checked = false;
            if (msg != null) {
                JCheck.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * Check the range of check counts when the value changes.
 * 값이 변경 될 때 체크 건수 범위를 확인한다.
 * 
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
                JCheck.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}

/**
 * Check the range of the sum of checked values when the value changes.
 * 값이 변경 될 때 체크 값의 합계 범위를 확인한다.
 * 
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
                JCheck.alert_and_focus(e.target.id, msg, !test);
            }
        }
    };
    JCheck.change.add_events(name, fn);
}
