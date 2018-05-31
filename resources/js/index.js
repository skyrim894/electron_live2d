if (typeof module === 'object') {window.jQuery = window.$ = module.exports;};
$(function(){
    
    var size = 1;//为了减少体积，只上传了一套贴图
    var count = 1;
    
    console.log( $("#next_texture"));

    $("#next_texture").click(function(){    
        count++;
        
        if(count>=size){
            count = 1;
        }
        
        if(count<10){
            count = "0"+count;
        }
    
        console.log(count);
    
        var path = "resources/json/asuna_"+count+"/asuna_"+count+".model.json";
        loadlive2d("live2d", path);
    });
    
    loadlive2d("live2d","resources/json/asuna_01/asuna_01.model.json");
})