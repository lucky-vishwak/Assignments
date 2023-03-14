var a=1;
var users=[]
var id=1
function submit_form(){
    var form=document.forms["my_form"]
    var user={}
    var username=form.username.value
    if(username.length<4){
        document.getElementById("usernamet").innerHTML=
        `<p class="alert alert-danger my-1 p-2" role="alert">username length is too short</p>`
    }
    else{
        document.getElementById("usernamet").innerHTML=
        `<p class="alert alert-success my-1 p-2" role="alert">all right</p>`
        user['username']=username
    }
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=form.email.value
    
    if(!email.match(mailFormat)){
        document.getElementById("emailt").innerHTML=
        `<p class="alert alert-danger my-1 p-2" role="alert">Email format is worng</p>`
    }
    else{
        document.getElementById("emailt").innerHTML=
        `<p class="alert alert-success my-1 p-2" role="alert">all right</p>`
        user['email']=email
    }

    var pass=form.pass.value
    var conpass=form.conpass.value
    if(pass.length<4){
        document.getElementById("passt").innerHTML=
        `<p class="alert alert-danger my-1 p-2" role="alert">password is too short</p>`
    }
    else if(pass!=conpass){
        document.getElementById("passt").innerHTML=
        `<p class="alert alert-danger my-1 p-2" role="alert">password and confirm  password are not same</p>`
    }
    else{
        document.getElementById("passt").innerHTML=
        `<p class="alert alert-success my-1 p-2" role="alert">all right</p>`
        user['password']=pass
    }
    user['date']=form.date.value
    user['state']=form.state.value
    if(form.male.checked){
        user['gender']='male'
    }
    else{
        user['gender']='female'
    }
    if(!user.username || !user.password || !user.email){
        window.alert("enter details correctly")
    }
    else{
        user["id"]=id;
        console.log(user)
        users.push(user)
        console.log(users)
        id+=1
    }
}