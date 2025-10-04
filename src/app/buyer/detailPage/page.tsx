import Header from '@/components/buyer/Header';

interface DetailPageProps {
  params: { id: string };
}

const products = {
  1: {
    name: 'Product 1',
    image: '/assets/images/img-product-1.png',
  },
};

export default function DetailPage({ params }: DetailPageProps) {
  const product = products[params.id as unknown as keyof typeof products];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section>
      <Header />
      <h2>Detail Page </h2>
      <p>Informasi product 1</p>
    </section>
  );
}
