const MapSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">
            Our Location
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Find Us at the <br /> <span className="text-blue-600">Heart of Innovation</span>
          </h2>
        </div>

        <div className="w-full h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114324.77975877684!2d80.25206972621151!3d26.434823292437657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c471186f91729%3A0xe7a502758f12a7bf!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1740669259253!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fila Fratello Pharmaceuticals Headquarters Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
