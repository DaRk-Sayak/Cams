const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');

name.addEventListener('blur',()=>{

    let regex= /([0-9][A-Z][a-z]){0,10}/
    let str=name.value;
    console.log(name,str);

})

email.addEventListener('blur',()=>{
    
})

phone.addEventListener('blur',()=>{
    
})