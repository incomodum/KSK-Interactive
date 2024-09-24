import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {},
	client: {
		NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1).optional(),
		NEXT_PUBLIC_POSTHOG_HOST: z.string().min(1).optional()
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
		NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST
	}
})
