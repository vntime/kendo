var branchListJson = {
    "rows" : [ {
        "id" : "CN1",
        "name" : "CN1_name"
    }, {
        "id" : "CN2",
        "name" : "CN2_name"
    }, {
        "id" : "CN3",
        "name" : "CN3_name"
    } ]
};

$(document).ready(function() {
    fillDataBranchCombobox(branchListJson.rows);
    
});

function fillDataBranchCombobox(list) {
    $("#branch").empty();
    $("#branch").append("<option value=''>---</option>");
    for (var i = 0; i < list.length; i++) {
        $("#branch").append(
                "<option value='" + JSON.stringify(list[i]) + "'>"
                        + list[i].name + "</option>");
    }
};