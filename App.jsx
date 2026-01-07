import React from "react";

export default function SFArtesanato() {
  const categorias = {
    Roupas: [
      {
        nome: "Blusa de Crochê",
        preco: "Sob consulta",
        imagem: "https://via.placeholder.com/300x300?text=Blusa+de+Croch%C3%AA",
        tamanhos: ["P", "M", "G"],
      },
      {
        nome: "Vestido de Crochê",
        preco: "Sob consulta",
        imagem: "https://via.placeholder.com/300x300?text=Vestido+de+Croch%C3%AA",
        tamanhos: ["P", "M", "G"],
      },
    ],
    Tapetes: [
      {
        nome: "Tapete Artesanal",
        preco: "Sob consulta",
        imagem: "https://via.placeholder.com/300x300?text=Tapete+de+Croch%C3%AA",
        tamanhos: ["1m", "1,5m", "2m"],
      },
    ],
    Souplast: [
      {
        nome: "Souplast de Crochê",
        preco: "Sob consulta",
        imagem: "https://via.placeholder.com/300x300?text=Souplast",
        tamanhos: ["30cm", "35cm", "40cm"],
      },
    ],
    Bolsas: [
      {
        nome: "Bolsa de Crochê",
        preco: "Sob consulta",
        imagem: "https://via.placeholder.com/300x300?text=Bolsa+de+Croch%C3%AA",
        tamanhos: ["Pequena", "Média", "Grande"],
      },
    ],
    Outros: [
      {
        nome: "Peça Artesanal Personalizada",
        preco: "Sob encomenda",
        imagem: "https://via.placeholder.com/300x300?text=Artesanato",
        tamanhos: ["Personalizado"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-pink-500">SF Artesanato</h1>
        <nav className="space-x-6 text-sm">
          <a href="#inicio" className="hover:text-pink-400">Início</a>
          <a href="#produtos" className="hover:text-pink-400">Produtos</a>
          <a href="#sobre" className="hover:text-pink-400">Sobre</a>
          <a href="#contato" className="hover:text-pink-400">Contato</a>
        </nav>
      </header>

      <section id="inicio" className="p-14 text-center">
        <h2 className="text-4xl font-light text-pink-400 mb-4">
          Artesanato em Crochê feito à mão
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Peças únicas, delicadas e feitas com carinho. Roupas, tapetes e criações exclusivas em crochê.
        </p>
      </section>

      <section id="produtos" className="p-12 space-y-16">
        {Object.entries(categorias).map(([categoria, itens]) => (
          <div key={categoria}>
            <h3 className="text-2xl text-pink-400 mb-6">{categoria}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itens.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm p-6 text-center">
                  <img
                    src={p.imagem}
                    alt={p.nome}
                    className="w-full h-64 object-cover rounded-xl mb-4"
                  />
                  <h4 className="text-xl font-medium">{p.nome}</h4>
                  <p className="text-pink-500 font-semibold mb-3">{p.preco}</p>

                  <select className="border rounded p-2 w-full mb-3">
                    {p.tamanhos.map((t, idx) => (
                      <option key={idx}>{t}</option>
                    ))}
                  </select>

                  <a
                    href={`https://wa.me/5500000000000?text=Olá! Tenho interesse em ${p.nome}`}
                    className="block bg-pink-400 text-white px-6 py-2 rounded-xl hover:bg-pink-500"
                  >
                    Comprar pelo WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="sobre" className="p-12 bg-white text-center">
        <h2 className="text-3xl text-pink
