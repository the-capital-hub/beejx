import {
	Tractor,
	Sprout,
	Store,
	ShieldCheck,
	Brain,
	FileCheck,
	LayoutDashboard,
	TrendingUp,
	Leaf,
	Wallet,
	Headset,
	Users,
	MapPin,
	BarChart3,
} from "lucide-react";

export const NAV_LINKS = [
	{ label: "Home", href: "#home" },
	{ label: "Features", href: "#benefits" },
	{ label: "Services", href: "#services" },
	{ label: "Impact", href: "#impact" },
	{ label: "Blog", href: "#blog" },
];

export const HERO_DATA = {
	title: "India's Smart Farming & Farmland Leasing Platform",
	subtitle: "Own Land? Want to Farm? Need Help? Regarding",
	highlight: "AGRICULTURE",
	buttons: [
		{ label: "Get Started", primary: true },
		{ label: "Book a Demo", primary: false },
	],
	cards: [
		{
			icon: ShieldCheck,
			title: "Lease Farmland Securely",
			description:
				"Verified landowners, digital agreements, guaranteed payments",
		},
		{
			icon: Brain,
			title: "AI Crop Intelligence",
			description: "Best crop, yield prediction, sowing & harvesting schedule",
		},
		{
			icon: Store,
			title: "Farm Marketplace",
			description: "Hire tractors, workers, seeds, fertilizer & logistics",
		},
	],
};

export const MISSION_DATA = {
	title: "Our Mission",
	description:
		"At Beejx, we revolutionize agriculture using AI, verified land access and digital farming tools making farming profitable, predictable and safe for everyone.",
};

export const SERVICES_DATA = {
	title: "Our Services",
	subtitle: "Everything you need to succeed in farming",
	items: [
		{
			icon: MapPin,
			title: "Discover Farmland",
			description:
				"Browse verified farmland across India with complete documentation and legal verification.",
		},
		{
			icon: Sprout,
			title: "AI Crop Planning",
			description:
				"Get AI-powered recommendations for crop selection, timing, and yield predictions.",
		},
		{
			icon: LayoutDashboard,
			title: "Digital Farm Management",
			description:
				"Manage your entire farm operations from your smartphone with real-time insights.",
		},
		{
			icon: Tractor,
			title: "Equipment & Labour Marketplace",
			description:
				"Access tractors, equipment, seeds, fertilizers, and skilled labor on-demand.",
		},
		{
			icon: FileCheck,
			title: "Payments & Contracts",
			description:
				"Secure digital payments and automated contract management with full transparency.",
		},
	],
};

export const IMPACT_DATA = {
	title: "Our Impact",
	subtitle: "Transforming agriculture across India",
	stats: [
		{
			icon: Sprout,
			value: "10,000+",
			label: "Acres Listed",
			sub: "Verified farmland across India",
		},
		{
			icon: Users,
			value: "5,000+",
			label: "Farmers",
			sub: "Growing with Beejx",
		},
		{
			icon: Tractor,
			value: "2,000+",
			label: "Service Providers",
			sub: "Equipment & labor partners",
		},
		{
			icon: TrendingUp,
			value: "₹50+ Cr",
			label: "Generated",
			sub: "Farm revenue facilitated",
		},
	],
};

export const WHY_CHOOSE_DATA = {
	title: "Why Choose Beejx?",
	subtitle: "The future of farming is here",
	items: [
		{
			negative: { label: "Traditional", title: "Unreliable Brokers" },
			positive: { label: "Beejx", title: "Verified Platform" },
		},
		{
			negative: { label: "Traditional", title: "Guesswork Farming" },
			positive: { label: "Beejx", title: "AI-Powered Insights" },
		},
		{
			negative: { label: "Traditional", title: "Paper Contracts" },
			positive: { label: "Beejx", title: "Digital Agreements" },
		},
		{
			negative: { label: "Traditional", title: "No Data Tracking" },
			positive: { label: "Beejx", title: "Live Dashboard" },
		},
	],
};

export const BENEFITS_DATA = {
	title: "Benefits of Beejx",
	subtitle: "Everything you need to succeed",
	items: [
		{
			icon: TrendingUp,
			title: "Higher Yield",
			description: "AI-optimized farming increases productivity by up to 40%",
		},
		{
			icon: ShieldCheck,
			title: "Lower Risk",
			description:
				"Data-driven decisions reduce crop failure and financial loss",
		},
		{
			icon: FileCheck,
			title: "Secure Leasing",
			description:
				"Legal agreements and verified landowners protect your investment",
		},
		{
			icon: Brain,
			title: "Smart Decisions",
			description: "Real-time insights and AI recommendations for every step",
		},
		{
			icon: Wallet,
			title: "Transparent Payments",
			description:
				"Digital payments with full tracking and automated settlements",
		},
		{
			icon: Headset,
			title: "Full Support",
			description: "24/7 assistance from experts and community support",
		},
	],
};

