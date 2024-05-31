

export const AreaCuadrado = () => {
    const area =(num1: number, num2:number): number =>{
        return num1 * num2;
    }
      return (
        <div>
          <h3>Calculo área de cuadrado</h3>
          <span>El área del cuadrado es : {area(4,4)}</span>
        </div>
      )
    }
    
    