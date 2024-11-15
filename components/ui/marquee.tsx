export const Marquee: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="w-full overflow-hidden sm:my-12 my-5 z-10 px-10">
        <div className="text-center font-semibold text-4xl pb-4">Trusted By <span className="font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 from">Companies</span></div>
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