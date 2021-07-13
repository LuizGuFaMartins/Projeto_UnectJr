// var dark_light = undefined;
// var input_value_top;
/*============LISTA============*/
function criarItem_todo(valor, num){    
    const tarefa = document.getElementsByClassName("fases")[0];    
    if(num>0){
        const div = document.createElement('div');
        div.classList.add("tarefa");
        tarefa.appendChild(div);

        const p = document.createElement('p');
        p.innerText = valor;
        div.appendChild(p);

        const img1 = document.createElement('img');
        img1.src = "img/seta_azul.png";       
        div.appendChild(img1);

        const img2 = document.createElement('img');
        img2.src = "img/bola_vermelha.png";
        div.appendChild(img2);
        num = 0;

        img1.addEventListener("click", ()=>{
            criarItem_doing(valor);
            div.remove();
        });
    
        img2.addEventListener("click", ()=>{
            div.remove();
        });
    }else{        
        const input = document.getElementById("input_tarefa");        
        const input_valor = `"${input.value}"`;
        input.value = "";    

        const div = document.createElement('div');
        div.classList.add("tarefa");
        tarefa.appendChild(div);

        const p = document.createElement('p');
        p.innerText = input_valor;
        div.appendChild(p);

        const img1 = document.createElement('img');
        img1.src = "img/seta_azul.png";       
        div.appendChild(img1);

        const img2 = document.createElement('img');
        img2.src = "img/bola_vermelha.png";
        div.appendChild(img2); 

        img1.addEventListener("click", ()=>{
            criarItem_doing(input_valor);
            div.remove();
        });
    
        img2.addEventListener("click", ()=>{
            div.remove();
        }); 
        input_value_top = input_valor;           
    }   
    
}

function criarItem_doing(input_valor){
    const tarefas = document.getElementsByClassName("fases")[1];

    const div = document.createElement('div');
    div.classList.add("tarefa");
    tarefas.appendChild(div);

    const p = document.createElement('p');
    p.innerText = input_valor;
    div.appendChild(p);

    const img1 = document.createElement('img');
    img1.src = "img/Group 1.png";
    // img1.classList.add("para_doing");    
    div.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = "img/bola_vermelha.png";
    div.appendChild(img2);

    img1.addEventListener("click", ()=>{
        criarItem_done(input_valor);
        div.remove();
    });
    img2.addEventListener("click", ()=>{
        div.remove();
    });
}

function criarItem_done(input_valor){
    var num = 0;
    const tarefas = document.getElementsByClassName("fases")[2];

    const div = document.createElement('div');
    div.classList.add("tarefa");
    tarefas.appendChild(div);

    const p = document.createElement('p');
    p.innerText = input_valor;
    div.appendChild(p);
    p.style.textDecorationLine = "line-through";
    p.style.color = "gray";

    const img1 = document.createElement('img');
    img1.src = "img/Group 4.png";       
    div.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = "img/bola_vermelha.png";
    div.appendChild(img2);    

    img1.addEventListener("click", ()=>{
        num = num + 1;
        criarItem_todo(input_valor, num);
        div.remove();
    });

    img2.addEventListener("click", ()=>{
        div.remove();
    });
}


/*============MODAL============*/
function abrirModal(){
    const modal = document.getElementsByClassName("modal_back")[0];
    modal.style.display="block";
}
function fecharModal(){
    const modal = document.getElementsByClassName("modal_back")[0];
    window.onclick = (event)=>{
        if(event.target == modal)
            modal.style.display='none';
    }
}


/*============Dark mode============*/
function darkMode(){
    const body = document.getElementById("body");
    const fases0 = document.getElementsByClassName("fases")[0];
    const fases1 = document.getElementsByClassName("fases")[1];
    const fases2 = document.getElementsByClassName("fases")[2];
    const modal_dark = document.getElementsByClassName("modal")[0];
    const input_tarefa = document.getElementById("input_tarefa");
    const input_modal = document.getElementById("input_modal");
    const button_dark = document.getElementById("button_dark");
    const button_light = document.getElementById("button_light");
    const add_taref_ico_dark = document.getElementById("add_taref_ico_dark");
        
    body.classList.add("dark_mode_bg");    
    fases0.classList.add("dark_mode_fases");
    fases1.classList.add("dark_mode_fases");  
    fases2.classList.add("dark_mode_fases");
    modal_dark.classList.add("dark_mode_fases"); 
    input_tarefa.classList.add("dark_mode_fases"); 
    input_modal.classList.add("dark_mode_bg"); 
    button_dark.style.display = "none";  
    button_light.style.display = "block";
    add_taref_ico_dark.style.display = "block"; 
    //dark_light = 1;    
}

function lightMode(){
    const body = document.getElementById("body");
    const fases0 = document.getElementsByClassName("fases")[0];
    const fases1 = document.getElementsByClassName("fases")[1];
    const fases2 = document.getElementsByClassName("fases")[2];
    const modal_dark = document.getElementsByClassName("modal")[0];
    const input_tarefa = document.getElementById("input_tarefa");
    const input_modal = document.getElementById("input_modal");
    const button_dark = document.getElementById("button_dark");
    const button_light = document.getElementById("button_light");
    const add_taref_ico_dark = document.getElementById("add_taref_ico_dark");

    body.classList.remove("dark_mode_bg");    
    fases0.classList.remove("dark_mode_fases");
    fases1.classList.remove("dark_mode_fases");  
    fases2.classList.remove("dark_mode_fases");
    modal_dark.classList.remove("dark_mode_fases"); 
    input_tarefa.classList.remove("dark_mode_fases"); 
    input_modal.classList.remove("dark_mode_bg"); 
    button_dark.style.display = "block";  
    button_light.style.display = "none";
    add_taref_ico_dark.style.display = "none"; 
    //dark_light = undefined;   
}

function back_image(){
    const input_modal = document.getElementById("input_modal");    
    const body = document.getElementsByTagName("body")[0];

    const input_modal_value = `"${input_modal.value}"`;
    input_modal.value = "";    
    body.style.backgroundImage = `url(${input_modal_value})`;        
}

function limpar(){
    const input_modal = document.getElementById("input_modal");    
    const body = document.getElementsByTagName("body")[0];
    input_modal.value = "";    
    body.style.backgroundImage = "none";  

}

/*============Cookies============*/
function fecharPopupcookies(){
    const popupcookies = document.getElementsByClassName("popup_cookies")[0];
    popupcookies.style.display="none";
}


// function salvarCookie(){
//     let tref_cookie = document.getElementsByClassName("tarefa")[0];

//     let data = new Date();
//     let segundos = 60;
//     data.setTime(data.getTime() + (segundos*1000));        

//     document.cookie = `tarefa=${input_value_top}; expires=${data.toUTCString()}`;
//     document.cookie = `tema=${dark_light}; expires=${data.toUTCString()}`;   
    
//     ativarCookie();
// }

// function ativarCookie(){
//     let cookie_taref;
//     try{
//         cookie_taref = document.cookie.split('; ');
//         console.log(cookie_taref[0]);
//         console.log(cookie_taref[1]);
//     }catch{}         
// }
// window.onload = ativarCookie();
