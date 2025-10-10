'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function BuyerProfile() {
  return (
    <div className="flex flex-row h-11 py-2 px-3 gap-2 items-center">
      <Avatar>
        <AvatarImage src="/assets/images/img-header-1.png" />
        <AvatarFallback>Photo Profile</AvatarFallback>
      </Avatar>
      <p className="text-sm font-bold text-neutral-950">John Doe</p>
    </div>
  );
}
