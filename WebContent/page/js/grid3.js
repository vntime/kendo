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

var toolbarbutonVar = [
    {
        name : "delete",
        template : '<a class="k-button pull-right" href="\\#" onclick=" return confirmdelete(this)" ><span class="k-icon k-deleteRow"></span>Xóa bản ghi</a>'
    },
     
    {
        name : "cancel",
        text : "Hủy"
    },
    {
        name : "save",
        text : "Lưu",
        template : '<a class="k-button pull-right" href="\\#"  onclick="gridSave(this)"><span class="k-icon k-addRowBelow"></span>Lưu</a>',
        attributes : {
            class : 'pull-right'
        }
    },
    {
        name : 'my-create',
        text : 'Thêm mới',
        template : '<a class="k-button pull-right" href="\\#"  onclick="gridAddNewRow(this)"><span class="k-icon k-addRowBelow"></span>Thêm mới</a>'
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
                            type : "number"
                        },
                        address : {
                            type : "string"
                        }
                    }
                }
            },
            pageSize : 2
        },
        dataBinding : function(args){
            record = (this.dataSource.page() - 1) * this.dataSource.pageSize();
        },
        editable : "incell",
        toolbar : toolbarbutonVar,
        height : 550,
        scrollable : true,
        sortable : true,
        filterable : true,
        pageable : {
            input : true,
            numeric : false,
            efresh : true,
            pageSizes : [ 2, 5, 10 ],
            messages : {
                display : "Hiển thị {0}-{1} / {2} bản ghi",
                first : "Trang đầu",
                last : "Trang cuối",
                next : "Trang tiếp theo",
                previous : "Trở lại trang trước",
                refresh : "Load lại dữ liệu",
                page : "Trang",
                itemsPerPage : "Số bản ghi trên 1 trang"
            }
        },
        messages : {
            noRecords : "Không có bản ghi nào!",
        },
        columnMenu : false,
        batch : true,
        allowCopy : true,
        columns : columnVar
    });
});


function gridAddNewRow(e){
    var newRow = {};
    newRow.mssv='1234';
    newRow.name = 'New name';
    newRow.name_en = 'New name_en';
    newRow.name_vn = 'New name_vn';
    newRow.age = 9;
    newRow.address = 'New address';
    var lastRowNumber = $("#grid").data("kendoGrid").dataSource.data().length;
    $("#grid").data("kendoGrid").dataSource.insert(lastRowNumber + 1, newRow);
}

function gridSave(e){
    dataVar.rows = $("#grid").data("kendoGrid").dataSource._data;
    $("#grid").data("kendoGrid").dataSource.read();
}