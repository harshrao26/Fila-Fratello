const MapSection = () => {
    return (
      <section className="bg-gray-50 py-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            📍 Our Location
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our registered office at Barra World Bank, Kanpur, Uttar Pradesh.
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.954589117558!2d80.29196637562787!3d26.424941980881826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47ac21dfebcf%3A0x3dad7acc2890cc8d!2sH-1-892%2C%20H%20Block%2C%20Barra%20World%20Bank%2C%20Barra%2C%20Kanpur%2C%20Uttar%20Pradesh%20208027!5e0!3m2!1sen!2sin!4v1745558491159!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default MapSection;
  