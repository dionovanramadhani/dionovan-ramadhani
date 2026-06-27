import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Portfolio — Dashboard',
  description: 'A developer portfolio crafted as an embedded dashboard application.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="bg-bg-hard text-fg font-mono">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
