const Slider3 = () => {
  return (
    <div
      className="hero min-h-[550px]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1670172072921-2557b93c6d56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHx0ZWFjaGluZyUyMHBob3RvZ3JhcGh5fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60')",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md md:max-w-4xl">
          <h1 className="text-5xl font-bold lg:text-7xl mb-4">
            Immerse in Captivating Landscapes
          </h1>
          <p className="mb-5">
            Embark on a journey to picturesque landscapes and learn to capture
            their beauty. Join our Photography Summer Camp at PixelLens Academy
            and explore the art of landscape photography under expert guidance.
          </p>
          <button className="btn border-primary-700">
            Discover the Beauty
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
