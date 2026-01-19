"use client";

import { HERO_DATA } from "@/constants/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Hero() {
	return (
		<section
			id="home"
			className="relative w-full min-h-screen flex flex-col lg:justify-end pb-32 md:pb-48"
		>
			{/* Background Image Placeholder - Replace url with actual image */}
			<div
				className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url('/images/herobg.png')`,
				}}
			>
				<div className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-green-900/40" />
			</div>

			<div className="max-w-7xl relative z-10 mx-auto px-6 pt-32 text-center text-white">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-xl md:text-2xl font-medium mb-2 drop-shadow-md"
				>
					{HERO_DATA.title}
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-lg md:text-xl opacity-90 mb-4 drop-shadow-md"
				>
					{HERO_DATA.subtitle}
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="text-5xl md:text-8xl font-bold tracking-tight text-green-400 mb-10 drop-shadow-lg uppercase"
				>
					{HERO_DATA.highlight}
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					{HERO_DATA.buttons.map((btn, idx) => (
						<button
							key={idx}
							className={cn(
								"px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105",
								btn.primary
									? "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/30"
									: "bg-white hover:bg-gray-100 text-green-900 shadow-lg",
							)}
						>
							{btn.label}
						</button>
					))}
				</motion.div>
			</div>

			{/* Overlapping Cards */}
			<div className="md:absolute bottom-10 md:-bottom-20 left-0 right-0 z-20 max-w-7xl mx-auto px-6 pt-10 md:0">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{HERO_DATA.cards.map((card, idx) => {
						const Icon = card.icon;
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
								className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow flex md:flex-col items-center md:items-start gap-4"
							>
								<div
									className={cn(
										"p-3 rounded-xl",
										idx === 1
											? "bg-green-100 text-green-600"
											: "bg-green-50 text-green-600",
									)}
								>
									<Icon className="w-8 h-8" />
								</div>
								<div className="block md:hidden">
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{card.title}
									</h3>
								</div>
								<div className="hidden md:block">
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{card.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{card.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
