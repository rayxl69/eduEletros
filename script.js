let contagem = document.querySelector('#contagem');
let botoes = document.querySelectorAll('.btn');
let cont = 0;
let x = 0;

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
    let img = document.createElement('img');
    img.src = "./imagens/teclado.jpg";
    img.alt = "teclado";
    let p = document.createElement('p');
    p.textContent = "Teclado \n R$79,99"
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(input)
    lista_compras.appendChild(li);
})


let b2 = document.querySelector('#btn2');

b2.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = "./imagens/mouse.jpg";
    img.alt = "mouse";
    let p = document.createElement('p');
    p.textContent = "Mouse \n R$35,00"
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(input);
    lista_compras.appendChild(li);
})

let b3 = document.querySelector('#btn3');

b3.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = "./imagens/monitor-prime.jpg";
    img.alt = "monitor";
    let p = document.createElement('p');
    p.textContent = "Monitor \n R$119,99"
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(input);
    lista_compras.appendChild(li);
})

let b4 = document.querySelector('#btn4');

b4.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = "./imagens/cabo-usb.jpg";
    img.alt = "cabo-usb";
    img.style.width = 88 + 'px';
    let p = document.createElement('p');
    p.textContent = "Cabo USB \n R$24,99"
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(input);
    lista_compras.appendChild(li);
})

let b5 = document.querySelector('#btn5');

b5.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = "./imagens/ip14.jpg";
    img.alt = "ip 14";
    let p = document.createElement('p');
    p.textContent = "Iphone 14 \n R$3.699,99"
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(input)
    lista_compras.appendChild(li);
})

let b6 = document.querySelector('#btn6');

b6.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = "./imagens/tablet.jpg";
    img.alt = "tablet";
    let p = document.createElement('p');
    p.textContent = "Tablet \n R$800,00"
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(input)
    lista_compras.appendChild(li);
})

let b7 = document.querySelector('#btn7');

b7.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = "./imagens/notebook.jpg";
    img.alt = "notebook";
    let p = document.createElement('p');
    p.textContent = "Notebook \n R$2.499,99"
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(input)
    lista_compras.appendChild(li);
})

let b8 = document.querySelector('#btn8');

b8.addEventListener('click', () => {
    let lista_compras = document.querySelector('.lista-compras');
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = "./imagens/camera.jpg";
    img.alt = "camera";
    let p = document.createElement('p');
    p.textContent = "Câmera \n R$110,00"
    let input = document.createElement('input');
    input.type = "checkbox";
    input.classList.add('color');
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(input)
    lista_compras.appendChild(li);
})

setInterval(() => {
    let chec = document.querySelectorAll('.color');
    chec.forEach((check) => {
        check.addEventListener('click', () => {
            if (check.checked) {
                let pai = check.parentElement;
                pai.classList.add('selected');
            }

            if (!check.checked) {
                let pai = check.parentElement;
                pai.classList.remove('selected');        
            }
        })
    })
}, 300)

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
    }, 1500)
    setTimeout(() => {
        msg_info.innerHTML = "";
    }, 2500)
    x = 0;
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
    }, 1500)
    setTimeout(() => {
        msg_info.innerHTML = "";
    }, 2500)
    x = 0;
})

let btn_marcar = document.querySelector('#marcar-checks');
btn_marcar.addEventListener('click', () => {
    let checkboxs = document.querySelectorAll('.color');
    if (x == 0) {
        checkboxs.forEach((check) => {
            check.checked = true;
            let pai = check.parentElement;
            pai.classList.add('selected');
        })
        x = 1;
    } else {
        checkboxs.forEach((check) => {
            check.checked = false;
            let pai = check.parentElement;
            pai.classList.remove('selected');
        })
        x = 0;
    }
})

let kart = document.querySelector('#kart-icon');
kart.addEventListener('click', () => {
    let menu_compras = document.querySelector('#menu-compras');
    menu_compras.classList.toggle('open');
})

let left = document.querySelector('#left');
let right = document.querySelector('#right');
let grids = document.querySelectorAll('.grids');




let y = 0;


right.addEventListener('click', () => {
    if (y == 0) {
    grids[0].classList.remove('to-left');
    grids[1].classList.remove('to-center');
    if (!right.classList.contains('back-gray')) {
        right.classList.add('back-gray');
        left.classList.remove('back-gray');
    }

    grids[0].classList.add('to-left');
    grids[1].classList.add('to-center');

    setTimeout(() => {
        grids[0].classList.remove('to-center');
        grids[1].classList.remove('to-right');
    }, 500)
    y = 1;
    }
})

left.addEventListener('click', () => {
    if (y == 1) {
    grids[0].classList.remove('to-left');
    grids[1].classList.remove('to-center');
    if (!left.classList.contains('back-gray')) {
        left.classList.add('back-gray');
        right.classList.remove('back-gray');
    }

    grids[0].classList.add('to-center');
    grids[1].classList.add('to-right');

    y = 0;
    }
})
