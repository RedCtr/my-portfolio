import Image from 'next/image'
import React from 'react'
import NavItem from './NavItem'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import MobileNavigation from './MobileNavigation'

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

        <header className='flex items-center justify-between max-w-4xl w-full
        mx-auto text-gray-900 bg-white bg-opacity-40 
        px-8 pt-4 pb-4 sm:pt-7 sm:pb-7'>

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

            <nav className='flex items-center gap-x-3 sm:gap-x-8'>
                <ul className='hidden sm:flex items-center gap-x-2'>

                    {navItems.map((item) => (
                        <NavItem key={item.text} text={item.text} href={item.href} />
                    ))}
                </ul>

                <ThemeSwitcher />
                <div className='flex sm:hidden'>

                    <MobileNavigation items={navItems} />
                </div>

            </nav>



        </header>
    )
}

export default Navigation