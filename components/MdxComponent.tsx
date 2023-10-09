"use client"
import { getMDXComponent } from 'mdx-bundler/client'
import React, { useMemo } from 'react'
import { components } from './MdxComponents'

const MdxComponent = ({ code }: { code: string }) => {
    // This is a bit weird, but this is how mdx-bundler recommends it.
    const Component = useMemo(() => getMDXComponent(code), [code])
    return (
        <Component components={components as any} />
    )
}

export default MdxComponent