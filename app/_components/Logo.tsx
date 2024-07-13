'use client'

import Image from 'next/image'
import useStore from '../zustand/business-info'

const Logo = () => {
  const { businessInfo } = useStore()

  return businessInfo ? (
    <Image
      src={businessInfo.logoURL}
      loader={prop => businessInfo.logoURL}
      width={200}
      height={45}
      alt="logo"
      className="mb-10"
    />
  ) : null
}

export default Logo
