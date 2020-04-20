let input = document.getElementById("sum")
let result = document.getElementById("result")
let layout = document.getElementById("checkboxLayout")

layout.addEventListener('click', (e) => {
    if (e.target.tagName === "INPUT") {
        if (layout.hasAttribute("data-checked")) {
            layout.removeAttribute("data-checked")
            showFinalSum()
        } else {
            layout.setAttribute("data-checked", true)
            showFinalSum()
        }
    }
})

input.addEventListener('keyup', () => showFinalSum())

function showFinalSum() {
    let term = 100;
    let currency = 1;
    let deposit = input.value;

    if (layout.hasAttribute("data-checked")) currency = 20;

    result.innerText = (deposit * (1 + 0.0027)**term * ((currency / term) * term)).toFixed(2) + "$";
}

// калькулятор сложных процентов)

// Deposit × ( 1 + 0.0027 ) ^ Term × ( ( C ÷ Term ) × Term )

// B - сумма вложений
// А - срок инвестирования (30-365 дней)
// С - если галочка стоит = 20, если не стоит =1