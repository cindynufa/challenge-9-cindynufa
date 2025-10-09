'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-row gap-9.19 items-center cursor-pointer"
    >
      <Image
        src="/assets/icons/logo.png"
        alt="Logo"
        className="w-42 h-42"
        width={20}
        height={20}
      />
      <h1 className="text-2xl font-bold text-neutral-950">Shirt</h1>
    </Link>
  );
}
