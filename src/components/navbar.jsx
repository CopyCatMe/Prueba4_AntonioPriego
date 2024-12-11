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
                <Link href="/medicos-db" className="text-white text-sm font-medium px-3 py-1 rounded hover:bg-orange-500 hover:text-black transition">
                    Medicos BBDD
                </Link>
                <Link href="/medicos-api" className="text-white text-sm font-medium px-3 py-1 rounded hover:bg-orange-500 hover:text-black transition">
                    Medicos API REST
                </Link>
                <Link href="/pacientes-db" className="text-white text-sm font-medium px-3 py-1 rounded hover:bg-orange-500 hover:text-black transition">
                    Pacientes BBDD
                </Link>
                <Link href="/pacientes-api" className="text-white text-sm font-medium px-3 py-1 rounded hover:bg-orange-500 hover:text-black transition">
                    Pacientes API REST
                </Link>
                <Logout action={logout} />
            </div>
        </>
    );
}