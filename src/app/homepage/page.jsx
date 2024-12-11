import Navbar from "@/components/navbar";

export default function HomePage() {
    return (
        <>
            <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
                <Navbar></Navbar>
                <h1 className='text-3xl text-orange-500 text-center border-b-4 border-b-orange-500 py-5 mt-5'>Inicio</h1>
            </section>
        </>
    );
}