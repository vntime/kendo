var jsonStr = {
    "country" : [ {
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
var headers = [ {
    "id" : 1,
    "column_id" : 0,
    "title" : "MSSV",
    "field" : "mssv",
    "parentColumnId" : 0,
    "columns" : []
}, {
    "id" : 2,
    "column_id" : 0,
    "title" : "Tên",
    "field" : "name",
    "parentColumnId" : 0,
    "columns" : [ {
        "id" : 3,
        "column_id" : 0,
        "title" : "Tên Tiếng Anh",
        "field" : "name_en",
        "parentColumnId" : 0,
        "columns" : []
    }, {
        "id" : 4,
        "column_id" : 0,
        "title" : "Tên Tiếng Việt",
        "field" : "name_vn",
        "parentColumnId" : 0,
        "columns" : []
    } ]
}, {
    "id" : 5,
    "column_id" : 0,
    "title" : "Tuổi",
    "field" : "age",
    "parentColumnId" : 0,
    "columns" : []
}, {
    "id" : 6,
    "column_id" : 0,
    "title" : "Địa chỉ",
    "field" : "address",
    "parentColumnId" : 0,
    "columns" : []
} ];

$(document).ready(function() {

    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request
        url : ReportServletURL,
        // The data to send (will be converted to a query string)
        data : {
            method : "getHeaders"
        },
        async : false,
        // Whether this is a POST or GET request
        type : "POST",
        // The type of data we expect backq
        dataType : "json",
        complete : function(data) {
            // headers = data.responseJSON.data;
        }
    })

    var ds = new kendo.data.DataSource({
        transport : {
            read : {
                // using jsfiddle echo service to simulate JSON endpoint
                url : ReportServletURL,
                dataType : "json",
                type : "POST",
                data : {
                    method : "getRows"
                },
            }
        },
        schema : {
            data : "data",
            model : {
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
        }
    });

    $("#grid").kendoGrid({
        dataSource : ds,
        height : 180,
        // scrollable : {
        // virtual : true
        // },
        columns : headers
    });

    // var ds1 = new kendo.data.DataSource({
    // transport : {
    // read : {
    // // using jsfiddle echo service to simulate JSON endpoint
    // url : ReportServletURL,
    // dataType : "json",
    // type : "POST",
    // data : {
    // // /echo/json/ echoes the JSON which you pass as an
    // // argument
    // json : JSON.stringify({
    //    
    // })
    // }
    // }
    // },
    // schema : {
    // data : "country",
    // model : {
    // fields : {
    // codeLong : {
    // type : "string"
    // },
    // codeShort : {
    // type : "string"
    // },
    // name : {
    // type : "string"
    // }
    // }
    // }
    // }
    // });
    //
    // var ds2 = new kendo.data.DataSource({
    // transport : {
    // read : {
    // // using jsfiddle echo service to simulate JSON endpoint
    // url : ReportServletURL,
    // dataType : "json",
    // type : "POST",
    // data : {
    // // /echo/json/ echoes the JSON which you pass as an
    // // argument
    // json : JSON.stringify([ {
    // "codeLong" : "AUT",
    // "codeShort" : "AT",
    // "name" : "Austria"
    // }, {
    // "codeLong" : "BEL",
    // "codeShort" : "BE",
    // "name" : "Belgium"
    // }, {
    // "codeLong" : "BGR",
    // "codeShort" : "BG",
    // "name" : "Bulgaria"
    // } ])
    // }
    // }
    // },
    // schema : {
    // model : {
    // fields : {
    // codeLong : {
    // type : "string"
    // },
    // codeShort : {
    // type : "string"
    // },
    // name : {
    // type : "string"
    // }
    // }
    // }
    // }
    // });
    //
    // $("#grid1").kendoGrid({
    // dataSource : ds1,
    // height : 180,
    // scrollable : {
    // virtual : true
    // },
    // columns : [ {
    // field : "codeLong",
    // title : "codeLong"
    // }, {
    // field : "codeShort",
    // title : "codeShort"
    // }, {
    // field : "name",
    // title : "name"
    // } ]
    // });
    //
    // $("#grid2").kendoGrid({
    // dataSource : ds2,
    // height : 180,
    // scrollable : {
    // virtual : true
    // },
    // columns : [ {
    // field : "codeLong",
    // title : "codeLong"
    // }, {
    // field : "codeShort",
    // title : "codeShort"
    // }, {
    // field : "name",
    // title : "name"
    // } ]
    // });

});