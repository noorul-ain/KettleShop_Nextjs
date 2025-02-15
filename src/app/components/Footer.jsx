export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto text-center px-6">
        {/* Logo */}
        <div className="mb-6">
          <img src="/logo.png" alt="Kettle Shop Logo" className="mx-auto h-10" />
        </div>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-col sm:flex-row sm:justify-center gap-4 text-gray-600">
            <li>
              <a href="/" className="hover:text-gray-900">Home</a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-900">Products</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-900">About Us</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-900">Blog</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-900">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="mb-6">
          <ul className="flex justify-center flex-wrap gap-4 text-gray-600">
            <li>
              <a href="https://www.linkedin.com/in/noorulain000" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-gray-900">
                  <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9.02h3.56v11.43zM5.34 7.6c-1.14 0-2.06-.92-2.06-2.06S4.2 3.48 5.34 3.48c1.14 0 2.06.92 2.06 2.06s-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.96v5.7h-3.56V9.02h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.55v6.18z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/noorul-ain?tab=repositories" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:text-gray-900">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.388.6.11.793-.263.793-.583v-2.222c-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.087-.743.084-.728.084-.728 1.203.085 1.835 1.236 1.835 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.775.42-1.306.763-1.606-2.665-.303-5.467-1.333-5.467-5.933 0-1.31.469-2.382 1.235-3.221-.123-.303-.534-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.524 11.524 0 0 1 6.004 0c2.292-1.552 3.3-1.23 3.3-1.23.652 1.653.241 2.873.118 3.176.768.839 1.235 1.911 1.235 3.221 0 4.61-2.805 5.625-5.478 5.921.43.37.814 1.096.814 2.21v3.293c0 .321.192.698.8.582C20.564 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500">© 2025 Kettle Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
