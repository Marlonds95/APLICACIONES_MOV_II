

export const DivArreglo = () => {
    const dividirPorCinco = (arr: number[]): number[] => {
        return arr.map(num => num / 5);
      };
    
      const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
      const resultado = dividirPorCinco(arreglo);
  return (
    <div>
      <h3>Arreglo Dividido por 5</h3>
      <span>Resultado: {JSON.stringify(resultado)}</span>
    </div>
  )
}
