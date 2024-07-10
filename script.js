
function validateurDuFormulaire(){
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let motDePasse = document.getElementById('motDePasse').value;


    document.getElementById('nomError').innerHTML = "";
    document.getElementById('emailError').innerHTML= "";
    document.getElementById('motDePasseError').innerHTML = "";


    if(nom === ""){
        document.getElementById('nomError').innerHTML = "Veuillez entrer votre nom";
        return false;
    }

    if(email === ""){
        document.getElementById('emailError').innerHTML = "Veuillez entrer votre email";
        return false;
    } else {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            document.getElementById('emailError').innerHTML = "Veuillez entrer une adresse e-mail valide";
            return false;
        }
    }

    if(motDePasse === ""){
        document.getElementById('motDePasseError').innerHTML = "Veuillez entrer votre mot de passe";
        return false;
    }else{
        let longuerDuMotDePasse = 8;
        if(motDePasse.length < longuerDuMotDePasse){
            document.getElementById('motDePasseError').innerHTML = "Votre mot de passe dois contenir au moins 8 caractères"
            return false
        }
    }
   
    return true;

}
