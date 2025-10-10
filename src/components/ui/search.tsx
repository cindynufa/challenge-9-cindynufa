'use client';

import Image from 'next/image';
import { Input } from '../ui/input';

export default function Search() {
  return (
    <div className="flex flex-row w-full h-11 py-2 px-4 gap-1.5 items-center border rounded-xl border-neutral-300">
      <Image
        src="/assets/icons/icon-search.png"
        alt="Icon Search"
        className="w-5 h-5"
        width={20}
        height={20}
      />
      <Input
        type="text"
        placeholder="Search"
        className="text-sm text-neutral-600 h-8 border-0"
      />
    </div>
  );
}
