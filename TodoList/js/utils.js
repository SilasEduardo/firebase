const authForm = document.getElementById('authForm')
const authFormTitle = document.getElementById('authFormTitle')


const register = document.getElementById('register')
const access = document.getElementById('access')
const loading = document.getElementById('loading')

const auth = document.getElementById('auth')
const userContent = document.getElementById('userContent')
const showEmailUser = document.getElementById('showEmailUser')




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


//Mostrar conteudo para usuarios autenticados
function showUserContent(user){
    console.log(user)
    hideItem(auth)
    showItem(userContent)
    showEmailUser.innerHTML = `usuario ${user.email}`
}

// Mostrar conteudo para usuarios não autenticados
function showAuth(){
    hideItem(userContent)
    showItem(auth)
    
}

