'use client';

import Header from '@/components/buyer/Header';
import Sidebar from '@/components/buyer/Sidebar';

export default function OrderListPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Sidebar and Order List */}
      <section className='flex flex-row w-auto mt-132 px-220 gap-6 justify-between'>
        {/* Sidebar */}
        <Sidebar />

        {/* Order List */}
        <div></div>
      </section>
    </>
  );
}
