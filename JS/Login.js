function Login(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    caixaAlerta = document.querySelector('.caixa-alerta');

    if(usuario == 'adm' && senha == 'adm'){
        document.getElementById('texto-alerta').textContent = 'Login feito com sucesso';
        caixaAlerta.style.display = 'flex';
    }else{
        document.getElementById('texto-alerta').textContent = 'Usuario ou senha incorreto';
        caixaAlerta.style.display = 'flex';
    }
}

const form = document.getElementById('form');

form.addEventListener('submit',(event)=>{
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    
    if(usuario == 'adm' && senha == 'adm'){
        document.getElementById('texto-alerta').textContent = 'Login feito com sucesso';
        caixaAlerta.style.display = 'flex';

    }else{
        document.getElementById('texto-alerta').textContent = 'Usuario ou senha incorreto';
        caixaAlerta.style.display = 'flex';
    }
    event.preventDefault();
});



const botao = document.querySelector('#alerta-butao');

botao.addEventListener('click',()=>{
    location.reload();
})
