"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { MobileContainer } from "@/components/mobile-container"

export default function InstructionsPage() {
  const router = useRouter()

  return (
    <MobileContainer>
      <section className="flex flex-col flex-1 px-6 pt-8 pb-6">
        <button onClick={() => router.back()} className="text-sm text-primary mb-4">
          ← Back
        </button>
        <h2 className="text-xl font-bold mb-4">Sorting Instructions</h2>
        <ul className="space-y-4">
          <li>
            🗑️ Gunakan <strong>kantong hitam</strong> untuk sampah organik.
          </li>
          <li>
            🗑️ Gunakan <strong>kantong putih</strong> untuk sampah anorganik.
          </li>
          <li>
            ✅ Tempel kode unik <strong className="font-mono">XCV101</strong> di setiap kantong.
          </li>
        </ul>

        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="w-full aspect-video bg-stone-100 rounded-2xl flex items-center justify-center text-stone-400">
            Image / Upload Placeholder
          </div>
          <Button
            className="w-full py-3 rounded-xl bg-primary text-white font-semibold"
            onClick={() => alert("Upload coming soon")}
          >
            Upload Example Photo
          </Button>
        </div>
      </section>
    </MobileContainer>
  )
}
