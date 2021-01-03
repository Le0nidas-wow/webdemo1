 //消除cookie的函数
 function logout() {
     document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
     location.reload(); //刷新页面
 }
 //获取cookie的函数
 function getCookie(cname) {
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for (var i = 0; i < ca.length; i++) {
         var c = ca[i].trim();
         if (c.indexOf(name) == 0) {
             return c.substring(name.length, c.length);
         }
     }
     return "";
 }
 //检测cookie函数
 function checkCookie() {
     var user = getCookie("username"); //获取cookie
     if (user.toString() == "") {
         //若用户为空的事件
     } else {
         document.getElementById("a1").remove(); //删除id为a1的标签
         document.getElementById("mine").innerHTML = user; //将用户插入到块里面
     }
 }

 function setCookie(cname, cvalue, exdays) {
     var d = new Date();
     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
     var expires = "expires=" + d.toGMTString();
     document.cookie = cname + "=" + cvalue + "; " + expires;
 }

 function setting() {
     var user = getCookie("username");
     setCookie("username", user, 30);
 }