import { useState } from "react";



const ContadorBasicoHooks = () => {
    const [numero, setNumero] = useState(0);

    return (<>
        <div>

            <h2>Contador:    {numero}   </h2>
            <button onClick={() => setNumero(numero + 1)}>+</button>
            <button onClick={() => setNumero(numero - 1)}>-</button>

        </div>
    </>);

}

export default ContadorBasicoHooks;