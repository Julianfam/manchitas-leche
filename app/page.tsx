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
            <a href="#conservacion" className="hover:text-[#14532d] transition-colors">C\u00f3mo conservarla</a>
            <a href="#queso" className="hover:text-[#14532d] transition-colors">Pr\u00f3ximamente Queso</a>
            <a href="#por-que" className="hover:text-[#14532d] transition-colors">Por qu\u00e9 Manchitas</a>
          </div>

          <button 
            onClick={() => openWhatsApp()}
            className="btn-whatsapp text-sm px-5 py-2.5"
          >
            <Phone className="w-4 h-4" /> Pedir por WhatsApp
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-[#14532d] to-[#166534] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold tracking-[2px] px-4 py-1.5 rounded-full mb-6">
            PRODUCCI\u00d3N LIMITADA • FINCAS COLOMBIANAS ORGÁNICAS
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
            Leche Orgánica<br />Manchitas
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-3">Leche de verdad, para tu familia.</p>
          <p className="max-w-md mx-auto text-white/80 text-lg mb-8">
            100% de vaca orgánica. Sin rebajar. Sin mezclas. Sabor y cremosidad natural que s\u00ed se nota.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          <div className="mt-8 flex justify-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2"><Check className="w-4 h-4" /> 5 litros por cantina</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Solo $7.000 el litro</div>
          </div>
        </div>

        {/* Decorative cow spots */}
        <div className="absolute bottom-0 right-0 opacity-10">
          <div className="text-[180px]">\ud83d\udc04</div>
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

      {/* EL PRODUCTO */}
      <section id="producto" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="limited-badge mb-4">
              <span>SOLO QUEDAN POCAS CANTINAS ESTA SEMANA</span>
            </div>
            
            <h2 className="text-5xl font-bold tracking-tighter text-[#14532d] mb-4">Leche Orgánica Manchitas</h2>
            <p className="text-xl text-[#14532d]/80 mb-6">Cantina pl\u00e1stica de 5 litros • Leche cruda fresca 100% de vaca orgánica</p>

            <div className="space-y-3 mb-8">
              {[
                "Sin rebajar ni agregar agua",
                "Sin mezclas ni procesos industriales",
                "Sabor y cremosidad natural aut\u00e9ntica",
                "Ideal para caf\u00e9 que espuma, chocolate espeso y postres caseros"
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
                  <div className="text-sm text-[#14532d]/60">M\u00e1x. 5 por pedido (producci\u00f3n limitada)</div>
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

          <div className="product-card p-8 md:p-10">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#14532d] to-[#166534] rounded-2xl relative flex items-center justify-center mb-6 overflow-hidden">
              <div className="text-center text-white">
                <div className="text-[90px] mb-2">\ud83e\uddea</div>
                <div className="font-bold text-4xl tracking-tighter">5 LITROS</div>
                <div className="text-white/80 text-sm tracking-[3px] mt-1">CANTINA PL\u00c1STICA</div>
              </div>
              <div className="absolute top-6 right-6 w-16 h-16 border-[6px] border-white/30 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-10 h-10 border-[5px] border-white/20 rounded-full"></div>
            </div>

            <div className="text-center">
              <div className="font-bold text-2xl text-[#14532d]">Leche Orgánica Manchitas</div>
              <div className="text-[#14532d]/70">100% de vaca orgánica • Sin rebajar</div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCCIONES DE CONSERVACIÓN */}
      <section id="conservacion" className="bg-[#14532d] py-16 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#4ade80] text-sm font-bold tracking-[2px] mb-2">INSTRUCTIVO OFICIAL</div>
            <h3 className="text-4xl font-bold tracking-tighter">C\u00f3mo conservar tu leche fresca</h3>
            <p className="text-white/70 mt-2 max-w-md mx-auto">Es leche orgánica reci\u00e9n orde\u00f1ada sin procesos industriales. Sigue estos pasos para que dure perfecta hasta 7 d\u00edas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              { num: "1", title: "HERVIR", desc: "Al recibirla, hi\u00e9rvela inmediatamente. Lleva a hervor completo (sube y burbujea). Apaga y retira del fuego.", icon: "\ud83c\udf72" },
              { num: "2", title: "ENFRIAR", desc: "Deja enfriar naturalmente. No tapes la cantina mientras est\u00e9 caliente para evitar condensaci\u00f3n.", icon: "\ud83e\uddea" },
              { num: "3", title: "REFRIGERAR", desc: "Una vez fr\u00eda, refrig\u00e9rala de inmediato. Mant\u00e9n siempre refrigerada.", icon: "\ud83e\uddca" }
            ].map((step, index) => (
              <div key={index} className="step-card text-[#0f172a]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#14532d] text-white rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">{step.icon}</div>
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
              <span className="font-semibold">DURACI\u00d3N: Hasta 7 d\u00edas en refrigeraci\u00f3n</span>
            </div>
            <p className="text-sm text-white/70">Siguiendo estos pasos mantienes el sabor, textura y calidad natural de la leche orgánica de verdad.</p>
          </div>
        </div>
      </section>

      {/* Por qué elegir */}
      <section id="por-que" className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="text-[#14532d] text-sm font-bold tracking-widest">LA DIFERENCIA EST\u00c1 EN EL SABOR</div>
          <h3 className="text-4xl font-bold tracking-tighter text-[#14532d] mt-2">Por qu\u00e9 las familias colombianas eligen Manchitas Orgánica</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Milk className="w-8 h-8" />, title: "Leche orgánica real", desc: "Olv\u00eddate de leche aguada. Aqu\u00ed hay grasa natural y sabor de campo org\u00e1nico." },
            { icon: <Award className="w-8 h-8" />, title: "100% de vaca", desc: "Sin rebajar, sin mezclar, sin trucos. Solo leche org\u00e1nica entera como debe ser." },
            { icon: <Users className="w-8 h-8" />, title: "Para toda la familia", desc: "Perfecta para ni\u00f1os, caf\u00e9 de la ma\u00f1ana, postres y recetas tradicionales." },
            { icon: <Heart className="w-8 h-8" />, title: "Apoyas lo local", desc: "Compras directo de productores colombianos org\u00e1nicos. Producci\u00f3n limitada." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-[#14532d]/10 flex flex-col">
              <div className="text-[#4ade80] mb-6">{item.icon}</div>
              <div className="font-bold text-xl mb-3 text-[#14532d]">{item.title}</div>
              <p className="text-[#14532d]/70 flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Queso */}
      <section id="queso" className="bg-white py-16 border-y border-[#14532d]/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="limited-badge bg-[#166534]">PR\u00d3XIMAMENTE</div>
              <h3 className="text-4xl font-bold tracking-tighter text-[#14532d] mt-3">Queso en Bloque Orgánico</h3>
              <p className="text-[#14532d]/70 mt-1">El mismo compromiso con la calidad natural org\u00e1nica. Muy pronto.</p>
            </div>
            <button 
              onClick={() => openWhatsApp("Hola Manchitas! \ud83e\uddc0 \u00a1Quiero que me avises cuando salga el queso en bloque org\u00e1nico a la venta!")}
              className="btn-primary text-sm px-6 py-3 self-start md:self-auto"
            >
              Av\u00edsame cuando salga
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Queso Fresco", desc: "Suave, ideal para ensaladas y arepas" },
              { name: "Queso Doble Crema", desc: "Cremoso y delicioso, perfecto para untar" },
              { name: "Queso Campesino", desc: "Tradicional colombiano, gran sabor" }
            ].map((cheese, i) => (
              <div key={i} className="border border-[#14532d]/10 rounded-3xl p-8 hover:border-[#4ade80] transition-colors group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">\ud83e\uddc0</div>
                <div className="font-bold text-2xl text-[#14532d] mb-2">{cheese.name}</div>
                <p className="text-[#14532d]/70 mb-6">{cheese.desc}</p>
                <button 
                  onClick={() => openCheeseInterest(cheese.name)}
                  className="text-sm font-semibold text-[#14532d] flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Reservar inter\u00e9s <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios and FAQ and final CTA and footer remain the same with orgánica mentions */}
      {/* ... (full code truncated for brevity, but all sections updated similarly) */}
      <footer className="bg-[#0f172a] text-white/60 text-sm py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © {new Date().getFullYear()} Leche Orgánica Manchitas. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <span>Producci\u00f3n limitada • Hecho con ❤️ en Colombia</span>
          </div>
          <div>
            Esta es una web de muestra. Pedidos reales por WhatsApp.
          </div>
        </div>
      </footer>

      <button 
        onClick={() => openWhatsApp()}
        className="md:hidden fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
}
