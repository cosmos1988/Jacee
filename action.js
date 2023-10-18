/**
 * @name Jacee
 * @version 0.0.1
 * @author cosmos1988 <https://github.com/cosmos1988/Jacee>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JAction = {

    /** 
     * 공통 경고창을 띄우는 함수 설정: JAction.alert_fn = (msg) => { }
	 * @param {string} msg
	 */
    alert_fn: null,

    /** 
     * 공통 확인창을 띄우는 함수 설정: JAction.confirm_fn = (msg) => { }
	 * @param {string} msg
	 */
    confirm_fn: null,

    /** 공통 fetch 에러를 처리하는 함수 설정: JAction.fetch_error_fn = (url, error) =>  { }
	 * @param {object} error
	 */
    fetch_error_fn: null,

    alert: (msg) => {},
    confirm: (msg) => {},
    go: (url) => {},
    back: () => {},
    teleport: (url) => {},
    sleep: (ms) => {},
    click: (btn_id) => {},
    focus: (id) => {},
    blur: (id) => {},
    create_form: (_id) => {},
    get_form: (form) => {},
    form_append: (form, name, value, _type) => {},
    form_set: (form, name, value, _type) => {},
    form_remove: (form, name) => {},
    form_to_object: (form) => {},
    submit: (url, form, _method, _content_type) => {},
    submit_by_file_form: (url, form) => {},
    fetch_option: (method, content_type, body) => {},
    fetch: (url, opt, fn, _async) => {},
    fetch_by_json: (url, obj, fn, _async) => {},
    fetch_by_form: (url, form, fn, _async) => {},
    fetch_by_file_form: (url, form, fn, _async) => {},
};

/**
 * 
 * 
 * @param {string} id
 * @returns {HTMLElement}
 */
JAction.element = (id) => {
    let element = document.getElementById(id);
    if (element == null) {
        console.error(`Element (id: ${id}) is null`);
    }
    return element;
}

/**
 * 
 * 
 * @param {string} msg
 */
JAction.alert = (msg) => {
    if (JAction.alert_fn != null && JAction.alert_fn instanceof Function) {
        JAction.alert_fn(msg);
    } else {
        alert(msg);
    }
};

/**
 * 
 * 
 * @param {string} msg
 * @returns {boolean}
 */
JAction.confirm = (msg) => {
    if (JAction.alert_fn != null && JAction.alert_fn instanceof Function) {
        return JAction.confirm_fn(msg);
    } else {
        return confirm(msg);
    }
};

/**
 * 
 * 
 * @param {string} url
 */
JAction.go = (url) => {window.location.assign(url)};

/**
 * 
 */
JAction.back = () => {window.history.back()};

/**
 * 
 * 
 * @param {string} url
 */
JAction.teleport = (url) => {window.location.replace(url)};

/**
 * 
 * 
 * @param {number} ms
 */
JAction.sleep =(ms) => {
    var start = new Date().getTime();
    while (new Date().getTime() < start + ms);
};

/**
 * 
 * 
 * @param {string} btn_id
 */
JAction.click =(btn_id) => {
    let element = JAction.element(btn_id);
    if (element == null) return;
    if (element.click == null) return;
    element.click();
};

/**
 * 
 * 
 * @param {string} id
 */
JAction.focus = (id) => {
    let element = JAction.element(id);
    if (element == null) return;
    if (element.focus == null) return;
    element.focus();
}

/**
 * 
 * 
 * @param {string} id
 */
JAction.blur = (id) => {
    let element = JAction.element(id);
    if (element == null) return;
    if (element.blur == null) return;
    element.blur();
}

/**
 * 
 * 
 * @param {string} id
 * @returns {HTMLFormElement}
 */
JAction.create_form = (id) => {
    let form = document.createElement('form');
    if (id != null) {
        form.setAttribute('id', id);
    }
    document.body.appendChild(form);
    return form;
}

/**
 * 
 * 
 * @param {HTMLFormElement|string} form
 * @returns {HTMLFormElement}
 */
JAction.get_form = (form) => {
    if (form instanceof HTMLFormElement) {
        return form;
    } else if (typeof form === 'string') {
        return JAction.element(form);
    } else {
        console.error(`Parameter (id: ${form}) is not a form`);
    }
}

/**
 * 
 * 
 * @param {HTMLFormElement|string} form
 * @param {string} name
 * @param {string} value
 * @param {string} type
 * @returns {HTMLInputElement}
 */
JAction.form_append = (form, name, value, type = 'hidden') => {
    form = JAction.get_form(form);
    if (form == null) return;
    let element = document.createElement('input');
    element.setAttribute('type', type);
    element.setAttribute('name', name);
    element.setAttribute('value', value);
    form.appendChild(element);
    return element;
}

/**
 * 
 * 
 * @param {HTMLFormElement|string} form
 * @param {string} name
 * @param {string} value
 * @param {string} type
 */
