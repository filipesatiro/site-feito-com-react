function ProjectForm() {
    return (
        <form>
            <div><input type="text" placeholder="Insira o nome do projeto" /></div>
            <div><input type="number" placeholder="Insira o orçamento Total" /></div>
            <div>
            <select name="category_id">
            <option disabled selected >Selecione a Categoria</option>
            </select>
            </div>
            <div><input type="submit" value="Criar Projeto" /></div>
        </form>
    )
}
export default ProjectForm