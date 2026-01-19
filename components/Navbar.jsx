"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NAV_LINKS } from "@/constants/data";
import { Menu, X, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious() ?? 0;
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
		setScrolled(latest > 50);
	});

	return (
		<motion.nav
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className={cn(
				"fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
				scrolled ? "backdrop-blur-md shadow-sm" : "bg-transparent",
			)}
		>
			{/* Logo */}
			<Link href="/" className="flex items-center gap-2">
				<Image
					src="/images/logo.png"
					width={40}
					height={40}
					className="h-10 w-10 object-cover"
					priority
				/>

				<span
					className={cn(
						"text-2xl font-bold",
						scrolled ? "text-green-900" : "text-white",
					)}
				>
					Beejx
				</span>
			</Link>

			{/* Desktop Links */}
			<div
				className={cn(
					"hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm",
					scrolled ? "bg-green-100" : "bg-white/90",
				)}
			>
				{NAV_LINKS.map((link) => (
					<Link
						key={link.label}
						href={link.href}
						className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
					>
						{link.label}
					</Link>
				))}
			</div>

			{/* CTA Button */}
			<div className="hidden md:block">
				<button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-green-600/20">
					CONTACT US
				</button>
			</div>

			{/* Mobile Toggle */}
			<button
				className="md:hidden text-gray-800 p-2"
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
			>
				{mobileMenuOpen ? (
					<X />
				) : (
					<Menu className={scrolled ? "text-gray-800" : "text-white"} />
				)}
			</button>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							className="text-lg font-medium text-gray-800"
							onClick={() => setMobileMenuOpen(false)}
						>
							{link.label}
						</Link>
					))}
					<button className="bg-green-600 text-white w-full py-3 rounded-xl font-medium">
						CONTACT US
					</button>
				</div>
			)}
		</motion.nav>
	);
}
