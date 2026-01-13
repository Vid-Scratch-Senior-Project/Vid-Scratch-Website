export default function HomePageHeroSection() {
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div>
                Welcome to Vid-Scratch
            </div>
            <div>
                Your Video, Your Control <br />
                Protect Your Work from AI
            </div>
            <div>
                Poison your video in to stop AI from copying your content
            </div>
            <div>
                <button className="btn">
                    Download App
                </button>
                <button className="btn">
                    Upload Your Video
                </button>
                <button className="btn">
                    See How It Works
                </button>
            </div>
        </div>
    )
}