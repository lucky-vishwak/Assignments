const http=new XMLHttpRequest()
var ele=document.getElementById("hai")
function master(){
    http.onload=function(){
        var data=JSON.parse(http.responseText)
    }
    http.open("GET", "https://covid-193.p.rapidapi.com/statistics");
    http.setRequestHeader("X-RapidAPI-Key", "c5af85b0bcmsh979eb3c4ebb22e7p1c1169jsnebb2d13b2325");
    http.setRequestHeader("X-RapidAPI-Host", "covid-193.p.rapidapi.com");
    http.send();
}
master()

function cases(){
        data=JSON.parse(http.responseText)
        ele.innerHTML=``
        for(const i of data.response){
            div_col=document.createElement("div")
            div_col.className="col m-3"
            div_col.innerHTML=`<div class="card">
            <div class="card-body">
            <h6 class="card-title"><span class="text-info">Country Name:</span> ${i.country}</h6>
            <p class="card-text text-primary">No. of Cases:${i.cases.total}</p>
            </div>
        </div>`
        ele.appendChild(div_col)    
    }
}

function tests(){
        const data=JSON.parse(http.responseText)
        ele.innerHTML=``
        for(const i of data.response){
            div_col=document.createElement("div")
            div_col.className="col m-3"
            div_col.innerHTML=`<div class="card">
            <div class="card-body">
            <h6 class="card-title"><span class="text-info">Country Name:</span> ${i.country}</h6>
            <p class="card-text text-warning">No. of Tests:${i.tests.total}</p>
            </div>
        </div>`
        ele.appendChild(div_col)    
    }
}

function deaths(){
    ele.innerHTML=``
        const data=JSON.parse(http.responseText)
        for(const i of data.response){
            div_col=document.createElement("div")
            div_col.className="col m-3"
            div_col.innerHTML=`<div class="card">
            <div class="card-body">
            <h6 class="card-title"><span class="text-info">Country Name:</span> ${i.country}</h6>
            <p class="card-text text-danger">No. of Deaths:${i.deaths.total}</p>
            </div>
        </div>`
        ele.appendChild(div_col)    
    }
}

function search(){
    ele.innerHTML=``
    const data=JSON.parse(http.responseText)
    var val=document.getElementById("serach1").value
    val=val.toLowerCase()
    const temp=[]
    console.log(data)
    for(const ele of data.response){
        var x=ele.country
        x=x.toLowerCase()
        if(x.indexOf(val)!=-1){
            temp.push(ele)
        }
    }
    for(const i of temp){
        div_col=document.createElement("div")
        div_col.className="col m-3"
        div_col.innerHTML=`<div class="card">
        <div class="card-body">
        <h6 class="card-title"><span class="text-info">Country Name:</span> ${i.country}</h6>
        <p class="card-text text-danger">No. of Deaths:${i.deaths.total}</p>
        <p class="card-text text-danger">No. of Tests:${i.tests.total}</p>
        <p class="card-text text-danger">No. of Cases:${i.cases.total}</p>
        </div>
    </div>`
    ele.appendChild(div_col)    
    }
}