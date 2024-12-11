import Buscar from '@/components/buscar'
import Link from 'next/link'
import mysql from '@/lib/mysql'
import { revalidatePath } from 'next/cache'

async function obtenerProfesores(query) {
    const sql = 'select * from `profesores` where nombre like ?';
    const values = [`%${query}%`]
    const [profesores] = await mysql.query(sql, values);
    
    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 5000))

    return profesores
}

async function eliminarProfesor(formData) {
    'use server'
    const id = formData.get('id')

    const sql = 'delete from profesores where id = ?'
    const values = [id]
    await mysql.query(sql, values);

    revalidatePath('/profesores-db')
}

export default async function Profesores({ query }) {

    const profesores = await obtenerProfesores(query)

    return (
        <div className='grid grid-cols-1 gap-4 p-4 bg-gray-800 rounded-lg shadow-md'>
            <h1 className='text-2xl text-slate-300 py-2  mb-2 border-b-2 border-b-slate-300'>
                Lista de profesores (DB)
            </h1>

            <Buscar />

            <ul className='flex flex-col gap-2'>
                {profesores.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo                           
                    .map((profesor) => (
                        <li key={profesor.id} className='p-2 odd:bg-slate-600 flex justify-between'>
                            <Link href={`/profesores-db/${profesor.id}`}>{profesor.nombre}</Link>
                            <div className='flex gap-6'>
                                <form>
                                    <input type="hidden" name='id' value={profesor.id} />
                                    <Link href={`/profesores-db/modificar/${profesor.id}`} title='MODIFICAR'>✏️</Link>
                                    <button className='ml-2' formAction={eliminarProfesor} title='ELIMINAR'>❌</button>
                                </form>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

