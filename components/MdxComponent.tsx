"use client"
import { useMDXComponent } from 'next-contentlayer/hooks'
import { components } from './MdxComponents'

const MdxComponent = ({ code }: { code: string }) => {

    const Component = useMDXComponent(code)
    return (
        <Component components={components as any} />
    )
}

export default MdxComponent