import { useState } from "react"


export const Acumulador = () => {
    const [valor, setValor] = useState(0);

    const acumulador =(numero:number)=>{
        setValor(valor+numero)    
    }
    
  return (
    <div className="container">
        <h1>Acumulador</h1>
        <div className="container p-3 mb-3">
        <small className="border border-success p-3 mb-3">{valor}</small>
        </div>
        <button
        className="btn btn-primary "
        onClick={()=>acumulador(5)}>+5</button>
        &nbsp;
        <button className="btn btn-primary"
        onClick={()=>acumulador(-5)}>-5</button>
      
    </div>
  )
}


