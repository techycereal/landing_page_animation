export default function Footer(){
    return (
        <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: About Us */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>
              Global Internet Services is dedicated to providing the best internet solutions worldwide. Our mission is to keep you connected with high-speed, reliable internet wherever you are.
            </p>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Right Section: Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 Internet Lane, Web City, WI 12345</p>
            <p>Email: <a href="mailto:info@globalinternet.com" className="hover:underline">info@globalinternet.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Global Internet Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}