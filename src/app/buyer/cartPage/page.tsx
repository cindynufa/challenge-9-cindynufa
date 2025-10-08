import Footer from '@/components/buyer/Footer';
import Header from '@/components/buyer/Header';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Cart Page - Cart List */}
      <section className="flex flex-row w-auto mt-132 px-120 gap-10 justify-between">
        <div className="flex flex-col w-full gap-6">
          <h3 className="text-display-md font-bold text-neutral-950">Cart</h3>
          <div className="flex flex-row gap-3 items-center">
            <Checkbox />
            <p className="text-base font-medium text-neutral-950">Select All</p>
          </div>

          {/* Cart List 1*/}
          <div className="flex flex-col p-4 gap-4 border rounded-12 border-neutral-300">
            <div className="flex flex-row gap-3 items-center">
              <Checkbox />
              <div className="flex flex-row gap-1.5 items-center">
                <Image
                  src="/assets/icons/icon-store.png"
                  alt="Icon Cart"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-base font-semibold text-neutral-950">
                  Toko Barokah Jaya
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <Checkbox />
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/images/img-cart-product-1.png"
                    alt="Product 1"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-neutral-950">
                      Sneakers Court Minimalis
                    </p>
                    <p className="text-base text-neutral-600">Shoes</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-168 gap-4">
                <p className="text-xl font-bold text-neutral-950 text-right">
                  Rp275.000
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/icons/icon-trash.png"
                    alt="Icon Trash"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
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
            </div>

            <div className="w-auto border border-neutral-300"></div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <Checkbox />
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/images/img-cart-product-2.png"
                    alt="Product 1"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-neutral-950">
                      Kaos Katun Premium
                    </p>
                    <p className="text-base text-neutral-600">T-Shirt</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-168 gap-4">
                <p className="text-xl font-bold text-neutral-950 text-right">
                  Rp1.100.000
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/icons/icon-trash.png"
                    alt="Icon Trash"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
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
            </div>
          </div>

          {/* Cart List 2 */}
          <div className="flex flex-col p-4 gap-4 border rounded-12 border-neutral-300">
            <div className="flex flex-row gap-3 items-center">
              <Checkbox />
              <div className="flex flex-row gap-1.5 items-center">
                <Image
                  src="/assets/icons/icon-store.png"
                  alt="Icon Cart"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-base font-semibold text-neutral-950">
                  Toko Abdi Fashion
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <Checkbox />
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/images/img-cart-product-3.png"
                    alt="Product 1"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-neutral-950">
                      Topo Baseball 6-Panel
                    </p>
                    <p className="text-base text-neutral-600">Accessories</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-168 gap-4">
                <p className="text-xl font-bold text-neutral-950 text-right">
                  Rp320.000
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/icons/icon-trash.png"
                    alt="Icon Trash"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
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
            </div>

            <div className="w-auto border border-neutral-300"></div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <Checkbox />
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/images/img-cart-product-4.png"
                    alt="Product 1"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-neutral-950">
                      Celana Panjang Tailored
                    </p>
                    <p className="text-base text-neutral-600">Trousers</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-168 gap-4">
                <p className="text-xl font-bold text-neutral-950 text-right">
                  Rp2.200.000
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/icons/icon-trash.png"
                    alt="Icon Trash"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
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
            </div>
          </div>

          {/* Cart List 3 */}
          <div className="flex flex-col p-4 gap-4 border rounded-12 border-neutral-300">
            <div className="flex flex-row gap-3 items-center">
              <Checkbox />
              <div className="flex flex-row gap-1.5 items-center">
                <Image
                  src="/assets/icons/icon-store.png"
                  alt="Icon Cart"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-base font-semibold text-neutral-950">
                  Toko Abdi Fashion
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-3">
                <Checkbox />
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/images/img-cart-product-5.png"
                    alt="Product 1"
                    width={80}
                    height={80}
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-neutral-950">
                      Hoodie Pullover Fleece
                    </p>
                    <p className="text-base text-neutral-600">Jacket</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-168 gap-4">
                <p className="text-xl font-bold text-neutral-950 text-right">
                  Rp275.000
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/assets/icons/icon-trash.png"
                    alt="Icon Trash"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
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
            </div>
          </div>
        </div>

        {/* Total Shopping */}
        <div className="flex flex-col w-352 h-202 p-5 gap-6 border-0 rounded-12 shadow-custom">
          <h3 className="text-xl font-bold text-neutral-950">Total Shopping</h3>
          <div className="flex flex-row justify-between">
            <p className="text-lg text-neutral-950">Total</p>
            <p className="text-lg font-bold text-neutral-950">Rp275.000</p>
          </div>
          <a href="/buyer/checkoutPage">
            <Button className="w-full h-12 p-2 gap-1.5 text-base font-semibold text-white">
              Checkout
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
