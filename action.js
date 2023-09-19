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
    alert_fn: (msg) => null,
    go: (url) => {},
    back: () => {},
    teleport: (url) => {},
};

/**
 * @param {string} url
 */
JAction.element = (id) => {
    return document.getElementById(id);
}

/**
 * @param {string} msg
 */
JAction.alert = (msg) => {
    if (JCheck.alert_fn != null && JCheck.alert_fn instanceof Function) {
        JCheck.alert_fn(msg);
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
