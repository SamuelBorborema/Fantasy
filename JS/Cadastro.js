const form = document.getElementById('form');
form.addEventListener('submit',(event)=>{
    const nome = document.getElementById('Nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    console.log(nome,email,senha);
    event.preventDefault();
});
