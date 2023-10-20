"use client"
import figmaImg from "@/public/memes/figma.jpg"
import javascriptImg from "@/public/memes/javascript.jpg"
import nocodeImg from "@/public/memes/nocode.jpg"
import prismaImg from "@/public/memes/prisma.jpg"
import reactImg from "@/public/memes/react.jpg"
import typescriptImg from "@/public/memes/typescript.jpg"
import { Memetip } from "./Memetip"
// import {IdProvider}  from "@radix-ui/react-id"
import React from "react"

const data: {
  title: string
  items: { text: string; src?: any }[][]
}[] = [
    {
      title: "Android Tech Stack",
      items: [
        [
          {
            text: "Jetpack Components",
            src: figmaImg,
          },
        ],
        [
          {
            text: "Hilt",
          },
        ],
        [{ text: "Coroutine" }],
        [{ text: "MVVM & MVI" }],
      ],
    },
    {
      title: "Front-end",
      items: [
        [{ text: "Java" }, { text: "Kotlin" }],
        [
          {
            text: "JavaScript",
            src: javascriptImg,
          },
          {
            text: "TypeScript",
            src: typescriptImg,
          },
        ],

        [
          {
            text: "React",
            src: reactImg,
          },
          {
            text: "Next.js",
          },
        ],

        [{ text: "Tailwind" }],
      ],
    },
    {
      title: "Back-end",
      items: [
        [{ text: "Node.js" }],
        [{ text: "REST APIs" }],
        [{ text: "MySQL & Sqlite" }],
        [
          {
            text: "Prisma",
            src: prismaImg,
          },
        ],
      ],
    },
    {
      title: "Other",
      items: [
        [{ text: "Google Play Console" }],
        [
          {
            text: "Vercel",
          },
          {
            text: "AWS",
          },
        ],
        [
          {
            text: "PlanetScale",
            src: nocodeImg,
          },
        ],
        // [{ text: "Firebase & MongoDb" }],
      ],
    },
  ]

export const Skills = () => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Skills and tools</h2>
      <h4 className="mt-2 text-gray-500 lg:text-lg">
        Some of the languages, tools and concepts I have experience with.
      </h4>

      {/* IdProvider */}
      <div>
        <div className="flex flex-wrap mt-5 -mx-4 group">
          {data.map((field, fieldIndex) => {
            return (
              <div key={fieldIndex} className="w-1/2 px-4 mt-4 lg:w-1/4">
                <div className="text-lg font-bold text-gray-800">
                  {field.title}
                </div>
                <ul className="mt-2 space-y-1 text-sm text-gray-600 transition-colors group-hover:text-sky-500">
                  {field.items.map((item, itemIndex) => {
                    return (
                      <li key={itemIndex} className="leading-8">
                        {item.map((child, childIndex) => {
                          const prefix =
                            childIndex === 0
                              ? null
                              : item.length > 1 &&
                                item.length - 1 === childIndex
                                ? " & "
                                : ", "

                          return (
                            <React.Fragment key={childIndex}>
                              {prefix}

                              {child.src ? (
                                <Memetip src={child.src}>{child.text}</Memetip>
                              ) : (
                                child.text
                              )}
                            </React.Fragment>
                          )
                        })}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
