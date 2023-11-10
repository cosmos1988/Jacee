/**
 * @name Jacee
 * @version v2023.20231107
 * @author cosmos1988 <https://github.com/cosmos1988/Jacee>
 * @license MIT
 * @copyright Copyright © 2023 <cosmos1988>
 */
const JEvent = {

    prevent_default: (e) => {},
    
    load: (fn) => {},
    click_to_back: (id) => {},
    click_to_go: (id, url) => {},
    click_to_teleport: (id, url) => {},
    
    keyup: (id, fn) => {},
    keypress: (id, fn) => {},
    keydown: (id, fn) => {},
    click: (id, fn) => {},
    dblclick: (id, fn) => {},
    drag: (id, fn) => {},
    dragstart: (id, fn) => {},
    dragend: (id, fn) => {},
    dragenter: (id, fn) => {},
    dragleave: (id, fn) => {},
    dragover: (id, fn) => {},
    touchstart: (id, fn) => {},
    touchmove: (id, fn) => {},
    touchend: (id, fn) => {},
    touchcancel: (id, fn) => {},
    input: (id, fn) => {},
    change: (id, fn) => {},
    focus: (id, fn) => {},
    blur: (id, fn) => {},
    focusin: (id, fn) => {},
    focusout: (id, fn) => {},
    
    keyup_by_name: (name, fn) => {},
    keypress_by_name: (name, fn) => {},
    keydown_by_name: (name, fn) => {},
    click_by_name: (name, fn) => {},
    dblclick_by_name: (name, fn) => {},
    drag_by_name: (name, fn) => {},
    dragstart_by_name: (name, fn) => {},
    dragend_by_name: (name, fn) => {},
    dragenter_by_name: (name, fn) => {},
    dragleave_by_name: (name, fn) => {},
    dragover_by_name: (name, fn) => {},
    touchstart_by_name: (name, fn) => {},
    touchmove_by_name: (name, fn) => {},
    touchend_by_name: (name, fn) => {},
    touchcancel_by_name: (name, fn) => {},
    input_by_name: (name, fn) => {},
    change_by_name: (name, fn) => {},
    focus_by_name: (name, fn) => {},
    blur_by_name: (name, fn) => {},
    focusin_by_name: (name, fn) => {},
    focusout_by_name: (name, fn) => {},
    
    keyup_by_class: (class_name, fn) => {},
    keypress_by_class: (class_name, fn) => {},
    keydown_by_class: (class_name, fn) => {},
    click_by_class: (class_name, fn) => {},
    dblclick_by_class: (class_name, fn) => {},
    drag_by_class: (class_name, fn) => {},
    dragstart_by_class: (class_name, fn) => {},
    dragend_by_class: (class_name, fn) => {},
    dragenter_by_class: (class_name, fn) => {},
    dragleave_by_class: (class_name, fn) => {},
    dragover_by_class: (class_name, fn) => {},
    touchstart_by_class: (class_name, fn) => {},
    touchmove_by_class: (class_name, fn) => {},
    touchend_by_class: (class_name, fn) => {},
    touchcancel_by_class: (class_name, fn) => {},
    input_by_class: (class_name, fn) => {},
    change_by_class: (class_name, fn) => {},
    focus_by_class: (class_name, fn) => {},
    blur_by_class: (class_name, fn) => {},
    focusin_by_class: (class_name, fn) => {},
    focusout_by_class: (class_name, fn) => {},

    /**
     * Whether to display console errors
     * 콘솔 에러를 표시할지 여부
     */
    console_error_enabled: true,
};

/**
 * Prevent the default behavior of the event.
 * 이벤트의 기본동작을 취소한다.
 * 
 * @param {Event} e
 */
JEvent.prevent_default = (e) => {
    if (e == null) {
        if (JEvent.console_error_enabled) {
            console.error(`Event is null`);
        }
        return;
    }
    e.preventDefault();
}

/**
 * Get the element.
 * 엘리먼트를 가져온다.
 * 
 * @param {string} id
 * @returns {Element}
 */
JEvent.element = (id) => {
    let element = document.getElementById(id);
    if (element == null) {
        if (JEvent.console_error_enabled) {
            console.error(`Element (id: ${id}) is null`);
        }
    }
    return element;
}

/**
 * Get the elements.
 * 엘리먼트들을 가져온다.
 * 
 * @param {string} name
 * @returns {NodeList}
 */
