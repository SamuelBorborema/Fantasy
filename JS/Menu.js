const avatar = document.getElementById('person');

let a = 0;
let b = 0;
let c = 0;
let z = 0;


avatar.addEventListener('click',()=>{
    const menu = document.getElementById('drop-user');
    secdrop =  document.querySelector('.secdrop');
    iconFechar = document.querySelector('.close-icon');
    iconAbrir = document.querySelector('#open-icon');
    if(a == 0){
        a =  a +1;
        menu.style.display = 'block';
    }else{
        a =  a -1;
        menu.style.display = 'none';
    }

    if (b== 0){
        b = b + 1;
        secdrop.style.display ='none';
        iconFechar.style.display ='none';
        iconAbrir.style.display = 'block';
    }
    else{}
})

function apagar(){
    pesquisa = document.getElementById('pesquisa');
    pesquisa.value = "";
}

MenuOpenClose = document.getElementById('open-close');

MenuOpenClose.addEventListener('click',()=>{
    MenuOpen = document.getElementById('open-icon')
    MenuClose = document.querySelector('.close-icon');
    MenuDrop = document.getElementById('drop');
    if(c == 0){
        c = c +1;
        MenuDrop.style.display = 'block';
        MenuOpen.style.display = 'none';
        MenuClose.style.display = 'flex';  
    }
    else{
        c = c -1;
        MenuDrop.style.display = 'none';
        MenuOpen.style.display = 'flex  ';
        MenuClose.style.display = 'none';
    }
})
