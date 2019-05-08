function displaydate(){
    document.getElementById("myP").innerHTML = Date();
}

function displaydate_two(){
    let button = document.getElementsByTagName("button")[1];

    button.addEventListener("click",function(){
        document.getElementById("myP_two").innerHTML = Date();
    })
}

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function output(){
    var doc = document.getElementById("doc");
    document.write("<h1>这是一个标题</h1>");
    document.write("<p>这是一个段落</p>");
}

function bulb(){
    var bulb = document.getElementById("img").firstElementChild;
    bulb.addEventListener("click",function(){
        if(bulb.src.match("bulboff")){
            bulb.src = "images/pic_bulbon.gif";
        }else{
            bulb.src = "images/pic_bulboff.gif";
        }
        // alert((bulb.src.match("bulboff")));
    })
}

function changeStyle(){
    var para = document.getElementById("style").children[1];
    var btn = document.getElementById("style").children[2];
    btn.addEventListener("click",function(){
        console.log(typeof(para.style.color));
        if(para.style.color == ""){
            para.style.color = "#ff0000";
        }else if(para.style.color == "rgb(255, 0, 0)"){
            para.style.color = "#0000ff";
        }else{
            para.removeAttribute("style");
        }
    })
}

function validate_1(){
    var btn = document.getElementById("validate_1");
    btn.addEventListener("click",function(){
        var text = document.getElementById("text_1").value;
        if(text=="" || isNaN(text)){
            alert("不是数字!");
        }
    })
}

function validate_2(){
    var btn = document.getElementById("validate_2");
    btn.addEventListener("click",function(){
        var text = document.getElementById("text_2").value;
        // /... /之间为正则表达式, \s为空白字符 \s*为0个或者多个空白字符,g为修饰符,执行全局匹配,知道匹配到末尾,不会匹配成功就结束
        text= text.replace(/\s*/g,"");
        if(text=="" || isNaN(text)){
            alert("不是数字");
        }
    })
}

addLoadEvent(displaydate_two);
// addLoadEvent(output)
addLoadEvent(bulb);
addLoadEvent(changeStyle);
addLoadEvent(validate_1);
addLoadEvent(validate_2);