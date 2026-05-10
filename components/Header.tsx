"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Close on Escape and lock body scroll while open
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setIsOpen(false);
        }

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", onKey);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-[9999] w-full border-b bg-white">
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-4 py-4 md:hidden">
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex h-12 w-12 items-center justify-center rounded-md text-3xl font-light text-gray-900"
                >
                    <div className="flex flex-col gap-1">
                        <span className="h-0.5 w-6 bg-black"></span>
                        <span className="h-0.5 w-6 bg-black"></span>
                        <span className="h-0.5 w-6 bg-black"></span>
                    </div>
                </button>

                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-sm font-bold text-white">
                        BP
                    </div>

                    <div className="leading-tight">
                        <p className="text-sm font-bold text-gray-900">Brookfields</p>
                        <p className="text-sm font-bold text-gray-900">Printers</p>
                    </div>
                </Link>

                <Link
                    href="/quote"
                    className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white"
                >
                    Quote
                </Link>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                // container above header z-index, handles backdrop click
                <div
                    className="fixed inset-0 z-[10000] md:hidden"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setIsOpen(false)}
                >
                    {/* dark backdrop */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* drawer: fixed left panel; stopPropagation prevents backdrop-close on inner clicks */}
                    <aside
                        id="mobile-menu"
                        className="fixed left-0 top-0 bottom-0 w-72 bg-white p-6 shadow-xl transform transition-transform duration-200 ease-in-out"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-8 flex items-center justify-between">
                            <span className="text-lg font-bold text-gray-900">Menu</span>

                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={() => setIsOpen(false)}
                                className="text-3xl text-gray-900"
                            >
                                ×
                            </button>
                        </div>

                        <nav className="flex flex-col gap-5 text-base font-semibold text-gray-800">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="border-b pb-3"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Link
                                href="/quote"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white"
                            >
                                Request a Quote
                            </Link>
                        </nav>
                    </aside>
                </div>
            )}

            {/* Desktop Header */}
            <div className="mx-auto hidden max-w-7xl items-center justify-between px-8 py-5 md:flex">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black font-bold text-white">
                        BP
                    </div>

                    <div>
                        <p className="text-lg font-bold leading-none text-gray-900">
                            Brookfields Printers
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                            Professional Print Solutions
                        </p>
                    </div>
                </Link>

                <nav className="flex items-center gap-8 text-sm font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-black">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/quote"
                    className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
                >
                    Request a Quote
                </Link>
            </div>
        </header>
    );
}