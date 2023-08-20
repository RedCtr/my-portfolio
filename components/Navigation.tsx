import Image from 'next/image'
import React from 'react'
import NavItem from './NavItem'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'

type NavItemType = {
    text: string,
    href: string
}

const navItems: NavItemType[] = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Guestbook',
        href: '/guestbook'
    },
    {
        text: 'Blog',
        href: '/blog'
    },
    {
        text: 'Snippets',
        href: '/snippets'
    },
]

const Navigation = () => {
    return (

        <header className='flex items-center justify-between max-w-3xl w-full
        mx-auto text-gray-100 bg-gray-900 bg-opacity-40 pt-7 pb-7 sm:py-10 sm:pb-10'>

            <Link href='/' className='relative w-[27px] h-[30px] sm:w-[40px] sm:h-[44px]'>
                <Image
                    className=' object-cover hover:cursor-pointer'
                    alt='a logo represent the letter R'
                    src='/images/whiteIcon.png'
                    fill
                    priority
                    quality={80}
                />

            </Link>

            <nav className='flex items-center gap-x-8'>
                <ul className='flex items-center gap-x-2'>

                    {navItems.map((item) => (
                        <NavItem text={item.text} href={item.href} />
                    ))}
                </ul>

                <ThemeSwitcher />

            </nav>

        </header>
    )
}

export default Navigation