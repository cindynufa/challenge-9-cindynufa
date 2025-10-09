'use client';

import Footer from '@/components/buyer/Footer';
import Header from '@/components/buyer/Header';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import Logo from '@/components/ui/logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function OpenStorePage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Content */}
      <section className="w-full h-full bground">
        <Card className="w-451 h-auto gap-6 my-287 mx-auto border-neutral-200">
          <CardHeader>
            <CardTitle className="mb-1.5">
              <Logo />
            </CardTitle>
            <div className="gap-0.5">
              <h3 className="text-2xl font-bold text-neutral-950">
                Open Your Store Today
              </h3>
              <CardDescription>
                Start selling in minutes and reach thousands of customers
                instantly
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {/* Store Profile */}
            <div className="flex flex-col gap-2 mb-6">
              <form>
                <p className="text-base font-bold text-neutral-950">
                  STORE PROFILE
                </p>
                <div className="flex flex-col gap-4 mt-6">
                  <Input
                    id="storeName"
                    type="text"
                    placeholder="Store Name"
                    className="h-14 py-2 px-3"
                    required
                  />
                  <Input
                    id="storeDomain"
                    type="text"
                    placeholder="Store Domain"
                    className="h-14 py-2 px-3"
                    required
                  />
                </div>
              </form>
            </div>

            <div className="w-full border border-neutral-300"></div>

            {/* Store Address */}
            <div className="flex flex-col gap-2 mt-6">
              <form>
                <p className="text-base font-bold text-neutral-950">
                  STORE ADDRESS
                </p>
                <div className="flex flex-col gap-4 mt-6">
                  <Input
                    id="city"
                    type="text"
                    placeholder="City"
                    className="h-14 py-2 px-3"
                    required
                  />
                  <Input
                    id="postalCode"
                    type="number"
                    placeholder="Postal Code"
                    className="h-14 py-2 px-3"
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
              </form>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button
              type="submit"
              className="w-full h-12 p-2 gap-1.5 text-base font-semibold text-white"
            >
              Submit
            </Button>
            <p className="text-base text-neutral-950">
              <a href="/login" className="font-bold">
                <u>Back</u>
              </a>
            </p>
          </CardFooter>
        </Card>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
