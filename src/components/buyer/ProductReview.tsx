'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import Image from 'next/image';

export default function ProductReview() {
  return (
    <div className="flex flex-col py-9 gap-4">
      <div className="flex flex-row gap-3 items-center">
        <Avatar>
          <AvatarImage
            src="/assets/images/img-review-1.png"
            className="w-16 h-auto"
          />
          <AvatarFallback>Photo Profile</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="text-base font-bold text-neutral-950">John Doe</p>
          <p className="text-base text-neutral-950">25 August 2025, 13:38</p>
        </div>
      </div>
      <div className="flex flex-row gap-0.5">
        <Image
          src="/assets/icons/icon-rate.png"
          alt="Icon Rate"
          width={24}
          height={24}
        />
        <Image
          src="/assets/icons/icon-rate.png"
          alt="Icon Rate"
          width={24}
          height={24}
        />
        <Image
          src="/assets/icons/icon-rate.png"
          alt="Icon Rate"
          width={24}
          height={24}
        />
        <Image
          src="/assets/icons/icon-rate.png"
          alt="Icon Rate"
          width={24}
          height={24}
        />
        <Image
          src="/assets/icons/icon-rate.png"
          alt="Icon Rate"
          width={24}
          height={24}
        />
      </div>
      <p className="text-base text-neutral-950">
        Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam
        viverra nunc sed facilisis. Integer tristique nullam morbi mauris ante.
      </p>
    </div>
  );
}
