"use client";

import React, { useState } from 'react';
import { Milk, Users, Award, Clock, Heart, ArrowRight, Phone, Star, Check } from 'lucide-react';
import HeroCarousel, { type HeroSlide } from '../components/HeroCarousel';
import { IMAGES } from '../lib/images';

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "familia",
    badge: "LECHE DE VERDAD • PARA TU FAMILIA",
    title: "Leche Entera\nManchitas",
    subtitle: "Dale a los que amas lo más natural.",
    description: "Leche entera 100% de vaca, sin rebajar ni mezclas. Con todo su sabor, grasa y cremosidad natural.",
    image: IMAGES.familiaPoster,
    imageAlt: "Familia colombiana con la cantina de leche entera Manchitas de 5 litros",
    imagePosition: "center 42%",
    ctaLabel: "Ver el producto",
    ctaAction: "product",
  },
  {
    id: "cantina-5l",
    badge: "CANTINA PLÁSTICA DE 5 LITROS • $35.000 COP",
    title: "Así la\nvendemos",
    subtitle: "Leche de verdad, no rebajada.",
    description: "Cantina blanca con tapa verde, lista para tu mesa. Sin rebajar, sin mezclas, sabor y cremosidad natural.",
    image: IMAGES.productoFlyer,
    imageAlt: "Flyer oficial de Leche Entera Manchitas con cantina de 5 litros y precio",
    imagePosition: "68% 38%",
    ctaLabel: "Hacer mi pedido",
    ctaAction: "whatsapp",
  },
  {
    id: "produccion-limitada",
    badge: "PRODUCCIÓN LIMITADA",
    title: "Fresca de finca,\npara quienes saben elegir",
    subtitle: "Directo del productor a tu hogar.",
    description: "Producción limitada para familias que valoran leche real. Pedidos por WhatsApp.",
    image: IMAGES.familiaInstructivo,
    imageAlt: "Familia disfrutando leche entera Manchitas en la finca",
    imagePosition: "28% center",
    ctaLabel: "Pedir por WhatsApp",
    ctaAction: "whatsapp",
  },
  {
    id: "conservacion",
    badge: "INSTRUCTIVO OFICIAL",
    title: "Conserva tu leche\ncomo debe ser",
    subtitle: "Hervir, enfriar y refrigerar.",
    description: "Leche recién ordeñada sin procesos industriales. Sigue el instructivo y dura hasta 7 días en refrigeración.",
    image: IMAGES.instructivoConservacion,
    imageAlt: "Instructivo oficial de conservación de Leche Entera Manchitas",
    imagePosition: "top center",
    ctaLabel: "Ver instructivo",
    ctaAction: "conservation",
  },
];

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
      message = `Hola Manchitas! 🐄 Quiero pedir ${quantity} cantina(s) de Leche Entera Manchitas de 5L.\n\nTotal: $${formatCOP(total)} COP\n\n¿Me confirmas disponibilidad y detalles de entrega en Bogotá o Cundinamarca?`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  const openCheeseInterest = (cheeseType: string) => {
    const message = `Hola Manchitas! 🧀 Estoy muy interesado en el ${cheeseType} en bloque cuando salga a la venta. ¿Me avisas cuando esté disponible?`;
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
              <span className="text-white text-2xl" aria-hidden="true">🐄</span>
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tighter text-[#14532d]">MANCHITAS</div>
              <div className="text-[10px] text-[#14532d]/60 -mt-1">LECHE ENTERA 100% DE VACA</div>
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

      <HeroCarousel slides={HERO_SLIDES} onWhatsApp={() => openWhatsApp()} />

      <div className="bg-[#166534] text-white py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-white/80 font-medium">
          <div className="flex items-center gap-2"><Check className="w-4 h-4" /> 5 litros por cantina</div>
          <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Solo $7.000 el litro</div>
          <div className="flex items-center gap-2"><Check className="w-4 h-4" /> 100% de vaca</div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-b border-[#14532d]/10 bg-white py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-[#14532d]/80 font-medium">
          <div className="flex items-center gap-2"><Award className="w-4 h-4" /> 100% Leche Entera de Vaca Real</div>
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
            
            <h2 className="text-5xl font-bold tracking-tighter text-[#14532d] mb-4">Leche Entera Manchitas</h2>
            <p className="text-xl text-[#14532d]/80 mb-6">Cantina plástica de 5 litros • Leche cruda fresca 100% de vaca</p>

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

          {/* Product Image — flyer oficial del producto real */}
          <div className="product-card overflow-hidden">
            <div className="relative bg-[#fefce8]">
              <img 
                src={IMAGES.productoFlyer} 
                alt="Cantina plástica de 5 litros Leche Entera Manchitas con tapa verde" 
                className="w-full h-auto object-cover aspect-[3/4] md:aspect-[4/5]"
                style={{ objectPosition: "72% 32%" }}
              />
              <div className="absolute top-4 right-4 bg-[#14532d] text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                5 litros
              </div>
            </div>
            <div className="p-8 text-center bg-white">
              <div className="font-bold text-2xl text-[#14532d]">Leche Entera Manchitas</div>
              <div className="text-[#14532d]/70">100% de vaca • Sin rebajar • No es leche de bolsa</div>
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
            <p className="text-sm text-white/70">Siguiendo estos pasos mantienes el sabor, textura y calidad natural de la leche de verdad.</p>
          </div>

          <div className="mt-10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white">
            <img
              src={IMAGES.instructivoConservacion}
              alt="Instructivo oficial de conservación de Leche Entera Manchitas"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Por qué elegir */}
      <section id="por-que" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <div className="rounded-3xl overflow-hidden border border-[#14532d]/10 shadow-xl">
            <img
              src={IMAGES.familiaInstructivo}
              alt="Familia colombiana con cantina de leche entera Manchitas"
              className="w-full h-auto object-cover aspect-[4/3]"
              style={{ objectPosition: "32% center" }}
            />
          </div>
          <div>
            <div className="text-[#14532d] text-sm font-bold tracking-widest">LA DIFERENCIA ESTÁ EN EL SABOR</div>
            <h3 className="text-4xl font-bold tracking-tighter text-[#14532d] mt-2 mb-4">Por qué las familias colombianas eligen Manchitas</h3>
            <p className="text-[#14532d]/80 text-lg leading-relaxed">
              No es leche de bolsa. Es leche entera de vaca, sin rebajar, sin mezclas y con la cremosidad natural que solo da una cantina fresca de finca.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Milk className="w-8 h-8" />, title: "Leche entera real", desc: "Olvídate de leche aguada. Aquí hay grasa natural y sabor de campo auténtico." },
            { icon: <Award className="w-8 h-8" />, title: "100% de vaca", desc: "Sin rebajar, sin mezclar, sin trucos. Solo leche entera como debe ser." },
            { icon: <Users className="w-8 h-8" />, title: "Para toda la familia", desc: "Perfecta para niños, café de la mañana, postres y recetas tradicionales." },
            { icon: <Heart className="w-8 h-8" />, title: "Apoyas lo local", desc: "Compras directo de productores colombianos. Producción limitada." }
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
              onClick={() => openWhatsApp("Hola Manchitas! 🧀 ¡Quiero que me avises cuando salga el queso en bloque orgánico a la venta!")}
              className="btn-primary text-sm px-6 py-3 self-start md:self-auto"
            >
              Avísame cuando salga
            </button>
          </div>

          <div className="relative rounded-3xl overflow-hidden mb-10 border border-[#14532d]/10">
            <img
              src={IMAGES.familiaPoster}
              alt="Familia con leche entera Manchitas — próximamente queso del mismo productor"
              className="w-full h-56 md:h-72 object-cover"
              style={{ objectPosition: "center 45%" }}
            />
            <div className="absolute inset-0 bg-[#14532d]/75 flex flex-col items-center justify-center text-center px-6">
              <span className="text-[#4ade80] text-sm font-bold tracking-widest mb-2">DEL MISMO PRODUCTOR</span>
              <p className="text-white text-xl md:text-2xl font-semibold max-w-lg">
                El queso en bloque llegará con la misma calidad natural que ya conoces en nuestra leche.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Queso Fresco", desc: "Suave, ideal para ensaladas y arepas", emoji: "🥗" },
              { name: "Queso Doble Crema", desc: "Cremoso y delicioso, perfecto para untar", emoji: "🍞" },
              { name: "Queso Campesino", desc: "Tradicional colombiano, gran sabor", emoji: "🫓" },
            ].map((cheese, i) => (
              <div key={i} className="border border-[#14532d]/10 rounded-3xl overflow-hidden hover:border-[#4ade80] transition-colors group bg-[#fefce8]">
                <div className="h-36 flex items-center justify-center bg-gradient-to-br from-[#14532d] to-[#166534] text-5xl">
                  <span aria-hidden="true">{cheese.emoji}</span>
                </div>
                <div className="p-8">
                  <div className="limited-badge bg-[#166534] mb-3">Próximamente</div>
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
          <p className="text-white/80 mb-8">No es leche de bolsa. Es leche entera de vaca.</p>
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
            © {new Date().getFullYear()} Leche Entera Manchitas. Todos los derechos reservados.
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
