const Slider2 = () => {
  return (
    <div
      className="hero min-h-[550px]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1499343245400-cddc78a01317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60')",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md md:max-w-3xl">
          <h1 className="text-5xl font-bold lg:text-7xl mb-4">
            Unlock Your Photographic Vision
          </h1>
          <p className="mb-5">
            Ignite your creativity and discover your unique photographic vision.
            Join our Photography Summer Camp at PixelLens Academy and learn to
            capture the world through your lens like never before.
          </p>
          <button className="btn border-primary-700">Explore Workshops</button>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
