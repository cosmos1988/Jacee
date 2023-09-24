/**
 * @name Jooice Script Library
 * @version 0.0.1
 * @author cosmos1988 <https://github.com/cosmos1988/jooice/>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JAction = {

    /** 
     * 공통 경고창을 띄우는 함수 설정: JAction.alert_fn = (msg) => { }
	 * @param {string} msg
	 */
    alert_fn: null,
    
    go: (url) => {},
    back: () => {},
    teleport: (url) => {},
    sleep: (ms) => {},
    submit: (form, url, method, content_type) => {},
    submit_form: (url, form_id) => {},
    submit_file_form: (url, form_id) => {},
    fetch_opt: (method, content_type, body) => {},
    fetch: (url, opt, fn, _async) => {},
    fetch_json: (url, obj, fn, _async) => {},
    fetch_form: (url, form_id, fn, _async) => {},
    fetch_file_form: (url, form_id, fn, _async) => {},
};

/**
 * @param {string} url
 */
JAction.element = (id) => {
    let element = document.getElementById(id);
    if (element == null) {
        console.log("Element (id: " + id + ") is null");
    }
    return element;
}

/**
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
 * @param {string} url
 */
JAction.go = (url) => {window.location.assign(url)};

/**
 */
JAction.back = () => {window.history.back()};

/**
 * @param {string} url
 */
JAction.teleport = (url) => {window.location.replace(url)};

/**
 * @param {number} ms
 */
JAction.sleep =(ms) => {
    var start = new Date().getTime();
    while (new Date().getTime() < start + ms);
};

/**
 * @param {object} form
 * @param {string} url
 * @param {string} method
 * @param {string} content_type
 */
JAction.submit = (form, url, method, content_type) => {
    form.action = url;
    form.method = method;
    if (content_type != null) {
        form.enctype = content_type;
    }
    form.submit();
}

/**
 * @param {string} url
 * @param {string} form_id
 */
JAction.submit_form = (url, form_id) => {
    const form = JAction.element(form_id);
    const opt = JAction.submit_opt();
    JAction.submit(form, url, 'POST', null);
}

/**
 * @param {string} url
 * @param {string} form_id
 */
JAction.submit_file_form = (url, form_id) => {
    const form = JAction.element(form_id);
    const opt = JAction.submit_opt();
    JAction.submit(form, url, 'POST', 'multipart/form-data');
}

/**
 * @param {object} error
 */
JAction.fetch_error = (error) => {
    if (JAction.error_fn != null && JAction.error_fn instanceof Function) {
        JAction.error_fn(error);
    } else {
        console.log(error);
    }
}

/**
 * @param {string} method
 * @param {string} content_type
 * @param {object} body
 */
JAction.fetch_opt = (method, content_type, body) => {
    return {
        method,
        headers: {
            'Content-Type': content_type,
        },
        body,
    }
}

/**
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
            JAction.error(error);
        });
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open(opt.method, url, async);
        xhr.setRequestHeader('Content-Type', opt.headers['Content-Type']);
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
					JAction.error(error);
				}
            }
        };
        xhr.send(opt.body);
    }
}

/**
 * @param {string} url
 * @param {object} obj
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch_json = (url, obj, fn, async) => {
    const opt = JAction.fetch_opt('POST', 'application/json', JSON.stringify(obj));
    JAction.fetch(url, opt, fn, async);
}

/**
 * @param {string} url
 * @param {string} form_id
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch_form = (url, form_id, fn, async) => {
    const form = JAction.element(form_id);
    const form_data = new FormData(form);
    const url_encoded_data = new URLSearchParams(form_data);
    const opt = JAction.fetch_opt('POST', 'application/x-www-form-urlencoded', url_encoded_data);
    JAction.fetch(url, opt, fn, async);
}

/**
 * @param {string} url
 * @param {string} form_id
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch_file_form = (url, form_id, fn, async) => {
    const form = JAction.element(form_id);
    const form_data = new FormData(form);
    const opt = JAction.fetch_opt('POST', 'multipart/form-data', form_data);
    JAction.fetch(url, opt, fn, async);
}
