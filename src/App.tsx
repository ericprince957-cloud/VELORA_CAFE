import { useState, useEffect } from 'react';

// Menu items data
const menuItems = [
  {
    id: 1,
    name: "Midnight Burger",
    price: "₦2,500",
    description: "Juicy beef patty with melted cheese, fresh lettuce, and our signature sauce.",
    image: "https://image.qwenlm.ai/generated-images/f79e40b4-9b31-4134-9431-b579a73cd962/_result.png",
    alt: "Delicious Late Night Burger at Velora Cafe Awka"
  },
  {
    id: 2,
    name: "Hot Shawarma",
    price: "₦2,000",
    description: "Grilled chicken wrapped in fresh pita with garlic sauce and crunchy veggies.",
    image: "https://image.qwenlm.ai/generated-images/226417a2-c8ed-4cae-bdd1-8693047ceb2d/_result.png",
    alt: "Fresh Chicken Shawarma at Velora Cafe 24/7"
  },
  {
    id: 3,
    name: "Iced Coffee",
    price: "₦1,500",
    description: "Smooth cold brew with cream and caramel drizzle. Perfect night pick-me-up.",
    image: "https://image.qwenlm.ai/generated-images/254f5106-8e09-4691-ba2f-7fc21fa58e37/_result.png",
    alt: "Refreshing Iced Coffee at Velora Cafe Late Night"
  },
  {
    id: 4,
    name: "Jollof Rice & Chicken",
    price: "₦3,000",
    description: "Smoky party-style jollof rice served with perfectly grilled chicken.",
    image: "https://image.qwenlm.ai/generated-images/94bdcc3b-2047-4cb7-9474-2b6500d6e23a/_result.png",
    alt: "Nigerian Jollof Rice with Grilled Chicken at Velora Cafe"
  },
  {
    id: 5,
    name: "Spicy Wings",
    price: "₦2,200",
    description: "Crispy golden wings tossed in our fiery hot sauce. Addictively crunchy.",
    image: "https://image.qwenlm.ai/generated-images/e269042e-3218-4a6b-b0ba-5048fbbfba2d/_result.png",
    alt: "Crispy Spicy Chicken Wings at Velora Cafe Awka"
  },
  {
    id: 6,
    name: "Berry Smoothie Bowl",
    price: "₦1,800",
    description: "Fresh blended berries topped with granola, banana, and chia seeds.",
    image: "https://image.qwenlm.ai/generated-images/bb08dc3a-bc58-4cfa-9e03-ba40e7a49f1e/_result.png",
    alt: "Healthy Fruit Smoothie Bowl at Velora Cafe"
  },
  {
    id: 7,
    name: "Loaded Fries",
    price: "₦1,500",
    description: "Crispy golden fries with cheese sauce, jalapeños, and crispy onions.",
    image: "https://image.qwenlm.ai/generated-images/4a9ad89a-3eb9-4e51-99b7-3ba62e5be121/_result.png",
    alt: "Crispy French Fries with Dip at Velora Cafe"
  },
  {
    id: 8,
    name: "Night Owl Combo",
    price: "₦4,500",
    description: "Burger + Fries + Iced Coffee. The ultimate late-night meal deal.",
    image: "https://image.qwenlm.ai/generated-images/1cc1b186-dc4c-490c-a627-a5d24fc671d9/_result.png",
    alt: "Night Owl Combo Meal Deal at Velora Cafe Awka"
  }
];

const WHATSAPP_BASE = "https://wa.me/2348068290541";

