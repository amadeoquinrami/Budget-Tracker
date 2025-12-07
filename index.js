//  //  //  //  //  //  //  //  //   //  //
class totalBudget {
    constructor () {
        this.incomeX = [];
        this.expenseY = [];
    }
    // adding the income entry
    UserIncome(description, amount) {
    this.incomeX.push({description, amount});
    }
    // adding the expense entry from user 
    UserExpense(description, amount) {
        this.expenseY.push({description, amount});
    }
// now adding the braiin for the n    
getTotalIncomeX() {
    return this.incomeX.reduce((total, income) => total + income.amount, 0); //.values returns an array of the property value of an object.
}        

// noow  calculating the total expense
getTotalExpenseY() {
    return this.expenseY.reduce((total, expense) => total + expense.amount, 0);
}
// now calculating the total budget
getTotalBudget() {
return this.getTotalIncomeX()- this.getTotalExpenseY();
}
}

const theBudget = new totalBudget; //creating a new intake with keyword "new"
// DOM and its Elements
const incomeXForm = document.getElementById("income-form"); // gradding the class form 
const expenseYForm = document.getElementById("expense-form");
//
const incomeDetailInput = document.getElementById("UserInputDescription");
const incomeAmountInput = document.getElementById("UserInputAmount");
//
const expenseYDetailsInput = document.getElementById("expense-description");
const expenseYAmountInput = document.getElementById("expense-amount");
//
const totalIncomeDisplay = document.getElementById("summaryOfTotal-income");
const totalExpenseYDisplay = document.getElementById("summaryOfTotal-expenses");
const totalBudgetDisplay = document.getElementById("summaryOfTotal-budget");
//  //  // 
//reloading the user interface
function reloadUI() {
    totalIncomeDisplay.innerText = `Total Income: $${theBudget.getTotalIncomeX().toFixed(2)}`;
    totalExpenseYDisplay.innerText = `Total Expenses: $${theBudget.getTotalExpenseY().toFixed(2)}`;
    totalBudgetDisplay.innerText = `Your Budget: $${theBudget.getTotalBudget().toFixed(2)}`;
}

//  ///     /// /// ////    //  /////   ////    /// /// //  /// //  /   /// //
function isValidUserInput(description, amount) {
    if (description.trim() === "") { // removes extra spaces
        alert("please fill in description");
        return false;
    }
    if (/\d/.test(description)) { //regex a way to validate and ensure noo numbers in description
        alert("Please No numbers in Descriptions, only text");
        return false;
    }
    if (isNaN(amount) || amount<= 0) {
        alert("Please enter a value greater than 0");
        return false;
    }
    return true;
}
//  //  //  //  //  //  //  //  //  //  //  /// //  //  //  //  //  /// //  //
incomeXForm.addEventListener("submit", (event)=>{
    event.preventDefault(); // prevents submiting a form it does not meet the requirements
    const descriptionX = incomeDetailInput.value.trim();
    const amount = Number(incomeAmountInput.value);
    //
    if (isValidUserInput(descriptionX, amount)) {
        theBudget.UserIncome(descriptionX, amount)
            reloadUI();
            updateChart();
    }
    incomeXForm.reset();
});
expenseYForm.addEventListener("submit", (event)=> {
    event.preventDefault();
    const descriptionY = expenseYDetailsInput.value.trim();
    const amount = Number (expenseYAmountInput.value);
    //
    if (isValidUserInput(descriptionY, amount)) {
        theBudget.UserExpense(descriptionY, amount)
            reloadUI();
            updateChart();
    }
    expenseYForm.reset();
});
 
////    ////    implementing a chart


const donutContext = document.getElementById("DonutChart").getContext("2d");

let budgetchart = new Chart (donutContext, {

    type: "doughnut",
    data: {
        labels:["Income", "Expenses"],
        datasets: [{
            data: [0, 0],
            backgroundColor: [ "#588061" , "#EFE8D8" ]
        }]
    }
    });
function updateChart () {
    budgetchart.data.datasets[0].data = [
        theBudget.getTotalIncomeX(),
        theBudget.getTotalExpenseY()
    ];
    budgetchart.update();
}


