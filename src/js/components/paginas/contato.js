function contato() {
const paginadecontato = `<h1> Esta é página Contato </h1>
    <form class="bem-form">
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
export default contato;