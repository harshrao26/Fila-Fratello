import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product."],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    tagline: {
      type: String,
      required: [
        true,
        "Please provide a tagline (e.g., A New Era in Pain Management)",
      ],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    category: {
      type: String,
      required: [true, "Please specify a category"],
    },
    image: {
      /* URL to the primary product image */
      type: String,
      required: [true, "Please provide an image URL"],
    },
    images: [
      {
        type: String,
      },
    ],
    composition: {
      type: String, // e.g. "Palmitoylethanolamide 150mg + Acetyl L-Carnitine 300mg + Vita E 100 IU"
    },
    packSize: {
      type: String, // e.g. "10x10 Tablets"
    },
    highlights: [
      {
        title: String,
        content: String,
      },
    ],
    keyApplications: [
      {
        type: String,
      },
    ],
    references: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
