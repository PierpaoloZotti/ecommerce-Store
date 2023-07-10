import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import Gallery from "@/components/galley";
import Info from "@/components/ui/Info";

export const revalidate = 0;

interface ProductDetailProps {
  params: {
    productId: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({ categoryId: product?.category?.id });
  // console.log("Product", product);
  // console.log("Suggested products", suggestedProducts);
  if (!product) {
    return null;
  }
  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            {/* Gallery */}
            <Gallery images={product.image} />
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              {/* Info */}
              <Info data={product} />
            </div>
          </div>
          <hr className='my-10' />
          <ProductList
            title='Produtos relacionados'
            items={suggestedProducts}
          />
        </div>
      </Container>
    </div>
  );
};
export default ProductDetail;
