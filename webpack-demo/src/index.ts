var input: HTMLElement = document.getElementById("sum");
var result: HTMLElement = document.getElementById("result");
var layout = <HTMLElement>document.getElementById("checkboxLayout");
var toggle: HTMLElement = document.getElementById("toggle");
var timeline: HTMLElement = document.getElementById("timeline");
var current: HTMLElement = document.getElementById("term__current");

var days: number = 30;

toggle.ontouchstart = function (event) {
    event.preventDefault();

    var touchLoc: Touch = event.targetTouches[0];
    var shiftX: number = touchLoc.clientX - toggle.getBoundingClientRect().left;

    document.addEventListener("touchmove", onMouseMove);
    document.addEventListener("touchend", onMouseUp);

    function onMouseMove(e) {
        var touchLocation: Touch = e.targetTouches[0];

        var newLeft: number =
            touchLocation.clientX -
            shiftX -
            timeline.getBoundingClientRect().left;

        var coords: DOMRect = timeline.getBoundingClientRect();

        var point: number =
            (coords.left + coords.width - 18 - (coords.left + 36)) / 345;
        days =
            Math.round((touchLocation.clientX - (coords.left + 36)) / point) +
            30;

        showFinalSum();

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) newLeft = 0;
        var rightEdge: number = timeline.offsetWidth - toggle.offsetWidth;
        if (newLeft > rightEdge) newLeft = rightEdge;

        toggle.style.left = newLeft + "px";
    }

    function onMouseUp() {
        document.removeEventListener("touchmove", onMouseMove);
        document.removeEventListener("touchend", onMouseUp);
    }
};

toggle.onmousedown = function (event) {
    event.preventDefault();

    var shiftX: number = event.clientX - toggle.getBoundingClientRect().left;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(event: MouseEvent) {
        var newLeft =
            event.clientX - shiftX - timeline.getBoundingClientRect().left;

        var coords: DOMRect = timeline.getBoundingClientRect();

        var point: number =
            (coords.left + coords.width - 18 - (coords.left + 36)) / 335;
        days = Math.round((event.clientX - (coords.left + 36)) / point) + 30;

        showFinalSum();

        if (newLeft < 0) newLeft = 0;
        var rightEdge: number = timeline.offsetWidth - toggle.offsetWidth;
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

input.addEventListener("keyup", function () {
    return showFinalSum();
});

layout.addEventListener("click", function (e: MouseEvent) {
    var element = e.target as HTMLElement;

    if (element.tagName === "INPUT") {
        if (layout.hasAttribute("data-checked")) {
            layout.removeAttribute("data-checked");
            showFinalSum();
        } else {
            layout.setAttribute("data-checked", "true");
            showFinalSum();
        }
    }
});

function showFinalSum() {
    var inputValue = +(<HTMLInputElement>document.getElementById("sum")).value;
    
    days < 30 && (days = 30);
    days > 365 && (days = 365);

    var currency: number = 1;

    input.value = +(inputValue + "").replace(/\D/gi, "");

    if (inputValue.toString().split("").length > 9) {
        var newIpnut = inputValue.toString().split("");
        newIpnut.pop();
        inputValue = +newIpnut.join("");
    }

    var deposit: any = inputValue;

    layout.hasAttribute("data-checked") && (currency = 10);

    current.innerText = days.toString();
    result.innerText =
        (
            deposit *
            Math.pow(1 + 0.0027, days) *
            ((currency / days) * days)
        ).toFixed(2) + "$";
}
