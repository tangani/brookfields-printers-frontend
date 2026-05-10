export default function ContactPage() {
    return (
        <main className="bg-white px-6 py-16">
            <section className="mx-auto max-w-5xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                    Contact Us
                </p>

                <h1 className="mt-4 text-4xl font-bold text-gray-900">
                    Get in Touch
                </h1>

                <p className="mt-4 max-w-2xl text-gray-600">
                    Need a quote or have a printing request? Contact us and we will
                    assist you.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border p-6 shadow-sm">
                        <h2 className="font-bold text-gray-900">Location</h2>
                        <p className="mt-2 text-gray-600">Midrand, Johannesburg</p>
                    </div>

                    <div className="rounded-2xl border p-6 shadow-sm">
                        <h2 className="font-bold text-gray-900">Phone</h2>
                        <p className="mt-2 text-gray-600">+27 XXX XXX XXX</p>
                    </div>

                    <div className="rounded-2xl border p-6 shadow-sm">
                        <h2 className="font-bold text-gray-900">Email</h2>
                        <p className="mt-2 text-gray-600">info@brookfields.co.za</p>
                    </div>
                </div>
            </section>
        </main>
    );
}