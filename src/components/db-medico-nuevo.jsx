import mysql from "@/lib/mysql"
import { revalidatePath } from "next/cache"
import SubmitButton from "@/components/submit-button"


async function nuevoProfesor(formData) {
    'use server'
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')
    const estado_civil = formData.get('estado_civil')

    const sql = 'insert into `profesores` (`nombre`, `especialidad`, `estado_civil`) values (?, ?, ?)'
    const values = [nombre, especialidad, estado_civil];

    const [result, fields] = await mysql.query(sql, values)

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    revalidatePath('/profesores-db')
}



export default function ProfesorNuevo() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4 p-4 bg-gray-800 rounded-lg shadow-md'>

            <label htmlFor='nombre' className='text-lg font-semibold text-white'>Nombre: </label>
            <input required id='nombre' name='nombre' className='text-xl p-1 pl-2 text-white bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none' />

            <label htmlFor='especialidad' className='text-lg font-semibold text-white'>Especialidad: </label>
            <input required id='especialidad' name='especialidad' className='text-xl p-1 pl-2 text-white bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none' />

            <label htmlFor='estado_civil' className='text-lg font-semibold text-white'>Estado Civil: </label>
            <input required id='estado_civil' name='estado_civil' type='text' className='text-xl p-1 pl-2 text-white bg-gray-700 border border-gray-600 focus:border-blue-400 focus:outline-none' />

            <div className='col-span-2 grid gap-2'>
                <SubmitButton formAction={nuevoProfesor} className='disabled:bg-slate-600 bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar profesor
                </SubmitButton>
                <button type='reset' className='bg-orange-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}
