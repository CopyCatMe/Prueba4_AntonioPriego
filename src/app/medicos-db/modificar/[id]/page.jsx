import Navbar from "@/components/navbar";
import Link from "next/link";
import { notFound, redirect } from 'next/navigation'
import mysql from '@/lib/mysql'


async function obtenerProfesor(id) {
    const sql = 'select * from profesores where id = ?';
    const values = [id]
    const [rows] = await mysql.query(sql, values);

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}

async function modificarProfesor(formData) {
    'use server'
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')
    const estado_civil = formData.get('estado-civil')
    const id = formData.get('id')

    const sql = 'UPDATE `profesores` SET nombre = ?, especialidad = ?, estado_civil = ? WHERE id = ?'
    const values = [nombre, especialidad, estado_civil, id];

    const [result, fields] = await mysql.query(sql, values)


    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    redirect('/profesores-db');
}


export default async function ProfesoresModificar({ params }) {

    const { id } = await params
    const profesor = await obtenerProfesor(id)

    return (
        <>
            <Navbar></Navbar>
            <section className="max-w-xl mx-auto p-4 bg-gray-800 text-white mt-20">
                <Link href="/profesores-db" className="fixed top-3 left-3 p-2 bg-orange-400 text-black rounded-full"> &larr; Volver </Link>
                <h1 className="py-4 text-4xl font-bold text-center border-b-4 border-orange-500">
                    Modificar Profesor #{profesor.id}
                </h1>
                <div className="flex flex-col items-center mt-8 p-4 bg-gray-700 rounded-lg shadow-md">
                    <form action={modificarProfesor} className="w-full max-w-md flex flex-col gap-4">
                        <input type="hidden" name="id" value={profesor.id} />
                        <label htmlFor="nombre" className="text-2xl font-semibold">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" className="text-xl p-1 text-center bg-gray-800 border-b-2 border-gray-600 focus:border-orange-400 focus:outline-none" defaultValue={profesor.nombre} />
                        <label htmlFor="especialidad" className="text-2xl font-semibold">Especialidad:</label>
                        <input type="text" name="especialidad" id="especialidad" className="text-xl p-1 text-center bg-gray-800 border-b-2 border-gray-600 focus:border-orange-400 focus:outline-none" defaultValue={profesor.especialidad} />
                        <label htmlFor="estado_civil" className="text-2xl font-semibold">Estado Civil:</label>
                        <input type="text" name="estado_civil" id="estado_civil" className="text-xl p-1 text-center bg-gray-800 border-b-2 border-gray-600 focus:border-orange-400 focus:outline-none" defaultValue={profesor.estado_civil} />
                        <button type="submit" className="mt-4 p-2 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition-colors">Guardar cambios</button>
                    </form>
                </div>
            </section>
        </>
    );
}
