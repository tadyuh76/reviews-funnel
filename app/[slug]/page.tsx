'use client'

import { collection, getDocs, query, QueryDocumentSnapshot, where } from '@firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from '../_components/Logo'
import BadEmojiSVG from '../_components/svgs/BadEmojiSVG'
import GoodEmojiSVG from '../_components/svgs/GoodEmojiSVG'
import { db } from '../firebaseConfig'
import useStore from '../zustand/business-info'

export interface IBusinessInfo {
  businessEmail: string
  businessName: string
  businessOwnerFirstName: string
  googleReviewURL: string
  logoURL: string
  reviewsURL: string
  senderEmail: string
  slug: string
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
      const data = (querySnapshot.docs.at(0) as QueryDocumentSnapshot<IBusinessInfo>).data()

      setBusinessInfo(data)
      setIsLoading(false)
    }
    getBusinessInfo()
  }, [params.slug, setBusinessInfo])

  return isLoading ? (
    <p>Loading</p>
  ) : businessInfo ? (
    <main className="flex justify-center items-center h-screen bg-[url('/background-pattern.png')] bg-repeat">
      <div className="bg-[var(--foreground-color)] py-10 rounded-2xl flex flex-col items-center w-1/2">
        <Logo />
        <h1 className="text-2xl mb-5">How was your experience with us?</h1>
        <p className="mb-10 text-[var(--grey)] text-center">
          Your input is super important in helping us understand your needs better,
          <br /> so we can customize our services to suit you perfectly.
        </p>
        <div className="flex justify-center space-x-10">
          <Link
            href={`${businessInfo.slug}/feedback`}
            className="cursor-pointer w-60 h-60 border-2 border-[var(--light-grey)] hover:border-[var(--foreground)] rounded-3xl flex-col flex items-center justify-center mb-2"
          >
            <BadEmojiSVG />
            <p className="mt-2 text-xl">Bad</p>
          </Link>
          <Link
            href={`${businessInfo.slug}/reviews`}
            className="cursor-pointer w-60 h-60 border-2 border-[var(--light-grey)] hover:border-[var(--foreground)] rounded-3xl flex-col flex items-center justify-center mb-2"
          >
            <GoodEmojiSVG />
            <p className="mt-2 text-xl">Good</p>
          </Link>
        </div>
      </div>
    </main>
  ) : (
    <p>No Business Found.</p>
  )
}
