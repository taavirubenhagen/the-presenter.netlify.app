<script lang="ts">
  import { fade, fly } from "svelte/transition";

	import "../../app.postcss";
	import { defaultFade } from "../.././stores";




  export let className = ""

  export let title = ""
  export let onclick = () => {}




  type tCurrentClass = "" | "text-onprimary"
  let currentClass = ""
</script>








<div class="grid justify-items-center items-center" transition:fade={ defaultFade }>
  <button
    title={title}
    class="relative text-transparent {className} primary_button"
    style="grid-column: 1; grid-row: 1;"
    on:mouseenter={() => currentClass = "text-onprimary"}
    on:mouseleave={() => currentClass = ""}
    on:click={onclick}
  >
    <slot/>
  </button>
  <p3
    class="{currentClass} click-through relative z-80 align-text-top"
    style="grid-column: 1; grid-row: 1;"
  >
    <slot/>
  </p3>
</div>




<!--<div class="relative border rounded-full px-8 py-4 {className}" transition:fade={defaultFade}>
  <button
    title={title}
    on:click={onclick}
  >
    <a href={href}>
      {#if childHTML == ""}
      <p2 class={overrideClasses ? "" : "font-bold"}>
        {title}
      </p2>
      {:else}
        {@html childHTML}
      {/if}
    </a>
  </button>
</div>-->