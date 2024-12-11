'use server'
import { redirect } from "next/navigation";
import { deleteCookie, setCookie } from "@/lib/cookies";



export async function login(formData) {
  const LOGIN_URL = '/'

  // Obtener usuario datos del formulario
  const username = formData.get('username')
  const password = formData.get('password')
  const callbackUrl = formData.get('callbackUrl') || LOGIN_URL

  // Comprobar si credenciales son válidas
  const authenticated = (username === 'usuario' && password === 'usuario' || username === 'usuario1' && password === 'usuario1')

  if (!authenticated) return

  // Si hay autenticación correcta, creamos cookie de sesión
  await setCookie('session', { username, password })

  redirect("/homepage");
}



export async function logout() {
  // Eliminamos cookie de sesión
  deleteCookie('session')

  // Hack to reload page! https://github.com/vercel/next.js/discussions/49345#discussioncomment-6120148
  redirect('/?' + Math.random())
}