const services = [
    {
        title: "Large Format Printing",
        description: "Posters, banners, signage, and large-scale print work.",
    },
    {
        title: "T-Shirt DTF",
        description: "Custom T-shirt branding and direct-to-film printing.",
    },
    {
        title: "Correx Boards",
        description: "Durable boards for events, promotions, and signage.",
    },
    {
        title: "Flyer Printing",
        description: "Professional flyers for marketing and promotions.",
    },
    {
        title: "Laser Printing",
        description: "Fast, clean, and sharp document printing.",
    },
    {
        title: "More Services",
        description: "Business cards, wedding cards, posters, and more.",
    },
];

export default function ServicesPage() {
    return (
        <main className="bg-white px-6 py-16">
            <section className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                    Services
                </p>

                <h1 className="mt-4 text-4xl font-bold text-gray-900">
                    Printing & Branding Services
                </h1>

                <p className="mt-4 max-w-2xl text-gray-600">
                    Explore our range of professional printing and branding
                    solutions.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <h2 className="text-xl font-bold text-gray-900">
                                {service.title}
                            </h2>

                            <p className="mt-3 text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}