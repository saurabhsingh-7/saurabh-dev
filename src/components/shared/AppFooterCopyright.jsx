function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<button
					// href="https://github.com/realstoman/react-tailwindcss-portfolio"
					// target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Portfolio
				</button>
				.
				<button
					// href="https://stoman.me"
					// target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Saurabh
				</button>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
