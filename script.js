let contagem = document.querySelector('#contagem');
let botoes = document.querySelectorAll('.btn');
let cont = 0;

botoes.forEach((el) => {
    el.addEventListener('click', () => {
        cont++;
        contagem.innerHTML = cont;
    })
})

let b1 = document.querySelector('#btn1');

b1.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    /*let div1 = document.createElement('div');
    div1.id = "box-li";*/
    let img = document.createElement('img');
    img.src = "./imagens/teclado.jpg";
    img.alt = "teclado";
    let p = document.createElement('p');
    p.textContent = "Teclado R$79,99"
    let div2 = document.createElement('div');
    div2.id = "check";
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    /*div1.appendChild(img);
    div1.appendChild(p);
    div2.appendChild(input);
    li.appendChild(div1);
    li.appendChild(div2);*/
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(div2)
    lista_compras.appendChild(li);
})


let b2 = document.querySelector('#btn2');

b2.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let div1 = document.createElement('div');
    div1.id = "box-li";
    let img = document.createElement('img');
    img.src = "./imagens/mouse.jpg";
    img.alt = "mouse";
    let p = document.createElement('p');
    p.textContent = "Mouse R$35,00"
    let div2 = document.createElement('div');
    div2.id = "check";
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    div1.appendChild(img);
    div1.appendChild(p);
    div2.appendChild(input);
    li.appendChild(div1);
    li.appendChild(div2);
    lista_compras.appendChild(li);
})

let b3 = document.querySelector('#btn3');

b3.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let div1 = document.createElement('div');
    div1.id = "box-li";
    let img = document.createElement('img');
    img.src = "./imagens/monitor-prime.jpg";
    img.alt = "monitor";
    let p = document.createElement('p');
    p.textContent = "Monitor R$119,99"
    let div2 = document.createElement('div');
    div2.id = "check";
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    div1.appendChild(img);
    div1.appendChild(p);
    div2.appendChild(input);
    li.appendChild(div1);
    li.appendChild(div2);
    lista_compras.appendChild(li);
})

let b4 = document.querySelector('#btn4');

b4.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let div1 = document.createElement('div');
    div1.id = "box-li";
    let img = document.createElement('img');
    img.src = "./imagens/cabo-usb.jpg";
    img.alt = "cabo-usb";
    /*img.style.width = 85 + 'px';*/
    let p = document.createElement('p');
    p.textContent = "Cabo USB R$24,99"
    let div2 = document.createElement('div');
    div2.id = "check";
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    div1.appendChild(img);
    div1.appendChild(p);
    div2.appendChild(input);
    li.appendChild(div1);
    li.appendChild(div2);
    lista_compras.appendChild(li);
})

setInterval(() => {
    let chec = document.querySelectorAll('.color');
    chec.forEach((check) => {
        check.addEventListener('click', () => {
            if (check.checked) {
                let pai = check.parentElement;
                let avo = pai.parentElement;
                avo.classList.add('selected');
            }

            if (!check.checked) {
                let pai = check.parentElement;
                let avo = pai.parentElement;
                avo.classList.remove('selected');        
            }
        })
    })
}, 1000)

let msg_info = document.querySelector('.msg-info');

let btn_remover = document.querySelector('#remover-itens');
btn_remover.addEventListener('click', () => {
    let lista_itens = document.querySelectorAll('.selected');
    if (lista_itens.length == 1) {
        msg_info.innerHTML = "Produto Retirado!"
        msg_info.classList.add('red');
    }
    if (lista_itens.length > 1) {
        msg_info.innerHTML = "Produtos Retirados!"
        msg_info.classList.add('red');
    }

    lista_itens.forEach((item) => {
        cont--;
        contagem.innerHTML = cont;
        item.remove()
    })
    setTimeout(() => {
        msg_info.classList.remove('red');
        msg_info.innerHTML = "";
    }, 2500)
})

let btn_comprar = document.querySelector('#comprar-itens');
btn_comprar.addEventListener('click', () => {
    let lista_itens = document.querySelectorAll('.selected');
    if (lista_itens.length == 1) {
        msg_info.innerHTML = "Produto Comprado!"
        msg_info.classList.add('green');
    }
    if (lista_itens.length > 1) {
        msg_info.innerHTML = "Produtos Comprados!"
        msg_info.classList.add('green');
    }

    lista_itens.forEach((item) => {
        cont--;
        contagem.innerHTML = cont;
        item.remove()
    })
    setTimeout(() => {
        msg_info.classList.remove('green');
        msg_info.innerHTML = "";
    }, 2500)
})

let btn_marcar = document.querySelector('#marcar-checks');
let x = 0;
btn_marcar.addEventListener('click', () => {
    let checkboxs = document.querySelectorAll('.color');
    if (x == 0) {
        checkboxs.forEach((check) => {
            check.checked = true;
            let pai = check.parentElement;
            let avo = pai.parentElement;
            avo.classList.add('selected');
        })
        x = 1;
    } else {
        checkboxs.forEach((check) => {
            check.checked = false;
            let pai = check.parentElement;
            let avo = pai.parentElement;
            avo.classList.remove('selected');
        })
        x = 0;
    }
})

let kart = document.querySelector('#kart-icon');
kart.addEventListener('click', () => {
    let menu_compras = document.querySelector('#menu-compras');
    menu_compras.classList.toggle('open');
})
