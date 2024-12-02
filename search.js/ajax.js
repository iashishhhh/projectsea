function sendFormData() {
    var zhttp = new XMLHttpRequest();
    var form = document.querySelector('#ajaxForm');
    var inputs = form.querySelectorAll('input, textarea');
    var myForm = new FormData();

    inputs.forEach(function (input) {
        if (input.name) {
            myForm.append(input.name, input.value);
        }
    });
    console.log("Form Data Submitted:", Object.fromEntries(myForm.entries()));
    zhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 201) {
                console.log("Form Data Submit Successfully");
                alert("Form Data Submit Successfully")
          
            } else {
                console.log("Error: " + this.status + " - " + this.statusText);
            }
        }
    };
    zhttp.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
    zhttp.send(myForm);
}

// Adding an event listener to the form submit button
document.querySelector('#ajaxForm').addEventListener('submit', function (e) {
    e.preventDefault();
    sendFormData();
});

// code input clear field
document.getElementById("ajaxForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var form = event.target;
    var inputs = form.querySelectorAll("input, textarea");

    inputs.forEach(function (input) {
        input.value = "";
    });

});
