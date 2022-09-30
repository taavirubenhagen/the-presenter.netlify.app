<script lang="ts">
  import { fade, fly } from "svelte/transition";

  //import ChevronUp from "svelte-material-icons/ChevronUp.svelte"
  //import ChevronDown from "svelte-material-icons/ChevronDown.svelte"

	import "../../app.postcss";
	//import { mainContentDefaultFade } from "../../stores";

	import SecondaryButton from "./secondary.svelte";




  export let className = ""
  export let overrideClasses = false

  export let hasUnderline = false
  if (hasUnderline) {
    className += " button_hover_animationD"
    overrideClasses = true
  }

  export let title = ""
  export let href: string = ""
  export let onclick = () => {}


	type tDropdownType = "none" | "all" | "icon"
  export let dropdown: tDropdownType = "none"
  export let items: any = []
  export let forceCollapsed = false




  let expanded = forceCollapsed
</script>




<div class="relative mr-16 {className}"><!--transition:fade={mainContentDefaultFade}>-->
  <div class="flex">
    <button
      title={title}
      on:click={dropdown == "all" ? () => expanded = !expanded : onclick}
    >
      <a  href={dropdown == "all" ? null : href}>
        <p3 class={overrideClasses ? "" : "default_link_button"}>
          {title}
        </p3>
      </a>
    </button>
    <!--{#if dropdown !== "none"}
      <button title={title} on:click={() => expanded = !expanded}>
        {#if expanded}
          <ChevronUp size=24/>
        {:else}
          <ChevronDown size=24/>
        {/if}
      </button>
    {/if}-->
  </div>
  {#if expanded}
    <div class="absolute top-8 -left-2 border-secondary-500 p-2">
      {#each items as item, i}
        <div transition:fly="{{ y: -( i * 8 + 32 + 8 ), duration: 500 }}">
          <div class="h-2"></div>
          <SecondaryButton title={item[0]} href={item[1]}/>
        </div>
      {/each}
    </div>
  {/if}
</div>