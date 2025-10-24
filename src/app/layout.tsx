import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

const inter = Inter({ 
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "FurCircle - Coming Soon | All Pet Services in One App",
  description: 'FurCircle is bringing all pet services to one app — daycare, walks, grooming, vet care, and a neighbourhood community for pet lovers. Join our waitlist for endless convenience and savings.',
  keywords: 'pet services, dog daycare, pet grooming, veterinary care, pet community, pet app',
  author: 'FurCircle',
  openGraph: {
    title: 'FurCircle - Coming Soon',
    description: 'All pet services in one convenient app. Join the waitlist today!',
    url: 'https://furcircle.ca',
    siteName: 'FurCircle',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FurCircle - Coming Soon',
    description: 'All pet services in one convenient app. Join the waitlist today!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ `${inter.className} bg-gray-200	min-h-screen dark:bg-[#0d1117] `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>          
          <main className='main'>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
