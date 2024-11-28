
// Ajax submit form  .
$("#ajaxForm").submit(function (e) {
    e.preventDefault(); // Default form submission
    var action = $(this).attr("action") || "/default-url";
    console.log("Action URL:", action);

    // Serializing form data
    var data = {};
    $(this).serializeArray().forEach(function (field) {
        data[field.name] = field.value;
    });
    console.log("Serialized Data:", data);

    // Sending AJAX POST request
    $.ajax({
        type: "POST",
        url: "https://formsubmit.co/Ashish1862ac@gmail.com",
        data: JSON.stringify(data), // Sending serialized data as JSON
        contentType: "example/json", // JSON data content type
        headers: {
            "Accept": "example/json"
        }
    })
        .done(function (response) {
            console.log("Form submitted successfully!", response);
            alert("Form submitted successfully!");
            $("#ajaxForm")[0].reset(); // Reset form fields
        })
        .fail(function (xhr, status, error) {
            console.error("Error: ", status, error);
            alert("Error: Form submission failed. Please try again later.");
        });
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
