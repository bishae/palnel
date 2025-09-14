import { useId } from "react";

export default function App() {
	const homeId = useId();
	const servicesId = useId();
	const aboutId = useId();
	const contactId = useId();

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<nav className="bg-white shadow-sm border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<h1 className="text-2xl font-bold text-blue-600">PALNEL</h1>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<a
									href={`#${homeId}`}
									className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
								>
									Home
								</a>
								<a
									href={`#${servicesId}`}
									className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
								>
									Services
								</a>
								<a
									href={`#${aboutId}`}
									className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
								>
									About
								</a>
								<a
									href={`#${contactId}`}
									className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
								>
									Contact
								</a>
							</div>
						</div>
						<div className="md:hidden">
							<button
								type="button"
								className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
								aria-label="Menu"
							>
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id={homeId}
				className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
							Transform Your Business with
							<span className="text-blue-600 block">
								Cutting-Edge IT Solutions
							</span>
						</h1>
						<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
							PALNEL delivers innovative technology solutions that drive growth,
							enhance efficiency, and secure your digital future. From cloud
							migration to cybersecurity, we're your trusted IT partner.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button
								type="button"
								className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
							>
								Get Started
							</button>
							<button
								type="button"
								className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
							>
								Learn More
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id={servicesId} className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Our IT Solutions
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Comprehensive technology services designed to meet your business
							needs
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Cloud Solutions */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-6 h-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<title>Cloud icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Cloud Solutions
							</h3>
							<p className="text-gray-600 mb-6">
								Migrate to the cloud with confidence. We provide seamless cloud
								migration, optimization, and management services.
							</p>
							<ul className="text-sm text-gray-500 space-y-2">
								<li>• AWS, Azure, Google Cloud</li>
								<li>• Cloud architecture design</li>
								<li>• Cost optimization</li>
								<li>• 24/7 cloud monitoring</li>
							</ul>
						</div>

						{/* Cybersecurity */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
							<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-6 h-6 text-red-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<title>Security shield icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Cybersecurity
							</h3>
							<p className="text-gray-600 mb-6">
								Protect your business with comprehensive security solutions and
								proactive threat management.
							</p>
							<ul className="text-sm text-gray-500 space-y-2">
								<li>• Security assessments</li>
								<li>• Network security</li>
								<li>• Incident response</li>
								<li>• Compliance management</li>
							</ul>
						</div>

						{/* Software Development */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
							<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-6 h-6 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<title>Code icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Software Development
							</h3>
							<p className="text-gray-600 mb-6">
								Custom software solutions built with modern technologies to
								streamline your operations.
							</p>
							<ul className="text-sm text-gray-500 space-y-2">
								<li>• Web applications</li>
								<li>• Mobile apps</li>
								<li>• API development</li>
								<li>• System integration</li>
							</ul>
						</div>

						{/* IT Support */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
							<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-6 h-6 text-purple-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<title>Support icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								IT Support
							</h3>
							<p className="text-gray-600 mb-6">
								Reliable technical support and managed services to keep your
								systems running smoothly.
							</p>
							<ul className="text-sm text-gray-500 space-y-2">
								<li>• 24/7 help desk</li>
								<li>• System monitoring</li>
								<li>• Backup & recovery</li>
								<li>• Infrastructure management</li>
							</ul>
						</div>

						{/* Data Analytics */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
							<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-6 h-6 text-orange-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<title>Chart icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Data Analytics
							</h3>
							<p className="text-gray-600 mb-6">
								Transform your data into actionable insights with advanced
								analytics and business intelligence.
							</p>
							<ul className="text-sm text-gray-500 space-y-2">
								<li>• Business intelligence</li>
								<li>• Data visualization</li>
								<li>• Predictive analytics</li>
								<li>• Data warehousing</li>
							</ul>
						</div>

						{/* Digital Transformation */}
						<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
							<div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-6 h-6 text-teal-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<title>Lightning icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								Digital Transformation
							</h3>
							<p className="text-gray-600 mb-6">
								Modernize your business processes with digital solutions that
								drive innovation and growth.
							</p>
							<ul className="text-sm text-gray-500 space-y-2">
								<li>• Process automation</li>
								<li>• Workflow optimization</li>
								<li>• Technology consulting</li>
								<li>• Change management</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id={aboutId} className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Why Choose PALNEL?
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								With over a decade of experience in the IT industry, PALNEL has
								been helping businesses leverage technology to achieve their
								goals. Our team of certified professionals combines technical
								expertise with business acumen to deliver solutions that drive
								real results.
							</p>
							<div className="space-y-6">
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
											<svg
												className="w-4 h-4 text-blue-600"
												fill="currentColor"
												viewBox="0 0 20 20"
												aria-hidden="true"
											>
												<title>Checkmark</title>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-semibold text-gray-900">
											Expert Team
										</h3>
										<p className="text-gray-600">
											Certified professionals with deep industry knowledge
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
											<svg
												className="w-4 h-4 text-blue-600"
												fill="currentColor"
												viewBox="0 0 20 20"
												aria-hidden="true"
											>
												<title>Checkmark</title>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-semibold text-gray-900">
											Proven Results
										</h3>
										<p className="text-gray-600">
											Track record of successful project delivery
										</p>
									</div>
								</div>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
											<svg
												className="w-4 h-4 text-blue-600"
												fill="currentColor"
												viewBox="0 0 20 20"
												aria-hidden="true"
											>
												<title>Checkmark</title>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-semibold text-gray-900">
											24/7 Support
										</h3>
										<p className="text-gray-600">
											Round-the-clock assistance when you need it
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-lg">
							<div className="grid grid-cols-2 gap-8 text-center">
								<div>
									<div className="text-3xl font-bold text-blue-600 mb-2">
										500+
									</div>
									<div className="text-gray-600">Projects Completed</div>
								</div>
								<div>
									<div className="text-3xl font-bold text-blue-600 mb-2">
										99.9%
									</div>
									<div className="text-gray-600">Uptime Guarantee</div>
								</div>
								<div>
									<div className="text-3xl font-bold text-blue-600 mb-2">
										50+
									</div>
									<div className="text-gray-600">Expert Engineers</div>
								</div>
								<div>
									<div className="text-3xl font-bold text-blue-600 mb-2">
										10+
									</div>
									<div className="text-gray-600">Years Experience</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id={contactId} className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Ready to Transform Your IT?
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Let's discuss how PALNEL can help your business achieve its
							technology goals
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold text-gray-900 mb-6">
								Get in Touch
							</h3>
							<div className="space-y-6">
								<div className="flex items-center">
									<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
										<svg
											className="w-5 h-5 text-blue-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<title>Email icon</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-900">Email</p>
										<p className="text-gray-600">contact@palnel.com</p>
									</div>
								</div>
								<div className="flex items-center">
									<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
										<svg
											className="w-5 h-5 text-blue-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<title>Phone icon</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-900">Phone</p>
										<p className="text-gray-600">+1 (555) 123-4567</p>
									</div>
								</div>
								<div className="flex items-center">
									<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
										<svg
											className="w-5 h-5 text-blue-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<title>Location icon</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<div>
										<p className="font-semibold text-gray-900">Office</p>
										<p className="text-gray-600">
											123 Tech Street, Innovation District, NY 10001
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl">
							<form className="space-y-6">
								<div>
									<label
										htmlFor={`contact-name-${contactId}`}
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Full Name
									</label>
									<input
										type="text"
										id={`contact-name-${contactId}`}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label
										htmlFor={`contact-email-${contactId}`}
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Email Address
									</label>
									<input
										type="email"
										id={`contact-email-${contactId}`}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="your.email@company.com"
									/>
								</div>
								<div>
									<label
										htmlFor={`contact-company-${contactId}`}
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Company
									</label>
									<input
										type="text"
										id={`contact-company-${contactId}`}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Your company name"
									/>
								</div>
								<div>
									<label
										htmlFor={`contact-message-${contactId}`}
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Message
									</label>
									<textarea
										id={`contact-message-${contactId}`}
										rows={4}
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Tell us about your project..."
									></textarea>
								</div>
								<button
									type="submit"
									className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-2xl font-bold mb-4">PALNEL</h3>
							<p className="text-gray-400 mb-4">
								Leading IT solutions provider helping businesses transform
								through technology.
							</p>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-4">Services</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a
										href={`#${servicesId}`}
										className="hover:text-white transition-colors"
									>
										Cloud Solutions
									</a>
								</li>
								<li>
									<a
										href={`#${servicesId}`}
										className="hover:text-white transition-colors"
									>
										Cybersecurity
									</a>
								</li>
								<li>
									<a
										href={`#${servicesId}`}
										className="hover:text-white transition-colors"
									>
										Software Development
									</a>
								</li>
								<li>
									<a
										href={`#${servicesId}`}
										className="hover:text-white transition-colors"
									>
										IT Support
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-4">Company</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a
										href={`#${aboutId}`}
										className="hover:text-white transition-colors"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href={`#${aboutId}`}
										className="hover:text-white transition-colors"
									>
										Our Team
									</a>
								</li>
								<li>
									<a
										href={`#${aboutId}`}
										className="hover:text-white transition-colors"
									>
										Careers
									</a>
								</li>
								<li>
									<a
										href={`#${contactId}`}
										className="hover:text-white transition-colors"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-4">Connect</h4>
							<div className="flex space-x-4">
								<a
									href="https://twitter.com/palnel"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="Follow us on Twitter"
								>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<title>Twitter icon</title>
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
									</svg>
								</a>
								<a
									href="https://linkedin.com/company/palnel"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="Connect with us on LinkedIn"
								>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<title>LinkedIn icon</title>
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>&copy; 2024 PALNEL. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
