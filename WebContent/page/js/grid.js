$(document).ready(
        function() {

            // // Using the core $.ajax() method
            // var data = $.ajax({
            // // The URL for the request
            // url : ReportServletURL,
            // // The data to send (will be converted to a query string)
            // data : {
            // id : 123
            // },
            // // Whether this is a POST or GET request
            // type : "POST",
            // // The type of data we expect back
            // dataType : "json",
            // complete : function(data) {
            // // alert(data.responseText);
            // }
            // })

            $.ajax({
                type : "POST",
                url : ReportServletURL, // url of your action
                data : {
                    id : 1
                }, // parameters if available
                dataType : "json",
                success : function(result) {

//                    var grid = $("#grid").data("kendoGrid");
                    var dataSource = new kendo.data.DataSource({
                        data : result.data
                    });
//                    grid.setDataSource(dataSource);
//                    grid.dataSource.read();
                    
                    $("#grid").kendoGrid({
                        dataSource : dataSource,
                        height : 180,
//                        scrollable : {
//                            virtual : true
//                        },
                        columns : [ {
                            field : "id",
                            title : "ID"
                        }, {
                            field : "report_id",
                            title : "Report"
                        } ]
                    });

                },
                error : function(httpRequest, textStatus, errorThrown) {
                    alert("Error: " + textStatus + " " + errorThrown + " "
                            + httpRequest);
                }
            });

            var ds1 = new kendo.data.DataSource({
                transport : {
                    read : {
                        // using jsfiddle echo service to simulate JSON endpoint
                        url : ReportServletURL,
                        dataType : "json",
                        type : "POST",
                        data : {
                            // /echo/json/ echoes the JSON which you pass as an
                            // argument
                            json : JSON.stringify({
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
                            })
                        }
                    }
                },
                schema : {
                    data : "country",
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

            var ds2 = new kendo.data.DataSource({
                transport : {
                    read : {
                        // using jsfiddle echo service to simulate JSON endpoint
                        url : ReportServletURL,
                        dataType : "json",
                        type : "POST",
                        data : {
                            // /echo/json/ echoes the JSON which you pass as an
                            // argument
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
                        }
                    }
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
                }
            });

            $("#grid1").kendoGrid({
                dataSource : ds1,
                height : 180,
                scrollable : {
                    virtual : true
                },
                columns : [ {
                    field : "codeLong",
                    title : "codeLong"
                }, {
                    field : "codeShort",
                    title : "codeShort"
                }, {
                    field : "name",
                    title : "name"
                } ]
            });

            $("#grid2").kendoGrid({
                dataSource : ds2,
                height : 180,
                scrollable : {
                    virtual : true
                },
                columns : [ {
                    field : "codeLong",
                    title : "codeLong"
                }, {
                    field : "codeShort",
                    title : "codeShort"
                }, {
                    field : "name",
                    title : "name"
                } ]
            });

        });