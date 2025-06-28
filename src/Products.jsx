import React from 'react';
import Amitrello from './assets/Amitrello.jpeg';
import Filazole from './assets/Filazole.jpeg';
import Filanac from './assets/Filanac.jpeg';
import Fraxon from './assets/Fraxon.jpeg';
import Fretoliv from './assets/Fretoliv.jpeg';
import Filamin from './assets/Filamin.jpeg';

const products = [
  {
    name: "Amitrello-M Tablets",
    image: Amitrello,
    description: "Amitriptyline HCl & Methylcobalamin Tablets – used for neuropathic pain."
  },
  {
    name: "Filazole-DSR Capsules",
    image: Filazole,
    description: "Rabeprazole & Domperidone – for acid reflux and digestive issues."
  },
  {
    name: "Filanac-CD3 Tablets",
    image: Filanac,
    description: "Multivitamin, minerals, and antioxidants – for nerve health and immunity."
  },
  {
    name: "Fraxon-SP Tablets",
    image: Fraxon,
    description: "Aceclofenac, Paracetamol & Serratiopeptidase – for pain and inflammation relief."
  },
  {
    name: "Fretoliv Syrup",
    image: Fretoliv,
    description: "Liver tonic with Silymarin, L-Ornithine – supports liver function."
  },
  {
    name: "Filamin Syrup",
    image: Filamin,
    description: "Lycopene, multivitamins & antioxidants – improves overall vitality."
  }
];

const ProductsPage = () => {
  return (
    <section className="px-6 py-12 bg- -50 mt-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Products</h2>
      
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain rounded-md mb-5   border-gray-200"
            />
            <h3 className="text-xl font-semibold text-blue-700">{product.name}</h3>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{product.description}</p>
          </div>
        ))}
      </div>

      {/* Company Aim Section */}
      <div className="mt-16 bg-white rounded-lg p-8 shadow text-center max-w-4xl mx-auto">
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Our Aim</h4>
        <p className="text-gray-600 text-base leading-relaxed">
          At Fila Fratello Pharmaceuticals, our mission is to redefine healthcare through ethical, science-backed formulations.
          We are committed to improving lives with innovative, accessible, and effective pharmaceutical solutions made in India.
        </p>
      </div>
    </section>
  );
};

export default ProductsPage;
