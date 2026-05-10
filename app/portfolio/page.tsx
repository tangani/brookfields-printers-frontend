const portfolioItems = [
    "Large Format Printing",
    "T-Shirt Branding",
    "Flyers",
    "Correx Boards",
    "Business Cards",
    "Posters",
];

export default function PortfolioPage() {
    return (
        <main className="bg-white px-6 py-16">
            <section className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                    Portfolio
                </p>

                <h1 className="mt-4 text-4xl font-bold text-gray-900">
                    Our Work
                </h1>

                <p className="mt-4 max-w-2xl text-gray-600">
                    A showcase of selected printing and branding work from
                    Brookfields Printers.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolioItems.map((item) => (
                        <div
                            key={item}
                            className="flex min-h-[180px] items-center justify-center rounded-2xl border bg-gray-50 p-6 text-center shadow-sm"
                        >
                            <h2 className="text-xl font-bold text-gray-900">
                                {item}
                            </h2>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}