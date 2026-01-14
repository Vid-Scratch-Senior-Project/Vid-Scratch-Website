import Link from "next/link";

export default function Header() {
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
                            fontWeight: 780,
                            fontSize: '24px',
                            color: 'var(--secondary-text-color)'
                        }}>
                        Home
                    </div>

                </Link>
                <Link href="/about-vid-scratch">
                    <div
                        style={{
                            fontFamily: 'var(--font-roboto)',
                            fontSize: '24px',
                        }}>
                        What is Vid Scratch
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