'use client'
import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItem = ({ text, href }: { text: string, href: string }) => {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <Link
            href={href}
            className={cn(
                'p-1 px-2 py-1 sm:px-3 sm:py-2 rounded-lg transition-all hover:bg-gray-800',
                isActive
                    ? 'text-gray-200 font-semibold'
                    : 'text-gray-400 font-normal'
            )}
        >
            <span className='capsize'>{text}</span>
        </Link>
    )
}

export default NavItem