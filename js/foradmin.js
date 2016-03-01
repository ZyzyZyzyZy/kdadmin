/**
 * Created by zhangyue on 16/2/20.
 */
window.onload=
    function () {

        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
        window.renshu=2;
        window.startdata="2016-02-19 21:00:00";
        window.enddata="2017-02-25 21:00:00";
        sessionStorage.setItem("n1","张越");
        sessionStorage.setItem("n2","柏朝玲");
        sessionStorage.setItem("n3","马秀云");


        if(localStorage.getItem("username")=="admin"){
            chaxun();
        }else {
            window.location.href="../index.html";
        }

        //localStorage.clear();
    }

function chaxun(){
    var t=document.getElementById("time");
    t.innerHTML="详细信息   统计自:"+startdata+"至"+enddata;

    var h=document.getElementById("rs");
    var user=0;
    var sclk;

    var GameScore = Bmob.Object.extend("users");
    var query = new Bmob.Query(GameScore);
// 查询所有数据
    query.find({
        success: function(results) {
            for(a=1;a<results.length;a++) {


                // 循环处理查询到的数据
                user = Math.ceil(results.length);
                sessionStorage.setItem("usn", user);
            }
        },
        error: function(error) {
        }
    });

    var GameScore2 = Bmob.Object.extend("linkurl");
    var query2 = new Bmob.Query(GameScore2);
// 查询所有数据
    query2.find({
        success: function(results2) {
            // 循环处理查询到的数据
            sclk=results2.length;
            sessionStorage.setItem("slk",sclk);
        },
        error: function(error) {
        }
    });

    h.innerHTML="用户数:"+sessionStorage.getItem("usn")+"<br>"+"上传校园卡人数:"+sessionStorage.getItem("slk");

    people1();
}

