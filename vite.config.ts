// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";
import type { PluginOption } from "vite";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: [buildOnlyNitro()],
});

function buildOnlyNitro(): PluginOption[] {
  const nitroPlugins = nitro() as PluginOption[] | PluginOption | false | null | undefined;

  return (Array.isArray(nitroPlugins) ? nitroPlugins : nitroPlugins ? [nitroPlugins] : []).map((plugin) => ({
    ...plugin,
    apply: "build",
  } as PluginOption));
}
