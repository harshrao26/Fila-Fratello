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

    try {
      const res = await axios.post("/api/upload", data);
      if (res.data.success) {
        if (type === "primary") {
          setFormData({ ...formData, image: res.data.url });
        } else {
          const newImages = [...formData.images];
          newImages.push(res.data.url);
          setFormData({ ...formData, images: newImages });
        }
      }
    } catch (err) {
      console.error(err);
      alert("Image upload failed: " + (err.response?.data?.error || err.message));
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

  const addDynamicField = (field, defaultValue) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], defaultValue],
    });
  };

  const removeDynamicField = (field, index) => {
    const newList = [...formData[field]];
    newList.splice(index, 1);
    setFormData({
      ...formData,
      [field]: newList,
    });
  };

  const updateDynamicField = (field, index, value, key = null) => {
    const newList = [...formData[field]];
    if (key) {
      newList[index] = { ...newList[index], [key]: value };
    } else {
      newList[index] = value;
    }
    setFormData({
      ...formData,
      [field]: newList,
    });
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
              <span className="text-xs font-semib6ld  ">Control Panel</span>
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
              className="p-3 text-slate-800 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Stats & Search */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="md:col-span-3 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-800" size={18} />
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
              <span className=" font-semibold text-slate-600  ">Total Items</span>
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
                  <th className="px-8 py-6  font-semibold text-slate-600  ">Product</th>
                  <th className="px-8 py-6  font-semibold text-slate-600  ">Category</th>
                  <th className="px-8 py-6  font-semibold text-slate-600  ">Composition</th>
                  <th className="px-8 py-6  font-semibold text-slate-600   text-right">Actions</th>
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
                        <span className="px-3 py-1 bg-blue-50 text-blue-600  font-semibold rounded-full border border-blue-100">
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
                            className="p-2 text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                            title="Edit"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(p._id)}
                            className="p-2 text-slate-800 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
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
                    <td colSpan="4" className="px-8 py-20 text-center text-slate-800 font-normal">
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[95vh] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                  {editingProduct ? "Edit Product Details" : "Create New Product"}
                </h2>
                <p className="text-xs text-slate-800 mt-1">Fill in the information below to update your catalogue</p>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 text-slate-800 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8">
              <form id="productForm" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Basic Info Group */}
                <div className="space-y-6 md:col-span-2">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-px bg-slate-100 flex-grow"></div>
                    <span className=" font-bold text-slate-800 ">Basic Information</span>
                    <div className="h-px bg-slate-100 flex-grow"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className=" font-bold text-slate-600   ml-1">Product Name</label>
                  <input
                    placeholder="e.g. Filamin-D3"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all text-slate-900"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className=" font-bold text-slate-600   ml-1">Category</label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all font-medium text-slate-900 appearance-none pointer-events-auto"
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
                  <label className=" font-bold text-slate-600   ml-1">Composition</label>
                  <input
                    placeholder="e.g. Paracetamol 500mg"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all text-slate-900"
                    value={formData.composition}
                    onChange={(e) => setFormData({ ...formData, composition: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className=" font-bold text-slate-600   ml-1">Pack Size</label>
                  <input
                    placeholder="e.g. 10 x 10 Tablets"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all text-slate-900"
                    value={formData.packSize}
                    onChange={(e) => setFormData({ ...formData, packSize: e.target.value })}
                  />
                </div>

                {/* Marketing Content Group */}
                <div className="space-y-6 md:col-span-2 pt-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-px bg-slate-100 flex-grow"></div>
                    <span className=" font-bold text-slate-800 ">Marketing Content</span>
                    <div className="h-px bg-slate-100 flex-grow"></div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className=" font-bold text-slate-600   ml-1">Product Tagline</label>
                  <input
                    placeholder="Short catching phrase for the product"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all italic text-slate-900"
                    value={formData.tagline}
                    onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className=" font-bold text-slate-600   ml-1">Full Description</label>
                  <textarea
                    placeholder="Detailed information about the product benefits and usage..."
                    rows="4"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:py-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all resize-none text-slate-900"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {/* Media Section */}
                <div className="md:col-span-2 space-y-6 pt-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-px bg-slate-100 flex-grow"></div>
                    <span className=" font-bold text-slate-800 ">Images & Assets</span>
                    <div className="h-px bg-slate-100 flex-grow"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {/* Primary Image Upload */}
                    <div className="relative group aspect-square rounded-2xl md:rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer overflow-hidden bg-slate-50/50">
                      {formData.image ? (
                        <>
                          <Image src={formData.image} alt="Primary" fill className="object-contain p-4 transition-transform group-hover:scale-105" />
                          <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                            <span className=" font-bold text-wh6te   bg-slate-900/40 px-3 py-1.5 rounded-full">Change</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-800 group-hover:text-blue-500 transition-colors">
                            <ImageIcon size={24} />
                          </div>
                          <span className=" font-bold text-slate-600   text-center group-hover:text-blue-500 transition-colors">Primary image</span>
                        </div>
                      )}
                      {uploading && (
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-10">
                          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                          <span className=" font-bold text-blue-600  ">Uploading...</span>
                        </div>
                      )}
                      <input 
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30" 
                        onChange={(e) => handleImageUpload(e, "primary")}
                        disabled={uploading}
                      />
                    </div>

                    {/* Gallery Images */}
                    {formData.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-2xl md:rounded-3xl border border-slate-100 overflow-hidden shadow-sm group bg-white">
                        <Image src={img} alt="Gallery" fill className="object-contain p-4 transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                          <button
                            type="button"
                            onClick={() => {
                              const newImgs = [...formData.images];
                              newImgs.splice(idx, 1);
                              setFormData({ ...formData, images: newImgs });
                            }}
                            className="p-2 bg-red-500 text-white rounded-xl shadow-lg hover:scale-110 active:scale-95 transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="relative aspect-square rounded-2xl md:rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-4 hover:border-blue-300 hover:bg-slate-50 transition-all cursor-pointer group">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-300 group-hover:text-blue-500 transition-all group-hover:scale-110">
                        <Plus size={20} />
                      </div>
                      <span className=" font-bold text-slate-600   text-center mt-3 group-hover:text-blue-500 transition-colors">Add gallery</span>
                      {uploading && (
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-2 z-10">
                          <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                      <input 
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30" 
                        onChange={(e) => handleImageUpload(e, "gallery")}
                        disabled={uploading}
                      />
                    </div>
                  </div>
                </div>

                {/* Highlights Section */}
                <div className="md:col-span-2 space-y-6 pt-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-px bg-slate-100 flex-grow"></div>
                    <span className=" font-bold text-slate-800 ">Product Highlights</span>
                    <div className="h-px bg-slate-100 flex-grow"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {formData.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="flex-grow space-y-4">
                          <input
                            placeholder="Highlight Title (e.g. Pain relief)"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                            value={highlight.title}
                            onChange={(e) => updateDynamicField("highlights", idx, e.target.value, "title")}
                          />
                          <textarea
                            placeholder="Description..."
                            rows="2"
                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                            value={highlight.content}
                            onChange={(e) => updateDynamicField("highlights", idx, e.target.value, "content")}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeDynamicField("highlights", idx)}
                          className="p-2 text-slate-800 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addDynamicField("highlights", { title: "", content: "" })}
                      className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl  font-bold text-slate-600   hover:border-blue-400 hover:text-blue-500 transition-all flex items-center justify-center gap-2"
                    >
                      <Plus size={14} /> Add Highlight
                    </button>
                  </div>
                </div>

                {/* Key Applications Section */}
                <div className="md:col-span-2 space-y-6 pt-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-px bg-slate-100 flex-grow"></div>
                    <span className=" font-bold text-slate-800 ">Key Applications</span>
                    <div className="h-px bg-slate-100 flex-grow"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {formData.keyApplications.map((app, idx) => (
                      <div key={idx} className="flex gap-4 items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                        <input
                          placeholder="e.g. Osteoarthritis"
                          className="flex-grow bg-transparent border-none outline-none text-sm py-2"
                          value={app}
                          onChange={(e) => updateDynamicField("keyApplications", idx, e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => removeDynamicField("keyApplications", idx)}
                          className="p-1 text-slate-800 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addDynamicField("keyApplications", "")}
                      className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl  font-bold text-slate-600   hover:border-blue-400 hover:text-blue-500 transition-all flex items-center justify-center gap-2"
                    >
                      <Plus size={14} /> Add Application
                    </button>
                  </div>
                </div>

                {/* References Section */}
                <div className="md:col-span-2 space-y-6 pt-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-px bg-slate-100 flex-grow"></div>
                    <span className=" font-bold text-slate-800 ">References</span>
                    <div className="h-px bg-slate-100 flex-grow"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {formData.references.map((ref, idx) => (
                      <div key={idx} className="flex gap-4 items-center bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                        <input
                          placeholder="Scientific paper or source link"
                          className="flex-grow bg-transparent border-none outline-none text-sm py-2"
                          value={ref}
                          onChange={(e) => updateDynamicField("references", idx, e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => removeDynamicField("references", idx)}
                          className="p-1 text-slate-800 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addDynamicField("references", "")}
                      className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl  font-bold text-slate-600   hover:border-blue-400 hover:text-blue-500 transition-all flex items-center justify-center gap-2"
                    >
                      <Plus size={14} /> Add Reference
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-end gap-3 md:gap-4 sticky bottom-0 z-10">
              <button
                type="button"
                onClick={closeModal}
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors bg-white sm:bg-transparent rounded-2xl border border-slate-200 sm:border-n6ne  "
                disabled={uploading}
              >
                Discard
              </button>
              <button
                form="productForm"
                type="submit"
                disabled={uploading}
                className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-50 flex items-center justify-center ga6-2   border border-slate-900"
              >
                {uploading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>{editingProduct ? "Save Changes" : "Confirm & Publish"}</span>
                    <CheckCircle2 size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
