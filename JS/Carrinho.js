let qntd = document.getElementById('quantidade');

const btnAdd = document.getElementById('add-btn');

btnAdd.addEventListener('click',()=>{
    let total =  parseInt(qntd.textContent) + 1;
    qntd.textContent = total;
})

const btnRmv = document.getElementById('rmv-btn');

btnRmv.addEventListener('click',()=>{
    let total =  parseInt(qntd.textContent) - 1;
    qntd.textContent = total;
    if(total ==0){
        document.querySelector('.produto').outerHTML = '';
    } else{}
})