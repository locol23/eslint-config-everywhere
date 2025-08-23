import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import type { GetServerSideProps } from 'next'

interface Props {
  serverData: string
}

export default function NextExample({ serverData }: Props) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDashboardClick = () => {
    router.push('/dashboard')
  }

  const dangerousHTML = {
    __html: `
      console.log('This should be avoided in Next.js');
    `,
  }

  if (!mounted) return

  return (
    <div>
      <h1>Next.js Example</h1>
      <p>{serverData}</p>

      <Image
        alt="Example image"
        height={300}
        priority
        src="/example.jpg"
        width={500}
      />

      <Link href="/about">About Page</Link>

      <button onClick={handleDashboardClick} type="button">
        Go to Dashboard
      </button>

      <script dangerouslySetInnerHTML={dangerousHTML} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
  props: {
    serverData: 'Server-side data',
  },
})
