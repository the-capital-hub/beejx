"use client";

import { WHY_CHOOSE_DATA } from "@/constants/data";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhyChoose() {
	return (
		<section id="why-choose" className="py-10 md:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-bold text-green-900 mb-4"
					>
						{WHY_CHOOSE_DATA.title}
					</motion.h2>
					<p className="text-xl text-gray-600">{WHY_CHOOSE_DATA.subtitle}</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Image Side */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative h-125 rounded-3xl overflow-hidden shadow-2xl"
					>
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={{
								backgroundImage: `url('/images/whychooseimg.png')`,
							}}
						/>
					</motion.div>

					{/* Comparison List Side */}
					<div className="space-y-6">
						{WHY_CHOOSE_DATA.items.map((item, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
								className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
							>
								<div className="flex items-center justify-between gap-12 lg:gap-16 mb-4 pb-4 border-b border-gray-100 last:mb-0 last:pb-0 last:border-0">
									{/* Traditional (Negative) */}
									<div className="flex flex-col md:flex-row md:items-center gap-3 flex-1">
										<div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
											<X className="w-4 h-4 text-red-500" />
										</div>
										<div>
											<div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
												{item.negative.label}
											</div>
											<div className="font-semibold text-gray-700">
												{item.negative.title}
											</div>
										</div>
									</div>

									{/* Beejx (Positive) */}
									<div className="flex flex-col md:flex-row md:items-center gap-3 flex-1 justify-start text-left">
										<div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
											<Check className="w-4 h-4 text-green-600" />
										</div>
										<div>
											<div className="text-xs text-green-600 font-medium uppercase tracking-wider">
												{item.positive.label}
											</div>
											<div className="font-bold text-green-900">
												{item.positive.title}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
