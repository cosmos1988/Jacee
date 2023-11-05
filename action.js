/**
 * @name Jacee
 * @version 2023.v1
 * @author cosmos1988 <https://github.com/cosmos1988/Jacee>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JAction = {

    reload: (force_get) => {},

    alert: (msg) => {},
    confirm: (msg) => {},
    go: (url) => {},
    back: () => {},
    teleport: (url) => {},

    sleep: (ms) => {},
    click: (btn_id) => {},
    focus: (id) => {},
    blur: (id) => {},

    stopwatch_start: (_fn) => {},
    stopwatch_stop: (start_time, _fn) => {},

    scroll_into_view: (id) => {},
    scroll_into_view_smooth: (id) => {},
    scroll_to_top:(speed) => {},
    scroll_to_bottom:(speed) => {},

    create_form: (_id) => {},
    get_form: (form_info) => {},
    reset_form: (form_info) => {},
    form_append: (form_info, name, value, _type) => {},
    form_set: (form_info, name, value, _type) => {},
    form_remove: (form_info, name) => {},
    form_to_object: (form_info) => {},

    submit: (url, form_info, _method, _content_type) => {},
    submit_by_file_form: (url, form_info) => {},
    fetch_option: (method, body, _content_type) => {},
    fetch: (url, fn, _opt, _async) => {},
    fetch_by_json: (url, obj, fn, _async) => {},
    fetch_by_form: (url, form_info, fn, _async) => {},

    upload: (url, form_info, fn, _async) => {},
    download: (url, fn, _opt) => {},
    download_by_json: (url, fn, _opt) => {},

    /** 
     * Alert output function
     * 경고창 출력 함수
     * Example: JAction.alert_fn = (msg) => { }
     * 
     * @param {string} msg
     */
    alert_fn: null,

    /** 
     * Confirm output function
     * 확인창 출력 함수
     * Example: JAction.confirm_fn = (msg) => { }
     * 
     * @param {string} msg
     */
    confirm_fn: null,

    /** 
     * Fetch error handling function
     * Fetch 에러 처리 함수
     * Example: JAction.fetch_error_fn = (url, error) =>  { }
     * 
     * @param {object} error
     */
    fetch_error_fn: null,
};

/**
 * Reload the page.
 * 페이지를 다시 불러온다.
 * 
 * @param {string} id
 * @returns {HTMLElement}
 */
JAction.reload = (force_get) => {
    if (force_get == null) {
        window.location.reload();
    } else {
        window.location.reload(force_get);
    }
}

/**
 * Gets an element.
 * 엘리먼트를 가져온다.
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
 * Displays an alert.
 * 경고창을 띄운다.
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
 * Displays an confirm.
 * 확인창을 띄운다.
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
 * Move to another page.
 * 다른 페이지로 이동한다.
 * 
 * @param {string} url
 */
JAction.go = (url) => {window.location.assign(url)};

/**
 * Return to the previous page.
 * 이전 페이지로 돌아간다.
 */
JAction.back = () => {window.history.back()};

/**
 * Move to another page without recording the previous page.
 * 이전 페이지 기록 없이 다른 페이지로 이동한다.
 * 
 * @param {string} url
 */
JAction.teleport = (url) => {window.location.replace(url)};

/**
 * Temporarily stop movement.
 * 동작을 일시적으로 멈춘다.
 * 
 * @param {number} ms
 */
JAction.sleep = (ms) => {
    var start = new Date().getTime();
    while (new Date().getTime() < start + ms);
};

/**
 * Click the button.
 * 버튼을 클릭한다.
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
 * Take focus.
 * 포커스를 잡는다.
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
 * Release focus.
 * 포커스를 푼다.
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
 * Start the stopwatch.
 * 스톱워치 시작을 한다.
 * 
 * @param {function} fn - (start_time) => {} or bool
 * @returns {number}
 */
JAction.stopwatch_start = (fn) => {
    let current_date = new Date();
    let start_time =  current_date.getTime();
    if (fn != null && fn instanceof Function) {
        fn(start_time);
    } else if (fn === true) {
        console.log(`Stopwatch start: ${current_date}`);
    }
    return start_time;
};

/**
 * Stop the stopwatch.
 * 스톱워치를 정지한다.
 * 
 * @param {number} start_time
 * @param {function} fn - (elapsed_time) => {} or bool
 * @returns {number}
 */
