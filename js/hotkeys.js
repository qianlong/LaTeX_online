/****************
* JS of Hotkeys Settings
* Editor: Qianlong ZHAO
*****************/
function getKey(e){
    var key;
    if(window.event){        //IE
        key=e.event;
    }else if(e.which){        //netscape/firefox/opera
        key=e.which;
    }    
    return key;
}
$(document).ready(function(){
    $('#editor').keydown(function(e) {
	var key;
	key=getKey(e);
        if(key==18){
	    $('#editor').keydown(function(e1) {
		var key2;
		key2=getKey(e1);
		if(key==18 && key2==73){
		    $.markItUp({ openWith:'\\item ', closeWith:''});
		    key=1;
		}
	    });	    
	}
    });
});