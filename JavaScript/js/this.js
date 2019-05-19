// "use strict";

var name = "The Window's name"
var person = {
    firstname : "Jhon",
    lastname : "Doe",
    id : "5556",
    fullname : function(){
        return this.firstname + " "+ this.lastname;
    },
    getNameFunc : function(){
        return function(){
            return this.name;
        }
    },
    getThisFunc : function(){
        return this;
    }
}

var person1 = {
    firstname: "Jack",
    lastname: "chen",
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}

var x = this;

function Person(){};
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
}

function Person_3(){};
Person_3.prototype = {
    name : "James",
    age : "35",
    job : "Machine Engineer",
    sayName : function(){
        alert(this.name)
    }
}

// y = 3.14;  //严格模式需要使用 var 来进行声明全局变量
function myfunction(){
    console.log(person.firstname);
    console.log(person["lastname"]);
    console.log(person.id);
    console.log(person.fullname());
    console.log(x);
    // document.write(x);
    //使用严格模式时,this无法指向全局对象
    console.log(person.getNameFunc()());
    document.getElementById("demo1").innerHTML = person.getThisFunc();

    //使用apply call bind改变this指向
    console.log(person1.fullname.apply(person));  //输出Jhoe Doe
    console.log(person.fullname.call(person1));   //输出Jack chen
    var object = person.fullname.bind(person1);
    console.log(object);    //输出function
    console.log(object()); // 输出Jack chen

    //使用原型模式1
    var person2 = new Person();
    console.log(person2.name,person2.age,person2.job);
    console.log(person2.sayName());
    //使用原型模式2
    var person3 = new Person_3();
    console.log(person3.name,person3.age,person3.job);
    person3.sayName();
    
}