function validar() {
    
    let nome = form.nome.value;
    let email = form.email.value;
    let assunto = form.assunto.value;
    let msg = form.mensagem.value;

    if(nome == '' || nome.length < 5) {
        alert("Digite seu nome completo.");
        form.nome.focus();
        return false;
    } else if(email == '' || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        alert("O campo email não pode ser vazio, estar com o \"@\" faltando ou o \".\" faltando.");
        form.email.focus();
        return false;
    } else if (assunto == '') {
        alert("O campo assunto não pode ser vazio.");
        form.assunto.focus();
        return false;
    } else if(msg == '') {
        alert("O campo mensagem não pode ser vazio.");
        form.mensagem.focus();
        return false;
    }
}