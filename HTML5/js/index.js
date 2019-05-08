//拖放事件
var drap = document.getElementById("drap");
var drop = document.getElementById("drop");
var drop1 = document.getElementById("drop1");

drap.ondragstart = function(e){
    var e = event || window.event;   //兼容IE event对象写法
    e.dataTransfer.setData("Text",e.target.id);   //第一个参数只能为 Text(包含文字和图片)或者URL  DataTransfer用于保存拖动对象的数据
}

//注意,在调用drop之前需要调用ondragover方法,使用DOM0事件要加on 使用DOM2级不需要加on
drop.addEventListener("dragover",dragoverfunc,false);
drop.addEventListener("drop",dropfunc,false);
drop1.addEventListener("dragover",dragoverfunc,false);
drop1.addEventListener("drop",dropfunc,false);

function dropfunc(e){
    var e = event || window.event;   //兼容IE event对象写法
    e.preventDefault();     //调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
    var data = e.dataTransfer.getData("Text");      //通过 dataTransfer.getData("Text") 方法获得被拖的数据id
    e.target.appendChild(document.getElementById(data));      //ev.target是触发事件的元素对象  被拖数据是被拖元素的 id ("drag1")
};

function dragoverfunc(e){
    var e = event || window.event;   //兼容IE event对象写法
    e.preventDefault();  //允许放下元素
};

//DOM0级事件绑定
// drop.ondragover = function(e){
//     e.preventDefault(); 
// };

// drop.ondrop = function(e){
//     e.preventDefault();  
//     var data = e.dataTransfer.getData("Text");   
//     e.target.appendChild(document.getElementById(data));  
// }

// drop1.ondragover = function(e){
//     e.preventDefault(); 
// };

// drop1.ondrop = function(e){
//     e.preventDefault();  
//     var data = e.dataTransfer.getData("Text");   
//     e.target.appendChild(document.getElementById(data));  
// }


var x=document.getElementById("Demo");
var y=document.getElementById("BUTTON");
y.addEventListener("click",getlocation)

function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition); //navigator.geolocation.getCurrentPosition(success, error, options)
    }else{
        x.innerHTML = "该浏览器不支持获取地理位置";
    }
}

function showPosition(position){
    x.innerHTML = "纬度" + position.coords.latitude + "<br>经度" + position.coords.longitude;

}