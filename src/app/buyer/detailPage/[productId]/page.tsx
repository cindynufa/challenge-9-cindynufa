import Header from '@/components/buyer/Header';
import Image from 'next/image';

interface DetailPageProps {
  params: Promise<{ productId: string }>;
}

type Product = {
  image: string;
  name: string;
  heading: string;
  price: string;
  rate: string;
  text: string;
  label: string;
};

const products: Product[] = [
  {
    image: '/assets/images/img-product-1.png',
    name: 'Product Thumbnail',
    heading: 'Sneakers Court Minimalis',
    price: 'Rp275.000',
    rate: '4.9',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-2.png',
    name: 'Product Thumbnail',
    heading: 'Kaos Crewneck Esensial',
    price: 'Rp800.000',
    rate: '4.8',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-3.png',
    name: 'Product Thumbnail',
    heading: 'Tas Selempang Klasik',
    price: 'Rp1.600.000',
    rate: '4.7',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-4.png',
    name: 'Product Thumbnail',
    heading: 'Kaos Soft Touch',
    price: 'Rp650.000',
    rate: '4.6',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-5.png',
    name: 'Product Thumbnail',
    heading: 'Overshirt Utility',
    price: 'Rp375.000',
    rate: '4.5',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-6.png',
    name: 'Product Thumbnail',
    heading: 'Sweater Rajut Cable',
    price: 'Rp1.300.000',
    rate: '4.8',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-7.png',
    name: 'Product Thumbnail',
    heading: 'Syal Wol Kotak',
    price: 'Rp220.000',
    rate: '4.9',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-8.png',
    name: 'Product Thumbnail',
    heading: 'Syal Wol Solid',
    price: 'Rp180.000',
    rate: '4.7',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-9.png',
    name: 'Product Thumbnail',
    heading: 'Celana Panjang Tailored',
    price: 'Rp2.200.000',
    rate: '4.8',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-10.png',
    name: 'Product Thumbnail',
    heading: 'Sneakers Harian',
    price: 'Rp1.900.000',
    rate: '4.9',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-11.png',
    name: 'Product Thumbnail',
    heading: 'Jaket Puffer Quilted',
    price: 'Rp450.000',
    rate: '4.6',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-12.png',
    name: 'Product Thumbnail',
    heading: 'Kemeja Oxford',
    price: 'Rp950.000',
    rate: '4.8',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-13.png',
    name: 'Product Thumbnail',
    heading: 'Sneakers Court Minimalis',
    price: 'Rp275.000',
    rate: '4.9',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-14.png',
    name: 'Product Thumbnail',
    heading: 'Sneakers Court Minimalis',
    price: 'Rp275.000',
    rate: '4.9',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-15.png',
    name: 'Product Thumbnail',
    heading: 'Sneakers Court Minimalis',
    price: 'Rp275.000',
    rate: '4.9',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    image: '/assets/images/img-product-16.png',
    name: 'Product Thumbnail',
    heading: 'Sneakers Court Minimalis',
    price: 'Rp275.000',
    rate: '4.9',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
];

export default async function DetailPage({ params }: DetailPageProps) {
  const productId = (await params).productId;
  const product = products[Number(productId)];

  if (!product) {
    return (
      <p className="text-3xl font-bold text-neutral-950 text-center mt-10">
        Product not found
      </p>
    );
  }

  return (
    <>
      {/* Header */}
      <Header />

      <section className="w-full h-auto mt-132 ml-120 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-2 items-center">
            <a
              href="/buyer"
              className="text-base font-semibold text-neutral-950"
            >
              Home
            </a>
            <Image
              src="/assets/icons/icon-arrow-right.png"
              alt="Icon Arrow"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <a
              href="/buyer/detailPage"
              className="text-base font-semibold text-neutral-950"
            >
              Detail
            </a>
            <Image
              src="/assets/icons/icon-arrow-right.png"
              alt="Icon Arrow"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <p className="text-base text-neutral-950">
              Sneakers Court Minimalis
            </p>
          </div>

          <div className="flex flex-row w-auto">
            <div className="flex flex-col w-402 h-auto gap-4">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-b-12"
              />
              <div className="flex flex-row w-auto gap-1">
                <Image
                  src="/assets/images/img-thumbnail-product-1.png"
                  alt="Thumbnail Product"
                  width={82}
                  height={82}
                  className="w-82 h-auto p-1"
                />
                <Image
                  src="/assets/images/img-thumbnail-product-2.png"
                  alt="Thumbnail Product"
                  width={82}
                  height={82}
                  className="w-82 h-auto p-1"
                />
                <Image
                  src="/assets/images/img-thumbnail-product-3.png"
                  alt="Thumbnail Product"
                  width={82}
                  height={82}
                  className="w-82 h-auto p-1"
                />
                <Image
                  src="/assets/images/img-thumbnail-product-4.png"
                  alt="Thumbnail Product"
                  width={82}
                  height={82}
                  className="w-82 h-auto p-1"
                />
                <Image
                  src="/assets/images/img-thumbnail-product-5.png"
                  alt="Thumbnail Product"
                  width={82}
                  height={82}
                  className="w-82 h-auto p-1"
                />
              </div>
            </div>
          </div>

          {/* Line */}
          <div></div>

          {/* Product Review */}
          <div></div>

          {/* Related Product */}
          <div></div>
        </div>
      </section>
    </>
  );
}
