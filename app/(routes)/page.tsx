import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("0a62a468-8114-4bbc-a9b7-ef7f4360e5c8");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className='space-y-10 pb-20'>
        <Billboard data={billboard} />

        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList
            title='Produtos em destaque'
            items={products}
          />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
