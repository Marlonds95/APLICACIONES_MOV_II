

export const SumArreglo = () => {
    const sumarArreglo = (arr: number[]): number => {
        return arr.reduce((sum, current) => sum + current, 0);
      };
  return (
    <div>
      <h3>Calculo suma Arreglo</h3>
          <span>La suma del arreglo es: {sumarArreglo( [1, 2, 3, 4, 5])}</span>
    </div>
  )
}


