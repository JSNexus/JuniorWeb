import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className=" text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* School Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-100">
              Tete Junior School
            </h3>
            <p className="text-blue-200  text-sm leading-relaxed">
              Educating and empowering young minds to create a brighter future.
              We believe in nurturing talent and fostering growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-100">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  About Us
                </a>

                <a
                  href="/contact"
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Contact
                </a>
                <a
                  href="/galeria"
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Gallery
                </a>
                <a
                  href="/faq"
                  className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-100">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:contato@tetejuniorschool.com"
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contato@tetejuniorschool.com</span>
              </a>
              <a
                href="tel:+258XXXXXXXX"
                className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(+258) XXXX-XXXX</span>
              </a>
              <div className="flex items-center gap-3 text-blue-200">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Mozambique - Tete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-800/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Links */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.888 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-300 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.694-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.197-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-blue-200 text-sm">
              © 2024 Nexus JR. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
