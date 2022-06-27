const authForm = document.getElementById('authForm')
const authFormTitle = document.getElementById('authFormTitle')


const register = document.getElementById('register')
const access = document.getElementById('access')
const loading = document.getElementById('loading')


// alterar formulario de autenticação para o cadastro de novas contas

function toggleToRegister(){
    authForm.submitAuthForm.innerHTML = 'Cadastrar Conta';
    authFormTitle.innerHTML = 'Insira seus dados para cadastrar'


    hideItem(register)
    showItem(access)
}
//alterar novas contas
function toggleToAccess(){
    authForm.submitAuthForm.innerHTML = 'Acessar';
    authFormTitle.innerHTML = 'Acesse sua conta para continuar'


    hideItem(access)
    showItem(register)
}


//simplifica elemento da pagina
function showItem(element){
    element.style.display = 'block'
}

function hideItem(element){
    element.style.display = 'none'
}

