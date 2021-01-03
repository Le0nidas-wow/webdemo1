var addBtn = document.getElementById('addBtn');
var oUl = document.getElementsByTagName('ul')[0];
var upds = document.getElementsByClassName('update');
var dels = document.getElementsByClassName('delete');
addBtn.onclick = function() {
    var res = prompt('请输入要添加的内容'); //'aa' '' null
    if (res) {
        var oLi = document.createElement('li');
        oLi.innerHTML = res + '<span class="update">修改</span><span class="delete">删除</span>';
        oUl.appendChild(oLi);
    }
};
oUl.onclick = function(event) { //event事件对象
    event = event || window.event; //处理ie下兼容性
    var tar = event.target || event.srcElement; //事件源
    console.log(tar);
    if (tar.innerHTML === '修改') {
        var res = prompt('请输入修改的内容');
        if (res) {
            var oLi = document.createElement('li');
            oLi.innerHTML = res + '<span class="update">修改</span><span class="delete">删除</span>';
            oUl.replaceChild(oLi, tar.parentNode);
        }
    }
    if (tar.innerHTML === '删除') {
        if (confirm('确定要删除该项吗？')) {
            oUl.removeChild(tar.parentNode);
        }
    }
}