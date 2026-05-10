export default function QuotePage() {
    return (
        <main className="bg-white px-6 py-16">
            <section className="mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
                    Quote Request
                </p>

                <h1 className="mt-4 text-4xl font-bold text-gray-900">
                    Request a Quote
                </h1>

                <p className="mt-4 text-gray-600">
                    Tell us what you need printed or branded, and we will get back
                    to you.
                </p>

                <form className="mt-10 space-y-5">
                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-600"
                    />

                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-600"
                    />

                    <input
                        type="text"
                        placeholder="Phone number"
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-600"
                    />

                    <select className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-600">
                        <option>Select a service</option>
                        <option>Large Format Printing</option>
                        <option>T-Shirt DTF</option>
                        <option>Correx Boards</option>
                        <option>Flyer Printing</option>
                        <option>Laser Printing</option>
                        <option>Other</option>
                    </select>

                    <textarea
                        placeholder="Tell us more about your request..."
                        rows={6}
                        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-red-600"
                    />

                    <button
                        type="submit"
                        className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
                    >
                        Submit Request
                    </button>
                </form>
            </section>
        </main>
    );
}