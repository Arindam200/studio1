import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        className={cn("size-12", className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 35C0 16.6807 14.0744 1.64844 32 0.126953V141H51.0523C52.4308 137.344 54.7446 133.689 57.9938 130.033C61.1446 126.508 64.6892 123.44 68.6277 120.829C72.5662 118.349 76.3569 116.782 80 116.129V86.7544C75.4708 87.9292 71.3846 89.6919 67.7415 92.0415C64 94.5225 60.7508 97.46 57.9938 100.854C56.5345 102.72 55.2545 104.659 54.1539 106.671V0H125C144.33 0 160 15.6699 160 35V125C160 144.33 144.33 160 125 160H124V18H104.948C103.569 21.6816 101.255 25.3628 98.0062 29.0444C94.8554 32.5942 91.3108 35.6841 87.3723 38.314C83.4338 40.812 79.6431 42.3896 76 43.0474V72.6304C80.5292 71.4473 84.6154 69.6724 88.2585 67.3057C92 64.8076 95.2492 61.8491 98.0062 58.4307C99.4655 56.5513 100.745 54.5986 101.846 52.5723V160H35C15.67 160 0 144.33 0 125V35Z"
          fill="url(#paint0_linear_25_11)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_25_11"
            x1="0"
            y1="80"
            x2="160"
            y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FE3C34" />
            <stop offset="1" stopColor="#FE8B4B" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
