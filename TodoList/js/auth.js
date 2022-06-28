authForm.onsubmit = (event) => {
    event.preventDefault()

    if (authForm.submitAuthForm.innerHTML === 'Acessar') {
        showItem(loading)
        firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value) // função para autenticar usuario
            .catch((error) => {
                console.log('Falha\n', error)
            });
    } else {
        firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value) // fução para cadastrar usuario
            .catch((error) => {
                console.log('Falha\n', error)
            });
    }
}

firebase.auth().onAuthStateChanged((user) => {
    hideItem(loading)
    if (user) {
        // parte de quando esta autenticado
        console.log('Usuario autenticado')
        showUserContent(user)
      
    } else {
        //não autenticado
        
        showAuth(user)
        console.log('não autenticado')
    }


})

function singOut() { // Des Logar
    firebase.auth().signOut().catch((erro) => {
        console.log(erro)
    })
    authForm.email.value = ''
    authForm.password.value = ''
}



// finção que permite o usuario fazer firificação do meail dele.
function sendEmailVerification(){
    let user = firebase.auth().currentUser
    user.sendEmailVerification().then(()=>{
        alert('Email de verificação enviado')
    }).catch((e)=>{
        console.log(e)
    })
}