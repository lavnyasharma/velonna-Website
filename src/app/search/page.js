import React from 'react'
import { Suspense } from "react";
import Search from './search';

export default function PageSearch() {
    return (
        <Suspense>
            <Search />
        </Suspense>
    )
}
