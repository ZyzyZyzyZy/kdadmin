/**
 * Created by zhangyue on 16/2/23.
 */
window.onload=
    function () {
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
          if(localStorage.getItem("username")==null || localStorage.getItem("password")==null){
              window.location.href="../index.html";
          }
         //alert("d");
        //var y1=document.getElementById("xxxx");
        var name=document.getElementById("name").innerHTML="送货员:"+localStorage.getItem("username");
        var y1=document.getElementById("h2");
        var y2=document.getElementById("txqr");
        var y3=document.getElementById("wkdl");
        var y4=document.getElementById("zhongwu");
        var y5=document.getElementById("wanshang");
        //var y4=document.getElementById("div1");
        var y6=document.getElementById("cwtx");
        y6.style.visibility="hidden";
        //y1.style.visibility="hidden";
        y1.style.visibility="hidden";
        y2.style.visibility="hidden";
        y3.style.visibility="hidden";
        y4.style.visibility="hidden";
        y5.style.visibility="hidden";
        //alert("d");
        //y4.style.visibility="hidden";

        chaxun();
    };

  function chaxun(){
      //alert("d");
      var name=localStorage.getItem("username");
      var QueRen = Bmob.Object.extend("All");
      var query = new Bmob.Query(QueRen);
      //var querenshu;
      //var quxiaoshu;
      //var jiedanshu;
      var weiqueren;
      query.equalTo("songhuoren",name);
      query.equalTo("queren","f");
      query.find({
          success: function (results) {
              //alert("共查询到 " + results.length + " 条记录");
              // 循环处理查询到的数据
              //jiedanshu=results.length;
              for (var i = 0; i < results.length; i++) {
                  var object = results[i];
                  var danhao=object.get("danhao");
                  var zhuzhi=object.get("location");
                  var quhuoma=object.get("quhuoma");
                  var userphone=object.get("userphone");
                  var shyphone=object.get("songhuophone");
                  var yonghuming=object.get("username");
                  var time=object.updatedAt;
                  var guitaihao=object.get("guitaihao");
                  var linkurl=object.get("linkurl");
                  var louhao=object.get("number");

                  var id1="danhao"+ i.toString();
                  var id2="zhuzhi"+ i.toString();
                  var id3="quhuoma"+ i.toString();
                  var id4="userphone"+ i.toString();
                  var id5="shyphone"+ i.toString();
                  var id6="time"+ i.toString();
                  var id7="yonghuming"+ i.toString();
                  var id8="guitaihao"+ i.toString();
                  var id9="linkurl"+ i.toString();
                  var id10="louhao"+ i.toString();
                  var h=i+1;

                  sessionStorage.setItem(id1,danhao);
                  sessionStorage.setItem(id2,zhuzhi);
                  sessionStorage.setItem(id3,quhuoma);
                  sessionStorage.setItem(id4,userphone);
                  sessionStorage.setItem(id5,shyphone);
                  sessionStorage.setItem(id6,time);
                  sessionStorage.setItem(id7,yonghuming);
                  sessionStorage.setItem(id9,linkurl);
                  sessionStorage.setItem(id10,louhao);

                  sessionStorage.setItem("length",results.length);

                  if(guitaihao==null || guitaihao==undefined){
                      sessionStorage.setItem(id8,"货架");

                  }else {
                      sessionStorage.setItem(id8, "箱柜:"+guitaihao+"号柜");
                  }

                  var tb = document.getElementById("biaoge");
                  var nh = tb.insertRow();
                  var nl = nh.insertCell();
                  var innerTD = "<tr style='color: black' onclick='dianji(this)' id="+ h.toString()+"><td>"+sessionStorage.getItem(id1)+
                      "</td><td>"+sessionStorage.getItem(id7)+"</td><td>"+sessionStorage.getItem(id2)+"</td><td>"+
                      sessionStorage.getItem(id6)+ "</td></tr>";
                  $(innerTD).appendTo("#biaoge");


                  //chaxun2();
                  }

          },
          error: function (error) {
              alert("查询失败: " + error.code + " " + error.message);
          }
      })

    chaxun2();
  }

function chaxun2(){
    var name=localStorage.getItem("username");
    var QueRen = Bmob.Object.extend("All");
    var query = new Bmob.Query(QueRen);
    //var querenshu;
    //var quxiaoshu;
    //var jiedanshu;
    var weiqueren;
    query.equalTo("songhuoren",name);
    query.equalTo("queren","t");
    query.find({
        success: function (results) {
            //alert("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            //jiedanshu=results.length;
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var danhao=object.get("danhao");
                var zhuzhi=object.get("location");
                var quhuoma=object.get("quhuoma");
                var userphone=object.get("userphone");
                var shyphone=object.get("songhuophone");
                var yonghuming=object.get("username");
                var time=object.updatedAt;
                var guitaihao=object.get("guitaihao");
                var linkurl=object.get("linkurl");
                var louhao=object.get("number");

                var id1="danhaoa"+ i.toString();
                var id2="zhuzhia"+ i.toString();
                var id6="timea"+ i.toString();
                var id7="yonghuminga"+ i.toString();
                var id10="louhaoa"+ i.toString();
                var h=i+1;

                sessionStorage.setItem(id1,danhao);
                sessionStorage.setItem(id2,zhuzhi);
                sessionStorage.setItem(id6,time);
                sessionStorage.setItem(id7,yonghuming);
                sessionStorage.setItem(id10,louhao);


                var tb = document.getElementById("biaoge2");
                var nh = tb.insertRow();
                var nl = nh.insertCell();
                var innerTD = "<tr style='color: black'><td>"+sessionStorage.getItem(id1)+
                    "</td><td>"+sessionStorage.getItem(id7)+"</td><td>"+sessionStorage.getItem(id2)+"</td><td>"+
                    sessionStorage.getItem(id6)+ "</td></tr>";
                $(innerTD).appendTo("#biaoge2");
            }

        },
        error: function (error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    })
    chaxun3();
}

