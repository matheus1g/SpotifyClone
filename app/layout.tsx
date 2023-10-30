import type { Metadata } from 'next'

import './globals.css'
import { Figtree } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/provider/SupabaseProvider'
import UserProvider from '@/provider/UserProvider'
import ModalProvider from '@/provider/ModalProvider'
import ToasterProvider from '@/provider/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'



const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!', 
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
                <Sidebar songs={userSongs}>
                  {children}
                </Sidebar>
            </UserProvider>
          </SupabaseProvider>
        </body>
    </html>
  )
}
