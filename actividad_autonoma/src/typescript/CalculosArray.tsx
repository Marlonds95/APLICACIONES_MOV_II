

export const CalculosArray = () => {

    const datos = [7, 5, "sistemas", "hola", "adios", 2];

  const encontrarMayorTexto = (arr: any[]): string => {
    const textos = arr.filter(item => typeof item === 'string');
    return textos.reduce((mayor, actual) => actual.length > mayor.length ? actual : mayor, "");
  };

  const realizarOperacionesMatematicas = (arr: any[]): { suma: number, resta: number, multiplicacion: number, division: number, potenciacion: number } => {
    const numeros = arr.filter(item => typeof item === 'number');
    if (numeros.length < 3) throw new Error("Debe haber al menos tres números en el arreglo.");

    const [a, b, c] = numeros;
    return {
      suma: a + b + c,
      resta: a - b - c,
      multiplicacion: a * b * c,
      division: a / b / c,
      potenciacion: Math.pow(Math.pow(a, b), c),
    };
  };

  const mayorTexto = encontrarMayorTexto(datos);
  const operaciones = realizarOperacionesMatematicas(datos);
  return (
    <div>
      <h3>Análisis de Datos</h3>
      <p>Mayor texto: {mayorTexto}</p>
      <p>Resultados de las operaciones matemáticas:</p>
      <ul>
        <li>Suma: {operaciones.suma}</li>
        <li>Resta: {operaciones.resta}</li>
        <li>Multiplicación: {operaciones.multiplicacion}</li>
        <li>División: {operaciones.division}</li>
        <li>Potenciación: {operaciones.potenciacion}</li>
      </ul>
    </div>
  )
}
