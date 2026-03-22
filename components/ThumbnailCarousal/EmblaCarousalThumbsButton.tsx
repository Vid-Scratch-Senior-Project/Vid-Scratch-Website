import React, { useEffect, useState } from 'react'
import { getVideoFirstFrame } from '@/lib/getVideoFirstFrame'

type PropType = {
    selected: boolean
    index: number
    onClick: () => void
}

export const Thumb = (props: PropType) => {
    const { selected, index, onClick } = props
    const [thumb, setThumb] = useState<string | null>(null)
    const src = `/demo/clean/${index + 1}.mp4`

    useEffect(() => { getVideoFirstFrame(src).then(setThumb) }, [src])

    return (
        <div
            className={'embla-thumbs__slide'.concat(
                selected ? ' embla-thumbs__slide--selected' : ''
            )}
        >
            <button
                onClick={onClick}
                type="button"
                className="embla-thumbs__slide__number"
            >
                {thumb ? (
                    <img src={thumb} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gray-200 animate-pulse" />
                )}
            </button>
        </div>
    )
}
