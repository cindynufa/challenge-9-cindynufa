'use client';

import BuyerProfile from './BuyerProfile';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <section className="flex flex-col w-227 h-fit p-4 gap-4 border rounded-2xl border-neutral-200 shadow-custom">
      <BuyerProfile />
      <div className="flex flex-col">
        <div className="flex flex-row w-auto h-12 py-2 px-4 gap-2 items-center border-0 rounded-md bg-neutral-100">
          <Image
            src="/assets/icons/icon-sidebar-1.png"
            alt="Icon Sidebar"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <a href="/buyer/orderListPage">
            <p className="text-sm font-bold text-neutral-950">Order List</p>
          </a>
        </div>
        <div className="flex flex-row w-auto h-12 py-2 px-4 gap-2 items-center border-0 rounded-md">
          <Image
            src="/assets/icons/icon-sidebar-2.png"
            alt="Icon Sidebar"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <a href="/buyer/orderListPage">
            <p className="text-sm text-neutral-950">Review</p>
          </a>
        </div>
        <div className="flex flex-row w-auto h-12 py-2 px-4 gap-2 items-center border-0 rounded-md">
          <Image
            src="/assets/icons/icon-sidebar-3.png"
            alt="Icon Sidebar"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <a href="/buyer/orderListPage">
            <p className="text-sm text-accent-red">Logout</p>
          </a>
        </div>
      </div>
    </section>
  );
}
