'use server'
import { redirect } from "next/navigation";
import { deleteCookie, setCookie } from "@/lib/cookies";

export async function login(formData) {
  const LOGIN_URL = '/'
  
  const username = formData.get('username')
  const password = formData.get('password')
  const callbackUrl = formData.get('callbackUrl') || LOGIN_URL

  const authenticated = (username === 'medico1' && password === 'medico1' || username === 'medico2' && password === 'medico2')

  if (!authenticated) return

  await setCookie('session', { username, password })

  redirect("/homepage");
}

export async function logout() {
  deleteCookie('session')
  redirect('/?logout=' + Math.random())
}
