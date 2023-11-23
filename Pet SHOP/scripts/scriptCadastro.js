const formCadastro = document.querySelector("#formCadastro")
const inputNome = document.querySelector("#inputNome")
const inputEmail = document.querySelector("#inputEmail")
const inputSenha = document.querySelector("#inputSenha")
const inputSenhaConfirm = document.querySelector("#inputSenhaConfirm")

formCadastro.addEventListener("submit", (event)=>{
    event.preventDefault();

// verifica se o nome está vazio
    if(inputNome.value ===""){
        alert("Por favor, preencha o seu nome");
        return;
    }
// verifica se o email esta preenchido
    if(inputEmail.value ===""){
        alert("Por favor, preencha o seu email");
        return;
    }
// verifica se a senha esta preenchida e preenchida corretamente
    if(inputSenha.value ===""){
        alert("Por favor, preencha a sua senha");
        return;
    }

    if (!validarSenha(inputSenha.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos")
    }
// verifica a confirmação da senha
    if(inputSenhaConfirm.value !== inputSenha.value){
        alert("Por favor, confirme com a senha correta");
        return;
    }
    if(inputSenhaConfirm.value === ""){
        alert("Por favor, confirme sua senha");
        return;
    }
   
// se todos os campos estiverem preenchidos, envie o formulário
    formCadastro.submit();
})

function validarSenha(senha,minDigits) {
    if (senha.length >= minDigits) {
        // senha valida
        return true;
    }
    
    // senha invalida
    return false;
    
}

