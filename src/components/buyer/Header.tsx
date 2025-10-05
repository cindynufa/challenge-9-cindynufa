import Logo from '../ui/logo';
import Image from 'next/image';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full h-auto top-0 z-50 bg-white shadow-custom">
      <div className="flex flex-row w-auto h-84 px-120 justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Catalog and Search */}
        <div className="flex flex-row gap-3 cursor-pointer">
          <div className="flex flex-row h-11 px-4 gap-1.5 items-center border rounded-xl border-neutral-300">
            <Image
              src="/assets/icons/icon-catalog.png"
              alt="Icon Catalog"
              className="w-5 h-5"
              width={20}
              height={20}
            />
            <p className="text-sm text-neutral-950">Catalog</p>
          </div>
          <div className="flex flex-row w-491 h-11 py-2 px-4 gap-1.5 items-center border rounded-xl border-neutral-300">
            <Image
              src="/assets/icons/icon-Search.png"
              alt="Icon Search"
              className="w-5 h-5"
              width={20}
              height={20}
            />
            <Input
              type="text"
              placeholder="Search"
              className="text-sm text-neutral-600 border-0"
            />
          </div>
        </div>

        {/* Cart, Open Store and Profile */}
        <div className="flex flex-row gap-8 items-center cursor-pointer">
          <div className="relative flex">
            <Image
              src="/assets/icons/icon-cart.png"
              alt="Icon Cart"
              className="w-6 h-6"
              width={20}
              height={20}
            />
            <Image
              src="/assets/icons/icon-cart-notif.png"
              alt="Icon Cart Notif"
              className="absolute w-5 h-5 z-50 -top-1/2 left-1/2"
              width={20}
              height={20}
            />
          </div>

          <div className="flex flex-row gap-3">
            <Link href="/buyer/storePage">
              <div className="flex flex-row py-2 px-3 gap-2 items-center border rounded-full border-neutral-300">
                <Image
                  src="/assets/icons/icon-store.png"
                  alt="Icon Store"
                  className="w-5 h-5"
                  width={20}
                  height={20}
                />
                <p>Open Store</p>
              </div>
            </Link>

            <div className="flex flex-row py-2 px-3 gap-2 items-center border rounded-full border-neutral-300">
              <Avatar>
                <AvatarImage src="/assets/images/img-header-1.png" />
                <AvatarFallback>Photo Profile</AvatarFallback>
              </Avatar>
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
