$(document).ready(function() {
    $("#grid").kendoGrid({
        dataSource : {
            type : "json",
            data : {
                json : JSON.stringify({
                    "data" : [ {
                        "codeLong" : "AUT",
                        "codeShort" : "AT",
                        "name" : "Austria"
                    }, {
                        "codeLong" : "BEL",
                        "codeShort" : "BE",
                        "name" : "Belgium"
                    }, {
                        "codeLong" : "BGR",
                        "codeShort" : "BG",
                        "name" : "Bulgaria"
                    } ]
                })
            },
            schema : {
                data : "data",
                model : {
                    id : "codeLong",
                    fields : {
                        codeLong : {
                            type : "string"
                        },
                        codeShort : {
                            type : "number"
                        },
                        name : {
                            type : "number"
                        }
                    }
                }
            },
            pageSize : 20
        },
        height : 550,
        scrollable : true,
        sortable : true,
        filterable : true,
        pageable : {
            input : true,
            numeric : false
        },
        columns : [ "ProductName", {
            field : "codeLong",
            title : "codeLong",
            width : "130px"
        } ]
    });
});