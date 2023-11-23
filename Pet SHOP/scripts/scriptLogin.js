const formLogin = document.querySelector("#formLogin")
const inputEmail = document.querySelector("#inputEmail")
const inputSenhaLog = document.querySelector("#inputSenhaLog")

formLogin.addEventListener("submit", (event)=>{
    event.preventDefault();

// verifica se o email esta preenchido
    if(inputEmail.value ===""){
        alert("Por favor, preencha o seu email");
        return;
    }
// verifica se a senha esta preenchida e preenchida corretamente
    if(inputSenhaLog.value ===""){
        alert("Por favor, preencha a sua senha");
        return;
    } 
// se todos os campos estiverem preenchidos, envie o formulário
    formLogin.submit();
})


//Como não tem banco de dados conectados não fizemos a verificação de conta cadastrada