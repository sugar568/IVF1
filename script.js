$(document).ready(function() {
    $("#run-python").click(function() {
        $.ajax({
            url: 'python_script.py',
            type: 'GET',
            success: function(data) {
                $("#output").html(data);
            },
            error: function(error) {
                $("#output").html('Error: ' + error.responseText);
            }
        });
    });
});
