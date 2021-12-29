import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      json: {
        // Note: The probleme is present with both
        // `stringify: true` and `stringify: false`
        // https://vitejs.dev/config/#json-stringify
        stringify: true,
      },
    },
  },
};

export default config;
