//duas formas de exportar mais de uma função no mesmo aquivo
//
 function contato() {
const paginadecontato = `<h1> Esta é página Contato </h1>
    <form class="bem-form" id="formulario-de-contato">
        <div class="bem-form__group">
            <label for="assunto" class="bem-form__label">assunto</label>
            <input type="text" name="assunto" id="assunto" class="bem-form__input">
        </div>
        <div class="bem-form__group">
            <label for="email" class="bem-form__label">email</label>
            <input type="email" name="email" id="email" class="bem-form__input">
        </div>
        <div class="bem-form__group">
            <label for="mensagem" class="bem-form__label">mensagem</label>
            <textarea class="bem-form__textarea" name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
        </div>
        <button type="submit" class="bem-btn--primary">Enviar</button>
    </form>
    <ul id="lista-de-contatos">
    </ul>
`

return paginadecontato;
}

 function capturarFormulario(){
    console.log('capturarFormulario foi chamada')
    const formulario = document.getElementById('formulario-de-contato');
    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        const lista = document.getElementById('lista-de-contatos');
        const li = document.createElement('li');

        //outra forma de acessar os dados do formulario, usando o name dos inputs
        // const assuunto = document.getElementById('assunto').value;
        const assunto = event.target[0].value;
        const email = event.target[1].value;
        const mensagem = event.target[2].value;
        //tamplate string
        li.textContent = `O Assunto é ${assunto} e o Email é ${email} e a Mensagem é ${mensagem}`;
        lista.appendChild(li);
        event.target[0].value = '';
        event.target[1].value = '';
        event.target[2].value = '';


    })

}

export {contato, capturarFormulario};
