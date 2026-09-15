# Nova Admin backend

The admin page is `/admin.html`. It signs in with Supabase Auth and invokes the
JWT-protected `nova-game-admin` Edge Function.

The Edge Function checks `nova_admins` before every request. Browser clients
cannot read either admin table; the service role is used only inside the
function. GitHub credentials are never shipped to the browser.

## Required Edge Function secret

Create a fine-grained GitHub personal access token scoped only to
`UmarErth/uMath` with **Contents: Read and write**, then add it to Supabase
Edge Function secrets as:

```
GITHUB_TOKEN=github_pat_...
```

Optional overrides are `GITHUB_REPOSITORY` and `GITHUB_BRANCH`. The defaults
are `UmarErth/uMath` and `main`.

The function commits catalog edits to `loader.js`, records successful changes
in `nova_admin_audit`, and requests a jsDelivr cache purge.
