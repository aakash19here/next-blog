import MyProfilePic from './components/MyProfilePic'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Aakash's Blog",
  description: 'Created by create Aakash',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
