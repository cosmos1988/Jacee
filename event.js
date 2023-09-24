/**
 * @name Jooice Script Library
 * @version 0.0.1
 * @author cosmos1988 <https://github.com/cosmos1988/jooice/>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JEvent = {
    load: (fn) => {},
    keyup: (id, fn) => {},
    keypress: (id, fn) => {},
    keydown: (id, fn) => {},
    click: (id, fn) => {},
    dblclick: (id, fn) => {},
    drag: (id, fn) => {},
    dragstart: (id, fn) => {},
    dragenter: (id, fn) => {},
    dragleave: (id, fn) => {},
    dragover: (id, fn) => {},
    touchstart: (id, fn) => {},
    touchmove: (id, fn) => {},
    touchend: (id, fn) => {},
    touchcancel: (id, fn) => {},
    change: (id, fn) => {},
    input: (id, fn) => {},
    focus: (id, fn) => {},
    blur: (id, fn) => {},
    focusin: (id, fn) => {},
    focusout: (id, fn) => {},
    click_to_back: (id) => {},
    click_to_go: (id, url) => {},
};

/**
 * @param {function} fn
 */
JEvent.load = (fn) => {
    try {
        window.addEventListener("load", fn);
    } catch (e) {
        console.error(e)
   }
}

/**
 * @param {string} id
 * @param {string} type
 * @param {function} fn
 */
JEvent.add_event = (id, type, fn) => {
    try {
        if (id == "document") {
            document.addEventListener(type, fn);
        } else {
            let element = document.getElementById(id);
            if (element == null) {
                console.error("Element (id: " + id + ") is null");
                return;
            }
            element.addEventListener(type, fn);
        }
    } catch (e) {
        console.error(e)
    }
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.keyup = (id, fn) => {
    JEvent.add_event(id, "keyup", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.keypress = (id, fn) => {
    JEvent.add_event(id, "keypress", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.keydown = (id, fn) => {
    JEvent.add_event(id, "keydown", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.click = (id, fn) => {
    JEvent.add_event(id, "click", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.dblclick = (id, fn) => {
    JEvent.add_event(id, "dblclick", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.drag = (id, fn) => {
    JEvent.add_event(id, "drag", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.dragstart = (id, fn) => {
    JEvent.add_event(id, "dragstart", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.dragenter = (id, fn) => {
    JEvent.add_event(id, "dragenter", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.dragleave = (id, fn) => {
    JEvent.add_event(id, "dragleave", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.dragover = (id, fn) => {
    JEvent.add_event(id, "dragover", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.drop = (id, fn) => {
    JEvent.add_event(id, "drop", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.touchstart = (id, fn) => {
    JEvent.add_event(id, "touchstart", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.touchmove = (id, fn) => {
    JEvent.add_event(id, "touchmove", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.touchend = (id, fn) => {
    JEvent.add_event(id, "touchend", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.touchcancel = (id, fn) => {
    JEvent.add_event(id, "touchcancel", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.change = (id, fn) => {
    JEvent.add_event(id, "change", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.input = (id, fn) => {
    JEvent.add_event(id, "input", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.focus = (id, fn) => {
    JEvent.add_event(id, "focus", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.blur = (id, fn) => {
    JEvent.add_event(id, "dblclick", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.focusin = (id, fn) => {
    JEvent.add_event(id, "focusin", fn);
}

/**
 * @param {string} id
 * @param {function} fn
 */
JEvent.focusout = (id, fn) => {
    JEvent.add_event(id, "focusout", fn);
}

/**
 * @param {string} id
 */
JEvent.click_to_back = (id) => {
    JEvent.click(id, () => {window.history.back()});
}

/**
 * @param {string} id
 * @param {string} url
 */
JEvent.click_to_go = (id, url) => {
    JEvent.click(id, () => {window.location.assign(url)});
}
