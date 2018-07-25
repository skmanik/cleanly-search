console.log("Something is happening!");

$(document).ready(function() {

	$("#submit-button").on("click", function(event) {
		event.preventDefault();
		ajaxRequest();
	});

	function ajaxRequest() {
        // PREPARE FORM DATA
        var input = $("#inlineFormInputName").val().trim();

        // DO POST
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/api/pets",
            data: JSON.stringify(input),
            dataType: 'json',
            success: function (input) {
                console.log('ajax data:', input);
            },
            error: function (e) {
                alert("An error occurred. Double-check your inputs!");
                console.log("ajax error: ", e);
            }
        });
        // Reset FormData after Posting
        resetData();
    }

    function resetData() {
        $("#petName").val("");
    }
});