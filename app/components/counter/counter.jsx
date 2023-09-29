"use client";
import { useState } from 'react';
import Styles from '../counter/counter.module.css';

const Contador = ({ValorPadrao, agregacao, LimiteMin, LimiteMax}) => {
    const [Valor, setValor] = useState(ValorPadrao);

    const add = () => {
        if (Valor < LimiteMax) {
            setValor(Valor + agregacao);
        }
    }
    const decrementa = () => {
        if (Valor > LimiteMin) {
            setValor(Valor - agregacao);
        }
    }


    return (
        <div className={Styles.container}>
            <p>Contagem: {Valor}</p>
            <div className={Styles.buttonContainer}>
            <button className={Styles.add} onClick={add}>Adicionar</button>
            <button className={Styles.dda} onClick={decrementa}>Decrementar</button>
            <button className={Styles.dda2} onClick={() => setValor(ValorPadrao)}>Voltar ao padrão</button>
            </div>

        </div>
    )
}

export default Contador;
