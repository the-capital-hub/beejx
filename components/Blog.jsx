"use client";

import { BLOG_DATA } from "@/constants/data";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const IMAGES = [
	"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2096&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop",
];

export default function Blog() {
	return (
		<section id="blog" className="py-10 md:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-2xl md:text-4xl font-bold text-green-900 mb-4"
					>
						{BLOG_DATA.title}
					</motion.h2>
					<p className="text-xl text-gray-600">{BLOG_DATA.subtitle}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{BLOG_DATA.posts.map((post, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
							className="group cursor-pointer"
						>
							<div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
								<div
									className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
									style={{ backgroundImage: `url('${IMAGES[idx]}')` }}
								/>
							</div>

							<div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
								<Calendar className="w-4 h-4" />
								<span>{post.date}</span>
							</div>

							<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
								{post.title}
							</h3>

							<p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

							<div className="flex items-center gap-2 text-green-600 font-medium group-hover:gap-3 transition-all">
								Read More <ArrowRight className="w-4 h-4" />
							</div>
						</motion.div>
					))}
				</div>

				<div className="text-center">
					<button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors">
						View All Articles
					</button>
				</div>
			</div>
		</section>
	);
}