function getWhatsAppLink(dishName?: string) {
  if (dishName) {
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hi Velora, I'd like to order ${dishName}. Please confirm availability and delivery details. Thank you!`)}`;
  }
  return `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi Velora, I'd like to place an order. Please share your current menu and availability.")}`;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d1117]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="Velora Cafe Home">
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              VELORA <span className="text-[#ff9800]">CAFE</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#menu" className="text-white/80 hover:text-[#ff9800] transition-colors font-medium text-sm">Menu</a>
            <a href="#why-us" className="text-white/80 hover:text-[#ff9800] transition-colors font-medium text-sm">Why Us</a>
            <a href="#location" className="text-white/80 hover:text-[#ff9800] transition-colors font-medium text-sm">Location</a>
            
            {/* Open Badge */}
            <span className="flex items-center gap-1.5 bg-green-900/30 border border-green-500/30 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold animate-pulse">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              OPEN 24 HOURS
            </span>

            {/* CTA */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-4 py-2.5 rounded-full text-sm transition-all hover:scale-105 shadow-lg shadow-green-500/20"
            >
              Order Now via WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d1117]/98 backdrop-blur-lg border-t border-white/10 pb-4">
            <div className="flex flex-col gap-3 px-4 pt-4">
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#ff9800] transition-colors font-medium py-2">Menu</a>
              <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#ff9800] transition-colors font-medium py-2">Why Us</a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#ff9800] transition-colors font-medium py-2">Location</a>
              <span className="flex items-center gap-1.5 text-green-400 py-2 text-sm font-bold">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                OPEN 24 HOURS
              </span>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-bold px-4 py-3 rounded-full text-center text-sm mt-2"
              >
                Order Now via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/1cc1b186-dc4c-490c-a627-a5d24fc671d9/_result.png"
          alt="Velora Cafe warm late-night atmosphere with ambient lighting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/70 via-[#0d1117]/50 to-[#0d1117]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-20">
        {/* Open Badge */}
        <div className="inline-flex items-center gap-2 bg-green-900/40 border border-green-500/40 text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
          OPEN 24 HOURS — ORDER ANYTIME
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-4">
          Hungry at <span className="text-[#ff9800]">3 AM?</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/90">We're Open.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Awka's Reliable 24/7 Spot for Food, Drinks & Good Vibes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#menu"
            className="w-full sm:w-auto bg-[#ff9800] hover:bg-[#e68900] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-orange-500/30"
          >
            View Full Menu
          </a>
          <a
            href="#location"
            className="w-full sm:w-auto border-2 border-white/30 hover:border-white/60 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 backdrop-blur-sm"
          >
            📍 Find Us in Ekeagba
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#ff9800] font-bold text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2">
            Late Night Favorites
          </h2>
          <p className="text-white/60 mt-3 max-w-xl mx-auto">
            Fresh, delicious, and ready when you are. Tap any item to order via WhatsApp.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="group bg-[#161b22] rounded-2xl overflow-hidden border border-white/5 hover:border-[#ff9800]/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-[#ff9800] text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">{item.description}</p>
                <a
                  href={getWhatsAppLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white font-bold py-3 rounded-xl transition-all duration-300 border border-[#25D366]/30 hover:border-[#25D366]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order This
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const features = [
    {
      icon: "🕐",
      title: "Open 24/7 – Always Ready",
      description: "No matter the hour, our kitchen is fired up and ready to serve you delicious meals."
    },
    {
      icon: "🚀",
      title: "Fast Delivery/Pickup in Awka",
      description: "Quick delivery to your doorstep or grab your order on the go. Speed is our promise."
    },
    {
      icon: "🍳",
      title: "Fresh Food, Any Time of Day",
      description: "Every dish is prepared fresh with quality ingredients. No shortcuts, no compromises."
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#161b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#ff9800] font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2">
            Why Order From Velora?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-[#0d1117] border border-white/5 hover:border-[#ff9800]/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#ff9800] font-bold text-sm uppercase tracking-wider">Find Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2">
            Visit Us Anytime
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="bg-[#161b22] rounded-2xl p-8 border border-white/5">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff9800]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Our Address</h3>
                  <p className="text-white/60 mt-1">
                    After OCEB Hotel, No: 1 Davo Chuma Plaza,<br />
                    Ekeagba, Awka, Anambra State, Nigeria
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🕐</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Opening Hours</h3>
                  <div className="mt-2 inline-flex items-center gap-2 bg-green-900/30 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-sm font-bold">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    OPEN 24 HOURS / 7 DAYS A WEEK
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">WhatsApp</h3>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">
                    +234 806 829 0541
                  </a>
                </div>
              </div>
            </div>

            {/* Big Order Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.02] shadow-xl shadow-green-500/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order Now on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="bg-[#161b22] rounded-2xl overflow-hidden border border-white/5 min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5!2d7.0731!3d6.2116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInNDEuOCJOIDfCsDA0JzIzLjIiRQ!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Velora Cafe Location in Ekeagba, Awka - Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0e14] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white">
              VELORA <span className="text-[#ff9800]">CAFE</span>
            </h3>
            <p className="text-white/50 mt-3 text-sm leading-relaxed">
              Awka's reliable 24/7 spot for food, drinks & good vibes. Always open, always fresh.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm font-bold">OPEN 24 HOURS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/50 hover:text-[#ff9800] transition-colors text-sm">Home</a></li>
              <li><a href="#menu" className="text-white/50 hover:text-[#ff9800] transition-colors text-sm">Full Menu</a></li>
              <li><a href="#why-us" className="text-white/50 hover:text-[#ff9800] transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#location" className="text-white/50 hover:text-[#ff9800] transition-colors text-sm">Location & Hours</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact & Order</h4>
            <ul className="space-y-2">
              <li className="text-white/50 text-sm">📍 Ekeagba, Awka, Anambra State</li>
              <li>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline text-sm">
                  📱 WhatsApp: +234 806 829 0541
                </a>
              </li>
            </ul>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Velora Cafe & Restaurant Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-[#ff9800] text-sm transition-colors">Privacy</a>
            <a href="#" className="text-white/40 hover:text-[#ff9800] text-sm transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Floating WhatsApp Button
function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 transition-all hover:scale-110"
      aria-label="Order via WhatsApp"
    >
      <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-['Montserrat',sans-serif]">
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <WhyUsSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
