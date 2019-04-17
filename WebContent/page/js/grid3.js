var dataVar = {
    "rows" : [ {
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

$(document).ready(function() {
    $("#grid").kendoGrid({
        dataSource : {
            type : "json",
            data : dataVar,
            schema : {
                data : "rows",
                model : { // model: can be removed 
                    id : "codeLong",
                    fields : {
                        mssv : {
                            type : "string"
                        },
                        name : {
                            type : "string"
                        },
                        name_en : {
                            type : "string"
                        },
                        name_vn : {
                            type : "string"
                        },
                        age : {
                            type : "string"
                        },
                        address2 : {
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
        columns : columnVar
    });
});