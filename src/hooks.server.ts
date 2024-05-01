import { building } from "$app/environment"
import { handle as auth_handle } from "$lib/auth.js"

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  if (building) return resolve(event)

  // event.platform here should be populated with
  // miniflare emulations
  // But during the `/auth/callback/$provider`
  // return call it is empty
  // So it is not possible to get the `event.platform.env.$db`
  // property to integrate with authjs's D1 adapter
  // I suspect the lack of `event.platform` being populated
  // is due to some bug in the sveltekit cloudflare adapter
  // binding but I'm unsure about the technical details
  // of how it works vs how it should work
  console.log("Server hook event", Boolean(event.platform));

  return auth_handle({ event, resolve })
}
