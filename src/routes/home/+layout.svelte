<script lang="ts">
	import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  import Close from "svelte-material-icons/Close.svelte"
  import DotsHorizontal from "svelte-material-icons/DotsHorizontal.svelte"

	import "../.././app.postcss";
	import { debug, defaultFade, isVisibleMenuStore } from "../.././stores";
	import SecondaryButton from "../.././components/buttons/secondary.svelte";
	//import "../_assets/my_face_circle.png"




	export let isMenuAllowed = true
	export let isVisibleMenu = false;




	isVisibleMenuStore.update(_ => isVisibleMenu);
	isVisibleMenuStore.subscribe(value => isVisibleMenu = isMenuAllowed && value);

	type tExpanded = "none" | "more"
	let expanded = "none"




	let scrollY = 0
	$: isY0 = scrollY === 0
	let previousScrollY = scrollY;

	type tHeaderClass = "-top-24" | "top-0"
	function updateHeaderVisibility(y: number): tHeaderClass {
		const dy = scrollY - previousScrollY
		previousScrollY = y
		return dy > 0 ? "-top-24" : "top-0"
	}
	$: headerClass = updateHeaderVisibility(scrollY);


	type tContactButtonClass = "" | "text-onprimary"
	let contactButtonClass: tContactButtonClass = ""




	//$: isMoreButtonVisible = !isVisibleMenu && !isMenuAllowed
	//onMount(() => isMoreButtonVisible = true)
</script>




<svelte:window bind:scrollY={scrollY}/>








<main>
	<div class="flex flex-col items-start overflow-x-hidden">
    <header
      class="
        {headerClass} transition_all duration-1000 delay-1000
        fixed z-10 w-screen h-24 pl-8 md:pl-16 pr-0 py-8 bg-transparent text-oncontainer flex justify-between items-center"
      >
      {#if isVisibleMenu}
        <div class="flex items-center">
          <div class="w-8 h-8 mr-4 rounded-2xl bg-primary" transition:fade={defaultFade}>
            <img src="logo.png" alt="img">
          </div>
          {#if window.innerWidth > 640}
            <SecondaryButton
              dropdown="all"
              hasUnderline={true}
              title="More"
              items={[
                ["Vision", ""],
                ["Contact", ""],
              ]}
            >
              <p3 class='font-bold'>Presenter<p3/>
            </SecondaryButton>
          {:else}
            <SecondaryButton
              dropdown="all"
              title="The Presenter"
              items={[
                ["Vision", ""],
                ["Contact", ""],
              ]}
            />
          {/if}
        </div>
        <div class="flex items-center">
          {#each [
          ] as data, i}
            <SecondaryButton hasUnderline={true} title={data[0]} href={data[1]}/>
          {/each}
        </div>
      {/if}
    </header>
    <slot></slot>
	</div>
</main>