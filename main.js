let input = document.getElementById("sum");
let result = document.getElementById("result");
let layout = document.getElementById("checkboxLayout");
let toggle = document.getElementById("toggle");
let timeline = document.getElementById("timeline");
let current = document.getElementById("term__current");

let days = 20;


// #####################################

toggle.ontouchstart = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)
    

    var touchLoc = event.targetTouches[0];
    let shiftX = touchLoc.clientX - toggle.getBoundingClientRect().left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    document.addEventListener("touchmove", onMouseMove);
    document.addEventListener("touchend", onMouseUp);

    function onMouseMove(e) {
        let touchLocation = e.targetTouches[0];

        let newLeft =
            touchLocation.clientX - shiftX - timeline.getBoundingClientRect().left;

        let coords = timeline.getBoundingClientRect();

        let point =
            (coords.left + coords.width - 18 - (coords.left + 36)) / 345;
        days =
            Math.round((touchLocation.clientX - (coords.left + 36)) / point) + 20;

        showFinalSum();

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) newLeft = 0;
        let rightEdge = timeline.offsetWidth - toggle.offsetWidth;
        if (newLeft > rightEdge) newLeft = rightEdge;

        toggle.style.left = newLeft + "px";
    }

    function onMouseUp() {
        document.removeEventListener("touchmove", onMouseUp);
        document.removeEventListener("touchend", onMouseMove);
    }
};


// ##############################################


toggle.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftX = event.clientX - toggle.getBoundingClientRect().left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(event) {
        let newLeft =
            event.clientX - shiftX - timeline.getBoundingClientRect().left;

        let coords = timeline.getBoundingClientRect();

        let point =
            (coords.left + coords.width - 18 - (coords.left + 36)) / 345;
        days =
            Math.round((event.clientX - (coords.left + 36)) / point) + 20;

        showFinalSum();

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) newLeft = 0;
        let rightEdge = timeline.offsetWidth - toggle.offsetWidth;
        if (newLeft > rightEdge) newLeft = rightEdge;

        toggle.style.left = newLeft + "px";
    }

    function onMouseUp() {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
    }
};

toggle.ondragstart = function () {
    return false;
};

input.addEventListener("keyup", () => showFinalSum());
layout.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        if (layout.hasAttribute("data-checked")) {
            layout.removeAttribute("data-checked");
            showFinalSum();
        } else {
            layout.setAttribute("data-checked", true);
            showFinalSum();
        }
    }
});

function showFinalSum() {
    if (days < 20) days = 20;
    if (days > 365) days = 365;
    let currency = 1;
    let deposit = input.value;

    if (layout.hasAttribute("data-checked")) currency = 20;

    current.innerText = days;
    result.innerText =
        (deposit * (1 + 0.0027) ** days * ((currency / days) * days)).toFixed(
            2
        ) + "$";
}
