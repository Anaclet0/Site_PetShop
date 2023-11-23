const formContato = document.querySelector("#formContato")
const inputNome = document.querySelector("#inputNome")
const inputEmail = document.querySelector("#inputEmail")
const inputTelefone = document.querySelector("#inputTelefone")
const inputTexto = document.querySelector("#inputTexto")

formContato.addEventListener("submit", (event)=>{
    event.preventDefault();

    // verifica se o nome está vazio
    if(inputNome.value ===""){
        alert("Por favor, preencha o seu nome");
        return;
    }
    // verifica se o telefone esta preenchido
    if(inputTelefone.value ===""){
        alert("Por favor, preencha o seu telefone");
        return;
    }
     // verifica se o email esta preenchido
     if(inputEmail.value ===""){
        alert("Por favor, preencha o seu email");
        return;
    }
    
    // verifica se o email esta preenchido
    if(inputTexto.value ===""){
        alert("Por favor, digite a sua opinião");
        return;
    }
    formContato.submit();
})