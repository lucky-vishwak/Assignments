var arr=[10,20,30,"string 1"]
console.log(arr);
arr.push(1);
arr.pop();
console.log(arr);
var student={
    "name" : "lucky",
    "address" : "hno",
    "code" : "220"
}
student['name']="ram"
console.log(student["name"])
var new_obj={...student,"age":30}
console.log(new_obj)
function fn(data){
    if (data==0){
        return 0
    }
    return data+fn(data-1)
}
console.log(fn(5))

//EMAIL_VALIDATION
function email_valid(email){
    if(email.includes("@gmail.com")){
        console.log("true");
    }
}
function valid(email){
    console.log(typeof(email))
    var a=email.split("@");
    if(a.length<2){
        return fasle
    }
    else{
        var m=a[1].split(".")
        if(m.length<2){
            return false
        }
        else if(m[0].length<3){
            return false
        }
        else{
            return true
        }
    }
}
console.log(email_valid("name@gmail.com"))
console.log(valid("name@gmailcom"))
arr=[10,20,30]



//FOREACH
arr.forEach(function(ele,key){
    console.log(ele,key)
})




var arr1={
    "name":"lucky",
    "address":"hno"
}



//FORIN
for(var key in arr1){
    console.log(key,arr1[key])
}



//FOROF
var arr2=[10,20,"lucky"]
for(var i of arr2){
    console.log(i)
}


//Functions
const a=function(){
    console.log("helloworld");
}
a()
var obj={
    name:"lucky",
    time:"10:00",
    work:function(){
        console.log("Done!")
    }
}
obj.work()