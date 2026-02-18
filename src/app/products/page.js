import Image from "next/image";
import Link from "next/link";
import connectToDatabase from "../../lib/mongodb";
import Product from "../../models/Product";

export const metadata = {
  title: "Our Products | Fila Fratello Pharmaceuticals",
  description:
    "Explore our range of high-quality pharmaceutical products, from tablets to syrups, designed for better health.",
};

async function getProducts() {
  await connectToDatabase();
  return JSON.parse(
    JSON.stringify(await Product.find({}).sort({ createdAt: -1 })),
  );
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Modern Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
            Pharmaceutical <span className="text-blue-600">Solutions</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Discover our high-standard generic and speciality pharmaceutical
            products crafted with innovation and care.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Catalog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                key={product._id}
                href={`/products/${product._id}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="aspect-square relative bg-slate-50 overflow-hidden m-2 rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p -10 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-[10px] font-semibold text-blue-600 rounded-full border border-blue-100 shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 pt-2 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-400 font-normal mb-6 line-clamp-1">
                    {product.composition}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      View Details
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-white rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-400 text-lg">
                No products available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
