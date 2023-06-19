"use client"
import Image from 'next/image'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = "https://m.s26.bet";
  }, []);
  return (
    <main className="flex justify-center">
      <h3 className="p-4">Loading...</h3>
    </main>
  )
}
