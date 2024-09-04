import { Product } from '@/lib/types'
import ApparelCard from './ApparelCard'

interface ApparelGridProps {
  items: Array<Product>;
}

export default function ApparelGrid({ items }: ApparelGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <ApparelCard key={item.id} item={item} />
      ))}
    </div>
  )
}