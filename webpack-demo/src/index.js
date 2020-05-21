var input = document.getElementById("sum");
<<<<<<< HEAD
=======
var inputValue = +document.getElementById("sum").value;
>>>>>>> 74ab863d942070845827a91ec915289ae15078cc
var result = document.getElementById("result");
var layout = document.getElementById("checkboxLayout");
var toggle = document.getElementById("toggle");
var timeline = document.getElementById("timeline");
var current = document.getElementById("term__current");
var days = 30;
<<<<<<< HEAD
=======

>>>>>>> 74ab863d942070845827a91ec915289ae15078cc
toggle.ontouchstart = function (event) {
    event.preventDefault();
    var touchLoc = event.targetTouches[0];
    var shiftX = touchLoc.clientX - toggle.getBoundingClientRect().left;
    document.addEventListener("touchmove", onMouseMove);
    document.addEventListener("touchend", onMouseUp);
    function onMouseMove(e) {
        var touchLocation = e.targetTouches[0];
<<<<<<< HEAD
        var newLeft = touchLocation.clientX -
            shiftX -
            timeline.getBoundingClientRect().left;
        var coords = timeline.getBoundingClientRect();
        var point = (coords.left + coords.width - 18 - (coords.left + 36)) / 345;
        days =
            Math.round((touchLocation.clientX - (coords.left + 36)) / point) +
                30;
        showFinalSum();
        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0)
            newLeft = 0;
        var rightEdge = timeline.offsetWidth - toggle.offsetWidth;
        if (newLeft > rightEdge)
            newLeft = rightEdge;
=======
        var newLeft =
            touchLocation.clientX -
            shiftX -
            timeline.getBoundingClientRect().left;
        var coords = timeline.getBoundingClientRect();
        var point =
            (coords.left + coords.width - 18 - (coords.left + 36)) / 345;
        days =
            Math.round((touchLocation.clientX - (coords.left + 36)) / point) +
            30;
        showFinalSum();
        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) newLeft = 0;
        var rightEdge = timeline.offsetWidth - toggle.offsetWidth;
        if (newLeft > rightEdge) newLeft = rightEdge;
>>>>>>> 74ab863d942070845827a91ec915289ae15078cc
        toggle.style.left = newLeft + "px";
    }
    function onMouseUp() {
        document.removeEventListener("touchmove", onMouseMove);
        document.removeEventListener("touchend", onMouseUp);
    }
};
toggle.onmousedown = function (event) {
    event.preventDefault();
    var shiftX = event.clientX - toggle.getBoundingClientRect().left;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    function onMouseMove(event) {
<<<<<<< HEAD
        var newLeft = event.clientX - shiftX - timeline.getBoundingClientRect().left;
        var coords = timeline.getBoundingClientRect();
        var point = (coords.left + coords.width - 18 - (coords.left + 36)) / 335;
        days = Math.round((event.clientX - (coords.left + 36)) / point) + 30;
        showFinalSum();
        if (newLeft < 0)
            newLeft = 0;
        var rightEdge = timeline.offsetWidth - toggle.offsetWidth;
        if (newLeft > rightEdge)
            newLeft = rightEdge;
=======
        var newLeft =
            event.clientX - shiftX - timeline.getBoundingClientRect().left;
        var coords = timeline.getBoundingClientRect();
        var point =
            (coords.left + coords.width - 18 - (coords.left + 36)) / 335;
        days = Math.round((event.clientX - (coords.left + 36)) / point) + 30;
        showFinalSum();
        if (newLeft < 0) newLeft = 0;
        var rightEdge = timeline.offsetWidth - toggle.offsetWidth;
        if (newLeft > rightEdge) newLeft = rightEdge;
>>>>>>> 74ab863d942070845827a91ec915289ae15078cc
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
<<<<<<< HEAD
=======
    alert("1");
>>>>>>> 74ab863d942070845827a91ec915289ae15078cc
    return showFinalSum();
});
layout.addEventListener("click", function (e) {
    var element = e.target;
    if (element.tagName === "INPUT") {
        if (layout.hasAttribute("data-checked")) {
            layout.removeAttribute("data-checked");
            showFinalSum();
<<<<<<< HEAD
        }
        else {
=======
        } else {
>>>>>>> 74ab863d942070845827a91ec915289ae15078cc
            layout.setAttribute("data-checked", "true");
            showFinalSum();
        }
    }
});
function showFinalSum() {
<<<<<<< HEAD
    var inputValue = +document.getElementById("sum").value;
    days < 30 && (days = 30);
    days > 365 && (days = 365);
    var currency = 1;
    input.value = +(inputValue + "").replace(/\D/gi, "");
=======
    alert("2");
    days < 30 && (days = 30);
    days > 365 && (days = 365);
    var currency = 1;
    inputValue = +(inputValue + "").replace(/\D/gi, "");
>>>>>>> 74ab863d942070845827a91ec915289ae15078cc
    if (inputValue.toString().split("").length > 9) {
        var newIpnut = inputValue.toString().split("");
        newIpnut.pop();
        inputValue = +newIpnut.join("");
    }
    var deposit = inputValue;
    layout.hasAttribute("data-checked") && (currency = 10);
    current.innerText = days.toString();
<<<<<<< HEAD
    result.innerText =
        (deposit *
            Math.pow(1 + 0.0027, days) *
            ((currency / days) * days)).toFixed(2) + "$";
=======
    
    result.innerText =
        (
            deposit *
            Math.pow(1 + 0.0027, days) *
            ((currency / days) * days)
        ).toFixed(2) + "$";
>>>>>>> 74ab863d942070845827a91ec915289ae15078cc
}
