"use client";

import { FOOTER_DATA } from "@/constants/data";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const IMAGES = [
	"/images/insightsimg1.png",
	"/images/insightsimg2.png",
	"/images/insightsimg3.png",
];

export default function Insights() {
	const { latestInsights } = FOOTER_DATA;

	return (
		<section id="insights" className="py-10 md:py-20 bg-[#F0FDF4]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-5xl font-bold text-green-900 mb-4"
					>
						{latestInsights.title}
					</motion.h2>
					<p className="text-xl text-gray-600">{latestInsights.subtitle}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{latestInsights.posts.map((post, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
							className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
						>
							<div className="relative h-64 overflow-hidden">
								<div
									className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
									style={{ backgroundImage: `url('${IMAGES[idx]}')` }}
								/>
								<div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
									{post.tag}
								</div>
							</div>

							<div className="p-8">
								<div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
									<Calendar className="w-4 h-4" />
									<span>{post.date}</span>
								</div>

								<h3 className="text-xl font-bold text-green-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
									{post.title}
								</h3>

								<p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
									{post.excerpt}
								</p>

								<div className="flex items-center gap-2 text-green-600 font-bold group-hover:gap-3 transition-all">
									Read More <ArrowRight className="w-4 h-4" />
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
