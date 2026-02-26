import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-grey-700 text-dominantbg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* Left Section */}
          <div className="md:w-2/3">
           <p className="text-lg mb-6">
            Government College of technology ,Thadagam Road ,Coimbatore-13
            </p>
            <p className="text-lg mb-6">
              Student Journalist Council - GCT is the student media body of GCT, Coimbatore.
            </p>

            <ul className="flex flex-wrap gap-6 text-sm font-semibold">
          <li>
            <Link href="/stories">
              <a className="hover:underline hover:text-white transition-colors duration-200">
                Stories
              </a>
            </Link>
          </li>

          <li>
            <Link href="/aperture">
              <a className="hover:underline hover:text-white transition-colors duration-200">
                Aperture
              </a>
            </Link>
          </li>

          <li>
            <Link href="/humansofgct">
              <a className="hover:underline hover:text-white transition-colors duration-200">
                Humans of GCT
              </a>
            </Link>
          </li>

          <li>
            <Link href="/alumspace">
              <a className="hover:underline hover:text-white transition-colors duration-200">
                AlumSpace
              </a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a className="hover:underline hover:text-white transition-colors duration-200">
                About
              </a>
            </Link>
          </li>

          <li>
            <Link href="/team">
              <a className="hover:underline hover:text-white transition-colors duration-200">
                Team
              </a>
            </Link>
          </li>
        </ul>
        </div>

          {/* Right Section - Social Icons */}
          <div className="flex gap-4 md:justify-end">

            <a
              href="https://www.facebook.com/sjcgct"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grey-600 p-3 rounded-md hover:bg-grey-500 transition"
            >
              <img src="/images/facebook.svg" alt="Facebook" className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/sjcgct/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grey-600 p-3 rounded-md hover:bg-grey-500 transition"
            >
              <img src="/images/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>

            <a
              href="https://www.twitter.com/sjcgct"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grey-600 p-3 rounded-md hover:bg-grey-500 transition"
            >
              <img src="/images/x.svg" alt="Twitter / X" className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/company/sjcgct"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-grey-600 p-3 rounded-md hover:bg-grey-500 transition"
            >
              <img src="\images\linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>

          </div>
        </div>

        {/* Divider */}
        <hr className="border-grey-500 my-8" />

        {/* Bottom Section */}
        <div className="text-sm text-grey-400 flex justify-between items-center flex-col md:flex-row gap-4">
          <p>
            © {new Date().getFullYear()} Student Journalist Council - GCT. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;