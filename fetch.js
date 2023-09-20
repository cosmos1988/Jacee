/**
 * @name Jooice Script Library
 * @version 0.0.1
 * @author cosmos1988 <https://github.com/cosmos1988/jooice/>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JFetch = {

    /** 공통 에러를 처리하는 함수 설정: JFetch.error_fn = (error) =>  { }
	 * @param {object} error
	 */
    error_fn: null,

    param: (target, data) => {},
    json: (url, obj, fn, _error_fn) => {},
    form: (url, form_id, fn, _error_fn) => {},
    file_form: (url, form_id, fn, _error_fn) => {},
};

/**
 * @param {object} error
 * @param {function} error_fn
 */
JFetch.error_process = (error, error_fn) => {
    if (error_fn != undefined && error_fn instanceof Function) {
        error_fn(error);
    } else {
        if (JFetch.error_fn != null && JFetch.error_fn instanceof Function) {
            JFetch.error_fn(error);
        } else {
            console.log(error);
        }
    }
};

/**
 * @param {string} target
 * @param {object} data
 */
JFetch.param = (target, data) => {
    return {
        "target": target,
        "data": data,
    }
}

/**
 * @param {string} url
 * @param {object} obj
 * @param {function} fn
 * @param {function} error_fn
 */
JFetch.json = (url, obj, fn, error_fn) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(json => fn(json))
    .catch(error => {
        JFetch.error_process(error, error_fn);
    });
}

/**
 * @param {string} url
 * @param {string} form_id
 * @param {function} fn
 * @param {function} error_fn
 */
JFetch.form = (url, form_id, fn, error_fn) => {
    const form = document.getElementById(form_id);
    if (form == null) {
        console.log("Element (form id: " + form_id + ") is null");
        return;
    }
    const form_data = new FormData(form);
    const url_encoded_data = new URLSearchParams(form_data);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: url_encoded_data,
    })
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(json => fn(json))
    .catch(error => {
        JFetch.error_process(error, error_fn);
    });
}

/**
 * @param {string} url
 * @param {string} form_id
 * @param {function} fn
 * @param {function} error_fn
 */
JFetch.file_form = (url, form_id, fn, error_fn) => {
    let form = document.getElementById(form_id);
    if (form == null) {
        console.log("Element (form id: " + form_id + ") is null");
        return;
    }
    let form_data = new FormData(form);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: form_data,
    })
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(json => fn(json))
    .catch(error => {
        JFetch.error_process(error, error_fn);
    });
}
