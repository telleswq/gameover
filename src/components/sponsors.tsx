import Image from "next/image";

const brands = [
  { name: "Steelseries", logo: "/logos/paim.png" },
  { name: "Nike", logo: "/logos/nike.png" },
  { name: "Intel", logo: "/logos/intel.png" },
  { name: "Steelseries", logo: "/logos/steelseries.png" },
  { name: "Nike", logo: "/logos/nike.png" },
  { name: "Intel", logo: "/logos/intel.png" },
  { name: "Steelseries", logo: "/logos/stun.png" },
];

export default function Sponsors() {
  return (
    <section className="w-full py-10">
      <div className="px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                width={60}
                height={40}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
