# tatooine.club

My Mastodon homeserver is currently down, and I
am using my backup `@nemo@recurse.social` account.

This is a simple Netlify edge function that sets 
up a webfinger redirect from my old profile
to the new one till I get my server back up.

The reason this is a Netlify function is because
a simple static site solution will redirect
all accounts, and not just `@nemo@tatooine.club`.

Hopefully this is all seamless.