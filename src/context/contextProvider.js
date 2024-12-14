"use client"

import { AuthProvider } from "./authContext"
import { CartProvider } from "./cartContext"

export default function ContextProvides({children}) {
  return (
    <AuthProvider>
        <CartProvider>
            {children}
        </CartProvider>
    </AuthProvider>
  )
}
