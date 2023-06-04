const budgetAmount = () => {

    let a = document.getElementById("budgetinput")
    let totalBudget = document.getElementById("totalAmount")
    let b = parseInt(totalBudget.innerHTML) + parseInt(a.value)
    totalBudget.innerHTML = b
    let balance = document.getElementById("balance")
    let c = parseInt(balance.innerHTML) + parseInt(a.value)
    balance.innerHTML = c
    a.value = ""
}


const productAmount = () => {

    let productName = document.getElementById("productName")
    let productCost = document.getElementById("productAmount")
    let balance = document.getElementById("balance")
    let expense = document.getElementById("expense")
    let a = parseInt(balance.innerHTML) - productCost.value
    balance.innerHTML = a
    let b = parseInt(expense.innerHTML) + parseInt(productCost.value)
    expense.innerHTML = b
    let date = new Date()

    let expenseList = document.querySelector(".expenseList")
    let html = `  <div class = "expenseItem">
                     <div class = "flexExpense">
                       <p id = "expenseItemName"> Product:  ${productName.value} </p>
                       <p id = "expenseItemCost">  Cost:   ${productCost.value}</p>
                     </div>
                   <p id = "date"> Purchased On:  ${date.toLocaleDateString()} </p>
                </div>`
    expenseList.insertAdjacentHTML("afterend", html)


    productName.value = ""
    productCost.value = ""


}
