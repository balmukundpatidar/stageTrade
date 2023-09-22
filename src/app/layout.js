import '../../public/assets/css/globals.css'
import { Providers } from '@/store/provider';
export const metadata = {
  title: 'Tradery Labs',
  description: 'Generated by Tradery Labs app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>  <Providers>{children}</Providers></body>
    </html>
  )
}