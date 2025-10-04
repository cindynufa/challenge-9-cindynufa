import Image from 'next/image';
import Footer from '@/components/buyer/Footer';
import Header from '@/components/buyer/Header';
import { Button } from '@/components/ui/button';
import ProductThumbnail from '@/components/buyer/ProductThumbnail';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <div className="w-full h-auto mt-132 ml-120 gap-10">
        <div className="flex flex-row w-1200 h-auto border-0 rounded-2xl bg-hero-banner">
          <Image
            src="/assets/images/img-hero-1.png"
            alt="Image Hero"
            className="w-376 h-auto ml-12 bottom-0"
            width={250}
            height={250}
          />
          <div className="flex flex-col w-468 mt-93 ml-12 gap-4">
            <h2 className="text-display-3xl font-bold text-hero-title">
              NEW COLLECTION
            </h2>
            <p className="text-2xl font-semibold text-hero-title">
              Stylish mens apparel for every occasion
            </p>
            <Button className="w-180 h-12 text-base font-semibold text-white cursor-pointer">
              Get Now
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Product */}
      <div className="flex flex-col w-full h-auto mt-10 ml-120 gap-10">
        <h3 className="text-4xl font-bold text-neutral-950">
          Featured Product
        </h3>
        <div className="grid grid-cols-4 w-1200 h-auto gap-5">
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-1.png"
              alt="Product Thumbnail"
              heading="Sneakers Court Minimalis"
              price="Rp275.000"
              rate="4.9"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={2} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-2.png"
              alt="Product Thumbnail"
              heading="Kaos Crewneck Esensial"
              price="Rp800.000"
              rate="4.8"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-3.png"
              alt="Product Thumbnail"
              heading="Tas Selempang Klasik"
              price="Rp1.600.000"
              rate="4.7"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-4.png"
              alt="Product Thumbnail"
              heading="Kaos Soft Touch"
              price="Rp650.000"
              rate="4.6"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-5.png"
              alt="Product Thumbnail"
              heading="Overshirt Utility"
              price="Rp375.000"
              rate="4.5"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-6.png"
              alt="Product Thumbnail"
              heading="Sweater Rajut Cable"
              price="Rp1.300.000"
              rate="4.8"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-7.png"
              alt="Product Thumbnail"
              heading="Syal Wol Kotak"
              price="Rp220.000"
              rate="4.9"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-8.png"
              alt="Product Thumbnail"
              heading="Syal Wol Solid"
              price="Rp180.000"
              rate="4.7"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-9.png"
              alt="Product Thumbnail"
              heading="Celana Panjang Tailored"
              price="Rp2.200.000"
              rate="4.8"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-10.png"
              alt="Product Thumbnail"
              heading="Sneakers Harian"
              price="Rp1.900.000"
              rate="4.9"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-11.png"
              alt="Product Thumbnail"
              heading="Jaket Puffer Quilted"
              price="Rp450.000"
              rate="4.6"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-12.png"
              alt="Product Thumbnail"
              heading="Kemeja Oxford"
              price="Rp950.000"
              rate="4.8"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-13.png"
              alt="Product Thumbnail"
              heading="Celana Pendek Chino"
              price="Rp120.000"
              rate="4.5"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-14.png"
              alt="Product Thumbnail"
              heading="Topi Baseball 6-Panel"
              price="Rp320.000"
              rate="4.7"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-15.png"
              alt="Product Thumbnail"
              heading="Kaos Katun Premium"
              price="Rp1.100.000"
              rate="4.9"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
          <Link key={1} href={`/buyer/detailPage`}>
            <ProductThumbnail
              src="/assets/images/img-product-16.png"
              alt="Product Thumbnail"
              heading="Hoodie Pullover Fleece"
              price="Rp275.000"
              rate="4.8"
              text="10 Sold"
              label="Toko Barokah Jaya"
            />
          </Link>
        </div>
        <Button className="w-220 h-12 p-2 border rounded-12 border-neutral-300 bg-white text-base font-semibold text-neutral-950 cursor-pointer">
          Load More
        </Button>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