JEvent.elements = (name) => {
    let elements = document.getElementsByName(name);
    if (elements.length === 0) {
        if (JEvent.console_error_enabled) {
            console.error(`Elements (name: ${name}) is a length of 0`);
        }
        return;
    }
    return elements;
}

/**
 * Add the event.
 * 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {string} type
 * @param {function} fn
 */
JEvent.add_event = (id, type, fn) => {
    let element = JEvent.element(id);
    if (element == null) return;
    element.addEventListener(type, fn);
}

/**
 * Add an event to the specified name.
 * 해당 이름에 이벤트를 추가한다.
 * 
 * @param {string} name
 * @param {string} msg
 */
JEvent.add_event_for_name = (name, type, fn) => {
    let elements = JEvent.elements(name);
    if (elements.length == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(type, fn);
    }
}

/**
 * Add an event to the specified class.
 * 해당 클래스에 이벤트를 추가한다.
 * 
 * @param {string} class_name
 * @param {string} msg
 */
JEvent.add_event_for_class = (class_name, type, fn) => {
    let elements = document.querySelectorAll('.' + class_name);
    if (elements.length == null) return;
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(type, fn);
    }
}

/**
 * Add a load event
 * 로드 이벤트를 추가한다.
 * 
 * @param {function} fn
 */
JEvent.load = (fn) => {
    try {
        window.addEventListener('load', fn);
    } catch (e) {
        if (JEvent.console_error_enabled) {
            console.error(`Add Event Error (error: ${e})`);
        }
   }
}

/**
 * Add an event to return to the previous page.
 * 이전 페이지로 돌아가기 이벤트를 추가한다.
 * 
 * @param {string} id
 */
JEvent.click_to_back = (id) => {
    JEvent.click(id, () => {window.history.back()});
}

/**
 * Add an event to move to another page.
 * 다른 페이지로 이동하기 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {string} url
 */
JEvent.click_to_go = (id, url) => {
    JEvent.click(id, () => {window.location.assign(url)});
}

/**
 * Add an event to move to another page without recording the previous page.
 * 이전 페이지 기록 없이 다른 페이지로 이동하기 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {string} url
 */
JEvent.click_to_teleport = (id, url) => {
    JEvent.click(id, () => {window.location.replace(url)});
}

