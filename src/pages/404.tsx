import Link from "next/link";

export default function ErrorPage404() {
	return <main className="w-full h-d-screen bg-primary-950">
		<div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
			<div className="flex items-center justify-center mb-1">
				<h1 className="text-2xl pr-6 font-medium border-r-1 border-primary-300 text-secondary">404</h1>
				<span className="ml-6 text-white">This page could not be found</span>
			</div>
			<Link className="text-center text-sm underline underline-offset-2 text-secondary" href="/">Back to Home</Link>
		</div>
	</main>;
}