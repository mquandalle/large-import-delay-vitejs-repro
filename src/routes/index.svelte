<script>
  import CallerButton from "./_CallerButton.svelte";
</script>

<main>
  <h1>Import delay reproduction</h1>

  <p>
    We have a 5MB json file containing a list of french cities, and our goal is
    to import it from a server-side endpoint to count the number of lines.
  </p>
  <p>
    The problem is that the naïve `import 'data.json'` on the server is taking
    way more time that expected. (this is demonstrable with the “call es-import”
    button below). The delay is only visible the first time, since the data is
    already loaded on following calls. To reproduce it again you have to kill
    the app and relaunch it.
  </p>
  <CallerButton method="es-import" />
  <p>
    For comparison, an alternative implementation using `JSON.parse` and
    `fs.readFileSync` is able to load the same data without the ~5s delay of the
    previous method.
  </p>
  <CallerButton method="fs-read" />
</main>

<style>
  main {
    max-width: 70ch;
    padding: 3em 1em;
    margin: auto;
    line-height: 1.75;
    font-size: 1.25em;
  }
</style>
