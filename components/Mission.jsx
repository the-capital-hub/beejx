"use client";

import { MISSION_DATA } from "@/constants/data";
import { motion } from "framer-motion";

export default function Mission() {
	return (
		<section
			id="mission"
			className="py-10 md:pt-32 md:pb-16 bg-[#F9FCF8] text-center"
		>
			<div className="max-w-7xl mx-auto px-6">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-5xl font-bold text-green-900 mb-8"
				>
					{MISSION_DATA.title}
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="max-w-4xl mx-auto text-lg md:text-2xl text-gray-700 leading-relaxed font-light"
				>
					{MISSION_DATA.description}
				</motion.p>
			</div>
		</section>
	);
}
