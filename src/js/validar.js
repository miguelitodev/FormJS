validar = () => {
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let titulo = document.getElementById('titulo').value
    let msg = document.getElementById('msg').value
    let pontuacao
    // console.log(`nome: ${nome}\nemail: ${email}\ntitulo: ${titulo}\nmsg: ${msg}`);

    if ((nome || email == '') || (titulo || msg == '')) {
        alert('Preencha corretamente os campos')
    }
    else {
        try {

            if(nome.length > 0 && nome != Na) {
                pontuacao++
            } else {
                alert('Digite um nome válido')
            }

            if(email.length > 0 && email.search('@') == true){
                pontuacao++
            } else {
                alert('Digite um email válido')
            }
            
            if (titulo.legth > 0){
                pontuacao++
            } else {
                alert('Digite um titúlo válido')
            }

            if (msg.legth > 0){
                pontuacao++
            } else {
                alert('Digite uma mensagem válida')
            }

        }
        catch (e) {
            console.log(e)
        }

        if(pontuacao == 4) {
            alert('tudo Ok')
        }
    } 
}