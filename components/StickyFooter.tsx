export default function StickyFooter() {
    return (
        <div className="sticky-footer">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                <div>
                    copyrights
                </div>
                <div
                    style={{
                        display: 'flex',
                        gap: 20
                    }}>
                    <div>
                        Terms of Service
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                    <div>
                        Cookies
                    </div>
                </div>
            </div>
        </div>
    )
}