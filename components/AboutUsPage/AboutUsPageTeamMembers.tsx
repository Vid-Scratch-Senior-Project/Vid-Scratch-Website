import MediaBlock from "../MediaBlock";

export default function AboutUsPageTeamMember() {
    return (
        <div>
            <div
                style={{
                    fontFamily: 'var(--font-roboto)',
                    fontWeight: 780,
                    fontSize: '32px',
                    textTransform: 'uppercase',
                    textAlign: 'center'
                }}>
                OUR TEAM MEMBERS
            </div>
            <div>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <MediaBlock url="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                    </div>
                </div>
                <div
                style={{
                        fontFamily: 'var(--font-roboto)',
                        fontWeight: 500,
                        fontSize: '48px',
                        textAlign: 'center'
                    }}>
                    Aum
                </div>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <MediaBlock url="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                    </div>
                </div>
                <div
                style={{
                        fontFamily: 'var(--font-roboto)',
                        fontWeight: 500,
                        fontSize: '48px',
                        textAlign: 'center'
                    }}>
                    Pong
                </div>
            </div>
        </div>
    )
}