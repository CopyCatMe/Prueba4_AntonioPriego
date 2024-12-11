import Buscar from '@/components/buscar'
import Link from 'next/link'
import mysql from '@/lib/mysql'
import { revalidatePath } from 'next/cache'



async function obtenerAlumnos(query) {
    const sql = 'select * from `alumnos` where nombre like ?';
    const values = [`%${query}%`]
    const [alumnos] = await mysql.query(sql, values);
    
    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 5000))

    return alumnos
}


async function eliminarAlumno(formData) {
    'use server'
    const id = formData.get('id')

    const sql = 'delete from alumnos where id = ?'
    const values = [id]
    await mysql.query(sql, values);

    revalidatePath('/alumnos-db')
}


export default async function Alumnos({ query }) {

    const alumnos = await obtenerAlumnos(query)

    return (
        <>
            <h1 className='text-2xl text-slate-300 py-2  mb-2 border-b-2 border-b-slate-300'>
                Lista de alumnos (DB)
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {alumnos.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo                           
                    .map((alumno) => (
                        <div key={alumno.id} className='p-2 odd:bg-slate-600 flex justify-between'>
                            <Link href={`/alumnos-db/${alumno.id}`}>{alumno.nombre}</Link>
                            <div className='flex gap-6'>
                                <form>
                                    <input type="hidden" name='id' value={alumno.id} />
                                    <Link href={`/alumnos-db/modificar/${alumno.id}`} title='MODIFICAR'>✏️</Link>
                                    <button formAction={eliminarAlumno} title='ELIMINAR'>❌</button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}