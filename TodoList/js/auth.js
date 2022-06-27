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

firebase.auth().onAuthStateChanged((user)=>{

    hideItem(loading)

    if(user){
        // parte de quando esta autenticado
        console.log('Autencado')
        console.log(user)
        console.log(user.email)
    }else{
        //não autenticado
        console.log('Não Autenticado')
    }

    // firebase.auth().signOut().then((user)=>{
    //     console.log('saiu')
    // })  função para sair
})