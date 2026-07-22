const Hero3 = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/images/hero.jpeg"
        alt="Hero"
        className="w-full h-auto object-cover"
      />
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      {/* Content */}
      {/* <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white life">
            Hero Section
          </h1>
        </div>
      </div> */}
    </section>
  );
};

export default Hero3;