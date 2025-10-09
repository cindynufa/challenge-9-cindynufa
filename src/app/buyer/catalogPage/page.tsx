'use client';

import Header from '@/components/buyer/Header';
import Footer from '@/components/buyer/Footer';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import ProductThumbnail from '@/components/buyer/ProductThumbnail';
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
    label: 'Toko Barokah Jaya',
  },
  {
    id: 1,
    image: '/assets/images/img-product-2.png',
    name: 'Product Thumbnail',
    heading: 'Kaos Crewneck Esensial',
    price: 'Rp800.000',
    rate: '4.8',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 2,
    image: '/assets/images/img-product-3.png',
    name: 'Product Thumbnail',
    heading: 'Tas Selempang Klasik',
    price: 'Rp1.600.000',
    rate: '4.7',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 3,
    image: '/assets/images/img-product-4.png',
    name: 'Product Thumbnail',
    heading: 'Kaos Soft Touch',
    price: 'Rp650.000',
    rate: '4.6',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 4,
    image: '/assets/images/img-product-5.png',
    name: 'Product Thumbnail',
    heading: 'Overshirt Utility',
    price: 'Rp375.000',
    rate: '4.5',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 5,
    image: '/assets/images/img-product-6.png',
    name: 'Product Thumbnail',
    heading: 'Sweater Rajut Cable',
    price: 'Rp1.300.000',
    rate: '4.8',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 6,
    image: '/assets/images/img-product-7.png',
    name: 'Product Thumbnail',
    heading: 'Syal Wol Kotak',
    price: 'Rp220.000',
    rate: '4.9',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 7,
    image: '/assets/images/img-product-8.png',
    name: 'Product Thumbnail',
    heading: 'Syal Wol Solid',
    price: 'Rp180.000',
    rate: '4.7',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 8,
    image: '/assets/images/img-product-9.png',
    name: 'Product Thumbnail',
    heading: 'Celana Panjang Tailored',
    price: 'Rp2.200.000',
    rate: '4.8',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 9,
    image: '/assets/images/img-product-10.png',
    name: 'Product Thumbnail',
    heading: 'Sneakers Harian',
    price: 'Rp1.900.000',
    rate: '4.9',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 10,
    image: '/assets/images/img-product-11.png',
    name: 'Product Thumbnail',
    heading: 'Jaket Puffer Quilted',
    price: 'Rp450.000',
    rate: '4.6',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
  {
    id: 11,
    image: '/assets/images/img-product-12.png',
    name: 'Product Thumbnail',
    heading: 'Kemeja Oxford',
    price: 'Rp950.000',
    rate: '4.8',
    text: '10 Sold',
    label: 'Toko Barokah Jaya',
  },
];

export default function CatalogPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Catalog Page - Filter */}
      <section className="w-full mt-132 px-120 gap-8">
        <h3 className="text-display-md font-bold text-neutral-950">Catalog</h3>
        <div className="flex flex-row gap-6 mt-4">
          <div className="grow flex flex-col w-266 h-fit py-4 gap-6 border rounded-12 border-neutral-300">
            
            {/* Categories */}
            <div className="w-auto px-4 gap-2.5">
              <h3 className="text-base font-bold text-neutral-950">FILTER</h3>
              <p className="text-base font-semibold text-neutral-950 mt-2.5">
                Categories
              </p>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <p className="text-base text-neutral-950">All</p>
              </div>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <p className="text-base text-neutral-950">Shoes</p>
              </div>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <p className="text-base text-neutral-950">Clothes</p>
              </div>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <p className="text-base text-neutral-950">Accessories</p>
              </div>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <p className="text-base text-neutral-950">Accessories</p>
              </div>
            </div>
            <div className="w-full border border-neutral-300"></div>

            {/* Price */}
            <div className="w-auto px-4 gap-2.5">
              <p className="text-base font-semibold text-neutral-950 mt-2.5">
                Price
              </p>
              <div className="relative flex flex-row h-12 p-2 gap-2 mt-2.5 items-center border rounded-md border-neutral-300">
                <Input
                  type="number"
                  placeholder="Minimum Price"
                  className="w-auto h-auto ml-10 right-0 border-0"
                />
                <div className="absolute w-38 p-2 gap-2 left-1 rounded-md bg-neutral-200 text-center">
                  <p className="text-base font-semibold text-neutral-950">Rp</p>
                </div>
              </div>
              <div className="relative flex flex-row h-12 p-2 gap-2 mt-2.5 items-center border rounded-md border-neutral-300">
                <Input
                  type="number"
                  placeholder="Maximum Price"
                  className="w-auto h-auto ml-10 right-0 border-0"
                />
                <div className="absolute w-38 p-2 gap-2 left-1 rounded-md bg-neutral-200 text-center">
                  <p className="text-base font-semibold text-neutral-950">Rp</p>
                </div>
              </div>
            </div>
            <div className="w-full border border-neutral-300"></div>

            {/* Rating */}
            <div className="w-auto px-4 gap-2.5">
              <p className="text-base font-semibold text-neutral-950 mt-2.5">
                Rating
              </p>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <div className="flex flex-row gap-0.5">
                  <Image
                    src="/assets/icons/icon-rate.png"
                    alt="Icon Rate"
                    width={24}
                    height={24}
                  />
                  <p className="text-base text-neutral-950">5</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <div className="flex flex-row gap-0.5">
                  <Image
                    src="/assets/icons/icon-rate.png"
                    alt="Icon Rate"
                    width={24}
                    height={24}
                  />
                  <p className="text-base text-neutral-950">4</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <div className="flex flex-row gap-0.5">
                  <Image
                    src="/assets/icons/icon-rate.png"
                    alt="Icon Rate"
                    width={24}
                    height={24}
                  />
                  <p className="text-base text-neutral-950">3</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <div className="flex flex-row gap-0.5">
                  <Image
                    src="/assets/icons/icon-rate.png"
                    alt="Icon Rate"
                    width={24}
                    height={24}
                  />
                  <p className="text-base text-neutral-950">2</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 mt-2.5 items-center">
                <Checkbox />
                <div className="flex flex-row gap-0.5">
                  <Image
                    src="/assets/icons/icon-rate.png"
                    alt="Icon Rate"
                    width={24}
                    height={24}
                  />
                  <p className="text-base text-neutral-950">1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Catalog - Product List */}
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-row items-center justify-between">
              <p className="w-511 gap-1 text-base text-neutral-950">
                Showing 160 products
              </p>
              <div className="flex flex-row gap-3 items-center">
                <p className="text-base font-bold text-neutral-950">Sort</p>
                <div className="relative flex flex-row w-167 h-11 py-4 px-3 gap-19 items-center border rounded-12 border-neutral-300">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full px-0 border-0 text-left">
                      Latest
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Latest</DropdownMenuItem>
                      <DropdownMenuItem>Date</DropdownMenuItem>
                      <DropdownMenuItem>Most Order</DropdownMenuItem>
                    </DropdownMenuContent>
                    <Image
                      src="/assets/icons/icon-arrow-down.png"
                      alt="Icon Arrow"
                      width={24}
                      height={24}
                      className="absolute right-2"
                    />
                  </DropdownMenu>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-4 w-auto gap-5 justify-between">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/buyer/detailPage/${product.id}`}
                  >
                    <ProductThumbnail
                      src={product.image}
                      alt={product.name}
                      heading={product.heading}
                      price={product.price}
                      rate={product.rate}
                      text={product.text}
                      label={product.label}
                      verify={true}
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
