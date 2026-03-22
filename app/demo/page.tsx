import SimpleEmblaCarousalThumbnail from "@/components/ThumbnailCarousal/SimpleEmblaCarousalThumbnail"

export default function PoisoningPage() {
  // in case we want to show statistics after a video was poisoned
  return (
    <div>
      <div>
        carousal
      </div>
      <div>Demo
        <div>
          clean + on hover card expands
        </div>
        <div>
          poisoned
        </div>
        <SimpleEmblaCarousalThumbnail/>
      </div>

    </div>
  )
}