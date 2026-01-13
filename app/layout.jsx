import './globals.css'
import { Inter, Kanit } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const kanit = Kanit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-kanit'
})

export const metadata = {
  title: 'Trinity Securities - สมัครพอร์ตหุ้นเริ่มลงทุนง่าย ๆ กับ Trinity',
  description: 'เปิดบัญชีซื้อขายหุ้นออนไลน์ ง่าย สะดวก ปลอดภัย พร้อมบริการให้คำปรึกษาการลงทุนจากผู้เชี่ยวชาญ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${inter.variable} ${kanit.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}