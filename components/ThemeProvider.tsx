'use client'
import { ThemeProvider as Theme } from 'next-themes'
import React from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Theme attribute='class'>
            {children}
        </Theme>
    )
}

export default ThemeProvider