'use-client';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';

export default function StoreProfile() {
  return (
    <Link href="/buyer/storePage">
      <div className="flex flex-row gap-4">
        <Avatar>
          <AvatarImage src="/assets/images/img-store-1.png" />
          <AvatarFallback>Photo Profile Store</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <h3 className="text-base font-bold text-neutral-950">
            Toko Barokah Jaya
          </h3>
          <p className="text-base text-neutral-950">Jakarta Selatan</p>
        </div>
      </div>
    </Link>
  );
}
