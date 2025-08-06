"use client"
import { LIGHT_COLORS } from "@/lib/constants"
import { shuffleArray } from "@/lib/shuffleArray"
import { useIsFontReady } from "@/lib/useIsFontReady"
// @ts-ignore
import redImg from "@/public/red1.png"
import Image from "next/image"
import React from "react"
import { RoughNotationGroup } from "react-rough-notation"
import cx from "clsx"
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
import { RainbowHighlight } from "./RainbowHighlight"
import Tilt from 'react-parallax-tilt'
import { Screen } from "./challenge/Screen"
import { RoughNotation } from "react-rough-notation"
import { Button } from "@/components/ui/button"

export const About = () => {
    // Before animation, detect if custom fonts are loaded, so <RoughNotation />
    // SVG's are correctly positioned over the elements
    const isFontReady = useIsFontReady()

    const [colors, setColors] = React.useState<string[]>([])

    // Shuffle our colors and store them in state so the order is persisted during
    // React re-renders
    React.useEffect(() => {
        setColors(shuffleArray(LIGHT_COLORS))
    }, [])

    return (
        <div className="container px-4 mx-auto">
            <div className="space-x-5 lg:flex item-center lg:-mx-4">
                <div className="lg:px-4 max-w-2xl ">
                    <RoughNotationGroup show={isFontReady}>
                        <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
                            Hi there! I'm Red, a{" "}
                            <RainbowHighlight color={colors[0]}>
                                full stack software developer
                            </RainbowHighlight> {" "}
                            based in Morocco.
                        </h1>

                        <div className="mt-4 text-gray-800">
                            <p>
                                I love building applications that are {" "}
                                <RainbowHighlight color={colors[0]}>
                                    user-friendly, scalable
                                </RainbowHighlight> {" "} and {" "}
                                <RainbowHighlight color={colors[1]}>
                                    performant.
                                </RainbowHighlight>

                            </p>

                            <p className="mt-2">
                                I'm known for putting in the {" "}
                                <RainbowHighlight color={colors[1]}>
                                    hard work
                                </RainbowHighlight> {" "}, taking pride in delivering {" "}
                                <strong>high-quality</strong> {" "}
                                full stack solutions. From frontend interfaces to backend APIs, no challenge is too big when you're determined to succeed.
                            </p>
                            <p className="mt-2">
                                My experience in full stack development has equipped me with expertise across
                                the entire technology stack, allowing me to bridge the gap between {" "}
                                <RainbowHighlight color={colors[2]} >
                                    frontend
                                </RainbowHighlight>{" "} and {" "}
                                <RainbowHighlight color={colors[3]} >
                                    backend development.
                                </RainbowHighlight>

                            </p>
                            <p className="mt-2">
                                {/* As I actively seek new career opportunities, looking for a role as a full stack developer{" "} */}
                                I'm currently looking for a role as a full stack developer.{" "}
                                <RoughNotation
                                    type='box'
                                    multiline={true}
                                    padding={[0, 2]}
                                    iterations={2}
                                    strokeWidth={1}
                                    animationDuration={200}
                                    color={colors[0]}>
                                    <strong>
                                        {"  "} Hire me? {"  "}
                                    </strong>
                                </RoughNotation>
                            </p>

                            <div className="mt-6 flex items-center gap-x-4">
                                <a href="https://www.linkedin.com/in/redctr/"
                                    target="_blank">

                                    <Button className=" w-[170px] rounded-sm" variant='default' >
                                        View Linkedin
                                    </Button>
                                </a>
                                <a href="https://github.com/redCtr/"
                                    target="_blank">

                                    <Button className="w-[170px] rounded-sm" variant='outline' >
                                        View Github
                                    </Button>
                                </a>


                            </div>
                        </div>
                    </RoughNotationGroup>
                </div>

                <div className="flex-shrink-0 mt-12 lg:px-4 lg:mt-0">
                    <Tilt
                        transitionSpeed={10000}
                        tiltMaxAngleY={8}
                        tiltMaxAngleX={8}
                        scale={1.01}
                        glareEnable={true}
                        glareMaxOpacity={0.3}
                        glareBorderRadius="11px"
                    >
                        <div className="rounded-lg w-[260px] h-[370px] relative transition overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer">

                            <Image
                                className="rounded-lg w-[260px] h-[370px] object-cover aspect-auto"
                                src={redImg}
                                alt="Profile"
                                placeholder="blur"
                                priority={true}
                            // width={200}
                            // height={200}
                            />
                        </div>


                    </Tilt>

                </div>
            </div>
        </div>
    )
}
