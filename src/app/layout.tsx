import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"

export const metadata = {
  title: "TREE*STAR NYC | Handmade Natural Soap",
  description:
    "Fresh natural soap handmade in NYC with organic plant oils, playful scents, and a tree planted with every purchase."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
