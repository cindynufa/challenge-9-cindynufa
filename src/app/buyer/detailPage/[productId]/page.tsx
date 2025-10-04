import Header from '@/components/buyer/Header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import ProductReview from '@/components/buyer/ProductReview';
import Link from 'next/link';
import ProductThumbnail from '@/components/buyer/ProductThumbnail';
import Footer from '@/components/buyer/Footer';

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

      <section className="w-full h-auto mt-132 px-120 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-2 items-center">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/buyer"
                    className="text-base font-semibold text-neutral-950"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/buyer/detailPage/${product.id}"
                    className="text-base font-semibold text-neutral-950"
                  >
                    Detail
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-base text-neutral-950">
                    {product.heading}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex flex-row w-auto gap-7">
            {/* Detail Product - A */}
            <div className="grow flex flex-col w-auto h-auto gap-4">
              <Image
                src={product.image}
                alt={product.name}
                width={402}
                height={402}
                className="rounded-b-12"
              />
              <div className="flex flex-row w-402 gap-2 items-center justify-center">
                <Image
                  src="/assets/images/img-thumbnail-product-1.png"
                  alt="Thumbnail Product"
                  width={82}
                  height={82}
                  className="p-1"
                />
                <Image
                  src="/assets/images/img-thumbnail-product-2.png"
                  alt="Thumbnail Product"
                  width={74}
                  height={74}
                  className="p-1"
                />
                <Image
                  src="/assets/images/img-thumbnail-product-3.png"
                  alt="Thumbnail Product"
                  width={74}
                  height={74}
                  className="p-1"
                />
                <Image
                  src="/assets/images/img-thumbnail-product-4.png"
                  alt="Thumbnail Product"
                  width={74}
                  height={74}
                  className="p-1"
                />
                <Image
                  src="/assets/images/img-thumbnail-product-5.png"
                  alt="Thumbnail Product"
                  width={74}
                  height={74}
                  className="p-1"
                />
              </div>
            </div>
            {/* Detail Product - B */}
            <div className="flex flex-col w-auto gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-neutral-950">
                  {product.heading}
                </h3>
                <p className="text-display-md font-bold text-neutral-950">
                  {product.price}
                </p>
                <div className="flex flex-row gap-0.5">
                  <Image
                    src="/assets/icons/icon-rate.png"
                    alt="Icon Rate"
                    width={24}
                    height={24}
                  />
                  <p className="text-lg font-semibold text-neutral-950">
                    {product.rate}
                  </p>
                </div>
              </div>
              <div className="w-auto border border-neutral-300"></div>
              <div className="gap-0.5">
                <h4 className="text-lg font-bold text-neutral-950">
                  Deskripsi
                </h4>
                <span className="text-base text-neutral-950">
                  <h5 className="flex flex-row">
                    <p>{product.heading}</p> – Ivory Beige
                  </h5>
                  <p>
                    Sepatu sneakers bergaya minimalis dengan kombinasi warna
                    ivory dan beige yang elegan. Terbuat dari material kulit
                    sintetis berkualitas dengan sentuhan suede halus di bagian
                    panel samping dan depan.
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Desain: Low-top dengan siluet klasik yang timeless</li>
                    <li>Material: Kulit sintetis premium + suede sintetis</li>
                    <li>
                      Sol: Outsole karet anti-slip dengan warna natural gum
                      untuk daya cengkeram yang baik
                    </li>
                    <li>
                      Kenyamanan: Insole empuk dengan bantalan ekstra untuk
                      pemakaian sehari-hari
                    </li>
                    <li>Warna: Ivory Beige</li>
                    <li>
                      Gaya: Cocok untuk casual look, street style, maupun
                      semi-formal
                    </li>
                  </ul>
                </span>
              </div>
              <div className="w-auto border border-neutral-300"></div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4">
                  <Avatar>
                    <AvatarImage src="/assets/images/img-store-1.png" />
                    <AvatarFallback>Photo Profile Store</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-neutral-950">
                      {product.label}
                    </h3>
                    <p className="text-base text-neutral-950">
                      Jakarta Selatan
                    </p>
                  </div>
                </div>
                <div>
                  <Button className="w-40 h-12 p-2 gap-1.5 border border-neutral-300 bg-white text-base font-semibold text-neutral-950">
                    See Store
                  </Button>
                </div>
              </div>
              <div className="w-auto border border-neutral-300"></div>
              <div className="flex flex-row gap-4 items-center">
                <p className="text-base font-semibold text-neutral-950">
                  Quantity
                </p>
                <div>
                  <ToggleGroup
                    type="single"
                    className="h-11 py-2 px-3 gap-2 border rounded-12"
                  >
                    <ToggleGroupItem value="decrease">
                      <Image
                        src="/assets/icons/icon-qty-decrease.png"
                        alt="Icon Drecrease"
                        width={24}
                        height={24}
                      />
                    </ToggleGroupItem>
                    <p className="text-lg font-bold text-neutral-950">2</p>
                    <ToggleGroupItem value="increase">
                      <Image
                        src="/assets/icons/icon-qty-increase.png"
                        alt="Icon Increasae"
                        width={24}
                        height={24}
                      />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
              <Button className="w-312 h-12 p-2 gap-1.5 text-base font-semibold text-white">
                + Add to Cart
              </Button>
            </div>
          </div>

          {/* Line */}
          <div className="w-auto border border-neutral-300"></div>

          {/* Product Review */}
          <div className="flex flex-col gap-4">
            <h3 className="text-display-md font-bold text-neutral-950">
              Product Review
            </h3>
            <div className="flex flex-row gap-1 items-center">
              <Image
                src="/assets/icons/icon-rate.png"
                alt="Icon Rate"
                width={40}
                height={40}
              />
              <div className="flex flex-row items-center">
                <p className="text-2xl font-bold text-neutral-950">
                  {product.rate}
                </p>
                <p className="text-lg text-neutral-950">/5.0</p>
              </div>
            </div>

            {/* Review */}
            <ProductReview />
            <div className="w-auto border border-neutral-300"></div>
            <ProductReview />
            <div className="w-auto border border-neutral-300"></div>
            <ProductReview />

            {/* Button */}
            <div className="text-center">
              <Button className="w-220 h-12 p-2 mt-10 border rounded-12 border-neutral-300 bg-white text-base font-semibold text-neutral-950 cursor-pointer">
                Load More
              </Button>
            </div>
            <div className="w-auto border border-neutral-300"></div>
          </div>

          {/* Related Product */}
          <div className="flex flex-col gap-6">
            <h3 className="text-display-md font-bold text-neutral-950">
              Related Product
            </h3>

            <div className="grow flex flex-row w-full gap-5">
              <Link href="/buyer/detailPage/4">
                <ProductThumbnail
                  src={product.image}
                  alt={product.name}
                  heading={product.heading}
                  price={product.price}
                  rate={product.rate}
                  text={product.text}
                  label={product.label}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
