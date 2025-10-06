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

export default function Login() {
  return (
    <section className="w-full h-full bground">
      <Card className="w-451 h-auto my-287 mx-auto border-neutral-200">
        <CardHeader>
          <CardTitle className="mb-1.5">
            <Logo />
          </CardTitle>
          <div className="gap-0.5">
            <h3 className="text-2xl font-bold text-neutral-950">Login</h3>
            <CardDescription>
              Access your account and start shopping in seconds
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
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
                  className="absolute right-2"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <Button
            type="submit"
            className="w-full h-12 p-2 gap-1.5 text-base font-semibold text-white"
          >
            Login
          </Button>
          <p className="text-base text-neutral-950">
            Dont have an account?{' '}
            <a href="#" className="font-bold">
              <u>Register</u>
            </a>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
