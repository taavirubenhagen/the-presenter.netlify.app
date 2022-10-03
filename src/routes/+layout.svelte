<script lang="ts">
  import { get, writable } from "svelte/store"
	import { onMount } from "svelte"
  import { fade, fly } from "svelte/transition";

  import Close from "svelte-material-icons/Close.svelte"
  import DotsHorizontal from "svelte-material-icons/DotsHorizontal.svelte"

	import "../app.postcss";
	import * as g from "../stores";
	import SecondaryButton from "../components/buttons/secondary.svelte";
	//import "../_assets/my_face_circle.png"




	export let isMenuAllowed = true
	export let isVisibleMenu = true;




	g.isVisibleMenuStore.update(_ => isVisibleMenu);
	g.isVisibleMenuStore.subscribe(value => isVisibleMenu = isMenuAllowed && value);

	type tExpanded = "none" | "more"
	let expanded = "none"




	let scrollY = 0
	$: isY0 = scrollY === 0
	let previousScrollY = scrollY;

  g.scrollYStore.update(_ => scrollY);
  g.scrollYStore.subscribe(value => scrollY = value);




	type tHeaderClass = "-top-24" | "top-0"
	function updateHeaderVisibility(y: number): tHeaderClass {
		const dy = scrollY - previousScrollY
		previousScrollY = y
		return dy > 0 ? "-top-24" : "top-0"
	}
	$: headerClass = updateHeaderVisibility(scrollY);


	type tContactButtonClass = "" | "text-onprimary"
	let contactButtonClass: tContactButtonClass = ""




  onMount(() => {
    g.wih.update(_ => window.innerHeight)
  })
</script>




<svelte:window bind:scrollY={scrollY}/>








<main>
	<div class="flex flex-col items-start overflow-x-hidden">
    <header
      class="
        {headerClass} transition_all duration-1000 delay-1000
        fixed z-40 w-screen h-24 pl-8 md:pl-12 pr-0 py-8 bg-transparent text-oncontainer flex justify-between items-center"
    >
      {#if isVisibleMenu}
        <div class="flex items-center">
          <div class="w-8 h-8 mr-4 rounded-2xl bg-primary">
            <img src="logo.png" alt="img">
          </div>
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
        </div>
        <div class="flex items-center">
          {#each [
          ] as data, i}
            <SecondaryButton hasUnderline={true} title={data[0]}>
              <a href={data[1]}>
                <p3>{data[0]}</p3>
              </a>
            </SecondaryButton>
          {/each}
        </div>
      {/if}
    </header>
    <slot></slot>
    <footer class="self-end w-full mt-16 border-t border-primary p-8 sm:p-16 flex flex-col sm:grid grid-cols-3 gap-8">
      <div class="flex flex-col">
        <h6>Website</h6>
        <SecondaryButton>
          <p4>Imprint</p4>
        </SecondaryButton>
      </div>
      <div class="flex flex-col">
        <h6>Mobile apps</h6>
        <SecondaryButton>
          <p4>Imprint</p4>
        </SecondaryButton>
      </div>
      <div class="flex flex-col">
        <h6>Other services</h6>
        <SecondaryButton>
          <p4>Imprint</p4>
        </SecondaryButton>
      </div>
      <div></div>
      <div></div>
      <div class="opacity-25 border-b border-primary col-start-1 col-end-4"></div>
      <div class="col-start-1 col-end-4 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div>
          <p4>©2022 Taavi Rübenhagen (Developer)</p4>
          <div class="h-4 sm:h-0"></div>
          <p4>Distributor: René Rübenhagen</p4>
        </div>
        <div class="h-16 sm:h-0"></div>
        <SecondaryButton>
          <p3>Imprint</p3>
        </SecondaryButton>
      </div>
    </footer>
	</div>
</main>