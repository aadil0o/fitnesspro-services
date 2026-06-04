export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200",
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center gold-text mb-16">
          Equipment Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image) => (
            <img
              key={image}
              src={image}
              alt="Gym Equipment"
              className="rounded-xl h-72 w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}