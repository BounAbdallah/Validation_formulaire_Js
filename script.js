function validateurDuFormulaire(){
    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let motDePasse = document.getElementById('motDePasse').value;

    let isValid = true;

    document.getElementById('prenomError').innerHTML = "";
    document.getElementById('nomError').innerHTML = "";
    document.getElementById('emailError').innerHTML= "";
    document.getElementById('motDePasseError').innerHTML = "";
    document.getElementById('messageSucces').style.display = "none";

    if(prenom === "" || prenom.length < 3 || prenom.length > 15){
        document.getElementById('prenomError').innerHTML = "Veuillez entrer un prénom entre 3 et 15 caractères";
        isValid = false;
    }

    if(nom === "" || nom.length < 3 || nom.length > 15){
        document.getElementById('nomError').innerHTML = "Veuillez entrer un nom entre 3 et 15 caractères";
        isValid = false;
    }

    if(email === ""){
        document.getElementById('emailError').innerHTML = "Veuillez entrer votre email";
        isValid = false;
    } else {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            document.getElementById('emailError').innerHTML = "Veuillez entrer une adresse e-mail valide";
            isValid = false;
        }
    }

    if(motDePasse === ""){
        document.getElementById('motDePasseError').innerHTML = "Veuillez entrer votre mot de passe";
        isValid = false;
    } else if(motDePasse.length < 8){
        document.getElementById('motDePasseError').innerHTML = "Votre mot de passe doit contenir au moins 8 caractères";
        isValid = false;
    }
    if(isValid){
        document.getElementById('messageSucces').style.display = "block";
        setTimeout(function(){
            document.getElementById('messageSucces').style.display = "none";
        }, 30000);
    }

    return isValid;
}