function people1(){
    var name="张越";
    var QueRen = Bmob.Object.extend("All");
    var query = new Bmob.Query(QueRen);
    var querenshu;
    var quxiaoshu;
    var jiedanshu;
    var weiqueren;
    query.equalTo("songhuoren",name);
    query.find({
        success: function (results) {
            //alert("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            //jiedanshu=results.length;

            for (var i = 0; i < results.length; i++) {


                var object = results[i]
                localStorage.setItem("data", results[i].updatedAt);

                if (localStorage.getItem("data") > startdata && localStorage.getItem("data")<enddata) {

                    if (object.get("queren") == "f") {

                        if (weiqueren == null) {
                            weiqueren = 1;
                        } else {
                            weiqueren = weiqueren + 1;
                        }
                        //alert("d");

                    }
                    if(jiedanshu==null){
                        jiedanshu=1;
                    }else {
                        jiedanshu=jiedanshu+1;
                    }
                    if (object.get("queren") == "t") {
                        if (querenshu == null) {
                            querenshu = 1;
                        } else {
                            querenshu = querenshu + 1;
                        }
                    }
                    if (object.get("queren") == "q") {
                        if (quxiaoshu == null) {
                            quxiaoshu = 1;
                        } else {
                            quxiaoshu = quxiaoshu + 1;
                        }
                    }

                }
            }
            if(quxiaoshu==null)
            {
                quxiaoshu=0;
            }
            if(querenshu==null){
                querenshu=0;
            }
            if(jiedanshu==null){
                jiedanshu=0;
            }
            if(weiqueren==null){
                weiqueren=0;
            }
            localStorage.setItem("qx",quxiaoshu);
            localStorage.setItem("qr",querenshu);
            localStorage.setItem("jd",jiedanshu);
            localStorage.setItem("wq",weiqueren);
        },
        error: function (error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    })
    var tb = document.getElementById("biaoge");
    var nh = tb.insertRow();
    var nl = nh.insertCell();
    var innerTD = "<tr id='1' onclick='dianji(this)'style='color: black'"+"><td>"+"张越"+"</td><td>"+localStorage.getItem("jd")+"</td><td>"+localStorage.getItem("wq")+"</td><td>"+localStorage.getItem("qr")+"</td><td>"+
        localStorage.getItem("qx")+ "</td></tr>";
    $(innerTD).appendTo("#biaoge");
    people2();

}


function people2(){
    var name="柏朝玲";
    var QueRen = Bmob.Object.extend("All");
    var query = new Bmob.Query(QueRen);
    var querenshu;
    var quxiaoshu;
    var jiedanshu;
    var weiqueren;
    query.equalTo("songhuoren",name);
    query.find({
        success: function (results) {
            //alert("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            jiedanshu=results.length;
            for (var i = 0; i < results.length; i++) {

                var object = results[i];
                localStorage.setItem("data", results[i].updatedAt);

                if (localStorage.getItem("data") > startdata && localStorage.getItem("data") < enddata) {
                    if (object.get("queren") == "f") {
                        if (weiqueren == null) {
                            weiqueren = 1;
                        } else {
                            weiqueren = weiqueren + 1;
                        }
                        //alert("d");
                    }
                    if (object.get("queren") == "t") {
                        if (querenshu == null) {
                            querenshu = 1;
                        } else {
                            querenshu = querenshu + 1;
                        }
                    }
                    if (object.get("queren") == "q") {
                        if (quxiaoshu == null) {
                            quxiaoshu = 1;
                        } else {
                            quxiaoshu = quxiaoshu + 1;
                        }
                    }

                }
            }
            if(quxiaoshu==null)
            {
                quxiaoshu=0;
            }
            if(querenshu==null){
                querenshu=0;
            }
            if(jiedanshu==null){
                jiedanshu=0;
            }
            if(weiqueren==null){
                weiqueren=0;
            }
            localStorage.setItem("qx2",quxiaoshu);
            localStorage.setItem("qr2",querenshu);
            localStorage.setItem("jd2",jiedanshu);
            localStorage.setItem("wq2",weiqueren);
        },
        error: function (error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    })
    var tb = document.getElementById("biaoge");
    var nh = tb.insertRow();
    var nl = nh.insertCell();
    var innerTD = "<tr id='2' onclick='dianji(this)'style='color: black'"+"><td>"+"柏朝玲"+"</td><td>"+localStorage.getItem("jd2")+"</td><td>"+localStorage.getItem("wq2")+"</td><td>"+localStorage.getItem("qr2")+"</td><td>"+
        localStorage.getItem("qx2")+ "</td></tr>";
    $(innerTD).appendTo("#biaoge");
    people3();
}


function people3(){
    var name="马秀云";
    var QueRen = Bmob.Object.extend("All");
    var query = new Bmob.Query(QueRen);
    var querenshu;
    var quxiaoshu;
    var jiedanshu;
    var weiqueren;
    query.equalTo("songhuoren",name);
    query.find({
        success: function (results) {
            //alert("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            jiedanshu=results.length;
            for (var i = 0; i < results.length; i++) {

                var object = results[i];
                localStorage.setItem("data", results[i].updatedAt);

                if (localStorage.getItem("data") > startdata && localStorage.getItem("data") < enddata) {
                    if (object.get("queren") == "f") {
                        if (weiqueren == null) {
                            weiqueren = 1;
                        } else {
                            weiqueren = weiqueren + 1;
                        }
                        //alert("d");
                    }
                    if (object.get("queren") == "t") {
                        if (querenshu == null) {
                            querenshu = 1;
                        } else {
                            querenshu = querenshu + 1;
                        }
                    }
                    if (object.get("queren") == "q") {
                        if (quxiaoshu == null) {
                            quxiaoshu = 1;
                        } else {
                            quxiaoshu = quxiaoshu + 1;
                        }
                    }

                }
            }
            if(quxiaoshu==null)
            {
                quxiaoshu=0;
            }
            if(querenshu==null){
                querenshu=0;
            }
            if(jiedanshu==null){
                jiedanshu=0;
            }
            if(weiqueren==null){
                weiqueren=0;
            }
            localStorage.setItem("qx3",quxiaoshu);
            localStorage.setItem("qr3",querenshu);
            localStorage.setItem("jd3",jiedanshu);
            localStorage.setItem("wq3",weiqueren);
        },
        error: function (error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    })
    var tb = document.getElementById("biaoge");
    var nh = tb.insertRow();
    var nl = nh.insertCell();
    var innerTD = "<tr id='3' onclick='dianji(this)'style='color: black'"+"><td>"+"马秀云"+"</td><td>"+localStorage.getItem("jd3")+"</td><td>"+localStorage.getItem("wq3")+"</td><td>"+localStorage.getItem("qr3")+"</td><td>"+
        localStorage.getItem("qx3")+ "</td></tr>";
    $(innerTD).appendTo("#biaoge");
    //people3();
}

//
//function chongzhi(){
////
//    var GameScore = Bmob.Object.extend("danhao");
//    var gameScore = new GameScore();
//    gameScore.set("dh", 0);
//
////添加数据，第一个入口参数是null
//    gameScore.save(null, {
//        success: function(gameScore) {
//            // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
//            alert('添加数据成功，返回的objectId是：' + gameScore.id);
//        },
//        error: function(gameScore, error) {
//            // 添加失败
//            alert('添加数据失败，返回错误信息：' + error.description);
//        }
//    });
//}

function dianji(obj){



    var tb = document.getElementById("biaoge2");
    var nh = tb.insertRow();
    var nl = nh.insertCell();
    tb.reset;




    var idnow=obj.id;
    var i1="n"+idnow;
    var name=sessionStorage.getItem(i1);
    var qr="f";
    var QueRen = Bmob.Object.extend("All");
    var query = new Bmob.Query(QueRen);
    query.equalTo("songhuoren",name);
    query.equalTo("queren",qr);
    query.find({
        success: function(results) {
            //alert("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
                var object = results[i]
                var shyname=object.get("songhuoren");
                var shyphone=object.get("songhuophone");
                var danhao=object.get("danhao");
                var yonghuming=object.get("username");
                var phone=object.get("userphone");
                sessionStorage.setItem("xiadanshijian",object.updatedAt);
                var shijian=object.timeout;
                var id=object.id;
                var tb=document.getElementById("biaoge2");
                var nh=tb.insertRow();
                var nl=nh.insertCell();
                var h=i+1;
                var innerTD = "<tr><td>"+danhao+"</td><td>"+yonghuming+"</td><td>"+phone+"</td><td>"+sessionStorage.getItem("xiadanshijian")+"</td></tr>"
                $(innerTD).appendTo("#biaoge2");


            }

        },
        error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    });

}/**
 * Created by zhangyue on 16/2/23.
 */

function zhuxiao(){
    localStorage.setItem("username","");
    localStorage.setItem("password","");
    window.location.href="../index.html";
}