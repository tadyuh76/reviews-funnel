'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ErrorPage from '../_components/ErrorPage'
import LoadingPage from '../_components/LoadingPage'
import Logo from '../_components/Logo'
import useStore from '../zustand/business-info'

import { collection, getDocs, query, QueryDocumentSnapshot, where } from '@firebase/firestore'
import badEmojiSVG from '../../public/bad.svg'
import goodEmojiSVG from '../../public/good.svg'
import { db } from '../firebaseConfig'

export interface IBusinessInfo {
  businessEmail: string
  businessName: string
  businessOwnerFirstName: string
  googleReviewURL: string
  logoURL: string
  senderEmail: string
  slug: string
  webiconURL: string
  websiteURL: string
}

export default function SlugPage({ params }: { params: { slug: string } }) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { businessInfo, setBusinessInfo } = useStore()

  useEffect(() => {
    const getBusinessInfo = async () => {
      const collectionRef = collection(db, 'business')
      const q = query(collectionRef, where('slug', '==', params.slug))
      const querySnapshot = await getDocs(q)
      const data = querySnapshot.docs.at(0) as QueryDocumentSnapshot<IBusinessInfo>
      if (!data) return

      const info = data.data()

      setBusinessInfo(info)
      setIsLoading(false)
    }
    getBusinessInfo()
  }, [params.slug, setBusinessInfo])

  return isLoading ? (
    <LoadingPage />
  ) : businessInfo ? (
    <main className="flex justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="bg-[var(--foreground-color)] py-10 px-4 md:px-10 rounded-2xl flex flex-col items-center justify-center w-full h-full md:h-auto md:w-4/5 lg:w-2/3 xl:w-1/2">
        <Logo />
        <h1 className="text-2xl mb-5 text-center">How was your experience with us?</h1>
        <p className="mb-10 text-[var(--grey)] text-center">
          Your input is super important in helping us understand your needs better, so we can
          customize our services to suit you perfectly.
        </p>
        <div className="flex justify-center space-x-4 md:space-x-10">
          <Link
            href={`${businessInfo.slug}/feedback`}
            className="max-w-60 w-2/3 md:w-48 lg:w-60 aspect-square border-2 border-[var(--light-grey)] hover:border-[var(--foreground)] rounded-3xl flex-col flex items-center justify-center mb-2"
          >
            <Image src={badEmojiSVG} alt="" className="h-2/3 w-auto object-contain" />
            <p className="mt-2 text-lg">Bad</p>
          </Link>
          <Link
            href={`${businessInfo.slug}/reviews`}
            className="max-w-60 w-2/3 md:w-48 lg:w-60 aspect-square border-2 border-[var(--light-grey)] hover:border-[var(--foreground)] rounded-3xl flex-col flex items-center justify-center mb-2"
          >
            <Image src={goodEmojiSVG} alt="" className="h-2/3 w-auto object-contain" />
            <p className="mt-2 text-lg">Good</p>
          </Link>
        </div>
      </div>
    </main>
  ) : (
    <ErrorPage />
  )
}