function  chaxun3(){
    var name=localStorage.getItem("username");
    var QueRen = Bmob.Object.extend("All");
    var query = new Bmob.Query(QueRen);
    //var querenshu;
    //var quxiaoshu;
    //var jiedanshu;
    var weiqueren;
    query.equalTo("songhuoren",name);
    query.equalTo("queren","q");
    query.find({
        success: function (results) {
            //alert("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            //jiedanshu=results.length;
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var danhao=object.get("danhao");
                var zhuzhi=object.get("location");
                var quhuoma=object.get("quhuoma");
                var userphone=object.get("userphone");
                var shyphone=object.get("songhuophone");
                var yonghuming=object.get("username");
                var time=object.updatedAt;
                var guitaihao=object.get("guitaihao");
                var linkurl=object.get("linkurl");
                var louhao=object.get("number");

                var id1="danhaob"+ i.toString();
                var id2="zhuzhib"+ i.toString();
                var id6="timeb"+ i.toString();
                var id7="yonghumingb"+ i.toString();
                var id10="louhaob"+ i.toString();
                var h=i+1;

                sessionStorage.setItem(id1,danhao);
                sessionStorage.setItem(id2,zhuzhi);
                sessionStorage.setItem(id6,time);
                sessionStorage.setItem(id7,yonghuming);
                sessionStorage.setItem(id10,louhao);


                var tb = document.getElementById("biaoge3");
                var nh = tb.insertRow();
                var nl = nh.insertCell();
                var innerTD = "<tr style='color: black'><td>"+sessionStorage.getItem(id1)+
                    "</td><td>"+sessionStorage.getItem(id7)+"</td><td>"+sessionStorage.getItem(id2)+"</td><td>"+
                    sessionStorage.getItem(id6)+ "</td></tr>";
                $(innerTD).appendTo("#biaoge3");
            }

        },
        error: function (error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    })
}
function dianji(obj){


    var l=parseInt(sessionStorage.getItem('length'));
    var idnow=obj.id;
    var i1="nrxuanze"+idnow;
    if(obj.style.color=="black") {
        //obj.style.color="blue";
        //sessionStorage.setItem(i1,"true");
        for (b = 1; b <= l; b++) {
            var i3 = "nrxuanze" + b.toString();
            if (b.toString() == idnow) {
                obj.style.color = "blue";
                sessionStorage.setItem(i3, "true");
                var id= b.toString();
                sessionStorage.setItem("dianjiid",id);
            } else {
                sessionStorage.setItem(i3, "false");
                var i4 =document.getElementById(b.toString());
                i4.style.color = "black";
            }
        }
    }
    //}else{
    //    sessionStorage.setItem(i1,"false");
    //    obj.style.color="black";
    //}
    var truenumber=0;

    for(a=1;a<=l;a++){
        var i2="nrxuanze"+ a.toString();
        if(sessionStorage.getItem(i2)=="true"){
            truenumber=truenumber+1;
        }

    }
    if(truenumber==0){
        var y1=document.getElementById("h2");
        var y2=document.getElementById("txqr");
        var y3=document.getElementById("wkdl");
        var y4=document.getElementById("zhongwu");
        var y5=document.getElementById("wanshang");
        var y6=document.getElementById("cwtx");

        y1.style.visibility="hidden";
        y2.style.visibility="hidden";
        y3.style.visibility="hidden";
        y4.style.visibility="hidden";
        y5.style.visibility="hidden";
        y6.style.visibility="hidden";

    }else{
        var y1=document.getElementById("h2");
        var y2=document.getElementById("txqr");
        var y3=document.getElementById("wkdl");
        var y4=document.getElementById("zhongwu");
        var y5=document.getElementById("wanshang");
        var y6=document.getElementById("cwtx");
        y6.style.visibility="visible";

        //y1.style.visibility="visible";
        y1.style.visibility="visible";
        y2.style.visibility="visible";
        y3.style.visibility="visible";
        y4.style.visibility="visible";
        y5.style.visibility="visible";

        //y4.style.visibility="visible";

    }
     var id2=parseInt(sessionStorage.getItem("dianjiid"))-1;
    var neirong="取件方式:"+sessionStorage.getItem("guitaihao"+id2.toString())+"   联系方式:"+sessionStorage.getItem("userphone"+id2.toString())+"    取货码:"+sessionStorage.getItem("quhuoma"+id2.toString())
        +"    具体住址:"+sessionStorage.getItem("zhuzhi"+id2.toString())+sessionStorage.getItem("louhao"+id2.toString())+
            "号楼"+"   校园卡:"+sessionStorage.getItem("url"+id2.toString())+"  备注:"+sessionStorage.getItem("beizhu"+id2.toString());
    var shuru=document.getElementById("div2");
    shuru.innerHTML=neirong;

}
function zhuxiao(){
    localStorage.setItem("username","");
    localStorage.setItem("password","");
    window.location.href="../index.html";
}

