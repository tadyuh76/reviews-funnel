'use client'

import Image from 'next/image'
import useStore from '../zustand/business-info'

const Logo = () => {
  const { businessInfo } = useStore()

  return businessInfo ? (
    <Image
      src={businessInfo.logoURL}
      loader={_ => businessInfo.logoURL}
      fill={false}
      alt="logo"
      width={0}
      height={0}
      className="mb-10 w-auto h-10"
    />
  ) : null
}

export default Logo
