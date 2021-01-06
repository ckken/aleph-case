# Deno Aleph Demo

[DEMO](https://aleph-case.vercel.app/)

## Install
+ `deno install -A -f -n aleph https://deno.land/x/aleph@v0.2.27/cli.ts`
+ `export PATH="/Users/ken/.deno/bin:$PATH"`

## Command

+ SSR dev `aleph dev`
+ SSG `aleph build`
+ SSR prod `aleph start`


## Deploy
+ Build Command: `curl -fsSL https://deno.land/x/install/install.sh | sh && /vercel/.deno/bin/deno run -A https://deno.land/x/aleph@v0.2.27/cli.ts build`
Output Directory: `dist` (outputDir, you can override it in `aleph.config.ts`)
Environment Variables: `NO_COLOR` (recommended)
APIs(Functions): not supported currently