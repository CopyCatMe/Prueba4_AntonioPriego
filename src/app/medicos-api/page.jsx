import Fallback from "@/components/fallback";
import Medicos from "@/components/api-medicos";
import MedicoNuevo from "@/components/api-medico-nuevo";
import { Suspense } from "react";
import Navbar from "@/components/navbar";

export default async function MedicosApi({ searchParams }) {
    const { query } = await searchParams;

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return (
        <>
            <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Navbar></Navbar>
                <h1 className='py-10 text-3xl text-orange-500 text-center border-b-4 border-b-orange-500'>
                    API REST
                </h1>

                <MedicoNuevo />

                <Suspense fallback={<Fallback>Obteniendo medicos... </Fallback>}>
                    <Medicos query={query || ''} />
                </Suspense>
            </section>
        </>
    );
}
