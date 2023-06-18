import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image
        src="/1024x5008.2.png"
        alt="Next.js Logo"
        width={1024}
        height={5008}
        priority
      />
    </main>
  )
}
