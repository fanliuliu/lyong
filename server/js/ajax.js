// ajax get 封装

   function ajaxGet(url,callback,data){
        data = data || {};
        var str = "";
        for(var i in data){
            str += `${i}=${data[i]}&`;
        }
        var d = new Date();
        url = url + "?" + str + "__fanfan__" + d.getTime();
        var xhr = new XMLHttpRequest();
        xhr.open("get",url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                callback(xhr.responseText)
            }
        }
        xhr.send()
   }

//post封装
     function ajaxPost(url,callback,data){
         data = data ||{};
         var str = "";
         for(var i in data){
             str += `${i}=${data[i]}&`;
         }
         str = str.slice(0,str.length-1)
         var xhr = new XMLHttpRequest();
         xhr.open("post",url,true);
         xhr.onreadystatechange = function(){
             if(xhr.readyState == 4 && xhr.status == 200){
                 callback(this.responseText)
             }
         }
         xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
         xhr.send(str)
     }

//jsonp  封装
    
   function ajaxJsonp(url,callback,data){
       var str = "";
       for(var i in data){
           str += `${i}=${data[i]}&`;
       }
       var d = new Date();
       url = url + "?" + str + "__fanfan__=" + d.getTime();
       var script = document.createElement("script");
       script.src = url;
       document.body.appendChild(script);
       window[data[data.columName]] = function(res){
           callback(res)
       }
       script.remove()
   }