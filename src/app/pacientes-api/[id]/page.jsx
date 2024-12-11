import { notFound } from 'next/navigation'
import Link from "next/link"

async function obtenerProfesor(id) {
    const response = await fetch('http://localhost:4000/profesores/' + id)
    if (!response.ok) notFound()
    const profesor = await response.json()  

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return profesor
}


export default async function ProfesoresPage({ params }) {

    const { id } = await params
    const profesor = await obtenerProfesor(id)

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/profesores-api" className="fixed p-2 bg-orange-300 rounded-full mr-3"> &lt;- Volver </Link>
            <h1 className='py-10 text-4xl font-bold text-center border-b-4 border-orange-500 mt-5'>
                Profesor #{profesor.id}
            </h1>
            <div className="flex flex-col items-center mt-8 p-6 bg-gray-700 rounded-lg shadow-md">
                <p className="text-4xl text-white font-semibold">{profesor.nombre}</p>
                <p className="text-xl text-white mt-2">{profesor.especialidad}</p>
                <p className="text-2xl text-white mt-2">{profesor.estado_civil}</p>
            </div>
        </section>
    );
}
