var ele=document.getElementById("icard")
var st=["dark","success","warning","secondary","primary","danger"]
c=0
function Apigetdata(){
    const http=new XMLHttpRequest();
    http.onload=()=>{
        let data =JSON.parse(http.responseText);
        console.log(data.data)
        for(const i of data.data){
            const div_col=document.createElement("div")
            div_col.className="col"
            const div_card=document.createElement("div")
            div_card.className=`card border-${st[c]} mb-3`
            div_card.style="max-width: 18rem;"
            const img_head=document.createElement("img")
            img_head.src=i.avatar
            img_head.className="card-img-top"
            const div_body=document.createElement("div")
            div_body.className=`card-body text-${st[c]}`
            const head=document.createElement("h5")
            head.innerText=`Hello, ${i.last_name} ${i.first_name}`
            head.className="card-title"
            const para1=document.createElement("p")
            para1.innerHTML=`<b>Email</b>: ${i.email}`
            para1.className="card-text"
            div_foot=document.createElement("div")
            div_foot.innerHTML=`User with id: ${i.id}`
            div_foot.className=`card-footer bg-transparent border-${st[c]}`
            div_body.appendChild(head)
            div_body.appendChild(para1)
            div_card.appendChild(img_head)
            div_card.appendChild(div_body)
            div_body.appendChild(div_foot)
            div_col.appendChild(div_card)
            ele.appendChild(div_col)
            c+=1
        }
    }
    http.open("GET","https://reqres.in/api/users?page=2");
    http.send()
}


/*<div class="col">
<div class="card border-success mb-3" style="max-width: 18rem;">
<img src="..." class="card-img-top" alt="...">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>
</div>*/