"use client";

import { FOOTER_DATA } from "@/constants/data";
import { motion } from "framer-motion";

export default function SustainableBanner() {
	return (
		<section
			id="sustainable"
			className="relative py-10 md:py-20 bg-green-900 text-white overflow-hidden"
		>
			<div
				className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
				style={{
					backgroundImage: `url('/images/sustainablebg.png')`,
				}}
			/>
			{/* <div className="absolute inset-0 bg-linear-to-r from-green-900/90 to-green-800/80 z-0" /> */}

			<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-4xl md:text-6xl font-bold mb-2"
				>
					{FOOTER_DATA.title.split(" ")[0]}
				</motion.h2>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className="text-4xl md:text-6xl font-bold mb-8"
				>
					<span className="text-white">AGRI</span>
					<span className="text-green-400">CULTURE</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="max-w-3xl mx-auto text-lg md:text-xl text-green-100 opacity-90 mb-16 leading-relaxed"
				>
					{FOOTER_DATA.description}
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{FOOTER_DATA.stats.map((stat, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 + idx * 0.1 }}
						>
							<div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
								{stat.value}
							</div>
							<div className="text-sm md:text-base text-green-100">
								{stat.label}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
