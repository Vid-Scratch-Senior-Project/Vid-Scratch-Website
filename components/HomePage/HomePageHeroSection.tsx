'use client'
import { useRouter } from "next/navigation";
import { RiPlayFill } from '@remixicon/react'

export default function HomePageHeroSection() {
    const router = useRouter();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 50
            }}>
            <div className="gradient-text-home-hero"
                style={{
                    fontFamily: 'var(--font-roboto)',
                    fontWeight: 750,
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    letterSpacing: '10px',
                    width: '100%'
                }}>
                Welcome to Vid-Scratch
            </div>
            <div className="radial-gradient-text-home-hero"
                style={{
                    fontFamily: 'var(--font-roboto)',
                    fontWeight: 750,
                    fontSize: '76px',
                    textAlign: 'center',
                }}>
                Your Video, Your Control <br />
                Protect Your Work from AI
            </div>
            <div
                style={{
                    color: 'var(--quinary-text-color)',
                    fontFamily: 'var(--font-roboto)',
                    fontWeight: 750,
                    fontSize: '24px',
                    textAlign: 'center',
                    letterSpacing: '40%',
                    width: '100%'
                }}>
                Poison your video in to stop AI from copying your content
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: 20,
                    padding: 20
                }}>
                <button className="btn btn-outline"
                    style={{
                        borderColor: 'var(--secondary-text-color)',
                        borderRadius: '50px',
                        padding: 30,
                        boxShadow: '0px 0px 5px var(--secondary-text-color)'
                    }}>
                    Download App
                </button>
                <button className="btn btn-outline"
                    style={{
                        borderColor: 'var(--secondary-text-color)',
                        borderRadius: '50px',
                        padding: 30,
                        boxShadow: '0px 0px 5px var(--secondary-text-color)'
                    }}
                    onClick={() => router.push('/demo')}>
                    Upload Your Video
                </button>
                <button className="btn btn-outline"
                    style={{
                        borderColor: 'var(--senary-text-color)',
                        borderRadius: '50px',
                        padding: 30,
                    }}>
                        <RiPlayFill />
                    See How It Works
                </button>
            </div>
        </div>
    )
}