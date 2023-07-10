import { Product } from "@/types";
import NoResult from "@/components/ui/NoResult";
import ProductCard from "@/components/ui/ProductCard";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className='space-y-4 mt-8'>
      <h3 className='text-2xl font-bold mb-2 sm:text-3xl sm:mb-3 lg:text-4xl lg:mb-4'>
        {title}
      </h3>
      {items.length === 0 && <NoResult />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item) => (
          <ProductCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
