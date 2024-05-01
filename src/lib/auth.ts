import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"

export const { handle, signIn, signOut } = SvelteKitAuth((event) => {
	console.log("Auth event", Boolean(event.platform));
	return Promise.resolve({
		providers: [Google],
		events: {
			signIn: () => {
				console.log("Sign in", Boolean(event.platform));
			},
		}
	});
});