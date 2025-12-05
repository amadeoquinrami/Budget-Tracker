//  Functions
// 1( displayOnScreenIncome= user input)
// 2( dropDownDetails  = dropdown menu button foor description)

// 3( displayOnScreenExpense = user input )
// 4( dropDownDetailsexpense = bttn drrop)

document.addEventListener('DOMContentLoaded', function()){ //this is for the page to load
    const InputElement = document.getElementById("first-Input"); //this is my method that I crerated 

    InputElement.addEventListener('Input', function(event)) {// this is me implementiing my method?Function?
        this.value = this.value.replace(/[a-zA-Z]/g);
        // "g" is a global flag and will replace all not just the one
    };

}