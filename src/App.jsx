/** @format */

import React, { useState } from 'react';

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="font-sans text-gray-900">
			{/* Header Section */}
			<header className="bg-black text-white py-5 px-8 flex justify-between items-center">
				<h1 className="text-2xl font-bold">
					Grasstrack Open 2025 - Pemuda Cup
				</h1>

				{/* Hamburger Menu */}
				<button
					className="block md:hidden"
					onClick={() => setMenuOpen(!menuOpen)}>
					<span className="text-3xl">☰</span>
				</button>

				{/* Navigation */}
				<nav
					className={`absolute md:static top-16 left-0 w-full bg-black md:bg-transparent md:flex md:justify-end md:space-x-4 px-8 py-4 md:py-0 transition-all duration-300 ${
						menuOpen ? 'block' : 'hidden'
					}`}>
					<ul className="flex flex-col md:flex-row md:space-x-4">
						<li>
							<a
								href="#informasi"
								className="hover:text-yellow-400 block py-2 md:py-0">
								Informasi
							</a>
						</li>
						<li>
							<a
								href="#kelas"
								className="hover:text-yellow-400 block py-2 md:py-0">
								Kelas
							</a>
						</li>
						<li>
							<a
								href="#hadiah"
								className="hover:text-yellow-400 block py-2 md:py-0">
								Hadiah
							</a>
						</li>
						<li>
							<a
								href="#lokasi"
								className="hover:text-yellow-400 block py-2 md:py-0">
								Lokasi
							</a>
						</li>
						<li>
							<a
								href="#kontak"
								className="hover:text-yellow-400 block py-2 md:py-0">
								Kontak
							</a>
						</li>
					</ul>
				</nav>
			</header>

			{/* Informasi Section */}
			<section
				id="informasi"
				className="py-16 px-8 bg-gray-100 text-center">
				<h2 className="text-3xl font-bold mb-4">Informasi Event</h2>
				<p className="text-lg max-w-2xl mx-auto">
					Saksikan & Ikuti! Grasstrack Open 2025 - Pemuda Cup, ajang balapan
					motocross spektakuler yang akan berlangsung pada:
				</p>
				<p className="text-xl font-semibold mt-4">📅 12 - 13 April 2025</p>
				<p className="text-xl font-semibold">
					📍 Sirkuit Bukit Ajo Bokudo, Kep. Sintong Pusaka, Kecamatan Tanah
					Putih, Kab. Rokan Hilir
				</p>
				<p className="text-green-500 font-bold mt-4">🎟️ Nonton Gratis!</p>
			</section>

			{/* Lokasi Section */}
			<section
				id="lokasi"
				className="py-16 px-8 text-center">
				<h2 className="text-3xl font-bold mb-4">Lokasi</h2>
				<p className="text-lg">
					Sirkuit Bukit Ajo Bokudo, Kep. Sintong Pusaka, Kecamatan Tanah Putih,
					Kab. Rokan Hilir
				</p>
				<div className="mt-6">
					<iframe
						title="Google Maps"
						className="w-full max-w-lg h-64 mx-auto rounded-lg shadow-lg"
						src="https://www.google.com/maps/embed?pb=!4v1742116980131!6m8!1m7!1sUrJ6wK6IbN_EFdRhlwm61Q!2m2!1d1.522177915104492!2d100.9820540450856!3f117.44191881271104!4f0!5f0.7820865974627469"
						allowFullScreen=""
						loading="lazy"
						style={{ border: 0 }}
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</section>

			{/* Kontak Section */}
			<section
				id="kontak"
				className="py-16 px-8 bg-gray-100 text-center">
				<h2 className="text-3xl font-bold mb-4">Kontak</h2>
				<p className="text-lg">Hubungi kami untuk informasi lebih lanjut:</p>
				<p className="mt-4 text-xl font-semibold">
					📞 +62 823 2494 8925 (Yono)
				</p>
				<p className="mt-2 text-xl font-semibold">
					📞 +62 822 8931 0087 (Andi)
				</p>
			</section>
		</div>
	);
}
