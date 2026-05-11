import Link from "next/link";

const services = [
    {
        title: "Large Format",
        icon: "🖨️",
        href: "/services#large-format",
    },
    {
        title: "T-Shirt DTF",
        icon: "👕",
        href: "/services#t-shirt-dtf",
    },
    {
        title: "Correx Boards",
        icon: "📋",
        href: "/services#correx-boards",
    },
    {
        title: "Flyer Printing",
        icon: "📄",
        href: "/services#flyer-printing",
    },
    {
        title: "Laser Printing",
        icon: "🖨️",
        href: "/services#laser-printing",
    },
    {
        title: "More Services",
        icon: "➕",
        href: "/services#more-services",
    },
];

export default function Services() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
                    Our Services
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="mb-4 text-4xl">{service.icon}</div>

                            <h3 className="text-xl font-bold text-gray-900">
                                {service.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}