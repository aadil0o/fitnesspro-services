export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2000')",
        }}
      />

      <div className="relative z-10">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gold-text text-center">
            About Us
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg leading-8">
              FitnessPro Services is a trusted provider of
              professional gym equipment maintenance,
              repair, installation, and technical support
              services across Saudi Arabia and Dubai.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-8">
              We serve commercial gyms, hotels, corporate
              fitness centers, residential compounds,
              and home gym owners with reliable and
              cost-effective solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}