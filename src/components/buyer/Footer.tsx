'use client';

import Image from 'next/image';
import Logo from '../ui/logo';

export default function Footer() {
  return (
    <footer className="flex flex-row w-auto h-auto mt-132 py-20 px-150 justify-between border-t border-neutral-300">
      <div className="flex flex-col w-380 gap-10">
        <div className="flex flex-col gap-22">
          <Logo />
          <p className="text-base text-neutral-950">
            Explore a realm of style with our fashion e-commerce platform, where
            shopping is effortless. Experience a smooth journey with an
            extensive selection of trendy apparel, all delivered directly to
            your home.
          </p>
        </div>
        <div className="flex flex-col w-196 gap-5">
          <p className="text-base font-bold text-neutral-950">
            Follow on Social Media
          </p>
          <div className="flex flex-row gap-3">
            <a href="#">
              <Image
                src="/assets/icons/icon-socmed-facebook.png"
                alt="Icon Facebook"
                width={40}
                height={40}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/icons/icon-socmed-instagram.png"
                alt="Icon Facebook"
                width={40}
                height={40}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/icons/icon-socmed-linkedin.png"
                alt="Icon Facebook"
                width={40}
                height={40}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/icons/icon-socmed-tiktok.png"
                alt="Icon Facebook"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-200 gap-5">
        <p className="text-base font-bold text-neutral-950">E-Commerce</p>
        <a href="#" className="text-base text-neutral-950">
          About Us
        </a>
        <a href="#" className="text-base text-neutral-950">
          Terms & Condition
        </a>
        <a href="#" className="text-base text-neutral-950">
          Privacy Policy
        </a>
        <a href="#" className="text-base text-neutral-950">
          Blog
        </a>
      </div>
      <div className="flex flex-col w-200 gap-5">
        <p className="text-base font-bold text-neutral-950">Help</p>
        <a href="#" className="text-base text-neutral-950">
          How to Transact
        </a>
        <a href="#" className="text-base text-neutral-950">
          Payment Method
        </a>
        <a href="#" className="text-base text-neutral-950">
          How to Register
        </a>
      </div>
    </footer>
  );
}
