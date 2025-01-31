import { useState } from "react";

const MyCalculator = () => {
    const [ numero1, setNumero1 ] = useState(0);
    const [ numero2, setNumero2 ] = useState(0);
    const [ result, setResult ] = useState(0);

    const cambiarEstadoNumero1 = (numeroSeleccionado) => {
        setNumero1(numeroSeleccionado);
    }

    const cambiarEstadoNumero2 = (numeroSeleccionado) => {
        setNumero2(numeroSeleccionado);
    }

    const sumar = () => {
        var calculo = numero1 + numero2;
        setResult(calculo);
    }

    const restar = () => {
        var calculo = numero1 - numero2;
        setResult(calculo);
    }

    return (
        <>
            <h1>
                El resultado es: {result}
            </h1>
            <br />
            <div>
                Numero 1:
                <button onClick={ () => cambiarEstadoNumero1(1) }>1</button>
                <button onClick={ () => cambiarEstadoNumero1(2) }>2</button>
                <button onClick={ () => cambiarEstadoNumero1(3) }>3</button>
                <button onClick={ () => cambiarEstadoNumero1(4) }>4</button>
                <button onClick={ () => cambiarEstadoNumero1(5) }>5</button>
                <button onClick={ () => cambiarEstadoNumero1(6) }>6</button>
                <button onClick={ () => cambiarEstadoNumero1(7) }>7</button>
                <button onClick={ () => cambiarEstadoNumero1(8) }>8</button>
                <button onClick={ () => cambiarEstadoNumero1(9) }>9</button>
            </div>
            <br />
            <br />

            <div>
                Numero 2:
                <button onClick={ () => cambiarEstadoNumero2(1) }>1</button>
                <button onClick={ () => cambiarEstadoNumero2(2) }>2</button>
                <button onClick={ () => cambiarEstadoNumero2(3) }>3</button>
                <button onClick={ () => cambiarEstadoNumero2(4) }>4</button>
                <button onClick={ () => cambiarEstadoNumero2(5) }>5</button>
                <button onClick={ () => cambiarEstadoNumero2(6) }>6</button>
                <button onClick={ () => cambiarEstadoNumero2(7) }>7</button>
                <button onClick={ () => cambiarEstadoNumero2(8) }>8</button>
                <button onClick={ () => cambiarEstadoNumero2(9) }>9</button>
            </div>

            <br />
            <br />
            <div>
                <button onClick={sumar}>Sumar</button>
                <button onClick={restar}>Restar</button>
                <button>Dividir</button>
                <button>Multiplicar</button>
            </div>
        </>
    )
}

export default MyCalculator;