'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    return (
        <header>
            <div
                style={{
                    fontFamily: 'var(--font-roboto)',
                    fontWeight: 780,
                    fontSize: '24px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    gap: 8
                }}>
                Project <div
                    style={{
                        color: 'var(--secondary-text-color)',
                        fontStyle: 'italic'
                    }}>
                    Vid-Scratch
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: 20
                }}>
                <Link href="/" >
                    <div
                        style={{
                            fontFamily: 'var(--font-roboto)',
                            fontSize: '24px',
                            ...(pathname === '/' && {
                                fontWeight: 780,
                                color: 'var(--secondary-text-color)'
                            })
                        }}>
                        Home
                    </div>
                </Link>
                <Link href="/about-vid-scratch">
                    <div
                        style={{
                            fontFamily: 'var(--font-roboto)',
                            fontSize: '24px',
                            ...(pathname === '/about-vid-scratch' && {
                                fontWeight: 780,
                                color: 'var(--secondary-text-color)'
                            })
                        }}>
                        What is Vid Scratch
                    </div>
                </Link>
                <Link href="/demo">
                    <div
                        style={{
                            fontFamily: 'var(--font-roboto)',
                            fontSize: '24px',
                            ...(pathname === '/demo' && {
                                fontWeight: 780,
                                color: 'var(--secondary-text-color)'
                            })
                        }}>
                        Demo
                    </div>
                </Link>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScQKhhrPqNswvNk9kTlSj2izsN2Axk_Sp7wLa8ebEefPuSP4g/viewform?usp=dialog">
                    <div
                        style={{
                            fontFamily: 'var(--font-roboto)',
                            fontSize: '24px',
                        }}>
                        Feedback
                    </div>
                </a>
            </div>
        </header>
    )
}