import { Alumno, listaAlumno } from "../interfaces/ListaAlumno";

export const Alumnos = () => {
    
    const calcularPromedioCalificaciones = (alumnos: Alumno[]): number => {
        const totalCalificaciones = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
        return totalCalificaciones / alumnos.length;
    };
    
    
    const promedio = calcularPromedioCalificaciones(listaAlumno);
    
        return (
            <div>
                <h3>Promedio Calificaciones</h3>  
                <p>El promedio de las calificaciones es: {promedio}</p>
            </div>
        );
   
}