/**
 * Add keyup event.
 * 키업 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.keyup = (id, fn) => {
    JEvent.add_event(id, 'keyup', fn);
}

/**
 * Add a keypress event.
 * 키프레스 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.keypress = (id, fn) => {
    JEvent.add_event(id, 'keypress', fn);
}

/**
 * Add a keydown event.
 * 키다운 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.keydown = (id, fn) => {
    JEvent.add_event(id, 'keydown', fn);
}

/**
 * Add a click event.
 * 클릭 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.click = (id, fn) => {
    JEvent.add_event(id, 'click', fn);
}

/**
 * Add a double click event.
 * 더블클릭 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.dblclick = (id, fn) => {
    JEvent.add_event(id, 'dblclick', fn);
}

/**
 * Add a drag event.
 * 드레그 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.drag = (id, fn) => {
    JEvent.add_event(id, 'drag', fn);
}

/**
 * Add a drag start event.
 * 드레그 시작 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.dragstart = (id, fn) => {
    JEvent.add_event(id, 'dragstart', fn);
}

/**
 * Add a drag end event.
 * 드레그 종료 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.dragend = (id, fn) => {
    JEvent.add_event(id, 'dragend', fn);
}

/**
 * Add drag enter event.
 * Occurs when the drag drop area is within range.
 * 드레그 엔터 이벤트를 추가한다.
 * 드레그 드롭 영역 범위에 들어오는 경우 발생한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.dragenter = (id, fn) => {
    JEvent.add_event(id, 'dragenter', fn);
}

/**
 * Add drag leave event.
 * Occurs when the drag drop area is exceeded.
 * 드레그 리브 이벤트를 추가한다.
 * 드레그 드롭 영역 범위에 나가는 경우 발생한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.dragleave = (id, fn) => {
    JEvent.add_event(id, 'dragleave', fn);
}

/**
 * Add drag over event.
 * Occurs when dragging occurs within the drag drop area.
 * 드레그 오버 이벤트를 추가한다.
 * 드레그 드롭 영역 범위에서 드레그가 발생하고 있을 때 발생한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.dragover = (id, fn) => {
    JEvent.add_event(id, 'dragover', fn);
}

/**
 * Add drop event.
 * Occurs when the drag ends within the drag drop area.
 * 드롭 이벤트를 추가한다.
 * 드레그 드롭 영역 범위에서 드레그가 끝날 때 발생한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.drop = (id, fn) => {
    JEvent.add_event(id, 'drop', fn);
}

/**
 * Add a touch start event.
 * 터치 시작 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.touchstart = (id, fn) => {
    JEvent.add_event(id, 'touchstart', fn);
}

/**
 * Add a touch movement event.
 * 터치 이동 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.touchmove = (id, fn) => {
    JEvent.add_event(id, 'touchmove', fn);
}

/**
 * Add a touch end event.
 * 터치 종료 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.touchend = (id, fn) => {
    JEvent.add_event(id, 'touchend', fn);
}

/**
 * Add touch cancel event.
 * Occurs when the system cancels an event.
 * 터치 취소 이벤트를 추가한다.
 * 시스템에서 이벤트를 취소시킬 때 발생한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.touchcancel = (id, fn) => {
    JEvent.add_event(id, 'touchcancel', fn);
}

/**
 * Add a change event.
 * 변경 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.change = (id, fn) => {
    JEvent.add_event(id, 'change', fn);
}

/**
 * Add an input event.
 * 입력 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.input = (id, fn) => {
    JEvent.add_event(id, 'input', fn);
}

/**
 * Add a focus event.
 * 포커스 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.focus = (id, fn) => {
    JEvent.add_event(id, 'focus', fn);
}

/**
 * Add a blur event.
 * 블러 이벤트를 추가한다.
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.blur = (id, fn) => {
    JEvent.add_event(id, 'dblclick', fn);
}

/**
 * Add focus in event.
 * Events are also delivered to parent elements. (bubbling)
 * 포커스 인 이벤트를 추가한다.
 * 부모 엘리먼트에도 이벤트가 전달된다. (버블링)
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.focusin = (id, fn) => {
    JEvent.add_event(id, 'focusin', fn);
}

/**
 * Add focus out event.
 * Events are also delivered to parent elements. (bubbling)
 * 포커스 아웃 이벤트를 추가한다.
 * 부모 엘리먼트에도 이벤트가 전달된다. (버블링)
 * 
 * @param {string} id
 * @param {function} fn
 */
JEvent.focusout = (id, fn) => {
    JEvent.add_event(id, 'focusout', fn);
}

/**
 * Add a keyup event by name.
 * 이름으로 키업 이벤트를 추가한다.
 * 
 * @param {string} name
 * @param {function} fn
 */
JEvent.keyup_by_name = (name, fn) => {
    JEvent.add_event_for_name(name , 'keyup', fn);
}

/**
 * Add a keypress event by name.
 * 이름으로 키프레스 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.keypress_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'keypress', fn);
}

/**
 * Add a keydown event by name.
 * 이름으로 키다운 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.keydown_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'keydown', fn);
}

/**
 * Add a click event by name.
 * 이름으로 클릭 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.click_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'click', fn);
}

/**
 * Add a double click event by name.
 * 이름으로 더블클릭 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.dblclick_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'dblclick', fn);
}

/**
 * Add a drag event by name.
 * 이름으로 드레그 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.drag_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'drag', fn);
}

/**
 *  Add a drag start event by name.
 * 이름으로 드레그 시작 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.dragstart_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'dragstart', fn);
}

/**
 * Add a drag end event by name.
 * 이름으로 드레그 종료 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.dragend_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'dragend', fn);
}

/**
 * Add drag enter event by name.
 * 이름으로 드레그 엔터 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.dragenter_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'dragenter', fn);
}

/**
 * Add drag leave event by name.
 * 이름으로 드레그 리브 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.dragleave_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'dragleave', fn);
}

/**
 * Add drag over event by name.
 * 이름으로 드레그 오버 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.dragover_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'dragover', fn);
}

/**
 * Add drop event by name.
 * 이름으로 드롭 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.drop_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'drop', fn);
}

/**
 * Add a touch start event by name.
 * 이름으로 터치 시작 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.touchstart_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'touchstart', fn);
}

/**
 * Add a touch movement event by name.
 * 이름으로 터치 이동 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.touchmove_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'touchmove', fn);
}

/**
 * Add a touch end event by name.
 * 이름으로 터치 종료 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.touchend_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'touchend', fn);
}

/**
 * Add touch cancel event by name.
 * 이름으로 터치 취소 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.touchcancel_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'touchcancel', fn);
}

/**
 * Add a change event by name.
 * 이름으로 변경 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.change_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'change', fn);
}

/**
 * Add an input event by name.
 * 이름으로 입력 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.input_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'input', fn);
}

/**
 * Add a focus event by name.
 * 이름으로 포커스 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.focus_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'focus', fn);
}

/**
 * Add a blur event by name.
 * 이름으로 블러 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.blur_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'dblclick', fn);
}

/**
 * Add focus in event by name.
 * 이름으로 포커스 인 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.focusin_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'focusin', fn);
}

/**
 * Add focus out event by name.
 * 이름으로 포커스 아웃 이벤트를 추가한다.
 * 
 * @param {string} name 
 * @param {function} fn
 */
