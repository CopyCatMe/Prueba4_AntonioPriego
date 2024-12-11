import { Logout } from "@/components/forms"
import { logout } from "@/lib/actions"
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-around items-center bg-gray-800 p-3 shadow-md rounded-lg">
                <Link href="/homepage" className="text-white text-sm font-medium px-3 py-1 rounded hover:bg-orange-500 hover:text-black transition">
                    Inicio
                </Link>
                <Link href="/alumnos-db" className="text-white text-sm font-medium px-3 py-1 rounded hover:bg-orange-500 hover:text-black transition">
                    Alumnos BBDD
                </Link>
                <Link href="/alumnos-api" className="text-white text-sm font-medium px-3 py-1 rounded hover:bg-orange-500 hover:text-black transition">
                    Alumnos API REST
                </Link>
                <Link href="/profesores-db" className="text-white text-sm font-medium px-3 py-1 rounded hover:bg-orange-500 hover:text-black transition">
                    Profesores BBDD
                </Link>
                <Link href="/profesores-api" className="text-white text-sm font-medium px-3 py-1 rounded hover:bg-orange-500 hover:text-black transition">
                    Profesores API REST
                </Link>
                <Logout action={logout} />
            </div>
        </>
    );
}