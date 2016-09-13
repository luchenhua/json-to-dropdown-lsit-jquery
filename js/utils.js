/**
 * Created by Alex Lu on 2016/9/13.
 */
function generateDropdownList(id, data) {
    var items = "";
    for (var i = 0; i < data.length; i++) {
        items += "<option value='" + data[i].key + "'>" + data[i].value + "</option>";
    }
    $("#" + id + "").html(items);
}
