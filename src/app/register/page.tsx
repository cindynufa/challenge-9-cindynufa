'use client'; 

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/logo';

export default function Register() {
  return (
    <section className="w-full h-full bground">
      <Card className="w-451 h-auto my-287 mx-auto border-neutral-200">
        <CardHeader>
          <CardTitle className="mb-1.5">
            <Logo />
          </CardTitle>
          <div className="gap-0.5">
            <h3 className="text-2xl font-bold text-neutral-950">Register</h3>
            <CardDescription>
              Just a few steps away from your next favorite purchase
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <Input
                id="name"
                type="text"
                placeholder="Name"
                className="h-14 py-2 px-3"
                required
              />

              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="h-14 py-2 px-3"
                required
              />
              <div className="relative flex flex-row items-center justify-between">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="h-14 py-2 px-3"
                  required
                />
                <Image
                  src="/assets/icons/icon-eye.png"
                  alt="Icon Eye"
                  width={20}
                  height={20}
                  className="absolute right-2 cursor-pointer"
                />
              </div>
              <div className="relative flex flex-row items-center justify-between">
                <Input
                  id="password"
                  type="password"
                  placeholder="Confirm Password"
                  className="h-14 py-2 px-3"
                  required
                />
                <Image
                  src="/assets/icons/icon-eye.png"
                  alt="Icon Eye"
                  width={20}
                  height={20}
                  className="absolute right-2 cursor-pointer"
                />
              </div>
              <Input
                id="avatar"
                type="file"
                placeholder="Avatar"
                className="w-3xs h-10 px-3 border border-gray-400 bg-neutral-200 font-bold"
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <Button
            type="submit"
            className="w-full h-12 p-2 gap-1.5 text-base font-semibold text-white"
          >
            Submit
          </Button>
          <p className="text-base text-neutral-950">
            Already have an account?{' '}
            <a href="/login" className="font-bold">
              <u>Log In</u>
            </a>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
