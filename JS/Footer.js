var contatosIn = document.getElementById('contatos-in');
var segurancaIn = document.getElementById('seguranca-in');
var pagamentosOut = document.querySelector('.pagamentos');
var pagamentosIn = document.getElementById('pagamentos-in');

let i = 0;
let j = 0;
let k = 0;



function AbrirContatos(){

    if(i === 0){
        i = i + 1;
        contatosIn.style.display = 'flex';
    } else{
        i = i -1;
        contatosIn.style.display = 'none';
    }
}

function AbrirSeguranca(){

    if(j === 0){
        j = j + 1;
        segurancaIn.style.display = 'flex';
    } else{
        j = j-1;
        
        segurancaIn.style.display = 'none';
    }
}

AbrirPagamentos= ()=>{

    if(k === 0){
        k = k + 1;
        pagamentosIn.style.display = 'flex';
    } else{
        k = k -1;
        pagamentosIn.style.display = 'none';
    }
}