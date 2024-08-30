import React, {useState} from 'react';

function Contador() {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }
    const resetar = () => {
        setContador(0);
    }

    return(
        <div className="containerContador">
            <h1>Isso é um contador feito com <strong className="react">React</strong> S2</h1>
            <p className="exibeNumero">{contador}</p>
            <button className="botaoContador" onClick={decrementar}>Decrementar</button>
            <button className="botaoContador" onClick={resetar}>Resetar</button>
            <button className="botaoContador" onClick={incrementar}>Incrementar</button>
        </div>
    );

}
export default Contador