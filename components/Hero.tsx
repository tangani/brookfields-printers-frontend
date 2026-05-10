export default function Hero() {
    return (
        <section
            className="
        relative
        min-h-[500px]
        flex
        items-center
        justify-center
        px-6
        overflow-hidden
    "
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/butterfly-colourful.png')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-2xl">
                <p className="uppercase tracking-[0.3em] text-sm mb-6 text-gray-200">
                    Business Stationery
                </p>

                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    Brookfields Print Solutions
                </h1>

                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search products and services..."
                        className="
                    flex-1
                    px-5
                    py-4
                    bg-transparent
                    text-white
                    placeholder:text-gray-300
                    outline-none
                "
                    />

                    <button
                        className="
                    px-5
                    py-4
                    bg-white/20
                    hover:bg-white/30
                    transition
                "
                    >
                        🔍
                    </button>
                </div>
            </div>
        </section>
    );
}