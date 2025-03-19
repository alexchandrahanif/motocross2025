/** @format */

import React, { useState } from 'react';
import { AiOutlineAlignLeft, AiOutlineCloseSquare } from 'react-icons/ai';

import videoss from './assets/videoo.mp4';

const App = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<div className="relative">
			{/* Header */}
			<header className="bg-black text-white fixed w-full top-0 left-0 z-50">
				<div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
					{/* Logo or Title */}
					<h1 className="text-2xl font-bold">Motocross 2025</h1>

					{/* Desktop Menu (Hidden on Mobile) */}
					<nav className="hidden md:flex space-x-6">
						<a
							href="#"
							className="hover:text-gray-300">
							Beranda
						</a>
						<a
							href="#"
							className="hover:text-gray-300">
							Informasi
						</a>
						<a
							href="#"
							className="hover:text-gray-300">
							Kontak
						</a>
					</nav>

					{/* Mobile Menu Icon */}
					<div className="md:hidden">
						<button
							onClick={toggleDrawer}
							className="text-white">
							{isDrawerOpen ? (
								<AiOutlineCloseSquare size={30} />
							) : (
								<AiOutlineAlignLeft size={30} />
							)}
						</button>
					</div>
				</div>
			</header>

			{/* Drawer Menu (Mobile) */}
			<div
				className={`fixed inset-0  bg-opacity-50 z-40 transition-all duration-300 ${isDrawerOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}`}>
				<div
					className={`fixed top-0 right-0 h-full bg-black text-white w-1/2 transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
					<div className="flex justify-end p-4">
						<button
							onClick={toggleDrawer}
							className="text-white">
							<AiOutlineCloseSquare size={30} />
						</button>
					</div>
					<div className="flex justify-center items-center h-full">
						<nav className="flex flex-col space-y-4 p-6 text-white overflow-y-auto">
							<a
								href="#"
								className="block">
								Beranda
							</a>
							<a
								href="#"
								className="block">
								Informasi
							</a>
							<a
								href="#"
								className="block">
								Kontak
							</a>
						</nav>
					</div>
				</div>
			</div>

			<section className="relative w-full h-screen">
				<video
					className="absolute inset-0 w-full h-full object-cover"
					src={videoss}
					autoPlay
					loop
					preload="auto"
					playsInline
				/>
				{/* <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
					<h2 className="text-4xl font-semibold">Welcome to Motocross 2025</h2>
					<p className="mt-4 text-lg">
						Get ready for the most thrilling motocross event of the year!
					</p>
				</div> */}
			</section>
		</div>
	);
};

export default App;
