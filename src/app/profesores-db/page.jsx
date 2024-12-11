import mysql from '@/lib/mysql'
import Profesores from "@/components/db-medicos";
import ProfesorNuevo from "@/components/db-paciente-nuevo";
import { Suspense } from "react";
import Fallback from "@/components/fallback";
import Navbar from "@/components/navbar";




export default async function ProfesoresPage({ searchParams }) {
    const { query } = await searchParams;

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Navbar></Navbar>
            <h1 className='py-10 text-3xl text-orange-500 text-center border-b-4 border-b-orange-500'>
                BASE DE DATOS
            </h1>

            <ProfesorNuevo />

            <Suspense fallback={<Fallback>Obteniendo profesores ... </Fallback>}>
                <Profesores query={query || ''} />
            </Suspense>
        </section>
    );
}
