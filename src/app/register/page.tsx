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
import { useRegister } from '@/hooks/useRegister';

export default function Register() {
  const { register, handleSubmit, errors, onSubmit } = useRegister();

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <Input
                {...register('name')}
                id="name"
                type="text"
                placeholder="Name"
                className="h-14 py-2 px-3"
                required
              />
              {errors.name && (
                <p className="text-sm text-accent-red">{errors.name.message}</p>
              )}
              <Input
                {...register('email')}
                id="email"
                type="email"
                placeholder="Email"
                className="h-14 py-2 px-3"
                required
              />
              {errors.email && (
                <p className="text-sm text-accent-red">{errors.email.message}</p>
              )}
              <div className="relative flex flex-row items-center justify-between">
                <Input
                  {...register('password')}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="h-14 py-2 px-3"
                  required
                />
                {errors.password && (
                  <p className="text-sm text-accent-red">
                    {errors.password.message}
                  </p>
                )}
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
                  {...register('confirmPassword')}
                  id="password"
                  type="password"
                  placeholder="Confirm Password"
                  className="h-14 py-2 px-3"
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-accent-red">
                    {errors.confirmPassword.message}
                  </p>
                )}
                <Image
                  src="/assets/icons/icon-eye.png"
                  alt="Icon Eye"
                  width={20}
                  height={20}
                  className="absolute right-2 cursor-pointer"
                />
              </div>
              <Input
                {...register('avatar')}
                id="avatar"
                type="file"
                placeholder="Avatar"
                className="w-3xs h-10 px-3 border border-gray-400 bg-neutral-200 font-bold"
                required
              />
              {errors.avatar && (
                <p className="text-sm text-accent-red">{errors.avatar.message as string}</p>
              )}
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
