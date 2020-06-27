
var resourceName = "";
$( function() {
    window.addEventListener( 'message', function( event ) {
        var item = event.data;
        if ( item.resourcename ) {
            resourceName = item.resourcename;
        }
        if (item.display) {
            $("#wrap").show();
        } else {
            $("#wrap").hide();
            $("#page").empty();
            $("#playerCount").empty();
            $("#serverName").empty();
            $("#leftCol").empty();
            $("#rightCol").empty();
        }
        if (item.addRowLeft) {
            $("#leftCol").append(item.addRowLeft);
        }
        if (item.addRowRight) {
            $("#rightCol").append(item.addRowRight);
        }
        if (item.playerCount) {
            $("#playerCount").append(item.playerCount);
        }
        if (item.page) {
            $("#page").append(item.page);
        }
        if (item.serverName) {
            $("#serverName").append(item.serverName);
        }
        
    } );
} )
function copyText(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}

function sendData( name, data ) {
    $.post( "http://" + resourceName + "/" + name, JSON.stringify( data ), function( datab ) {
        if ( datab != "ok" ) {
            return false;
        }            
    } );
    return true;
}