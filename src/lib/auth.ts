import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/sveltekit/providers/google"

export const { handle, signIn, signOut } = SvelteKitAuth((event) => {
	console.log(event.platform?.env);
	return Promise.resolve({
		providers: [Google],
		events: {
			signIn: () => {
				console.log(event.platform?.env);
			},
		}
	});
});