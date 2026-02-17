import Link from "next/link";
import CookiePreferences from "./CookiePreferences";

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
                    <Link href="/terms-of-service" >
                        <div>
                            Terms of Service
                        </div>
                    </Link>
                    <Link href="/privacy" >
                        <div>
                            Privacy Policy
                        </div>
                    </Link>
                    <CookiePreferences/>
                </div>
            </div>
        </div>
    )
}