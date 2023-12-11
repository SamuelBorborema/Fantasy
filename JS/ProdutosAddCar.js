const submit = document.getElementById('btn-submit');
submit.addEventListener('click',(event)=>{
    const cartSub = document.getElementById('quantidade').value;
    console.log(cartSub);
    event.preventDefault();
})