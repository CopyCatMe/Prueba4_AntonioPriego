import Buscar from '@/components/buscar'
import Link from 'next/link'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/dist/server/api-utils'

async function obtenerProfesores(query) {
    const response = await fetch('http://localhost:4000/profesores')
    const profesores = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return profesores.filter(profesor => profesor.nombre.toLowerCase().includes(query))
}


async function eliminarProfesor(formData) {
    'use server'
    const id = formData.get('id')

    await fetch('http://localhost:4000/profesores/' + id, { method: 'DELETE' })

    revalidatePath('/profesores-api')
}


export default async function Profesores({ query }) {
    const profesores = await obtenerProfesores(query)

    return (
        <div className='grid grid-cols-1 gap-4 p-4 bg-gray-800 rounded-lg shadow-md'>
            <h1 className='text-2xl text-slate-300 py-2  mb-2 border-b-2 border-b-slate-300'>
                Lista de profesores (API)
            </h1>

            <Buscar />

            <ul className='flex flex-col gap-2'>
                {profesores.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo                           
                    .map((profesor) => (
                        <li key={profesor.id} className='p-2 odd:bg-slate-600 flex justify-between'>
                            <Link href={`/profesores-api/${profesor.id}`}>{profesor.nombre}</Link>
                            <div className='flex gap-6'>
                                <form>
                                    <input type="hidden" name='id' value={profesor.id} />
                                    <Link href={`/profesores-api/modificar/${profesor.id}`} title='MODIFICAR'>✏️</Link>
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