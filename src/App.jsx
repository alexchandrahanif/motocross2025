/** @format */

import React, { useState } from 'react';
import crossLogo from './assets/cross.png';
import heroImage from './assets/cross3.png';

export default function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
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
	);
}
