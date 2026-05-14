export default function PremiumRealEstatePlatform() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const properties = [
    {
      id: 1,
      title: 'Penthouse Premium en Puerto Madero',
      price: 'USD 1.250.000',
      location: 'Puerto Madero, Buenos Aires',
      image:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop',
      rooms: 4,
      bathrooms: 3,
      meters: 240,
      tag: 'Premium'
    },
    {
      id: 2,
      title: 'Casa Moderna con Jardín y Pileta',
      price: 'USD 890.000',
      location: 'Nordelta, Buenos Aires',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1400&auto=format&fit=crop',
      rooms: 5,
      bathrooms: 4,
      meters: 380,
      tag: 'Destacado'
    },
    {
      id: 3,
      title: 'Departamento Minimalista de Lujo',
      price: 'USD 540.000',
      location: 'Palermo Soho, Buenos Aires',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop',
      rooms: 3,
      bathrooms: 2,
      meters: 140,
      tag: 'Nuevo'
    }
    ,
{
  id: 4,
  title: 'Casa de diseño contemporáneo',
  price: 'USD 1.480.000',
  location: 'San Isidro, Buenos Aires',
  image:
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop',
  rooms: 6,
  bathrooms: 5,
  meters: 510,
  tag: 'Premium'
},
{
  id: 5,
  title: 'Loft industrial de lujo',
  price: 'USD 690.000',
  location: 'Puerto Madero, Buenos Aires',
  image:
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1400&auto=format&fit=crop',
  rooms: 2,
  bathrooms: 2,
  meters: 180,
  tag: 'Destacado'
},
{
  id: 6,
  title: 'Mansión premium con jardín',
  price: 'USD 2.350.000',
  location: 'Nordelta, Buenos Aires',
  image:
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop',
  rooms: 7,
  bathrooms: 6,
  meters: 760,
  tag: 'Exclusiva'
},
{
  id: 7,
  title: 'Penthouse con vista panorámica',
  price: 'USD 1.150.000',
  location: 'Puerto Madero, Buenos Aires',
  image:
    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop',
  rooms: 4,
  bathrooms: 3,
  meters: 260,
  tag: 'Nuevo'
},
{
  id: 8,
  title: 'Residencia minimalista premium',
  price: 'USD 1.890.000',
  location: 'Nordelta, Buenos Aires',
  image:
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop',
  rooms: 6,
  bathrooms: 5,
  meters: 590,
  tag: 'Premium'
},
{
  id: 9,
  title: 'Departamento de lujo moderno',
  price: 'USD 780.000',
  location: 'Palermo Hollywood, Buenos Aires',
  image:
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop',
  rooms: 3,
  bathrooms: 2,
  meters: 170,
  tag: 'Exclusiva'
}


  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans overflow-x-hidden scroll-smooth">

      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

 <img
  src="/logo-aura.png"
  alt="Espacio Aura"
  className="h-20 md:h-24 w-auto object-contain"
/>


</div>

          <nav className="hidden md:flex gap-8 text-white text-sm uppercase tracking-wide items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-gray-300 transition duration-300"
            >
              Inicio
            </button>

            <button
              onClick={() => scrollToSection('properties')}
              className="hover:text-gray-300 transition duration-300"
            >
              Propiedades
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-300 transition duration-300"
            >
              Contacto
            </button>
          </nav>

          <button className="bg-[#c79a3b] text-black px-5 py-2 rounded-full font-medium hover:scale-105 hover:opacity-90 transition-all">
            Contactar
          </button>
        </div>
      </header>

      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,.7)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center px-6 max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-[#c79a3b] mb-5 text-sm">
            Real Estate Premium
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Encontrá propiedades
            <span className="block text-gray-300">
              extraordinarias
            </span>
          </h2>

          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Una experiencia inmobiliaria moderna enfocada en diseño,
            exclusividad y tecnología.
          </p>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 grid grid-cols-1 md:grid-cols-5 gap-4 border border-white/10 shadow-2xl">

            <input
              type="text"
              placeholder="Ubicación"
              className="bg-[#f8f1ea] text-black placeholder:text-gray-500 rounded-2xl px-4 py-4 outline-none"
            />

            <div className="relative">
              <select className="w-full bg-[#f8f1ea] text-black rounded-2xl px-4 py-4 outline-none appearance-none cursor-pointer">
                <option>Comprar</option>
                <option>Alquilar</option>
              </select>

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>

            <div className="relative">
              <select className="w-full bg-[#f8f1ea] text-black rounded-2xl px-4 py-4 outline-none appearance-none cursor-pointer">
                <option>Casa</option>
                <option>Departamento</option>
                <option>PH</option>
              </select>

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>

            <div className="relative">
              <select className="w-full bg-[#f8f1ea] text-black rounded-2xl px-4 py-4 outline-none appearance-none cursor-pointer">
                <option>Precio</option>
                <option>USD 100k - 300k</option>
                <option>USD 300k - 700k</option>
              </select>

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </div>

            <button className="bg-[#c79a3b] text-black rounded-2xl font-semibold hover:scale-105 hover:opacity-90 transition-all py-4">
              Buscar
            </button>
          </div>
        </div>
      </section>

      <section
        id="properties"
        className="scroll-mt-32 py-28 bg-[#f8f1ea]"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#a07d4a] mb-3 text-sm">
                Exclusivas
              </p>

              <h2 className="text-5xl font-bold leading-tight">
                Propiedades destacadas
              </h2>
            </div>

            <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all w-fit">
              Ver todas
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
              >

                <div className="relative overflow-hidden h-[320px]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  <div className="absolute top-5 left-5 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {property.tag}
                  </div>
                </div>

                <div className="p-7">

                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-500 text-sm">
                      {property.location}
                    </p>

                    <button className="text-xl">
                      ♡
                    </button>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 leading-snug">
                    {property.title}
                  </h3>

                  <p className="text-3xl font-semibold mb-6">
                    {property.price}
                  </p>

                  <div className="flex gap-5 text-gray-500 text-sm mb-8 flex-wrap">
                    <span>{property.rooms} dormitorios</span>
                    <span>{property.bathrooms} baños</span>
                    <span>{property.meters} m²</span>
                  </div>

                  <button className="w-full bg-black text-white py-4 rounded-2xl hover:opacity-90 transition-all font-medium">
                    Ver propiedad
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative py-32"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,.75), rgba(0,0,0,.75)), url('https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-white">

          <p className="uppercase tracking-[0.3em] text-[#a07d4a] mb-4 text-sm">
            Contacto
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Empezá hoy tu próxima inversión inmobiliaria.
          </h2>

          <p className="text-[#c79a3b] text-lg mb-10 max-w-2xl mx-auto">
            Nuestro equipo de asesores está listo para ayudarte.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">

            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all">
              Hablar por WhatsApp
            </button>

            <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              Solicitar asesor
            </button>

          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h3 className="text-2xl font-bold tracking-[0.2em] mb-4">
              ESPACIO AURA
            </h3>

            <p className="text-[#a07d4a] max-w-md">
              Inmobiliaria premium especializada en experiencias digitales modernas y propiedades exclusivas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">

            <div>
              <h4 className="font-semibold mb-4">
                Navegación
              </h4>

              <ul className="space-y-2 text-[#a07d4a]">
                <li>Inicio</li>
                <li>Propiedades</li>
                <li>Contacto</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Contacto
              </h4>

              <ul className="space-y-2 text-[#a07d4a]">
                <li>+54 11 5555 5555</li>
                <li>info@espacioaura.com</li>
                <li>Buenos Aires, Argentina</li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}