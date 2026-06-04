const equipment = [
  "Treadmills",
  "Spin Bikes",
  "Exercise Bikes",
  "Ellipticals",
  "Cross Trainers",
  "Smith Machines",
  "Cable Machines",
  "Multi Gyms",
  "Rowing Machines",
];

export default function Equipment() {
  return (
    <section
      id="equipment"
      className="section-padding bg-[#080808]"
    >
      <div className="container-custom">

        <h2 className="text-4xl md:text-5xl font-bold text-center gold-text mb-16">
          Equipment We Service
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {equipment.map((item) => (
            <div
              key={item}
              className="bg-[#111111] p-6 rounded-xl border border-yellow-600/20 text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}