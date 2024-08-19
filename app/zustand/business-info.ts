import { create } from 'zustand'
import { IBusinessInfo } from '../[slug]/page'

interface BusinessInfoState {
  businessInfo: IBusinessInfo | null
  setBusinessInfo: (info: IBusinessInfo) => void
}

const useStore = create<BusinessInfoState>(set => ({
  businessInfo: null,
  setBusinessInfo: (info: IBusinessInfo) => set({ businessInfo: info }),
}))

export default useStore
