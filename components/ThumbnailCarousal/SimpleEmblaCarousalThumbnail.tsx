'use client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './EmblaCarousal'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function SimpleEmblaCarousalThumbnail() {
    return <EmblaCarousel slides={SLIDES} options={OPTIONS} />
}
