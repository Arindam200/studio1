export const Marquee: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="w-full overflow-hidden sm:mt-12 mt-5 z-10 px-10">
        <div className="text-center font-semibold text-3xl pb-4">Trusted By</div>
        <div className="relative flex max-w-[100vw] overflow-hidden py-5">
          <div className="flex w-max animate-marquee [--duration:30s]">
            {children}
            {children}
            {children}
            {children}
          </div>
        </div>
      </div>
    )
  }