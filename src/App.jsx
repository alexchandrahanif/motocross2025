/** @format */

import React, { useState } from 'react';
import crossLogo from './assets/cross.png';
import heroImage from './assets/cross3.png';

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			<div
				className="font-sans text-white min-h-screen relative overflow-hidden"
				style={{
					backgroundImage: `url(${heroImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				{/* Navbar */}
				<header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 bg-opacity-40 z-20">
					<div className="flex items-center space-x-4">
						<img
							src={crossLogo}
							alt="Motocross Logo"
							className="h-10"
						/>
						<h1 className="text-lg md:text-xl font-bold tracking-widest uppercase text-white">
							Grasstrack 2025
						</h1>
					</div>

					{/* Navigation */}
					<nav className="hidden md:flex space-x-6 md:space-x-8 text-sm md:text-lg font-medium">
						<a
							href="#home"
							className="hover:text-white">
							Home
						</a>
						<a
							href="#informasi"
							className="hover:text-white">
							Informasi
						</a>
						<a
							href="#hadiah"
							className="hover:text-white">
							Hadiah
						</a>
						<a
							href="#lokasi"
							className="hover:text-white">
							Lokasi
						</a>
					</nav>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-3xl text-white"
						onClick={() => setMenuOpen(true)}>
						☰
					</button>
				</header>

				{/* Mobile Drawer Menu */}
				<div
					className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 shadow-lg transform transition-transform duration-300 z-50 ${
						menuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}>
					<button
						className="absolute top-5 right-5 text-3xl text-white"
						onClick={() => setMenuOpen(false)}>
						✖
					</button>
					<nav className="flex flex-col items-start p-6 space-y-4 mt-12 text-lg font-medium">
						<a
							href="#home"
							className="hover:text-green-400"
							onClick={() => setMenuOpen(false)}>
							Home
						</a>
						<a
							href="#informasi"
							className="hover:text-green-400"
							onClick={() => setMenuOpen(false)}>
							Informasi
						</a>
						<a
							href="#hadiah"
							className="hover:text-green-400"
							onClick={() => setMenuOpen(false)}>
							Hadiah
						</a>
						<a
							href="#lokasi"
							className="hover:text-green-400"
							onClick={() => setMenuOpen(false)}>
							Lokasi
						</a>
					</nav>
				</div>

				{/* Hero Section */}
				<section
					id="home"
					className="relative h-screen flex flex-col justify-center items-center text-center px-6 z-10">
					<div className="relative max-w-5xl">
						<h2 className="text-5xl md:text-8xl font-extrabold uppercase text-white tracking-wide drop-shadow-lg">
							Grasstrack 2025
						</h2>
						<div className="flex flex-col md:flex-row justify-between text-md md:text-lg font-semibold uppercase mt-4 text-white">
							<span>12 - 13 April 2025</span>
							<span>Sirkuit Bukit Ajo Bokudo</span>
						</div>
						<p className="text-sm md:text-lg mt-4 text-white max-w-3xl mx-auto">
							Ajang balap motocross spektakuler, penuh aksi dan adrenalin!
						</p>
					</div>
				</section>
			</div>

			{/* Informasi */}
			{/* <div
				id="home"
				className="h-screen flex flex-col justify-center items-center text-center ">
				<section
					id="informasi"
					className="bg-black py-16 px-6 md:px-12 text-center mt-16">
					<h2 className="text-5xl md:text-6xl font-extrabold uppercase text-green-400 mb-12 tracking-wide">
						Kelas & Hadiah
					</h2>
					<div className="flex flex-col md:flex-row gap-12 text-left text-white justify-center items-start">
						<div className="p-8 bg-gray-900 rounded-lg shadow-lg border-l-4 border-green-400 w-full md:w-1/2">
							<h3 className="text-3xl font-bold text-green-300 mb-4">
								Kelas yang Dilombakan
							</h3>
							<ul className="list-disc pl-6 space-y-2 text-lg">
								<li>Sport Trail Open</li>
								<li>Bebek Modifikasi 4T Open</li>
								<li>Campuran Open</li>
								<li>Trail Standar Open</li>
								<li>Sport Trail Senior B Riau</li>
								<li>Campuran Lokal Kab. Rohil - Rohul Bengkalis Non Pro</li>
								<li>RBT 4T Open</li>
								<li>RBT 2T/4T Open</li>
								<li>RBT 2T/4T Riau Non Pro</li>
								<li>RBT 2T/4T Lokal Kab. Rohil Non Pro</li>
							</ul>
						</div>

						<div className="p-8 bg-gray-900 rounded-lg shadow-lg border-l-4 border-yellow-400 w-full md:w-1/2">
							<h3 className="text-3xl font-bold text-yellow-300 mb-4">
								Total Hadiah
							</h3>
							<p className="text-xl text-yellow-200 font-semibold">
								Total hadiah yang diperebutkan mencapai Rp. 10.000.000!
							</p>
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div className="bg-gray-800 p-4 rounded-md">
									<h4 className="text-xl font-semibold text-yellow-300">
										Juara Umum Pro Open
									</h4>
									<p className="text-lg text-yellow-200">Rp. 3.000.000</p>
								</div>
								<div className="bg-gray-800 p-4 rounded-md">
									<h4 className="text-xl font-semibold text-yellow-300">
										Juara Umum RBT Open
									</h4>
									<p className="text-lg text-yellow-200">Rp. 1.500.000</p>
								</div>
								<div className="bg-gray-800 p-4 rounded-md">
									<h4 className="text-xl font-semibold text-yellow-300">
										Juara Umum RBT Lokal Rohil
									</h4>
									<p className="text-lg text-yellow-200">Rp. 1.500.000</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div> */}
		</div>
	);
}
