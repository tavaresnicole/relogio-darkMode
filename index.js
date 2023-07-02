
setInterval(function(){
    const date = new Date();
    document.querySelector('.relogio').innerHTML = (date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds());
}, 1000)


function changeColor(){
    let checkbox = document.querySelector('.input');
    let body = document.querySelector('body');
    
    if(checkbox.checked == true){
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        body.style.transition = '1s ease-in-out';
    }else{
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        body.style.transition = '1s ease-in-out';
    }
}
