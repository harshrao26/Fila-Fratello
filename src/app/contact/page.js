import PharmaInquiryForm from "../../components/PharmaInquiryForm";

export const metadata = {
  title: "Contact Us - Fila Fratello Pharmaceutical",
  description:
    "Get in touch with Fila Fratello Pharmaceutical Pvt. Ltd. for business inquiries, distribution, and clinical support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-50 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-6">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Have a question about our formulations or looking for a distribution
            partnership? Our pharmaceutical experts are here to help.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <PharmaInquiryForm />

     
    </div>
  );
}
