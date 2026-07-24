export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-[#080808]"
    >
      <div className="container-custom text-center">

        <h2 className="text-4xl md:text-5xl font-bold gold-text mb-10">
          Contact Us
        </h2>

        <p className="text-xl mb-4">
          FitnessPro Services
        </p>

        <p className="text-gray-400 mb-3">
          Serving Saudia Arabia
        </p>

        <p className="text-gray-400 mb-8">
          +966 53 946 5815
        </p>

        <a
          href="https://wa.me/966539465815"
          target="_blank"
          className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
        >
          Chat on WhatsApp
        </a>

      </div>
    </section>
  );
}