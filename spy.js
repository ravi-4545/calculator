form=document.querySelector('#form')
kay=document.querySelectorAll('#n')
display=document.querySelector('#display')
equal=document.querySelector('#equal')
c=document.querySelector('#c')
b=document.querySelector('#b')

form.addEventListener('click',(e)=>{
    e.preventDefault()
})

kay.forEach(function(button){
    button.addEventListener('click',function(){
        display.innerHTML += button.value
    })
      
})
equal.addEventListener('click',()=>{
    display.innerHTML= eval(display.innerHTML)
})
c.addEventListener('click',()=>{
    display.innerHTML = ''
})
b.addEventListener('click',()=>{
    display.innerHTML=display.innerHTML.slice(0,-1)
})
