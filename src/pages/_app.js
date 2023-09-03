import RootLayout from '@/components/Layouts/RootLayout'

export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}