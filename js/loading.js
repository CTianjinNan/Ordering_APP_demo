/**
 * Created by Administrator on 2016/11/29.
 */
function changePage() {
    window.location.href = "index.html"
}
$(document).on("pagecreate", function(){
    var id = setInterval("changePage()",2000);
})