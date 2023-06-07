const Banner = () => {
  return (
    <div
      className="hero min-h-[550px]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md md:max-w-3xl">
          <h1 className="text-5xl font-bold lg:text-7xl">
            Hello, Photography Summer Camp
          </h1>
          <h2 className="mb-5 mt-2 text-3xl font-bold">
            {" "}
            in PixelLens Academy
          </h2>
          <p className="mb-5">
            Unleash your creativity this summer at our Photography Summer Camp!
            Join PixelLens Academy for an immersive experience that blends
            learning, adventure, and artistic exploration. Capture stunning
            moments, refine your skills, and create lasting memories. Enroll
            today and embark on a transformative journey with us.
          </p>
          <button className="btn border-primary-700">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
