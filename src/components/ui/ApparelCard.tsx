import { Product } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

interface ApparelCardProp {
  item: Product;
}

export default function ApparelCard({ item }: ApparelCardProp) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${item.id}`}>
        <div className="relative h-64 w-full">
          <Image
            src={item.imageUrl}
            alt={item.name}
            layout="fill"
            className="aspect-square transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
          <p className="text-gray-600">₦{item.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  )
}