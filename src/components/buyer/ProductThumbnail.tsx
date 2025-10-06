import Image from 'next/image';

type ProductThumbnailProps = {
  src: string;
  alt: string;
  heading?: string;
  price?: string;
  rate?: string;
  text?: string;
  label?: string;
};

export default function ProductThumbnail({
  src,
  alt,
  heading,
  price,
  rate,
  text,
  label,
}: ProductThumbnailProps) {
  return (
    <div className="flex flex-col w-auto h-auto border rounded-[0.75rem] bg-white shadow-custom">
      <Image
        src={src}
        alt={alt}
        width={285}
        height={285}
        className="w-full h-285 rounded-t-12"
      />
      <div className="w-full h-auto p-3 gap-0.5">
        <h4 className="text-base text-neutral-950">{heading}</h4>
        <p className="text-base font-bold text-neutral-950">{price}</p>
        <div className="flex flex-row gap-1.5 items-center">
          <div className="flex flex-row gap-0.5">
            <Image
              src="/assets/icons/icon-rate.png"
              alt="Icon Rate"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            <p className='text-base text-neutral-950'>{rate}</p>
          </div>
          <Image
            src="/assets/icons/icon-ellipse.png"
            alt="Icon Ellipse"
            width={3}
            height={3}
            className="w-0.5 h-0.5"
          />
          <p className='text-base text-neutral-950'>{text}</p>
        </div>
        <div className="flex flex-row gap-0.5">
          <Image
            src="/assets/icons/icon-verify.png"
            alt="Icon Verify"
            width={20}
            height={20}
            className="w-6 h-6"
          />
          <p className='text-base text-neutral-950'>{label}</p>
        </div>
      </div>
    </div>
  );
}
