
(function localStorage1(){
    //检测浏览器是否支持localStorage1和sessionStorage对象
    if(typeof(Storage !== "undefined" )){
        console.log("该浏览器支持Storage对象");
        //存储 三种方法
        var storage = window.localStorage;
        //第一种
        storage.setItem("Tom","mycat");
        //第二种
        storage["Sam"] = "mypicture";
        //第三种
        storage.Mike = "myphone";
        //存储对象方法
        var obj = {
            name : "jack",
            age: 18,
            job: "engineer",
            home: "China",
            name1: "RFID",
            solid:[{one:"023gye10hc0001"},{two:"023gye10hc0001"},{three:"023gye10hc0001"}]
        }
        var localdata = JSON.stringify(obj);
        storage.obj = localdata;
        
        var d = document.getElementById("localSQL");
        var p = document.createElement("p");
        d.appendChild(p);
        p.innerHTML = JSON.parse(storage.obj).solid[1].two;
        
    }else{
        alert("浏览器不支持storage对象");
    }
})();

(function localStorage2(){
    if(typeof(Storage !== "undefined")){
        console.log("该浏览器支持Storage对象,too");
        let storage = window.localStorage;
        let count = document.getElementById("localcount");
        let localtext = document.getElementById("localcountdisplay"); 
        if(storage.clickcount){
            count.onclick = function(e){
                storage.clickcount = Number(storage.clickcount)+1;
                localtext.innerHTML = "你已经点击了按钮"+storage.clickcount+"次.";
            };
        }else{
            storage.clickcount = 1;
        };

    }

})();

//sessionStorage
(function SessionStorage(){
    if(typeof(Storage !== "undefine")){
        console.log("该浏览器支持Storage对象,three");
        let storage = window.sessionStorage;
        let count = document.getElementById("sessioncount");
        let sessiontext = document.getElementById("sessioncountdisplay");
        if(storage.clickcount){
            count.onclick = function(){
                storage.clickcount = Number(storage.clickcount)+1;
                sessiontext.innerHTML = "你已经点击了按钮"+storage.clickcount+"次."; 
            };
        }else{
            storage.clickcount = 1;
        };
    };
})();

//IndexDB
function IndexDB(name){
    var request = window.indexedDB.open(name);
    request.onerror = function(e){
        console.log("open error!");
    }
    request.onsuccess = function(e){
        myDB.db = e.target.result;
    }
}

var myDB={
    name: "test",
    version : 1,
    db: [{1:"023gye10hc0001"},{2:"023gye10hc0001"},{3:"023gye10hc0001"}]
}

window.onload = IndexDB(myDB);
