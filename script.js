console.log("hi");
var c=0;
r=document.querySelector(".result");
chance=document.querySelector(".chance");
const boxs=document.querySelectorAll('.box');
addEventListener("click",fun);
function fun(e){
    if(r.innerText=="WIN : O" || r.innerText=="WIN : X" || c==9){
        r.innerText="reseting..";
        setTimeout(() => {  window.location.reload(); }, 1500);
        
        return;

    }
    

    }
    // console.log(e.target);
    if(e.target.tagName=='DIV'){
        if(c%2!=0){
        r.innerText="PLAY : O";
    }
    else{
        r.innerText="PLAY : X";
        if(c%2==0){
            if(e.target.innerText==""){
                e.target.innerText+="O";
                
                c+=1;
            }
        }
        else{
            if(e.target.innerText==""){
                e.target.innerText+="X";
                
                c+=1;
            }
        }
        
    }
    if(e.target.tagName=='BUTTON'){
        window.location.reload()
        // boxs.forEach(fun2);
        // function fun2(e){
        //     e.innerText="";
        // }
    }
    
    
    const b1=document.querySelector('.b1').innerText;
    const b2=document.querySelector('.b2').innerText;
    const b3=document.querySelector('.b3').innerText;
    const b4=document.querySelector('.b4').innerText;
    const b5=document.querySelector('.b5').innerText;
    const b6=document.querySelector('.b6').innerText;
    const b7=document.querySelector('.b7').innerText;
    const b8=document.querySelector('.b8').innerText;
    const b9=document.querySelector('.b9').innerText;
    
    if(b1==b2 && b2==b3 && b1!=""){
        r.innerText=`WIN : ${b1}`;
    }
    if(b4==b5 && b5==b6 && b4!==""){
        r.innerText=`WIN : ${b4}`;
    }
    if(b7==b8 && b8==b9 && b7!==""){
        r.innerText=`WIN : ${b7}`;
    }
    if(b1==b4 && b4==b7 && b1!==""){
        r.innerText=`WIN : ${b1}`;
    }
    if(b2==b5 && b5==b8 && b2!==""){
        r.innerText=`WIN : ${b2}`;
    }
    if(b3==b6 && b6==b8 && b3!==""){
        r.innerText=`WIN : ${b3}`;
    }
    if(b1==b5 && b5==b9 && b1!==""){
        r.innerText=`WIN : ${b1}`;
    }
    if(b3==b5 && b5==b7 && b3!==""){
        r.innerText=`WIN : ${b3}`;
    }


}

