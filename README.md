# Loading problem reproduction

https://github.com/vitejs/vite/issues/6154

```sh
npm install
```

This is a reproduction to demonstrate the unexpected delay when loading a ~5MB file using the `import` syntax.

Once the data is loaded, you have to kill the app and relaunch it to reproduce the problem again.

## Modes

The largest latency is observed in develpement mode:

```sh
npm run dev
```

I also observe an unexpected delay in preview mode, but it is a smaller one:

```sh
npm run build
npm run preview
```
