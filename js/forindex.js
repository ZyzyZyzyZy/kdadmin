window.onload=
    function () {
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
     if(localStorage.getItem("username")==null || localStorage.getItem("password")==null){

     }else
     {
         var i1=document.getElementById("i1");
         var i2=document.getElementById("i2");
         i1.value=localStorage.getItem("username");
         i2.value=localStorage.getItem("password");
         jiancha();

     }


    }

function jiancha(){
    var name=document.getElementById("i1").value;
    var GameScore = Bmob.Object.extend("songhuoyuan");
    var query = new Bmob.Query(GameScore);
    query.equalTo("name", name);
// 查询所有数据
    query.find({
        success: function(results) {
            //alert("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var password=document.getElementById("i2").value;
                if(object.get("phone")==password){
                    //alert("认证成功");
                    localStorage.setItem("username",name);
                    localStorage.setItem("password",password);
                    denglu();
                }else{
                    alert("账号或者密码错误");

                }
            }
        },
        error: function(error) {
            alert("账号或者密码错误");
        }
    });

}

function denglu(){
    if(localStorage.getItem("username")=="admin"){
           window.location.href="xml/foradmin.html";
    }else{
           window.location.href="xml/forusers.html";
    }
   }