import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '我的个人博客',
  description: '欢迎来到我的个人博客，这里分享我的技术心得、生活感悟和项目经验。',
  keywords: ['个人博客', '技术分享', '生活感悟', '项目经验'],
  authors: [{ name: '博主' }],
  openGraph: {
    title: '我的个人博客',
    description: '欢迎来到我的个人博客，这里分享我的技术心得、生活感悟和项目经验。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          {children}
        </div>
      </body>
    </html>
  )
} 