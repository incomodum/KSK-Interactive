"use client"

// import posthog from "posthog-js"
// import { PostHogProvider } from "posthog-js/react"
// import { env } from "~/env"

// if (typeof window !== "undefined") {
// 	posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
// 		api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
// 		person_profiles: "always" // or 'always' to create profiles for anonymous users as well
// 	})

// 	console.log(env.NEXT_PUBLIC_POSTHOG_HOST, env.NEXT_PUBLIC_POSTHOG_KEY)
// }
// export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
// 	return <PostHogProvider client={posthog}>{children}</PostHogProvider>
// }

export default function Providers({ children }: { children: React.ReactNode }) {
	// return <CSPostHogProvider>
	return children
	// </CSPostHogProvider>
}
