"use client";
import styles from './page.module.css'
import Contador from './components/counter/counter'
import Livro, { ListaLivros } from '@/models/livro'
import LivrosData from '../data/livros'


export default function Home() {
  const LivroTeste = new Livro("titulo2", "autor2", 2022);
  const MinhaListaLivros = new ListaLivros();
  MinhaListaLivros.add(LivroTeste);

  
  LivrosData.map((livro) => {
    MinhaListaLivros.add(new Livro(livro.titulo, livro.autor, livro.ano));
  });
  
  console.log(MinhaListaLivros);
  return (
    <div className={styles.container}>
      <p>Home</p>
      <ul>
        <div>
        {
          MinhaListaLivros.livros.map((livro) => {
            return (
              <div>
                <h1>Titulo: {livro.titulo}</h1>
                <p>Autor: {livro.autor}</p>
                <p>Ano: {livro.ano}</p>
              </div>
            )
          }
          )
        }
        </div>
      </ul>
      <div>

      </div>
      <Contador 
        ValorPadrao={0}
        agregacao={1}
        LimiteMin={-10}
        LimiteMax={10}
      
      />
        <Contador 
        ValorPadrao={0}
        agregacao={10}
        LimiteMin={-1}
        LimiteMax={100}
      
      />
      </div>
  )
}