JEvent.focusout_by_name = (name , fn) => {
    JEvent.add_event_for_name(name , 'focusout', fn);
}

/**
 * Add a keyup event by class name.
 * 클래스 이름으로 키업 이벤트를 추가한다.
 * 
 * @param {string} class_name
 * @param {function} fn
 */
JEvent.keyup_by_class = (class_name, fn) => {
    JEvent.add_event_for_class(class_name , 'keyup', fn);
}

/**
 * Add a keypress event by class name.
 * 클래스 이름으로 키프레스 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.keypress_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'keypress', fn);
}

/**
 * Add a keydown event by class name.
 * 클래스 이름으로 키다운 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.keydown_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'keydown', fn);
}

/**
 * Add a click event by class name.
 * 클래스 이름으로 클릭 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.click_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'click', fn);
}

/**
 * Add a double click event by class name.
 * 클래스 이름으로 더블클릭 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.dblclick_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'dblclick', fn);
}

/**
 * Add a drag event by class name.
 * 클래스 이름으로 드레그 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.drag_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'drag', fn);
}

/**
 *  Add a drag start event by class name.
 * 클래스 이름으로 드레그 시작 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.dragstart_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'dragstart', fn);
}

/**
 * Add a drag end event by class name.
 * 클래스 이름으로 드레그 종료 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.dragend_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'dragend', fn);
}

/**
 * Add drag enter event by class name.
 * 클래스 이름으로 드레그 엔터 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.dragenter_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'dragenter', fn);
}

/**
 * Add drag leave event by class name.
 * 클래스 이름으로 드레그 리브 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.dragleave_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'dragleave', fn);
}

/**
 * Add drag over event by class name.
 * 클래스 이름으로 드레그 오버 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.dragover_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'dragover', fn);
}

/**
 * Add drop event by class name.
 * 클래스 이름으로 드롭 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.drop_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'drop', fn);
}

/**
 * Add a touch start event by class name.
 * 클래스 이름으로 터치 시작 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.touchstart_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'touchstart', fn);
}

/**
 * Add a touch movement event by class name.
 * 클래스 이름으로 터치 이동 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.touchmove_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'touchmove', fn);
}

/**
 * Add a touch end event by class name.
 * 클래스 이름으로 터치 종료 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.touchend_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'touchend', fn);
}

/**
 * Add touch cancel event by class name.
 * 클래스 이름으로 터치 취소 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.touchcancel_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'touchcancel', fn);
}

/**
 * Add a change event by class name.
 * 클래스 이름으로 변경 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.change_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'change', fn);
}

/**
 * Add an input event by class name.
 * 클래스 이름으로 입력 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.input_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'input', fn);
}

/**
 * Add a focus event by class name.
 * 클래스 이름으로 포커스 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.focus_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'focus', fn);
}

/**
 * Add a blur event by class name.
 * 클래스 이름으로 블러 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.blur_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'dblclick', fn);
}

/**
 * Add focus in event by class name.
 * 클래스 이름으로 포커스 인 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.focusin_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'focusin', fn);
}

/**
 * Add focus out event by class name.
 * 클래스 이름으로 포커스 아웃 이벤트를 추가한다.
 * 
 * @param {string} class_name 
 * @param {function} fn
 */
JEvent.focusout_by_class = (class_name , fn) => {
    JEvent.add_event_for_class(class_name , 'focusout', fn);
}
