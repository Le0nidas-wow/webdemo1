function check() {
    var account = fm1.account.value; //获取账号值
    var password = fm1.password.value; //获取密码
    if (account == "") {
        showMsg("请输入用户名");
    } else {
        if (password == "") {
            showMsg("请输入密码");
        } else {
            if (account > 123) {
                if (password == "123") {
                    setCookie("username", account, 30); //调用设置cookie的方法
                    window.location.href = "index.html"; //跳转
                } else {
                    showMsg("密码错误");
                }
            } else {
                showMsg("用户名错误");
            }
        }
    }
}
//显示提示信息函数
function showMsg(msg) {
    document.getElementById("Mesg").innerHTML = msg;
}
//设置cookie函数
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}