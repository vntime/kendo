var source = [ "O", "P", "P2P", "R", "P2P" ], title = [ "Walk or Waddle",
        "Run Run Run", "Visit the Doc", "Hike the Trails", "Kayak the Sound" ], units = [
        1023, 12, "–", 2, 20 ], days = [ 10, 4, "–", 1, 3 ], reward = [
        "$10 gift card", "100 points", "100 points", "50 points", "100 points" ], device = [
        "–", "Yes", "–", "–", "–" ], dates = [ new Date("1948/12/08"),
        new Date("2012/02/19"), new Date("2012/08/30"), new Date("2012/09/19"),
        new Date("2012/03/04") ], times = [ new Date("12:03"),
        new Date("12:04"), new Date("13:22"), new Date("15:22"),
        new Date("15:55") ], status = [ "✕", "✓", "✓", "✓", "✓" ];

function createRandomData(count) {
    var data = [], now = new Date();
    for (var i = 0; i < count; i++) {

        var x = Math.floor(Math.random() * 5);

        data.push({
            Id : i + 1,
            source : source[x],
            title : title[x],
            units : units[x],
            days : days[x],
            updated : dates[x],
            device : device[x],
            reward : reward[x],
            status : status[x]
        });
    }
    return data;
}

$(document).ready(function() {
    var grid = $("#grid").kendoGrid({
        dataSource : {
//            data : createRandomData(15),
            data : {
                json : JSON.stringify([ {
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
                } ])
            },
            schema : {
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
            },
            pageSize : 5
        },
        scrollable : false,
        sortable : true,
        pageable : true,
        columns : [ {
            field : "codeLong",
            title : "codeLong"
        }, {
            field : "codeShort",
            title : "codeShort"
        }, {
            field : "name",
            title : "name"
        }
//        , {
//            field : "updated",
//            title : "Last Updated",
//            template : '#= kendo.toString(updated,"MM/dd/yyyy") #'
//        }, {
//            field : "device",
//            title : "Device"
//        }, {
//            field : "reward",
//            title : "Reward"
//        }, {
//            field : "status",
//            title : "Status"
//        } 
        ]
    }).data("kendoGrid");

});
