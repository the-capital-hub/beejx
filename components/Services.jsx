"use client";

import { SERVICES_DATA } from "@/constants/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Services() {
	return (
		<section id="services" className="py-10 md:py-20 bg-[#F9FCF8]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-10 md:mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-bold text-green-900 mb-4"
					>
						{SERVICES_DATA.title}
					</motion.h2>
					<p className="text-xl text-gray-600">{SERVICES_DATA.subtitle}</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Services List */}
					<div className="space-y-6">
						{SERVICES_DATA.items.map((service, idx) => {
							const Icon = service.icon;
							// Highlight the second item to match design
							const isActive = idx === 1;

							return (
								<motion.div
									key={idx}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									className={cn(
										"p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 cursor-pointer hover:shadow-lg",
										isActive
											? "bg-green-600 text-white shadow-xl shadow-green-600/20"
											: "bg-white text-gray-800 shadow-sm hover:bg-green-50",
									)}
								>
									<div
										className={cn(
											"p-3 rounded-xl shrink-0",
											isActive
												? "bg-white/20 text-white"
												: "bg-green-100 text-green-600",
										)}
									>
										<Icon className="w-6 h-6" />
									</div>
									<div>
										<h3
											className={cn(
												"text-xl font-bold mb-2",
												isActive ? "text-white" : "text-gray-900",
											)}
										>
											{service.title}
										</h3>
										<p
											className={cn(
												"text-sm leading-relaxed",
												isActive ? "text-green-50" : "text-gray-600",
											)}
										>
											{service.description}
										</p>
									</div>
								</motion.div>
							);
						})}
					</div>

					{/* Right Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative h-150 w-auto rounded-3xl overflow-hidden shadow-2xl"
					>
						<div
							className="absolute inset-0 bg-cover"
							style={{
								backgroundImage: `url('/images/serviceimg.png')`, // Placeholder, reusing farm image or finding tablet one
							}}
						>
							{/* Overlay */}
							<div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
						</div>

						{/* Tablet UI Overlay simulation */}
						<div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
							<div className="flex items-center gap-4 mb-4">
								<div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-xl">
									AI
								</div>
								<div>
									<div className="font-bold">Crop Health Analysis</div>
									<div className="text-sm opacity-80">98% Accuracy</div>
								</div>
							</div>
							<div className="h-2 bg-white/20 rounded-full overflow-hidden">
								<div className="h-full w-[72%] bg-green-400" />
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
