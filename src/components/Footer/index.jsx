import Container from "../Container";
import {LogoLightMode, footerGallery} from "../../assets/images";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-primary-50">
      <Container>
        <div className="footer p-10 text-base-content">
          <div>
            <img className="max-w-[200px]" src={LogoLightMode} alt="Logo" />
            <p className="font-bold">
              PixelLens Academy - Unleashing Creativity Since 2023
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <img
                className="w-14"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
                alt="Stripe"
              />
              <img
                className="w-14"
                src="https://www.edigitalagency.com.au/wp-content/uploads/new-PayPal-Logo-horizontal-full-color-png.png"
                alt="Paypal"
              />
              <img
                className="w-14"
                src="https://companieslogo.com/img/orig/V-05214186.png?t=1633206554"
                alt="visa"
              />
              <img
                className="w-14"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                alt="mastercard"
              />
            </div>
          </div>
          <div className="text-base-content">
            <SocialLinks />
            <p className="mt-4">
              &copy; {new Date().getFullYear()} PixelLens Academy. <br /> All
              rights reserved.
            </p>
            <p>123 Street, City, State, ZIP</p>
            <p>Email: info@pixellensacademy.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="md:w-32">
            <span className="footer-title">Company</span>
            <a className="link-hover link">About us</a>
            <a className="link-hover link">Courses/Programs</a>
            <a className="link-hover link">FAQ</a>
            <a className="link-hover link">Blog</a>
            <a className="link-hover link">Contact Us</a>
            <a className="link-hover link">Resources</a>
            <a className="link-hover link">Privacy Policy</a>
            <a className="link-hover link">Terms and Conditions</a>
          </div>
          <div className="md:max-w-[300px]">
            <span className="footer-title">Instegram</span>
            <div className="grid grid-cols-2 gap-4">
              {footerGallery &&
                footerGallery.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="h-auto max-w-[155px]"
                    />
                  </div>
                ))}
            </div>
            <div className="mb-3 flex justify-between">
              <input
                className="input input-sm rounded-e-none"
                placeholder="Your Email"
                type="text"
              />
              <button className="btn-sm btn rounded-s-none p-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
