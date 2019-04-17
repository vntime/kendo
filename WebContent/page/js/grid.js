var dataVar = {
    "data" : [ {
        "mssv" : 1,
        "name" : "RP1",
        "name_en" : "R1",
        "name_vn" : "1",
        "age" : 1,
        "address" : "d1"
    }, {
        "mssv" : 2,
        "name" : "RP1",
        "name_en" : "R2",
        "name_vn" : "2",
        "age" : 2,
        "address" : "d2"
    }, {
        "mssv" : 3,
        "name" : "RP1",
        "name_en" : "R3",
        "name_vn" : "3",
        "age" : 3,
        "address" : "d3"
    }, {
        "mssv" : 4,
        "name" : "RP1",
        "name_en" : "R4",
        "name_vn" : "4",
        "age" : 4,
        "address" : "d4"
    } ]
};

var dataVar2 = [ {
    "mssv" : 1,
    "name" : "RP1",
    "name_en" : "R1",
    "name_vn" : "1",
    "age" : 1,
    "address" : "d1"
}, {
    "mssv" : 2,
    "name" : "RP1",
    "name_en" : "R2",
    "name_vn" : "2",
    "age" : 2,
    "address" : "d2"
}, {
    "mssv" : 3,
    "name" : "RP1",
    "name_en" : "R3",
    "name_vn" : "3",
    "age" : 3,
    "address" : "d3"
}, {
    "mssv" : 4,
    "name" : "RP1",
    "name_en" : "R4",
    "name_vn" : "4",
    "age" : 4,
    "address" : "d4"
} ];

var columnVar = [ {
    field : "mssv",
    title : "mssv",
    width : "130px"
}, {
    field : "name",
    title : "name",
    width : "130px"
}, {
    field : "name_en",
    title : "name_en",
    width : "130px"
}, {
    field : "name_vn",
    title : "name_vn",
    width : "130px"
}, {
    field : "age",
    title : "age",
    width : "130px"
}, {
    field : "address",
    title : "address",
    width : "130px"
} ];

var dataVarFromServlet;

$(document).ready(function() {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request
        url : ReportServletURL,
        // The data to send (will be converted to a query string)
        data : {
            method : "getRows"
        },
        // Whether this is a POST or GET request
        type : "POST",
        // The type of data we expect back
        dataType : "json",
        async : false,
        complete : function(result) {
            dataVarFromServlet = result.responseJSON;
        }
    })

    $("#grid").kendoGrid({
        dataSource : {
            type : "json",
            // data : dataVar,
            data : dataVarFromServlet,
            schema : {
                data : "data"
            }
        },
        height : 550,
        scrollable : true,
        sortable : true,
        filterable : true,
        pageable : {
            input : true,
            numeric : false
        },
        columns : columnVar
    });
});