JAction.form_set = (form, name, value, type = 'hidden') => {
    form = JAction.get_form(form);
    if (form == null) return;
    let element = form.elements[name];
    if (element != null) {
        if (element.length != null) {
            for (let i = 0; i < element.length; i++) {
                element[i].value = value;
            }
        } else {
            element.value = value;
        }
    } else {
        JAction.form_append(form, name, value, type);
    }
}

/**
 * 
 * 
 * @param {HTMLFormElement|string} form
 * @param {string} name
 */
JAction.form_remove = (form, name) => {
    form = JAction.get_form(form);
    if (form == null) return;
    let element = form.elements[name];
    if (element != null) {
        if (element.length != null) {
            for (let i = 0; i < element.length; i++) {
                element[i].remove();
            }
        } else {
            element.remove();
        }
    }
}

/**
 * 
 * 
 * @param {HTMLFormElement|string} form
 * @returns {Object}
 */
JAction.form_to_object = (form) => {
    form = JAction.get_form(form);
    if (form == null) return JSON.stringify({});

    const formData = new FormData(form);
    let obj = {};
    for (const [key, value] of formData.entries()) {
        if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        } else {
            obj[key] = value;
        }
    }
    return obj;
}

/**
 * 
 * 
 * @param {string} url
 * @param {HTMLFormElement|string} form
 * @param {string} method
 * @param {string} content_type
 */
JAction.submit = (url, form, method = 'POST', content_type) => {
    form = JAction.get_form(form);
    if (form == null) return;
    form.action = url;
    form.method = method;
    if (content_type != null) {
        form.enctype = content_type;
    }
    form.submit();
}

/**
 * 
 * 
 * @param {string} url
 * @param {HTMLFormElement|string} form
 */
JAction.submit_by_file_form = (url, form) => {
    form = JAction.get_form(form);
    if (form == null) return;
    JAction.submit(url, form, 'POST', 'multipart/form-data');
}

/**
 * 
 * 
 * @param {object} error
 */
JAction.fetch_error = (url, error) => {
    if (JAction.fetch_error_fn != null && JAction.fetch_error_fn instanceof Function) {
        JAction.fetch_error_fn(url, error);
    } else {
        console.error(`Fetch (url: ${url}) error`);
    }
}

/**
 * 
 * 
 * @param {string} method
 * @param {string} content_type
 * @param {object} body
 * @returns {Object}
 */
JAction.fetch_option = (method, content_type, body) => {
    if (content_type == null) {
        return {
            method,
            body,
        }
    } else {
        return {
            method,
            headers: {
                'Content-Type': content_type,
            },
            body,
        }
    }
}

/**
 * 
 * 
 * @param {string} url
 * @param {object} opt
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch = (url, opt, fn, async = true) => {
    if (async) {
        fetch(url, opt)
        .then(response => {
	        if (!response.ok) {
	            throw new Error(response);
	        }
	        return response.text();
	    })
        .then(text => JSON.parse(text))
        .then(json => fn(json))
        .catch(error => {
            JAction.fetch_error(url, error);
        });
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open(opt.method, url, async);
        if (opt.headers != null) {
            xhr.setRequestHeader('Content-Type', opt.headers['Content-Type']);
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
				try{
	                if (xhr.status === 200) {
	                    let text = xhr.responseText;
	                    let json = JSON.parse(text);
	                    fn(json);
	                } else {
						throw new Error(xhr);
	                }
				} catch (error) {
					JAction.fetch_error(url, error);
				}
            }
        };
        xhr.send(opt.body);
    }
}

/**
 * 
 * 
 * @param {string} url
 * @param {object} obj
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch_by_json = (url, obj, fn, async) => {
    const opt = JAction.fetch_option('POST', 'application/json', JSON.stringify(obj));
    JAction.fetch(url, opt, fn, async);
}

/**
 * 
 * 
 * @param {string} url
 * @param {HTMLFormElement|string} form
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch_by_form = (url, form, fn, async) => {
    form = JAction.get_form(form);
    if (form == null) return;
    const form_data = new FormData(form);
    const url_encoded_data = new URLSearchParams(form_data);
    const opt = JAction.fetch_option('POST', 'application/x-www-form-urlencoded', url_encoded_data);
    JAction.fetch(url, opt, fn, async);
}

/**
 * 
 * 
 * @param {string} url
 * @param {HTMLFormElement|string} form
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch_by_file_form = (url, form, fn, async) => {
    form = JAction.get_form(form);
    if (form == null) return;
    form.enctype = 'multipart/form-data';
    const form_data = new FormData(form);
    // 크롬에서는 boundary가 포함된 Content-Type를 자동 생성해준다.
    const opt = JAction.fetch_option('POST', null, form_data);
    JAction.fetch(url, opt, fn, async);
}
