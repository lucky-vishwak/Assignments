var arr=[
    {id:100,name:"ram",level:5,work:"intern"},
    {id:101,name:"vishal",level:4,work:"intern"},
    {id:102,name:"sara",level:5,work:"intern"},
    {id:103,name:"gopal",level:6,work:"intern"},
    {id:104,name:"lucky",level:2,work:"intern"}
]
function isalready(details){
    for(let user of arr){
        if(user.name===details.name){
            return false
        }
    }
    return true
}
function add_emp(details){
    if(!isalready(details)){
        return "already avaliable"
    }
    else{
        arr.push(details)
        console.log(arr)
        return "successfully added"
    }
}

function update_emp(id,details){
    for(var us of arr){
        if(us.id===id){
            for(var i in us){
                us[i]=details[i]
            }
            console.log(arr)
            return "successfully updated"
        }
    }
    return "user not found"
}


function remove_emp(details){
    for(var i in arr){
        if(arr[i].id==details.id){
            arr.splice(i,1)
            console.log(arr)
            return "successfully deleted"
        }
    }
    return "user not found"
}

function filter_emp(val){
    if(val=="sort"){
        arr.sort((a,b)=>(a.name<b.name ? 1:-1))
        return arr
    }
    else if(val=="level"){
        var na=[]
        for(var obj of arr){
            if(obj.level>=5){
                na.push(obj.name)
            }
        }
        return na
    }
    else{
        return "enter correct filter"
    }
}

console.log(add_emp({id:105,name:"hero",level:6,work:"intern"}))
//console.log(remove_emp({id:103,name:"gopal",level:6,work:"intern"}))
//console.log(update_emp(105,{id:105,name:"hero",level:6,work:"ft"}))
//console.log(filter_emp("sort"))