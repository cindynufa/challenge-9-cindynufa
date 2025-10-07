'use client';

import Header from '@/components/buyer/Header';
import Footer from '@/components/buyer/Footer';
import StoreProfile from '@/components/ui/store-profile';
import Image from 'next/image';
import ProductThumbnail from '@/components/buyer/ProductThumbnail';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 0,
    image: '/assets/images/img-product-1.png',
    name: 'Product Thumbnail',
    heading: 'Sneakers Court Minimalis',
    price: 'Rp275.000',
    rate: '4.9',
    text: '10 Sold',
  },
  {
    id: 1,
    image: '/assets/images/img-product-2.png',
    name: 'Product Thumbnail',
    heading: 'Kaos Crewneck Esensial',
    price: 'Rp800.000',
    rate: '4.8',
    text: '10 Sold',
  },
  {
    id: 2,
    image: '/assets/images/img-product-3.png',
    name: 'Product Thumbnail',
    heading: 'Tas Selempang Klasik',
    price: 'Rp1.600.000',
    rate: '4.7',
    text: '10 Sold',
  },
  {
    id: 3,
    image: '/assets/images/img-product-4.png',
    name: 'Product Thumbnail',
    heading: 'Kaos Soft Touch',
    price: 'Rp650.000',
    rate: '4.6',
    text: '10 Sold',
  },
  {
    id: 3,
    image: '/assets/images/img-product-4.png',
    name: 'Product Thumbnail',
    heading: 'Kaos Soft Touch',
    price: 'Rp650.000',
    rate: '4.6',
    text: '10 Sold',
  },
];

export default function storePage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Store Page Content */}
      <section className="w-full h-auto mt-132 px-120 gap-8">
        <div className="flex flex-row p-5 border rounded-12 border-neutral-300 justify-between">
          <StoreProfile />
          <div className="flex flex-col items-center">
            <div className="flex flex-row gap-0.5 items-center">
              <Image
                src="/assets/icons/icon-rate.png"
                alt="Icon Rate"
                width={24}
                height={24}
              />
              <p className="text-lg font-bold text-neutral-950">4.9</p>
            </div>
            <p className="text-base text-neutral-700">Reviews dan Rating</p>
          </div>
        </div>

        {/* Product */}
        <div className="w-full h-auto mt-8 gap-5">
          <h3 className="text-display-md font-bold text-neutral-950">
            Product
          </h3>
          <div className="grid grid-cols-5 w-auto gap-5 justify-between">
            {products.map((product, index) => (
              <Link key={index} href={`/buyer/detailPage/${product.id}`}>
                <ProductThumbnail
                  src={product.image}
                  alt={product.name}
                  heading={product.heading}
                  price={product.price}
                  rate={product.rate}
                  text={product.text}
                  verify={false}
                />
              </Link>
            ))}
            {products.map((product, index) => (
              <Link key={index} href={`/buyer/detailPage/${product.id}`}>
                <ProductThumbnail
                  src={product.image}
                  alt={product.name}
                  heading={product.heading}
                  price={product.price}
                  rate={product.rate}
                  text={product.text}
                  verify={false}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <Button className="w-220 h-12 p-2 mt-10 border rounded-12 border-neutral-300 bg-white text-base font-semibold text-neutral-950 cursor-pointer">
            Load More
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
