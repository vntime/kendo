var dataVar = {
    "rows" : [ {
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
};
$(document).ready(function() {
    $("#grid").kendoGrid({
        dataSource : {
            type : "json",
            data : dataVar,
            schema : {
                data : "rows",
                model : {
                    id : "codeLong",
                    fields : {
                        codeLong : {
                            type : "string"
                        },
                        codeShort : {
                            type : "string"
                        },
                        name : {
                            type : "string"
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
        columns : [ {
            field : "codeLong",
            title : "codeLong",
            width : "130px"
        },{
            field : "codeShort",
            title : "codeShort",
            width : "130px"
        } ,
        {
            field : "name",
            title : "name",
            width : "130px"
        } 
        ]
    });
});