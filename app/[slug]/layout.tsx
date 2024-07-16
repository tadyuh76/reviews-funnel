import { collection, getDocs, query, QueryDocumentSnapshot, where } from '@firebase/firestore'
import type { Metadata } from 'next'
import { db } from '../firebaseConfig'
import useStore from '../zustand/business-info'
import { IBusinessInfo } from './page'

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const collectionRef = collection(db, 'business')
  const q = query(collectionRef, where('slug', '==', params.slug))

  const querySnapshot = await getDocs(q)
  const data = querySnapshot.docs.at(0) as QueryDocumentSnapshot<IBusinessInfo>
  if (!data) return {}

  const info = data.data()
  useStore.setState({ businessInfo: info })

  return {
    title: `Leave Us a Review | ${info.businessName}`,
    description: 'We want to hear from you! A quick review can really help us out.',
    openGraph: {
      images: [info.logoURL],
    },
    icons: info.webiconURL,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
