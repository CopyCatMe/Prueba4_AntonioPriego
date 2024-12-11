import Link from "next/link";
import { notFound } from 'next/navigation'
import mysql from '@/lib/mysql'


async function obtenerMedico(id) {
    const sql = 'select * from medicos where id = ?';
    const values = [id]
    const [rows] = await mysql.query(sql, values);

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}


export default async function MedicoPage({ params }) {
    const { id } = await params
    const medico = await obtenerMedico(id)

    if (!medico) notFound()

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/medicos-db" className="fixed p-2 bg-orange-300 rounded-full mr-3"> &lt;- Volver </Link>
            <h1 className='py-10 text-4xl font-bold text-center border-b-4 border-orange-500 mt-5'>
                Medico #{medico.id}
            </h1>
            <div className="flex flex-col items-center mt-8 p-6 bg-gray-700 rounded-lg shadow-md">
                <p className="text-4xl text-white font-semibold">{medico.nombre}</p>
                <p className="text-2xl text-white mt-2">{medico.especialidad}</p>
                <p className="text-2xl text-white mt-2">{medico.perfil}</p>
            </div>
        </section>
    );
}

