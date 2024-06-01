import { genPageMetadata } from 'app/[locale]/seo'
import dynamic from 'next/dynamic'
export const metadata = genPageMetadata({ title: 'Plan' })
const DynamicComponent = dynamic(() => import('@/components/CubeComponent'), {
  ssr: false, // This ensures the component is only imported on the client side
})
export default function Plan() {
  return (
    <>
      <DynamicComponent />
    </>
  )
}
