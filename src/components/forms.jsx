import { LogIn, LogOut } from "lucide-react"

export function Login({ action, callbackUrl }) {
    return (
        <>
            <form action={action} className="flex flex-col gap-4 p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md mx-auto">
                <input type='hidden' name='callbackUrl' defaultValue={callbackUrl} />

                <label className="text-sm font-semibold text-gray-300" htmlFor="username">
                    <i className="fa fa-user mr-2" aria-hidden="true"></i> Usuario
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="max-w-[250px] rounded-md px-4 py-3 border border-gray-600 text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                />

                <label className="text-sm font-semibold text-gray-300" htmlFor="password">
                    <i className="fa fa-lock mr-2" aria-hidden="true"></i> Contraseña
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="max-w-[250px] rounded-md px-4 py-3 border border-gray-600 text-black placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                />

                <button
                    type="submit"
                    className="mt-6 bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                    <LogIn className="inline mr-2 p-1" />
                    Iniciar sesión
                </button>
            </form>
        </>

    );
}

export function Logout({ action }) {
    return (
        <>
            <form action={action} className="flex flex-col items-center gap-4">
                <button type="submit" className="flex ml-5 items-center justify-center gap-2 max-w-[200px] bg-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-orange-600 transition">
                    <LogOut className="inline text-white" />
                    Cerrar sesión
                </button>
            </form>

        </>
    );
}