import React from 'react'
import { Suspense } from 'react'
import CheckOut from './checkout'
export default function PageCheckout() {
    return (
        <Suspense>
            <CheckOut />
        </Suspense>
    )
}
