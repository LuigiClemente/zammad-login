import { genPageMetadata } from 'app/seo'
import dynamic from 'next/dynamic'
export const metadata = genPageMetadata({ title: 'Cube' })
const DynamicComponent = dynamic(() => import('@/components/CubeComponent'), {
  ssr: false, // This ensures the component is only imported on the client side
})
export default function Cube() {
  return (
    <>
      <DynamicComponent />
    </>
  )
}
