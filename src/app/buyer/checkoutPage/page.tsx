'use client';

import Footer from '@/components/buyer/Footer';
import Header from '@/components/buyer/Header';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

const paymentMethod = [
  {
    id: 0,
    image: '/assets/images/img-bank-bni.png',
    alt: 'Logo BNI',
    name: 'BNI Virtual Account',
  },
  {
    id: 1,
    image: '/assets/images/img-bank-bri.png',
    alt: 'Logo BRI',
    name: 'BRI Virtual Account',
  },
  {
    id: 2,
    image: '/assets/images/img-bank-bca.png',
    alt: 'Logo BCA',
    name: 'BCA Virtual Account',
  },
  {
    id: 3,
    image: '/assets/images/img-bank-mandiri.png',
    alt: 'Logo Mandiri',
    name: 'Mandiri Virtual Account',
  },
];

export default function CheckoutPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Content */}
      <section className="flex flex-col w-auto mt-132 px-120 gap-6">
        <h3 className="text-display-md font-bold text-neutral-950">Checkout</h3>
        <div className="flex flex-row w-full gap-8 justify-between">
          {/* shipping Address - Store */}
          <div className="flex flex-col w-full gap-6">
            {/* Shipping Address */}
            <div className="flex flex-col w-full h-auto py-5 px-5 gap-4 border-0 rounded-12 shadow-custom">
              <p className="text-lg font-bold text-neutral-950">
                Shipping Address
              </p>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full h-14 py-2 px-3 gap-2"
                required
              />
              <Input
                id="phoneNumber"
                type="number"
                placeholder="Phone Number"
                className="w-full h-14 py-2 px-3 gap-2"
                required
              />
              <Input
                id="city"
                type="text"
                placeholder="City"
                className="w-full h-14 py-2 px-3 gap-2"
                required
              />
              <Input
                id="postalCode"
                type="number"
                placeholder="Postal Code"
                className="w-full h-14 py-2 px-3 gap-2"
                required
              />
              <Textarea
                id="address"
                rows={5}
                placeholder="Address"
                className="w-full h-32 py-2 px-3 gap-2"
                required
              />
            </div>

            {/* Store */}
            <div className="flex flex-col w-auto h-auto py-5 px-5 gap-4 border-0 rounded-12 shadow-custom">
              <div className="flex flex-row w-auto gap-1.5 items-center">
                <Image
                  src="/assets/icons/icon-store.png"
                  alt="Icon Store"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-base font-semibold text-neutral-950">
                  Toko Abdi Fashion
                </p>
              </div>
              <div className="flex flex-row w-auto justify-between">
                <div className="flex flex-row gap-3 items-center">
                  <Image
                    src="/assets/images/img-cart-product-2.png"
                    alt="Product 2"
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
                <div className="flex w-168 gap-4 items-center">
                  <p className="text-xl font-bold text-neutral-950 text-right">
                    1 X Rp1.100.000
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row gap-3 items-center">
                  <Image
                    src="/assets/images/img-cart-product-2.png"
                    alt="Product 2"
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
                <div className="flex w-168 gap-4 items-center">
                  <p className="text-xl font-bold text-neutral-950 text-right">
                    1 X Rp1.100.000
                  </p>
                </div>
              </div>

              <div className="w-full border border-neutral-300"></div>

              <div className="flex flex-col w-full gap-3">
                <p className="text-lg font-bold text-neutral-950">
                  Shipping Method
                </p>
                <div className="relative flex flex-row w-full h-11 py-4 px-3 gap-19 items-center border rounded-12 border-neutral-300">
                  <Select>
                    <SelectTrigger className="w-full h-14 py-2 px-3 gap-2 border-0">
                      <SelectValue placeholder="Select Shipping" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="logistikA">Logistik A</SelectItem>
                      <SelectItem value="logistikB">Logistik B</SelectItem>
                      <SelectItem value="logistikC">Logistik C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="flex flex-col w-389 h-fit py-5 px-5 gap-4 border-0 rounded-12 shadow-custom">
            {/* Payment Method */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold text-neutral-950">
                Payment Method
              </p>
              <Table>
                <TableBody>
                  {paymentMethod.map((payment) => (
                    <TableRow key={payment.id}>
                      <Image
                        src={payment.image}
                        alt={payment.alt}
                        width={40}
                        height={40}
                        className="my-2"
                      />
                      <TableCell>{payment.name}</TableCell>
                      <TableCell>
                        <RadioGroup className="items-center justify-center">
                          <RadioGroupItem id="string" value="" />
                        </RadioGroup>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="w-full mx-0 border border-neutral-300"></div>

            {/* Payment Summary */}
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold text-neutral-950">
                Payment Summary
              </p>
              <div className="flex flex-row justify-between">
                <p className="text-base text-neutral-950">
                  Total Price of Goods
                </p>
                <p className="text-base font-bold text-neutral-950">
                  Rp1.100.000
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-base text-neutral-950">Shipping cost</p>
                <p className="text-base font-bold text-neutral-950">Rp10.000</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-base text-neutral-950">Total</p>
                <p className="text-base font-bold text-neutral-950">
                  Rp1.110.000
                </p>
              </div>
              <Button className="w-full h-12 p-2 gap-1.5 text-base font-semibold text-white">
                Pay Now
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
