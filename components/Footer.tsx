import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full relative py-16 px-8 mt-20 bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/rust.mp4" type="video/mp4" />
      </video>
      
      {/* Mask Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Address and Email Section */}
        <div className="col-span-1">
          <div className="space-y-4">
            <p className="text-sm font-bold text-white  ">Based on Rust</p>
            <p className="text-sm font-bold text-white  ">Made with love</p>
            <p className="text-sm font-bold text-white  ">info@rustyworks.com</p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold mb-4 text-white  ">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm font-bold text-white   hover:opacity-80">Docs</Link></li>
            <li><Link href="#" className="text-sm font-bold text-white   hover:opacity-80">Works</Link></li>
            <li><Link href="#" className="text-sm font-bold text-white   hover:opacity-80">Live & Testing</Link></li>
            <li><Link href="#" className="text-sm font-bold text-white   hover:opacity-80">Github</Link></li>
          </ul>
        </div>

      
        {/* Rust Documentation Links */}
        <div>
          <h3 className="font-bold mb-4 text-white">Rust Docs</h3>
          <ul className="space-y-2">
            <li><Link href="https://doc.rust-lang.org/book/" className="text-sm font-bold text-white hover:opacity-80">The Rust Programming Language (Book)</Link></li>
            <li><Link href="https://doc.rust-lang.org/std/" className="text-sm font-bold text-white hover:opacity-80">Standard Library</Link></li>
            <li><Link href="https://doc.rust-lang.org/reference/" className="text-sm font-bold text-white hover:opacity-80">Rust Reference</Link></li>
            <li><Link href="https://doc.rust-lang.org/rustdoc/" className="text-sm font-bold text-white hover:opacity-80">rustdoc Guide</Link></li>
            <li><Link href="https://crates.io/" className="text-sm font-bold text-white hover:opacity-80">Crates.io (Rust Packages)</Link></li>
            <li><Link href="https://docs.rs/" className="text-sm font-bold text-white hover:opacity-80">Docs.rs (Rust API Docs)</Link></li>
            <li><Link href="https://blog.rust-lang.org/" className="text-sm font-bold text-white hover:opacity-80">Rust Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* Email Subscription */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 bg-transparent border border-white/20 rounded w-full md:w-64 text-white   font-bold placeholder:text-white/50"
          />
          <button className="px-6 py-2 border rounded text-white   font-bold hover:opacity-80">
            Connect
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm font-bold text-white  ">
            © 2025 Rusty Works.
            <span className="mx-2">All Rights Reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-sm font-bold text-white   hover:opacity-80">Terms of use</Link>
            <Link href="#" className="text-sm font-bold text-white   hover:opacity-80">Privacy Policy</Link>
            <Link href="#" className="text-sm font-bold text-white   hover:opacity-80">Back to Top</Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="font-bold text-white hover:opacity-80">Twitter</Link>
            <Link href="#" className="font-bold text-white   hover:opacity-80">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
