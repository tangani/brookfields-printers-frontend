 const services = [
        {
            title: "Large Format",
            icon: "🖨️",
        },
        {
            title: "T-Shirt DTF",
            icon: "👕",
        },
        {
            title: "Correx Boards",
            icon: "📋",
        },
        {
            title: "Flyer Printing",
            icon: "📄",
        },
        {
            title: "Laser Printing",
            icon: "🖨️",
        },
        {
            title: "More Services",
            icon: "➕",
        },
    ];

export default function Services() {
    return (
        <section className="py-16 px-6 bg-white">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                Our Services
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="
                    rounded-2xl
                    border border-gray-200
                    bg-white
                    min-h-[150px]
                    p-6
                    flex flex-col
                    items-center
                    justify-center
                    text-center
                    shadow-sm
                    hover:shadow-lg
                    hover:-translate-y-1
                    transition-all
                    duration-300
                "
                    >
                        <div className="text-4xl mb-4">
                            {service.icon}
                        </div>

                        <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
                            {service.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}