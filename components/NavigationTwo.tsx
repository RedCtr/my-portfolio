import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
import cx from "clsx"
import Link from "next/link"
import React from "react"
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai"

export const NavigationTwo = () => {
    return (
        <div className="sticky top-0 z-10 py-2 bg-white md:py-6 md:mb-6">
            <div className="container px-4 mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between">
                <Link
                    className={cx(
                        "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase",
                        FOCUS_VISIBLE_OUTLINE,
                    )}
                    href="/">
                    Redouane de Ctr

                </Link>

                <div className="flex items-center -ml-5 text-gray-900 lg:-ml-8">
                    <Link
                        className={cx(
                            "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500",
                            FOCUS_VISIBLE_OUTLINE,
                        )}
                        href="/#about">



                        About

                    </Link>

                    <Link
                        className={cx(
                            "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500",
                            FOCUS_VISIBLE_OUTLINE,
                        )}
                        href="/blog">



                        Blog

                    </Link>

                    <Link
                        className={cx(
                            "font-medium block transition-colors mt-1.5 lg:mt-0 lg:ml-8 ml-5 hover:text-sky-500",
                            FOCUS_VISIBLE_OUTLINE,
                        )}
                        href="/#projects">



                        Projects

                    </Link>

                    <p className="flex pl-6 space-x-3 text-xl">
                        <a
                            href="https://twitter.com/Ridouan54968047"
                            className={cx(
                                "transition-colors text-gray-900 hover:text-sky-500 cursor-pointer",
                                FOCUS_VISIBLE_OUTLINE,
                            )}
                            target="_blank"
                        >
                            <AiOutlineTwitter></AiOutlineTwitter>
                        </a>
                        <a
                            href="https://github.com/redctr"
                            className={cx(
                                "transition-colors text-gray-900 hover:text-sky-500 cursor-pointer",
                                FOCUS_VISIBLE_OUTLINE,
                            )}
                            target="_blank"
                        >
                            <AiOutlineGithub></AiOutlineGithub>{" "}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
