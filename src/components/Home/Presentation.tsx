const Presentation = () => {
  return (
    <section className="w-full bg-[#FAFAFC] pb-10 pt-14 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-5xl mx-auto">
        
        {/* --- MAIN CONTAINER BOX WITH EXACT BORDER DESIGN --- */}
        <div className="relative border border-gray-200/90 rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 pt-9 sm:pt-10 shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
          
          {/* Top Heading Badge Centered On Border Line */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap z-10">
            {/* <div className="w-6 sm:w-10 h-[1px] bg-gray-300" /> */}
            <span className="text-xl sm:text-2xl font-bold life text-gray-800 uppercase">
              OUR PARTNERS & SUPPORTERS
            </span>
            {/* <div className="w-6 sm:w-10 h-[1px] bg-gray-300" /> */}
          </div>

          {/* --- 2 TABS / COLUMNS GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200/80 gap-6 md:gap-0">
            
            {/* TAB 1: SECURED BY */}
            <div className="flex flex-col items-center text-center px-4 md:pr-8 pb-4 md:pb-0">
              <h3 className="text-lg life font-bold tracking-wide text-gray-700 uppercase mb-2">
                SECURED BY
              </h3>

              {/* Horizontal Line Under Title */}
              <div className="w-full h-[1px] bg-gray-200/80 mb-10" />

              {/* Logo Container */}
              <div className="flex items-center justify-center h-14 w-full pb-4">
                <div className="">
                  <img
                    src="/logos/blackHorLogo.png"
                    alt="Secured By Logo"
                    className="h-7 sm:h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* TAB 2: PRESENTED BY */}
            <div className="flex flex-col items-center text-center px-4 md:pl-8 pt-4 md:pt-0">
              <h3 className="text-lg font-bold tracking-wide life text-gray-700 uppercase mb-2">
                PRESENTED BY
              </h3>

              {/* Horizontal Line Under Title */}
              <div className="w-full h-[1px] bg-gray-200/80 mb-5" />

              {/* Logos Container */}
              <div className="flex items-center justify-center gap-4 sm:gap-4 h-14 w-full">
                <img
                  src="/images/sponsor3.png"
                  alt="Presented By Sponsor 1"
                  className="h-9 sm:h-60 w-auto object-contain max-w-[200px] hover:scale-105 transition-transform"
                />
                <img
                  src="/images/sponsor4.png"
                  alt="Presented By Sponsor 2"
                  className="h-9 sm:h-60 w-auto object-contain max-w-[200px] hover:scale-105 transition-transform"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Presentation;