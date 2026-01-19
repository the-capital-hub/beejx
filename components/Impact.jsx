"use client";

import { IMPACT_DATA } from "@/constants/data";
import { motion } from "framer-motion";

export default function Impact() {
	return (
		<section
			id="impact"
			className="relative py-10 md:py-20 bg-green-900 text-white overflow-hidden"
		>
			{/* Background Image */}
			<div
				className="absolute inset-0 z-0 bg-cover bg-center"
				style={{
					backgroundImage: `url('/images/impactbg.jpg')`,
				}}
				// https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2071&auto=format&fit=crop
			>
				<div className="absolute inset-0 bg-green-900/40" />
			</div>

			<div className="max-w-7xl relative z-10 mx-auto px-6">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl md:text-6xl font-bold mb-4"
					>
						{IMPACT_DATA.title}
					</motion.h2>
					<p className="text-xl text-green-100 opacity-90">
						{IMPACT_DATA.subtitle}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{IMPACT_DATA.stats.map((stat, idx) => {
						const Icon = stat.icon;
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
								className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition-colors"
							>
								<div className="flex justify-center mb-4">
									<div className="p-3 bg-white/20 rounded-full">
										<Icon className="w-8 h-8 text-white" />
									</div>
								</div>
								<h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
								<div className="text-lg font-semibold text-green-300 mb-1">
									{stat.label}
								</div>
								<p className="text-sm text-green-100 opacity-80">{stat.sub}</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
