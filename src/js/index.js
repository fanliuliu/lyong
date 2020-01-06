;(function(){
      var banner = document.querySelector('.banner');
      var img = banner.getElementsByTagName('img')[0];
      var imgtip = banner.querySelector(".imgtip")
      var bannerUrl = "http://localhost:86/api/json/banner.json";
      var index = 0;
      var timer = null;
      var lis = imgtip.getElementsByTagName('li');
      var newli = [];
      ajaxPost(bannerUrl,(res)=>{
          var resnew = JSON.parse(res)
          for(var i=0;i<resnew.length;i++){
            imgtip.innerHTML += `<li>${resnew[i].tip}</li>`;
              newli.push(`<li>${resnew[i].tip}</li>`);
            }
          
            function tab(){
                img.src = resnew[index].url;
                for(var j=0;j<lis.length;j++){
                        lis[j].className = '';
                }
                lis[index].className = 'hover';    
            }
             tab();
            
            for(var i=0;i<lis.length;i++){
                lis[i].num = i;
                lis[i].onmouseover = function(){
                    index = this.num;
                    tab();
                }
            }
                       
            function autoPlay(){
                clearInterval(timer);
                timer = setInterval(function(){
                    index ++ ;
                    if(index == resnew.length){
                        index = 0;
                    }
                    tab();
                },2000)
            }
            autoPlay() ;    

            banner.onmouseover = function(){
                clearInterval(timer);
            }       
            banner.onmouseout = function(){
                autoPlay() ;
            }  
      })
})();


(function(){
    var goodt = document.querySelector(".good-t");
    // console.log(goodt)
    var goodtUrl = "http://localhost:86/api/json/goods.json";
    ajaxPost(goodtUrl,(res)=>{
         var resnew = JSON.parse(res);
         console.log(resnew);
         var str = "";
         for(var i=0;i<resnew.length;i++){
              str += `
                    <li>
                        <a href="#">
                            <img src=${resnew[i].img} alt="">
                            <p>${resnew[i].title}</p>
                        </a>
                        <b>${resnew[i].author}</b>
                        <div>
                            <i>￥ ${resnew[i].price}</i>
                            <span>起</span>
                        </div>
                    </li>
              `;
         }
         goodt.innerHTML = str;
    })
})();



