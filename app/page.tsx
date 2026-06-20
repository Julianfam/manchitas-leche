"use client";

import React, { useState } from 'react';
import { Milk, Users, Award, Clock, Truck, Heart, ArrowRight, Phone, Star, Check } from 'lucide-react';

export default function ManchitasLeche() {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 35000;
  const total = quantity * pricePerUnit;

  const formatCOP = (amount: number) => {
    return amount.toLocaleString('es-CO');
  };

  const openWhatsApp = (customMessage?: string) => {
    const phone = '573005695045';
    let message = customMessage;
    
    if (!message) {
      message = `Hola Manchitas! \ud83d\udc04 Quiero pedir ${quantity} cantina(s) de Leche Orgánica Manchitas de 5L.\n\nTotal: $${formatCOP(total)} COP\n\n\u00bfMe confirmas disponibilidad y detalles de entrega en Bogot\u00e1 o Cundinamarca?`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  const openCheeseInterest = (cheeseType: string) => {
    const message = `Hola Manchitas! \ud83e\uddc0 Estoy muy interesado en el ${cheeseType} en bloque cuando salga a la venta. \u00bfMe avisas cuando est\u00e9 disponible?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573005695045?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fefce8] text-[#0f172a]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-[#14532d]/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#14532d] rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">\ud83d\udc04</span>
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tighter text-[#14532d]">MANCHITAS</div>
              <div className="text-[10px] text-[#14532d]/60 -mt-1">LECHE ORGÁNICA</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#producto" className="hover:text-[#14532d] transition-colors">El Producto</a>
            <a href="#conservacion" className="hover:text-[#14532d] transition-colors">Cómo conservarla</a>
            <a href="#queso" className="hover:text-[#14532d] transition-colors">Próximamente Queso</a>
            <a href="#por-que" className="hover:text-[#14532d] transition-colors">Por qué Manchitas</a>
          </div>

          <button 
            onClick={() => openWhatsApp()}
            className="btn-whatsapp text-sm px-5 py-2.5"
          >
            <Phone className="w-4 h-4" /> Pedir por WhatsApp
          </button>
        </div>
      </nav>

      {/* Hero with image */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-[#14532d] to-[#166534] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold tracking-[2px] px-4 py-1.5 rounded-full mb-6">
              PRODUCCIÓN LIMITADA • FINCAS COLOMBIANAS ORGÁNICAS
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
              Leche Orgánica<br />Manchitas
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/90 mb-3">Leche de verdad, para tu familia.</p>
            <p className="max-w-md text-white/80 text-lg mb-8">
              100% de vaca orgánica. Sin rebajar. Sin mezclas. Sabor y cremosidad natural que sí se nota.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('producto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#14532d] font-semibold px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#fefce8] transition-all text-lg"
              >
                Ver el producto <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => openWhatsApp()}
                className="btn-whatsapp text-lg px-10 py-4"
              >
                Pedir ahora por WhatsApp
              </button>
            </div>

            <div className="mt-8 flex gap-8 text-sm text-white/70">
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> 5 litros por cantina</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Solo $7.000 el litro</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-10 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80" 
              alt="Vaca feliz en pasto verde de finca orgánica colombiana" 
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 bg-white text-[#14532d] px-6 py-3 rounded-2xl shadow-xl">
              <div className="font-bold">100% Orgánica</div>
              <div className="text-sm text-[#14532d]/70">Directo de la finca</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-b border-[#14532d]/10 bg-white py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-[#14532d]/80 font-medium">
          <div className="flex items-center gap-2"><Award className="w-4 h-4" /> 100% Leche Orgánica de Vaca Real</div>
          <div className="flex items-center gap-2"><Users className="w-4 h-4" /> Ideal para toda la familia</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> Fresca de finca</div>
          <div className="flex items-center gap-2"><Heart className="w-4 h-4" /> Apoyas productores locales</div>
        </div>
      </div>

      {/* EL PRODUCTO with image */}
      <section id="producto" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="limited-badge mb-4">
              <span>SOLO QUEDAN POCAS CANTINAS ESTA SEMANA</span>
            </div>
            
            <h2 className="text-5xl font-bold tracking-tighter text-[#14532d] mb-4">Leche Orgánica Manchitas</h2>
            <p className="text-xl text-[#14532d]/80 mb-6">Cantina plástica de 5 litros • Leche cruda fresca 100% de vaca orgánica</p>

            <div className="space-y-3 mb-8">
              {[
                "Sin rebajar ni agregar agua",
                "Sin mezclas ni procesos industriales",
                "Sabor y cremosidad natural auténtica",
                "Ideal para café que espuma, chocolate espeso y postres caseros"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#4ade80] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#14532d]" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-6xl font-bold text-[#14532d]">${formatCOP(pricePerUnit)}</span>
              <span className="text-xl text-[#14532d]/70">COP por cantina de 5L</span>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#14532d]/10 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-semibold">Cantidad de cantinas</div>
                  <div className="text-sm text-[#14532d]/60">Máx. 5 por pedido (producción limitada)</div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-[#14532d]/30 flex items-center justify-center text-xl active:bg-[#fefce8]"
                  >−</button>
                  <span className="text-3xl font-semibold w-12 text-center tabular-nums">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(5, quantity + 1))}
                    className="w-10 h-10 rounded-full border border-[#14532d]/30 flex items-center justify-center text-xl active:bg-[#fefce8]"
                  >+</button>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="text-lg">Total a pagar</div>
                <div className="text-3xl font-bold text-[#14532d]">${formatCOP(total)} <span className="text-base font-normal">COP</span></div>
              </div>
            </div>

            <button 
              onClick={() => openWhatsApp()}
              className="btn-whatsapp w-full text-xl py-6"
            >
              <Phone className="w-6 h-6" /> Pedir {quantity} cantina{quantity > 1 ? 's' : ''} por WhatsApp
            </button>
            <p className="text-center text-xs text-[#14532d]/60 mt-3">Te confirmamos disponibilidad y coordinamos la entrega</p>
          </div>

          {/* Product Image */}
          <div className="product-card overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80" 
              alt="Cantina de leche orgánica fresca Manchitas en mesa de madera" 
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="p-8 text-center bg-white">
              <div className="font-bold text-2xl text-[#14532d]">Leche Orgánica Manchitas</div>
              <div className="text-[#14532d]/70">100% de vaca orgánica • Sin rebajar</div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCCIONES DE CONSERVACIÓN */}
      <section id="conservacion" className="bg-[#14532d] py-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#4ade80] text-sm font-bold tracking-[2px] mb-2">INSTRUCTIVO OFICIAL</div>
            <h3 className="text-4xl font-bold tracking-tighter">Cómo conservar tu leche fresca</h3>
            <p className="text-white/70 mt-2 max-w-md mx-auto">Es leche orgánica recién ordeñada sin procesos industriales. Sigue estos pasos para que dure perfecta hasta 7 días.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "HERVIR", desc: "Al recibirla, hiérvela inmediatamente. Lleva a hervor completo (sube y burbujea). Apaga y retira del fuego.", icon: "🍲" },
              { num: "2", title: "ENFRIAR", desc: "Deja enfriar naturalmente. No tapes la cantina mientras esté caliente para evitar condensación.", icon: "🥛" },
              { num: "3", title: "REFRIGERAR", desc: "Una vez fría, refrigérala de inmediato. Mantén siempre refrigerada.", icon: "❄️" }
            ].map((step, index) => (
              <div key={index} className="step-card text-[#0f172a]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#14532d] text-white rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">{step.icon}</div>
                  <div>
                    <div className="text-xs text-[#14532d]/60 font-mono">PASO {step.num}</div>
                    <div className="font-bold text-2xl tracking-tight text-[#14532d]">{step.title}</div>
                  </div>
                </div>
                <p className="text-[#14532d]/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white/10 rounded-2xl p-6 text-center">
            <div className="flex justify-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">DURACIÓN: Hasta 7 días en refrigeración</span>
            </div>
            <p className="text-sm text-white/70">Siguiendo estos pasos mantienes el sabor, textura y calidad natural de la leche orgánica de verdad.</p>
          </div>
        </div>
      </section>

      {/* Por qué elegir */}
      <section id="por-que" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="text-[#14532d] text-sm font-bold tracking-widest">LA DIFERENCIA ESTÁ EN EL SABOR</div>
          <h3 className="text-4xl font-bold tracking-tighter text-[#14532d] mt-2">Por qué las familias colombianas eligen Manchitas Orgánica</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Milk className="w-8 h-8" />, title: "Leche orgánica real", desc: "Olvídate de leche aguada. Aquí hay grasa natural y sabor de campo orgánico." },
            { icon: <Award className="w-8 h-8" />, title: "100% de vaca", desc: "Sin rebajar, sin mezclar, sin trucos. Solo leche orgánica entera como debe ser." },
            { icon: <Users className="w-8 h-8" />, title: "Para toda la familia", desc: "Perfecta para niños, café de la mañana, postres y recetas tradicionales." },
            { icon: <Heart className="w-8 h-8" />, title: "Apoyas lo local", desc: "Compras directo de productores colombianos orgánicos. Producción limitada." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-[#14532d]/10 flex flex-col">
              <div className="text-[#4ade80] mb-6">{item.icon}</div>
              <div className="font-bold text-xl mb-3 text-[#14532d]">{item.title}</div>
              <p className="text-[#14532d]/70 flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Queso with images */}
      <section id="queso" className="bg-white py-16 border-y border-[#14532d]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="limited-badge bg-[#166534]">PRÓXIMAMENTE</div>
              <h3 className="text-4xl font-bold tracking-tighter text-[#14532d] mt-3">Queso en Bloque Orgánico</h3>
              <p className="text-[#14532d]/70 mt-1">El mismo compromiso con la calidad natural orgánica. Muy pronto en tu mesa.</p>
            </div>
            <button 
              onClick={() => openWhatsApp("Hola Manchitas! \ud83e\uddc0 ¡Quiero que me avises cuando salga el queso en bloque orgánico a la venta!")}
              className="btn-primary text-sm px-6 py-3 self-start md:self-auto"
            >
              Avísame cuando salga
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "Queso Fresco", 
                desc: "Suave, ideal para ensaladas y arepas", 
                img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80" 
              },
              { 
                name: "Queso Doble Crema", 
                desc: "Cremoso y delicioso, perfecto para untar", 
                img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80" 
              },
              { 
                name: "Queso Campesino", 
                desc: "Tradicional colombiano, gran sabor", 
                img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80" 
              }
            ].map((cheese, i) => (
              <div key={i} className="border border-[#14532d]/10 rounded-3xl overflow-hidden hover:border-[#4ade80] transition-colors group">
                <img 
                  src={cheese.img} 
                  alt={cheese.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="font-bold text-2xl text-[#14532d] mb-2">{cheese.name}</div>
                  <p className="text-[#14532d]/70 mb-6">{cheese.desc}</p>
                  <button 
                    onClick={() => openCheeseInterest(cheese.name)}
                    className="text-sm font-semibold text-[#14532d] flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Reservar interés <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-[#14532d] text-sm font-bold tracking-widest">LO QUE DICEN NUESTRAS FAMILIAS</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Laura Camila, Bogotá", text: "La mejor leche que he probado en mucho tiempo. Mis hijos la aman en el chocolate y el café queda espectacular. Ya no compro de bolsa." },
            { name: "Carlos y familia, Cundinamarca", text: "Sabor de finca de verdad. Se nota la diferencia. La hiervo como me indicaron y dura perfecto toda la semana. Muy recomendada." },
            { name: "Mariana, Suba", text: "Me encanta apoyar productores locales. Esta leche tiene cremosidad real. El precio es justo por la calidad que entrega." }
          ].map((t, i) => (
            <div key={i} className="testimonial">
              <div className="flex gap-1 mb-4 text-[#4ade80]">
                {Array.from({length: 5}).map((_,idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="italic text-[#14532d]/80 mb-6">“{t.text}”</p>
              <div className="font-semibold text-sm">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold tracking-tighter text-center text-[#14532d] mb-8">Preguntas frecuentes</h3>
        
        <div className="space-y-3">
          {[
            { q: "¿Es leche cruda o pasteurizada?", a: "Es leche entera fresca recién ordeñada (cruda orgánica). Por eso es importante seguir el instructivo de hervirla al recibirla para garantizar su seguridad y duración." },
            { q: "¿Dónde hacen las entregas?", a: "Principalmente en Bogotá y Cundinamarca. Para otras zonas del país escríbenos por WhatsApp y vemos opciones." },
            { q: "¿Cuánto dura la leche?", a: "Siguiendo los 3 pasos de conservación (hervir, enfriar, refrigerar) dura hasta 7 días en buen estado." },
            { q: "¿Puedo pedir más de 5 cantinas?", a: "La producción es limitada. Por ahora el máximo por pedido es 5 cantinas para que todos puedan acceder." }
          ].map((faq, i) => (
            <details key={i} className="bg-white border border-[#14532d]/10 rounded-2xl p-6 group">
              <summary className="font-semibold text-lg flex justify-between items-center">
                {faq.q}
                <span className="text-[#4ade80] group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-3 text-[#14532d]/80 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-[#14532d] text-white py-16">
        <div className="max-w-xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold tracking-tighter mb-4">Tu familia merece leche de verdad.</h3>
          <p className="text-white/80 mb-8">No es leche de bolsa. Es leche orgánica de vaca.</p>
          <button 
            onClick={() => openWhatsApp()}
            className="btn-whatsapp mx-auto text-xl px-14 py-5"
          >
            Escribir por WhatsApp y asegurar mi cantina
          </button>
          <p className="mt-4 text-xs text-white/60">+57 300 569 5045 • Respuesta rápida</p>
        </div>
      </div>

      {/* Footer - Fixed */}
      <footer className="bg-[#0f172a] text-white/60 text-sm py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} Leche Orgánica Manchitas. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <span>Producción limitada • Hecho con ❤️ en Colombia</span>
          </div>
          <div>
            Esta es una web de muestra. Pedidos reales por WhatsApp.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <button 
        onClick={() => openWhatsApp()}
        className="md:hidden fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
}
