import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Info, CheckCircle2, ArrowRight } from "lucide-react";
import connectToDatabase from "../../../lib/mongodb";
import Product from "../../../models/Product";
import { notFound } from "next/navigation";
import ProductGallery from "../../../components/ProductGallery";

async function getProduct(id) {
  await connectToDatabase();
  try {
    const product = await Product.findById(id);
    return product ? JSON.parse(JSON.stringify(product)) : null;
  } catch (err) {
    return null;
  }
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Modern Breadcrumbs */}
        <nav className="flex items-center gap-4 text-sm font-semibold text-slate-400 mb-8">
          <Link href="/products" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            <ChevronLeft size={16} />
            Back to Catalog
          </Link>
          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start -32">
          {/* Gallery - Left */}
          <div className="  top32">
            <ProductGallery
              images={product.images}
              primaryImage={product.image}
              name={product.name}
            />
          </div>

          {/* Info - Right */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="inline-flex px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-slate-500 font-normal leading-relaxed">
                {product.composition}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-800 leading-relaxed">
                {product.tagline}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-normal">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-semibold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                Inquiry for Order
                <ArrowRight size={18} />
              </Link>
              
              {product.packSize && (
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                    Packaging Size
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {product.packSize}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technical Details Grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 pt-24 border-t border-slate-100">
          {/* Key Applications */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                Usage & Therapy
              </h3>
            </div>
            <div className="grid gap-4">
              {product.keyApplications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl transition-colors hover:bg-slate-100/80">
                  <div className="mt-1">
                    <CheckCircle2 size={16} className="text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-normal leading-relaxed">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-10">
            <h3 className="text-xl font-semibold text-slate-900">
              Key Advantages
            </h3>
            <div className="space-y-12">
              {product.highlights.map((item, idx) => (
                <div key={idx} className="group flex gap-6">
                  <div className="text-3xl font-light text-slate-200 group-hover:text-blue-200 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed font-normal">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* References Section */}
        {product.references.length > 0 && (
          <div className="mt-32 p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
              References & Data Sources
            </h3>
            <ul className="space-y-6">
              {product.references.map((ref, idx) => (
                <li
                  key={idx}
                  className="text-xs text-slate-400 leading-relaxed italic flex gap-4"
                >
                  <span className="text-slate-300">[{idx + 1}]</span>
                  {ref}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