export const BLOG_DATA = {
	title: "We Explore The Future of Agriculture Through Our Blog",
	subtitle:
		"Stay updated with the latest insights, trends, and innovations in modern farming",
	posts: [
		{
			date: "January 10, 2026",
			title: "The Future of Organic Farming in India",
			excerpt: "Exploring sustainable practices that are reshaping agriculture",
			image: "/blog1.jpg", // Placeholder path
		},
		{
			date: "January 8, 2026",
			title: "How AI is Revolutionizing Crop Planning",
			excerpt: "Smart technology helping farmers maximize yields",
			image: "/blog2.jpg", // Placeholder path
		},
		{
			date: "January 5, 2026",
			title: "Digital Transformation in Agriculture",
			excerpt: "Embracing technology for better farm management",
			image: "/blog3.jpg", // Placeholder path
		},
	],
};

export const FOOTER_DATA = {
	title: "Sustainable AGRICULTURE",
	description:
		"Building a greener future through eco-friendly farming practices, AI-driven sustainability, and empowering farmers to create lasting environmental impact.",
	stats: [
		{ value: "30%", label: "Less Water Usage" },
		{ value: "50%", label: "Reduced Emissions" },
		{ value: "100%", label: "Organic Methods" },
	],
	latestInsights: {
		title: "Latest Insights",
		subtitle: "Stay updated with farming trends and success stories",
		posts: [
			{
				tag: "Technology",
				date: "January 10, 2026",
				title: "Smart Farming: The Future of Agriculture",
				excerpt:
					"Discover how AI and IoT are revolutionizing traditional farming methods and increasing yields.",
			},
			{
				tag: "AI & Innovation",
				date: "January 8, 2026",
				title: "AI in Agriculture: A Complete Guide",
				excerpt:
					"Learn how artificial intelligence is helping farmers make data-driven decisions for better crops.",
			},
			{
				tag: "Success Stories",
				date: "January 5, 2026",
				title: "Farmer Success Stories: 40% Yield Increase",
				excerpt:
					"Real stories from farmers who transformed their operations with Beejx's smart farming platform.",
			},
		],
	},
};

export const CTA_DATA = {
	title: "Start Growing With Beejx",
	description:
		"Own land or want to farm? Beejx gives you everything you need to succeed.",
	buttons: [
		{ label: "Join Beejx Now", primary: true },
		{ label: "Request a Demo", primary: false },
	],
	features: ["No credit card required", "Free consultation", "24/7 support"],
};

export const FOOTER_LINKS_DATA = {
	description: "India's Smart Farming & Farmland Leasing Platform.",
	columns: [
		{
			title: "Platform",
			links: [
				{ label: "Our Mission", href: "#mission" },
				{ label: "Our Services", href: "#services" },
				{ label: "Our Impact", href: "#impact" },
				{ label: "Why Choose Us", href: "#why-choose" },
			],
		},
		{
			title: "Company",
			links: [
				{ label: "Benefits", href: "#benefits" },
				{ label: "Sustainability", href: "#sustainable" },
				{ label: "About Us", href: "#mission" },
				{ label: "Contact Us", href: "#contact" },
			],
		},
		{
			title: "Resources",
			links: [
				{ label: "Blog", href: "#blog" },
				{ label: "Insights", href: "#insights" },
				// { label: "Community", href: "#" },
				// { label: "API Docs", href: "#" },
			],
		},
		{
			title: "Legal",
			links: [
				{ label: "Privacy Policy", href: "#" },
				{ label: "Terms of Service", href: "#" },
				// { label: "Cookie Policy", href: "#" },
				// { label: "Disclaimer", href: "#" },
			],
		},
	],
	contact: {
		email: "hello@beejx.com",
		phone: "+91 1800-BEEJX-24",
		address: "Bengaluru, Karnataka, India",
	},
	copyright: "© 2026 Beejx – Smart Farming, Simplified. All rights reserved.",
	poweredBy: "An AgriTech Platform powered by Capital HUB",
};
