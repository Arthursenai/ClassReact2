class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.id = this.generateId();
    }
    getInfo() {
        return `O livro ${this.titulo} foi escrito por ${this.autor} e tem ${this.ano} ano`;
    }
    generateId(){
        return Math.floor(Math.random() * 1000);
    }
}

export class ListaLivros {
    constructor() {
        this.livros = [];
    }
    add(livro) {
        this.livros.push(livro);
    }
    removeLivro(id) {
        this.livros = this.livros.filter(livro => livro.id !== id); 
    }
    getLivros() {
        return this.livros;
    }
}

export default Livro;