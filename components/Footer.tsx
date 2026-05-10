export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid gap-8 md:grid-cols-3">

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-bold text-white">
                            Brookfields Printers
                        </h3>
                        <p className="mt-3 text-sm">
                            Professional printing services for businesses and individuals.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold text-white">
                            Services
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>Printing</li>
                            <li>Copying</li>
                            <li>Wedding Cards</li>
                            <li>Posters</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white">
                            Contact
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>Midrand, Johannesburg</li>
                            <li>+27 XXX XXX XXX</li>
                            <li>info@brookfields.co.za</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom strip */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs">
                    © {new Date().getFullYear()} Brookfields Printers. All rights reserved.
                </div>
            </div>
        </footer>
    );
}