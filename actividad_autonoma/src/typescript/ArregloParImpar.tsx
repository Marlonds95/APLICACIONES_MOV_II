

export const ArregloParImpar = () => {

    const identificarParImpar = (arr: number[]): string[] => {
        return arr.map(num => (num % 2 === 0 ? 'par' : 'impar'));
      };
      const numeros = [1, 2, 3, 4];
      const resultado = identificarParImpar(numeros);
  return (
    <div>
      <h3>Identificar Par o Impar</h3>
      <span>Resultado: {JSON.stringify(resultado)}</span>
    </div>
  )
}


