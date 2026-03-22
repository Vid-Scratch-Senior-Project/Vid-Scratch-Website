export async function getVideoFirstFrame(src: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video')
        video.src = src
        video.currentTime = 0.001
        video.muted = true
        video.crossOrigin = 'anonymous'

        video.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas')
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            canvas.getContext('2d')!.drawImage(video, 0, 0)
            resolve(canvas.toDataURL('image/jpeg'))
        })

        video.addEventListener('error', reject)
        video.load()
    })
}