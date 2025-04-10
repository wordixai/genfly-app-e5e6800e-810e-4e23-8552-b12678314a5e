import { Coffee, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const menuItems = [
  {
    name: "Espresso",
    price: "$3.50",
    description: "Rich and bold single shot of espresso"
  },
  {
    name: "Cappuccino",
    price: "$4.50",
    description: "Espresso with steamed milk and foam"
  },
  {
    name: "Avocado Toast",
    price: "$8.50",
    description: "Sourdough bread with avocado, cherry tomatoes and feta"
  },
  {
    name: "Blueberry Pancakes",
    price: "$9.50",
    description: "Fluffy pancakes with fresh blueberries and maple syrup"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#333]">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <Image 
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Cafe interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Brew & Bites</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Artisanal coffee and fresh pastries in the heart of the city</p>
            <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image 
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Barista making coffee"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2010, Brew & Bites started as a small coffee cart and has grown into a beloved neighborhood cafe. 
              We source our beans directly from sustainable farms and roast them in-house for maximum freshness.
            </p>
            <p className="text-lg">
              Our mission is simple: serve exceptional coffee and food while creating a warm, welcoming space for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-amber-700" />
            <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From classic espresso drinks to seasonal specialties, we have something for every taste.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-[#f9f9f9] p-6 rounded-lg hover:shadow-lg transition duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-amber-700 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-bold py-2 px-8 rounded-full transition duration-300">
              Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="w-10 h-10 mx-auto mb-4 text-amber-700" />
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p className="mb-1">Monday - Friday: 7am - 7pm</p>
              <p>Saturday - Sunday: 8am - 6pm</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-amber-700" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p>123 Coffee Street</p>
              <p>Downtown, Cityville</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Phone className="w-10 h-10 mx-auto mb-4 text-amber-700" />
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p>(555) 123-4567</p>
              <p>hello@brewandbites.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Brew & Bites</h2>
              <p>Quality coffee since 2010</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-400 transition">Instagram</a>
              <a href="#" className="hover:text-amber-400 transition">Facebook</a>
              <a href="#" className="hover:text-amber-400 transition">Twitter</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Brew & Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}