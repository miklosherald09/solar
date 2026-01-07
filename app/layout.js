export const metadata = {
  title: 'Solar',
  description: 'Postrix solar, help user select the best setup with their needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}