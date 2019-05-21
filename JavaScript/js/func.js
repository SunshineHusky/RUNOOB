function myFunc(a,b){
    this.firstnumber = a;
    return a*b
}

document.getElementById("demo").innerHTML = myFunc(5,7);

var x = function(a,b){
    console.log(arguments.length)
    return a*b
};

document.getElementById("demo_2").innerHTML = myFunc.toString();

var child = document.createElement("p");
document.getElementById("demo").appendChild(child);
document.getElementById("demo").children[0].innerHTML = x(3,5);

(function(){
    let Div = document.createElement("div")
    Div.id = "div_1";
    //append是试用方法
    document.getElementById("demo").append(Div);
    document.getElementById("div_1").innerHTML = "hello world!";
})()

const ES6_x = (x,y) => x*y;
console.log(ES6_x(7,8));


//函数对参数不进行校验
function myFunc_2(parm1,parm2){
    if(parm2 == undefined){
        console.log(parm2);
        parm2 = 0;
    }
    return parm1 + parm2;
}

console.log(myFunc_2(99));

//ES5写法

function myFunc_3(x,y){
    y = y || 4;
    return x + y;
}

console.log(myFunc_3(6));

//ES6写法

function myFunc_4(x,y=10){
    return x*y;
};

console.log(myFunc_4(5));


function findMax(){
    let i, max = arguments[0];
    let sum = max;
    if(arguments.length<2){
        return max,sum;
    }else{
        for(i=1;i<arguments.length;i++){
            sum += arguments[i];
            if(arguments[i] > max){
                max = arguments[i];
            }
        }
        return max,sum;
    }
}

let x_max = findMax(10,0,30,500,666,11,6666,9999);  
console.log(x_max);

//四种调用函数方式
myFunc(3,4);
window.myFunc(3,4); //类似于在对象中调用

var x_1 = new myFunc(3,4);    //通过构造函数调用
console.log(x_1.firstnumber);

//使用闭包制作计数器
var add = (function(){
    let count = 0;
    return function(){
        return (count += 1);
    }
})()

function add_2(){
    document.getElementById("demo_3").innerHTML = add();
}


