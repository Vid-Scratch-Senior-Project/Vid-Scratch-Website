export default function AboutUsPageHeader() {
    return (
        <div
            style={{
                height: 500,
                backgroundColor: '#373737'
            }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}>
                <div
                    style={{
                        fontFamily: 'var(--font-roboto)',
                        fontWeight: 780,
                        fontSize: '62px',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}>
                    What is Vid-Scratch?
                </div>
                <div
                    style={{
                        fontFamily: 'var(--font-roboto)',
                        fontSize: '24px'
                    }}>
                    Samples, Why Does It Work, and Limitations
                </div>
            </div>

        </div>
    )
}