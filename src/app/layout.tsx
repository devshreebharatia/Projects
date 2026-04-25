import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Devshree Bharatia — Software Engineer',
  description: 'SWE3 at Walmart Global Tech. MSCS Georgia Tech. Builder of scalable systems, sharer of the journey. 200K+ community.',
  openGraph: {
    title: 'Devshree Bharatia — Software Engineer',
    description: 'From tier-3 college to Big Tech. Gold Medalist. SWE3 at Walmart. Georgia Tech MSCS.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })();
          `
        }} />
      </head>
      <body className="noise">
        {children}
      </body>
    </html>
  )
}
