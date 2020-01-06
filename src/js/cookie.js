//cookie 设置封装
     function setCookie(key,val,options){
         options = options || {};
         var time = "";
         if(options.expires){
             var d = new Date();
             d.setDate(d.getDate()+options.expires);
             time = ";expires=" + d ;
         }
         var path = "";
         if(options.path){
             path = ";path=" + options.expires;
         }
         document.cookie = key + "=" + val + time + path;
     }


//获取cookie 封装
    function getCookie(key){
        var arr = document.cookie.split("; ");
        var v = "";
        arr.forEach((val)=>{
            if(val.split("=")[0] == key){
                v = val.split("=")[1];
            }
        })
        return v;
    }

//删除cookie的封装
    function removeCookie(key,options){
        options = options || {};
        options.expires = -1;
        getCookie(key,12321,options);
    }