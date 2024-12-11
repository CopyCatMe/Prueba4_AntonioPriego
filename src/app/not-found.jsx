import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
    return (
        <section className="min-h-screen max-w-[1024px] mx-auto flex flex-col gap-4 justify-center items-center">
            <h1 className="text-3xl text-blue-200 font-bold drop-shadow-md">
                Página no encontrada
            </h1>
            <Image
                src="/not-found.webp"
                alt=""
                width={300}
                height={300}
            />
            <p className="text-sm text-white">La página que estás buscando no se ha encontrado. </p>
            <p className="text-sm text-white">Puedes volver al inicio pulsando <Link href={"/"} className="text-blue-600 underline hover:text-blue-700"> aquí</Link>.</p>
        </section>
    )
}