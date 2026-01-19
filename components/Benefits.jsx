"use client";

import { BENEFITS_DATA } from "@/constants/data";
import { motion } from "framer-motion";

export default function Benefits() {
	return (
		<section id="benefits" className="py-10 md:py-20 bg-[#F9FCF8]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-bold text-green-900 mb-4"
					>
						{BENEFITS_DATA.title}
					</motion.h2>
					<p className="text-xl text-gray-600">{BENEFITS_DATA.subtitle}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{BENEFITS_DATA.items.map((benefit, idx) => {
						const Icon = benefit.icon;
						return (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
								className="bg-green-50 rounded-3xl p-8 hover:bg-green-100 transition-colors duration-300"
							>
								<div className="flex md:flex-col items-center md:items-start gap-4 mb-6">
									<div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-600/20">
										<Icon className="w-7 h-7 text-white" />
									</div>
									<h3 className="text-xl font-bold text-green-900">
										{benefit.title}
									</h3>
								</div>
								<p className="text-gray-600 leading-relaxed">
									{benefit.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
