<script>
  // A button to call the server-side endpoint from the client and measure the
  // time taken, and a minimal UI to display the result.
  export let method;

  const endPointUrl = `/api/${method}-communes`;

  let timeTaken,
    response,
    disabled = false;

  const loadAndMeasureTime = async () => {
    disabled = true;
    let start = performance.now();
    let res = await fetch(endPointUrl);
    response = await res.text();
    let end = performance.now();
    timeTaken = end - start;
    disabled = false;
  };
</script>

<button on:click={loadAndMeasureTime(method)} {disabled}>Call {method}</button>
{#if response}
  Time taken: <strong>{timeTaken}ms</strong>
  <small>(server response: {response} lines)</small>
{:else if disabled}
  Loading...
{/if}
<br />
