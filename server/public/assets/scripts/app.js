/**
 * Created by Thomas on 10/29/15.
 */
$(document).ready(function(){

});

function clickGetData(){
    $ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            console.log(data);
        }
    });
}






