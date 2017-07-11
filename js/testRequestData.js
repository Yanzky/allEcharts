function testData(URL){
    //只请求新的数据·数据请求
    $.ajax({
        type: "get",
        url:URL,
        // url: 'dataTest.json',
        success: function (checkedData) {
            if (checkedData != "") {
                initHtml(checkedData);
            }
        },
        error: function() {
            alert("失败，请稍后再试！");
        }
    });
}
