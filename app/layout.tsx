import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Theme, Container } from '@radix-ui/themes'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Theme accentColor='sky'>
                    <NavBar />
                    <main>
                        <Container>{children}</Container>
                    </main>
                </Theme>
            </body>
        </html>
    )
}
