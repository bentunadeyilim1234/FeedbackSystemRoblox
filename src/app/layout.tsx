import './globals.css'

export const metadata = {
  title: 'Feedbacks',
  description: 'Feedbacks for Roblox Games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>{children}</body>
    </html>
  )
}