JAction.stopwatch_stop = (start_time, fn) => {
    let current_date = new Date();
    let end_time =  current_date.getTime();
    let elapsed_time = end_time - start_time;
    if (fn != null && fn instanceof Function) {
        fn(elapsed_time);
    } else if (fn === true) {
        console.log(`Stopwatch stop: ${current_date}`);
        const millisecondsInASecond = 1000;
        const secondsInAMinute = 60;
        const minutesInAnHour = 60;
        const milliseconds = elapsed_time % millisecondsInASecond;
        const totalSeconds = Math.floor(elapsed_time / millisecondsInASecond);
        const seconds = totalSeconds % secondsInAMinute;
        const totalMinutes = Math.floor(totalSeconds / secondsInAMinute);
        const minutes = totalMinutes % minutesInAnHour;
        const hours = Math.floor(totalMinutes / minutesInAnHour);
        console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}, Milliseconds: ${milliseconds}`);
    }
    return elapsed_time;
};

/**
 * Move the scroll to the corresponding element position.
 * 스크롤을 해당 엘리먼트 위치로 움직인다
 * 
 * @param {string} id
 */
JAction.scroll_into_view = (id) => {
    let element = JAction.element(id);
    if (element == null) return;
    element.scrollIntoView(); 
},

/**
 * Smoothly moves the scroll to the corresponding element position.
 * 스크롤을 해당 엘리먼트 위치로 부드럽게 움직인다.
 * 
 * @param {string} id
 */
JAction.scroll_into_view_smooth = (id) => {
    let element = JAction.element(id);
    if (element == null) return;
    element.scrollIntoView({ behavior: 'smooth' }); 
},

/**
 * Scroll up to the top.
 * 스크롤을 가장 위로 올린다.
 * 
 * @param {number} speed
 */
JAction.scroll_to_top = (speed = 1) => {
    if (speed === 0) speed = 1;
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(() => JAction.scroll_to_top(speed));
        window.scrollTo(window.scrollX, c - c / speed);
    }
},

/**
 * Scroll down to the bottom.
 * 스크롤을 가장 아래로 내린다.
 * 
 * @param {number} speed
 */
JAction.scroll_to_bottom = (speed = 1) => {
    if (speed === 0) speed = 1;
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    const document_height = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    const target = document_height - window.innerHeight;
    if (c < target) {
        window.requestAnimationFrame(JAction.scroll_to_bottom = (speed));
        window.scrollTo(window.scrollX, c + (target - c) / speed);
    }
},

/**
 * Create a new form.
 * 새로운 폼을 만든다.
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
 * Get the form.
 * 폼을 가져온다.
 * 
 * @param {HTMLFormElement|string} form_info
 * @returns {HTMLFormElement}
 */
JAction.get_form = (form_info) => {
    if (form_info instanceof HTMLFormElement) {
        return form_info;
    } else if (typeof form_info === 'string') {
        return JAction.element(form_info);
    } else {
        console.error(`Argument(${form_info}) is not a form info`);
    }
}

/**
 * Reset the form.
 * 폼을 리셋한다.
 * 
 * @param {HTMLFormElement|string} form_info
 * @returns {HTMLFormElement}
 */
JAction.reset_form = (form_info) => {
    let form = JAction.get_form(form_info);
    if (form == null) return;
    form.reset();
}

/**
 * Add an input element to the form.
 * 폼에 입력 엘리먼트를 추가한다.
 * 
 * @param {HTMLFormElement|string} form_info
 * @param {string} name
 * @param {string} value
 * @param {string} type
 * @returns {HTMLInputElement}
 */
JAction.form_append = (form_info, name, value, type = 'hidden') => {
    let form = JAction.get_form(form_info);
    if (form == null) return;
    let element = document.createElement('input');
    element.setAttribute('type', type);
    element.setAttribute('name', name);
    element.setAttribute('value', value);
    form.appendChild(element);
    return element;
}

/**
 * Set a value to an element of the form.
 * 폼의 엘리먼트에 값을 설정한다.
 * 
 * @param {HTMLFormElement|string} form_info
 * @param {string} name
 * @param {string} value
 * @param {string} type
 */
JAction.form_set = (form_info, name, value, type = 'hidden') => {
    let form = JAction.get_form(form_info);
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
 * Removes an element from the form.
 * 폼의 엘리먼트를 제거한다.
 * 
 * @param {HTMLFormElement|string} form_info
 * @param {string} name
 */
JAction.form_remove = (form_info, name) => {
    let form = JAction.get_form(form_info);
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
 * Convert the form to an object.
 * 폼을 객체로 변환한다.
 * 
 * @param {HTMLFormElement|string} form_info
 * @returns {Object}
 */
JAction.form_to_object = (form_info) => {
    let form = JAction.get_form(form_info);
    if (form == null) return JSON.stringify({});

    const disabled_inputs = form.querySelectorAll('[disabled]');
    disabled_inputs.forEach(input => {
        input.removeAttribute('disabled');
    });

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

    disabled_inputs.forEach(input => {
        input.setAttribute('disabled', '');
    });
    return obj;
}

/**
 * Submit the form.
 * 폼을 제출한다.
 * 
 * @param {string} url
 * @param {HTMLFormElement|string} form_info
 * @param {string} method
 * @param {string} content_type
 */
JAction.submit = (url, form_info, method = 'POST', content_type) => {
    let form = JAction.get_form(form_info);
    if (form == null) return;
    form.action = url;
    form.method = method;
    if (content_type != null) {
        form.enctype = content_type;
    }
    form.submit();
}

/**
 * Submit the file form.
 * 파일폼을 제출한다.
 * 
 * @param {string} url
 * @param {HTMLFormElement|string} form
 */
JAction.submit_by_file_form = (url, form_info) => {
    let form = JAction.get_form(form_info);
    if (form == null) return;
    JAction.submit(url, form, 'POST', 'multipart/form-data');
}

/**
 * Handles errors that occur in the fetch API.
 * fetch API에서 발생한 오류를 처리한다.
 * 
 * @param {object} error
 */
JAction.fetch_error = (url, error) => {
    if (JAction.fetch_error_fn != null && JAction.fetch_error_fn instanceof Function) {
        JAction.fetch_error_fn(url, error);
    } else {
        console.error(`Fetch error (url: ${url})`);
    }
}

/**
 * Create fetch API options.
 * fetch API 옵션을 만든다.
 * 
 * @param {string} method
 * @param {string} content_type
 * @param {object} body
 * @returns {Object}
 */
JAction.fetch_option = (method, body, content_type) => {
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
 * Run the fetch API.
 * fetch API를 실행한다.
 * 
 * @param {string} url
 * @param {object} opt
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch = (url, fn, opt = {method: "GET"}, async = true) => {
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
 * Execute the fetch API with JSON.
 * JSON으로 fetch API를 실행한다.
 * Method: POST
 * 
 * @param {string} url
 * @param {object} obj
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch_by_json = (url, obj, fn, async) => {
    if (obj == null) obj = {};
    const opt = JAction.fetch_option('POST', JSON.stringify(obj), 'application/json');
    JAction.fetch(url, fn, opt, async);
}

/**
 * Execute the fetch API using the form.
 * 폼으로 fetch API를 실행한다.
 * Method: POST
 * 
 * @param {string} url
 * @param {HTMLFormElement|string} form_info
 * @param {function} fn
 * @param {boolean} async
 */
JAction.fetch_by_form = (url, form_info, fn, async) => {
    let form = JAction.get_form(form_info);
    if (form == null) return;
    const form_data = new FormData(form);
    const url_encoded_data = new URLSearchParams(form_data);
    const opt = JAction.fetch_option('POST', url_encoded_data, 'application/x-www-form-urlencoded');
    JAction.fetch(url, fn, opt, async);
}

/**
 * Execute the upload using the file form.
 * 파일폼으로 업로드를 실행한다.
 * Method: POST
 * 
 * @param {string} url
 * @param {HTMLFormElement|string} form_info
 * @param {function} fn
 * @param {boolean} async
 */
JAction.upload = (url, form_info, fn, async) => {
    let form = JAction.get_form(form_info);
    if (form == null) return;
    form.enctype = 'multipart/form-data';
    const form_data = new FormData(form);
    // 크롬에서는 boundary가 포함된 Content-Type를 자동 생성해준다.
    const opt = JAction.fetch_option('POST', form_data);
    JAction.fetch(url, fn, opt, async);
}

/**
 * Execute the download.
 * 다운로드를 실행한다.
 * Method: GET
 * 
 * @param {string} url
 * @param {object} obj
 * @param {function} fn
 * @param {boolean} async
 */
JAction.download = (url, opt = {method: "GET"}) => {
    fetch(url, opt)
    .then(response => {
        if (!response.ok) {
            throw new Error(response);
        }
        let filename = '';
        const disposition = response.headers.get('Content-Disposition');
        if (disposition && disposition.indexOf('attachment') !== -1) {
            const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            const matches = filenameRegex.exec(disposition);
            if (matches != null && matches[1]) {
                filename = matches[1].replace(/['"]/g, '');
            }
            const filenameUTF8Regex = /filename\*=UTF-8''(.+)$/;
            const matchesUTF8 = filenameUTF8Regex.exec(disposition);
            if (matchesUTF8 != null && matchesUTF8[1]) {
                filename = decodeURIComponent(matchesUTF8[1]);
            }
        }
        return response.blob().then(blob => ({ blob, filename }));
    })
    .then(({ blob, filename }) => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = blobUrl;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
    })
    .catch(error => {
        JAction.fetch_error(url, error);
    });
}

/**
 * Execute a download in JSON format.
 * JSON으로 다운로드를 실행한다.
 * Method: GET
 * 
 * @param {string} url
 * @param {object} obj
 * @param {function} fn
 * @param {boolean} async
 */
JAction.download_by_json = (url, obj) => {
    let urlParams = new URLSearchParams(obj).toString();
    const opt = JAction.fetch_option('GET');
    if (urlParams.trim().length > 0) {
        urlParams = "?" + urlParams;
    }
    JAction.download(url + urlParams, opt);
}
