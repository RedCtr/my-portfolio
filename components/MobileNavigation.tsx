import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from './ui/dropdown-menu'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'

const MobileNavigation = ({ items }: { items: NavItemType[] }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <button className='flex items-center justify-center rounded-lg p-1 w-9 h-9 
                bg-gray-700 transition duration-300 hover:bg-gray-600 
                hover:ring-2 hover:ring-gray-300'>
                    <Bars3Icon className='w-6 h-6 text-white' />

                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='border-none bg-gray-800'>
                {items.map((item) => (
                    <DropdownMenuItem
                        className=' text-gray-200 transition-all hover:bg-gray-400'
                        key={item.text} >
                        <Link href={item.href}>
                            {item.text}
                        </Link>
                    </DropdownMenuItem>
                ))}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MobileNavigation