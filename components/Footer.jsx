"use client";

import { CTA_DATA, FOOTER_LINKS_DATA } from "@/constants/data";
import {
	Leaf,
	Twitter,
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
	ArrowRight,
	Sprout,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-green-900 text-white relative mt-32">
			{/* CTA Card - Floating overlap */}
			<div className="max-w-7xl mx-auto px-6 relative -top-24 -mb-12">
				<div className="bg-linear-to-br from-green-500 to-green-700 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
					{/* Decorative Background Icons */}
					<Sprout className="absolute top-10 left-10 text-white/10 w-24 h-24 -rotate-12" />
					<Sprout className="absolute bottom-10 right-10 text-white/10 w-32 h-32 rotate-12" />

					<div className="relative z-10 max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
							{CTA_DATA.title}
						</h2>
						<p className="text-lg md:text-xl text-green-50 mb-10 max-w-2xl mx-auto">
							{CTA_DATA.description}
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
							{CTA_DATA.buttons.map((btn, idx) => (
								<button
									key={idx}
									className={cn(
										"px-8 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2",
										btn.primary
											? "bg-white text-green-700 hover:bg-green-50 shadow-lg"
											: "bg-transparent border border-white text-white hover:bg-white/10",
									)}
								>
									{btn.label}
									{btn.primary && <ArrowRight className="w-4 h-4" />}
								</button>
							))}
						</div>

						<div className="flex flex-wrap items-center justify-center gap-4 text-sm text-green-100/80">
							{CTA_DATA.features.map((feature, idx) => (
								<span key={idx} className="flex items-center gap-2">
									{idx > 0 && <span className="hidden sm:inline">•</span>}{" "}
									{feature}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
					{/* Brand Column */}
					<div className="lg:col-span-4 space-y-6">
						<Link href="/" className="flex items-center gap-2">
							{/* Logo */}
							<Image
								src="/images/logo.png"
								width={40}
								height={40}
								className="h-10 w-10 object-cover"
								priority
							/>
							<span className="text-2xl font-bold">Beejx</span>
						</Link>
						<p className="text-green-100/80 leading-relaxed max-w-md">
							{FOOTER_LINKS_DATA.description}
						</p>
						<div className="flex gap-4 pt-4">
							{[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
								<Link
									key={idx}
									href="#"
									className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all duration-300 text-green-100/70"
								>
									<Icon className="w-4 h-4" />
								</Link>
							))}
						</div>
					</div>

					{/* Links Columns */}
					<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
						{FOOTER_LINKS_DATA.columns.map((col, idx) => (
							<div key={idx}>
								<h4 className="text-lg font-semibold mb-6 text-white">
									{col.title}
								</h4>
								<ul className="space-y-4">
									{col.links.map((link, lIdx) => (
										<li key={lIdx}>
											<Link
												href={link.href}
												className="text-green-100/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Contact Info Row */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					<div className="flex items-center gap-4">
						<Mail className="w-5 h-5 text-green-400 shrink-0" />
						<div>
							<div className="text-sm text-green-100/60">Email</div>
							<div className="font-medium">
								{FOOTER_LINKS_DATA.contact.email}
							</div>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<Phone className="w-5 h-5 text-green-400 shrink-0" />
						<div>
							<div className="text-sm text-green-100/60">Phone</div>
							<div className="font-medium">
								{FOOTER_LINKS_DATA.contact.phone}
							</div>
						</div>
					</div>
					<div className="flex items-center gap-4">
						<MapPin className="w-5 h-5 text-green-400 shrink-0" />
						<div>
							<div className="text-sm text-green-100/60">Address</div>
							<div className="font-medium">
								{FOOTER_LINKS_DATA.contact.address}
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-green-100/60">
					<div>{FOOTER_LINKS_DATA.copyright}</div>
					<div>{FOOTER_LINKS_DATA.poweredBy}</div>
				</div>
			</div>
		</footer>
	);
}
