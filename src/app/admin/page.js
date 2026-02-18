"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  LogOut, 
  Package, 
  Image as ImageIcon, 
  CheckCircle2, 
  X,
  Search,
  LayoutDashboard
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    composition: "",
    packSize: "",
    tagline: "",
    description: "",
    image: "",
    images: [],
    keyApplications: [""],
    highlights: [{ title: "", content: "" }],
    references: [""],
  });

  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      if (res.data.success) {
        setProducts(res.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await axios.post("/api/auth/logout");
    router.push("/login");
  };

  const handleImageUpload = async (e, type, index = null) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "pharma");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dwxh8v0qc/image/upload",
        data
      );
      if (type === "primary") {
        setFormData({ ...formData, image: res.data.secure_url });
      } else {
        const newImages = [...formData.images];
        newImages.push(res.data.secure_url);
        setFormData({ ...formData, images: newImages });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(`/api/products/${editingProduct._id}`, formData);
      } else {
        await axios.post("/api/products", formData);
      }
      fetchProducts();
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Delete this product?")) {
      await axios.delete(`/api/products/${id}`);
      fetchProducts();
    }
  };

  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        ...product,
        keyApplications: Array.isArray(product.keyApplications) ? product.keyApplications : [""],
        highlights: Array.isArray(product.highlights) ? product.highlights : [{ title: "", content: "" }],
        references: Array.isArray(product.references) ? product.references : [""],
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: "",
        category: "",
        composition: "",
        packSize: "",
        tagline: "",
        description: "",
        image: "",
        images: [],
        keyApplications: [""],
        highlights: [{ title: "", content: "" }],
        references: [""],
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-blue-600 mb-2">
              <LayoutDashboard size={20} />
              <span className="text-xs font-semibold uppercase tracking-widest">Control Panel</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => openModal()}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              <Plus size={18} />
              Add Product
            </button>
            <button
              onClick={handleLogout}
              className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Stats & Search */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="md:col-span-3 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products by name or category..."
              className="w-full bg-white border border-slate-200 rounded-[2rem] pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="bg-white border border-slate-200 rounded-[2rem] p-6 flex items-center justify-between shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Total Items</span>
              <p className="text-2xl font-semibold text-slate-900">{products.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Package size={24} />
            </div>
          </div>
        </div>

        {/* Product Table */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-6 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Product</th>
                  <th className="px-8 py-6 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Category</th>
                  <th className="px-8 py-6 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Composition</th>
                  <th className="px-8 py-6 text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {loading ? (
                  Array(5).fill(0).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="4" className="px-8 py-6 h-20 bg-slate-50/20"></td>
                    </tr>
                  ))
                ) : filteredProducts.length > 0 ? (
                  filteredProducts.map((p) => (
                    <tr key={p._id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 relative border border-slate-100">
                            <Image src={p.image} alt={p.name} fill className="object-contain p-2" />
                          </div>
                          <span className="font-semibold text-slate-900">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-full border border-blue-100">
                          {p.category}
                        </span>
                      </td>
                      <td className="px-8 py-6 font-normal text-slate-500 text-sm max-w-xs truncate">
                        {p.composition}
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => openModal(p)}
                            className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                            title="Edit"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(p._id)}
                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-8 py-20 text-center text-slate-400 font-normal">
                      No products found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal - Modern Slim Version */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-8 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-900">
                {editingProduct ? "Edit Product" : "Create New Product"}
              </h2>
              <button 
                onClick={closeModal}
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-grow overflow-y-auto p-8">
              <form id="productForm" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Basic Info Group */}
                <div className="space-y-6 md:col-span-2">
                  <div className="h-px bg-slate-100 w-full mb-8 relative">
                    <span className="absolute -top-3 left-4 bg-white px-4 text-xs font-semibold text-slate-400 uppercase tracking-widest text-center">Basic Information</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Product Name</label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Category</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-semibold"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Syrups">Syrups</option>
                    <option value="Tablets">Tablets</option>
                    <option value="Capsules">Capsules</option>
                    <option value="Injections">Injections</option>
                    <option value="Suspensions">Suspensions</option>
                    <option value="Speciality">Speciality</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Composition</label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    value={formData.composition}
                    onChange={(e) => setFormData({ ...formData, composition: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Pack Size</label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    value={formData.packSize}
                    onChange={(e) => setFormData({ ...formData, packSize: e.target.value })}
                  />
                </div>

                {/* Marketing Content Group */}
                <div className="space-y-6 md:col-span-2 pt-8">
                  <div className="h-px bg-slate-100 w-full mb-8 relative">
                    <span className="absolute -top-3 left-4 bg-white px-4 text-xs font-semibold text-slate-400 uppercase tracking-widest text-center">Marketing Content</span>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Product Tagline</label>
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all italic"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest ml-1">Full Description</label>
                  <textarea
                    rows="3"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {/* Media Section */}
                <div className="md:col-span-2 space-y-6 pt-8">
                  <div className="h-px bg-slate-100 w-full mb-8 relative">
                    <span className="absolute -top-3 left-4 bg-white px-4 text-xs font-semibold text-slate-400 uppercase tracking-widest text-center">Images & Assets</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Primary Image Upload */}
                    <div className="relative group aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer overflow-hidden">
                      {formData.image ? (
                        <>
                          <Image src={formData.image} alt="Primary" fill className="object-contain p-2" />
                          <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-semibold text-white uppercase tracking-widest">Change Image</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <ImageIcon className="text-slate-300" size={32} />
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-center">Primary Image</span>
                        </div>
                      )}
                      <input 
                        type="file" 
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                        onChange={(e) => handleImageUpload(e, "primary")}
                      />
                    </div>

                    {/* Gallery Images */}
                    {formData.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                        <Image src={img} alt="Gallery" fill className="object-contain p-2" />
                        <button
                          type="button"
                          onClick={() => {
                            const newImgs = [...formData.images];
                            newImgs.splice(idx, 1);
                            setFormData({ ...formData, images: newImgs });
                          }}
                          className="absolute top-1 right-1 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 hover:scale-110 transition-all"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}

                    <div className="relative aspect-square rounded-2xl border-2 border-dashed border-slate-100 flex flex-col items-center justify-center p-4 hover:border-blue-200 hover:bg-slate-50 transition-all cursor-pointer">
                      <Plus className="text-slate-300" size={24} />
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest text-center mt-2 group-hover:text-blue-500">Gallery</span>
                      <input 
                        type="file" 
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                        onChange={(e) => handleImageUpload(e, "gallery")}
                      />
                    </div>
                  </div>
                </div>

                {/* Dynamic Fields Section can be added here similarly */}

              </form>
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-end gap-4">
              <button
                type="button"
                onClick={closeModal}
                className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                disabled={uploading}
              >
                Cancel
              </button>
              <button
                form="productForm"
                type="submit"
                disabled={uploading}
                className="w-full sm:w-auto bg-slate-900 text-white px-10 py-3 rounded-2xl font-semibold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {uploading ? "Wait for images..." : editingProduct ? "Save Changes" : "Publish Product"}
                {!uploading && <CheckCircle2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
