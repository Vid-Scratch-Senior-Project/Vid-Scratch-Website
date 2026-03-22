import SimpleEmblaCarousalThumbnail from "@/components/ThumbnailCarousal/SimpleEmblaCarousalThumbnail"
import Link from "next/link"

export default function PoisoningPage() {
  // in case we want to show statistics after a video was poisoned
  return (
    <div style={{
      color: "var(--primary-text-color)",
      fontFamily: "var(--font-roboto)",
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }}>
      <div style={{
        fontSize: 50
      }}>
        Demo
      </div>
      <SimpleEmblaCarousalThumbnail />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 50
        }}>
        <div style={{
          fontSize: 24
        }}>
          Video Sources
        </div>
        <Link href={"https://www.kaggle.com/datasets/kanzeus/realai-video-dataset?select=ai"}>
          Video Sources: REAL/AI VIDEO DATASET by MRKANZET
        </Link>
      </div>

    </div>
  )
}