function zw()
{
    var id=parseInt(sessionStorage.getItem("dianjiid"))-1;
    var n1="userphone"+id.toString();
    var n2="shyphone"+id.toString();
    var userphone=sessionStorage.getItem(n1);
    var shyphone=sessionStorage.getItem(n2);
    var neirong="[上政代取快递服务]亲爱的用户您好,您的快递订单已经收到,快递员预计在中午给您送来.快递员:"+shyphone;
    //alert(neirong);
    if(confirm("预计中午送货,确认发送短信吗?")){
        Bmob.Sms.requestSms({"mobilePhoneNumber":userphone,"content": neirong} ).then(function(obj) {
            alert("发送成功"); //
        }, function(err){
            alert("发送失败,请手动发送");
        });
        //alert(userphone+neirong);
    }else{

    }

}

function ws(){
    var id=parseInt(sessionStorage.getItem("dianjiid"))-1;
    var n1="userphone"+id.toString();
    var n2="shyphone"+id.toString();
    var userphone=sessionStorage.getItem(n1);
    var shyphone=sessionStorage.getItem(n2);
    var neirong="[上政代取快递服务]亲爱的用户您好,您的快递订单已经收到,快递员预计在晚上给您送来.快递员:"+shyphone;
    //alert(neirong);
    if(confirm("预计晚上送货,确认发送短信吗?")){
        Bmob.Sms.requestSms({"mobilePhoneNumber":userphone,"content": neirong} ).then(function(obj) {
            alert("发送成功"); //
        }, function(err){
            alert("发送失败,请手动发送");
        });
        //alert(userphone+neirong);

    }else{

    }
}

function qr(){
    var id=parseInt(sessionStorage.getItem("dianjiid"))-1;
    var n1="userphone"+id.toString();
    var n2="shyphone"+id.toString();
    var userphone=sessionStorage.getItem(n1);
    var shyphone=sessionStorage.getItem(n2);
    var neirong="[上政代取快递服务]亲爱的用户您好,您的快递已经给您送达,请尽快确认订单.快递员:"+shyphone;
    //alert(neirong);
    if(confirm("确认提醒用户确认订单吗?")){
        Bmob.Sms.requestSms({"mobilePhoneNumber":userphone,"content": neirong} ).then(function(obj) {
            alert("发送成功"); //
        }, function(err){
            alert("发送失败,请手动发送");
        });
        //alert(userphone+neirong);

    }else{

    }
}

function kd(){
    var id=parseInt(sessionStorage.getItem("dianjiid"))-1;
    var n1="userphone"+id.toString();
    var n2="shyphone"+id.toString();
    var userphone=sessionStorage.getItem(n1);
    var shyphone=sessionStorage.getItem(n2);
    var neirong="[上政代取快递服务]主人主人,我已经上路啦,预计3分钟后到你楼下哦,请下来接我,如果你不在我只能先寄放在大叔/阿姨那里啦.快递员:"+shyphone;
    //alert(neirong);
    if(confirm("确认提醒用户快递即将到达吗?")){
        Bmob.Sms.requestSms({"mobilePhoneNumber":userphone,"content": neirong} ).then(function(obj) {
            alert("发送成功"); //
        }, function(err){
            alert("发送失败,请手动发送");
        });
        //alert(userphone+neirong);

    }else{

    }
}

function  cw(){
    var id=parseInt(sessionStorage.getItem("dianjiid"))-1;
    var n1="userphone"+id.toString();
    var n2="shyphone"+id.toString();
    var n3="danhao"+id.toString();
    var userphone=sessionStorage.getItem(n1);
    var shyphone=sessionStorage.getItem(n2);
    var danhao=sessionStorage.getItem(n3);
    var neirong="[上政代取快递服务]用户您好,单号:"+danhao+"的取货码/密码有错,请你检查以后重新发送给快递员,快递员:"+shyphone;
    //alert(neirong);
    if(confirm("确认提醒用户取货码/密码有错吗?")){
        Bmob.Sms.requestSms({"mobilePhoneNumber":userphone,"content": neirong} ).then(function(obj) {
            alert("发送成功"); //
        }, function(err){
            alert("发送失败,请手动发送");
        });
        //alert(userphone+neirong);

    }else{

    }
}

