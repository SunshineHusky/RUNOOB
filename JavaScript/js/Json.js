var JSONObject = {
    "name" : "Runoob",
    "url" : "http://www.runoob.com",
    "solgan" : "学的不仅是技术,而是梦想",
    "sites" : [ 
        {"name" : "菜鸟教程", "url" : "www.runoob"},
        {"name" : "百度一下,你就知道", "url" : "www.baidu.com"},
        {"name" : "微博", "url" : "www.weibo.com"}
    ]
};

document.getElementById("jname").innerHTML = JSONObject.name;
document.getElementById("jaddress").innerHTML = JSONObject.url;
document.getElementById("jsolgan").innerHTML = JSONObject.solgan;

console.log(JSONObject.sites);

function Render(){
    let table = document.getElementById("table_1");
    let tr = table.getElementsByTagName("tr");
    let data = JSONObject.sites;
    console.log(table);
    console.log(tr);
    for(let i=0; i<tr.length-1; i++){
        console.log(i);
        tr[i+1].children[0].innerHTML = data[i].name;
        tr[i+1].children[1].innerHTML = data[i].url;
    }
    for(x in data){
        console.log(data[x].name,data[x].url);
    }
}

function Demo1(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            myObj = JSON.parse(this.responseText);
            document.getElementById("demo_1").innerHTML = myObj.name;
        }
    }
    xmlhttp.open("GET","https://localhost/try/ajax/json_demo.txt",true);
    xmlhttp.send();
}

function clickFunc(){
    var btn = document.getElementById("btn");
    var btn_2 = document.getElementById("btn_2");
    btn.addEventListener("click",function(){
        Render();
    })
    btn_2.addEventListener("click",function(){
        Demo1();
    })
}

window.onload = clickFunc();

