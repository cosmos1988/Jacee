/**
 * @name Jooice Script Library
 * @version 0.0.1
 * @author cosmos1988 <https://github.com/cosmos1988/jooice/>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JAction = {

    /** 공통 경고창을 띄우는 함수 설정: JAction.alert_fn = (msg) => { }
	 * @param {string} msg
	 */
    alert_fn: null,
    
    go: (url) => {},
    back: () => {},
    teleport: (url) => {},
    sleep: (ms) => {},
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
