var X=0
var O=0
var loss=
[`<span style='font-size:125px;'>&#128531;</span>`,
`<span style='font-size:125px;'>&#128534;</span>`,
`<span style='font-size:125px;'>&#128545;</span>`]
var won=
[`<span style='font-size:125px;'>&#129325;</span>`,
`<span style='font-size:125px;'>&#128170;</span>`,
`<span style='font-size:125px;'>&#128165;</span>`]
var load=true
var c=0
var arr=[0,0,0,0,0,0,0,0,0]
function reset(){
    c=0
    load=true
    for(var i=0;i<9;i++){
        document.getElementById(`${i}`).innerText="."
    }
    arr=[0,0,0,0,0,0,0,0,0]
}
function test(){
    if(arr[0]==arr[1] && arr[1]==arr[2]){
        return arr[0]
    }
    else if(arr[3]==arr[4] && arr[3]==arr[5]){
        return arr[3]
    }
    else if(arr[6]==arr[7] && arr[7]==arr[8]){
        return arr[6]
    }
    else if(arr[0]==arr[3] && arr[3]==arr[6]){
        return arr[0]
    }
    else if(arr[1]==arr[4] && arr[4]==arr[7]){
        return arr[1]
    }
    else if(arr[2]==arr[5] && arr[5]==arr[8]){
        return arr[2]
    }
    else if(arr[0]==arr[4] && arr[4]==arr[8]){
        return arr[0]
    }
    else if(arr[2]==arr[4] && arr[4]==arr[6]){
        return arr[2]
    }
    else{
        return false
    }
}

function game(x){
    if(arr[x]!=0){
        document.getElementById("result").innerHTML=`<b><p class="alert alert-success border border-4 rounded border-success">ALREADY OCCUPIED BY ${arr[x]}</p></b>`
    }
    else{
        if(load){
            document.getElementById(`${x}`).innerText="X"
            arr[x]="X"
            c+=1
        }
        else{
            document.getElementById(`${x}`).innerText="O"
            arr[x]="O"
            c+=1
        }
        load=!load
    }
    m=test()
    if(m){
        document.getElementById("result").innerHTML=`<b><p class="alert alert-success border border-4 rounded border-success">GAME WON BY ${m}</p></b>`
        if(m=="X"){
            document.getElementById("score1e").innerHTML=won[Math.floor(Math.random()*3)]
            document.getElementById("score2e").innerHTML=loss[Math.floor(Math.random()*3)]
            X+=5
        }
        else{
            document.getElementById("score1e").innerHTML=loss[Math.floor(Math.random()*3)]
            document.getElementById("score2e").innerHTML=won[Math.floor(Math.random()*3)]
            O+=5
        }
        document.getElementById("score1").innerText=X
        document.getElementById("score2").innerText=O
        reset()
    }
    else{
        if(c==9){
            document.getElementById("result").innerHTML=`<b><p class="alert alert-success border border-4 rounded border-success ">GAME WAS TIE</p></b>`
            reset()
        }
    }
}

document.getElementById("12").addEventListener("click",()=>{
    X=0
    O=0
    document.getElementById("score1e").innerText=""
    document.getElementById("score2e").innerText=""
    document.getElementById("score1").innerText=X
    document.getElementById("score2").innerText=O
    document.getElementById("result").innerHTML=`<b><p class="alert alert-success border border-4 rounded border-success">NEW GAME</p></b>`
    reset()
})

document.addEventListener("click",(event)=>{
    var x=event.target.id
    if(x>=0 && x<9){
        game(x)
    }
})