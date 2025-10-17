import { useEffect } from "react"
import { useRouter } from "next/router"

export default function FinalFrame() {
    const router = useRouter()

    // client-side fallback in case server redirect doesn't run
    useEffect(() => {
        router.replace("https://open.spotify.com/playlist/3EOQCc8HEfIktK1nqAnOHV?si=6cb09ff9d9b144f2")
    }, [router])

    return null
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: "https://open.spotify.com/playlist/3EOQCc8HEfIktK1nqAnOHV?si=6cb09ff9d9b144f2",
            permanent: false,
        },
    }
}