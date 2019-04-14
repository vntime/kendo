$(document).ready(function() {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request
        url : ReportServletURL,
        // The data to send (will be converted to a query string)
        data : {
            id : 123
        },
        // Whether this is a POST or GET request
        type : "POST",
        // The type of data we expect back
        dataType : "json",
        complete : function(data) {
            alert(data);
        }
    })

});