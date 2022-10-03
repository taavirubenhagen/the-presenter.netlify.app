<svelte:window bind:scrollY={scrollY}/>




<script defer lang="ts">

  import { onMount } from 'svelte'
  import { fade, fly } from "svelte/transition"

  import * as scroller from "svelte-scrollto"
  import ChevronDown from "svelte-material-icons/ChevronDown.svelte"
  import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

	import "../.././app.postcss"
  import * as g from "../.././stores"
	import PrimaryButton from "../../components/buttons/primary.svelte";
	import SecondaryButton from "../../components/buttons/secondary.svelte";
	import TitleSection from "../../components/sections/title.svelte";




  let scrollY = 0
  g.scrollYStore.update(_ => scrollY);
  g.scrollYStore.subscribe(value => scrollY = value);




  onMount(() => {})
</script>








<main>
  <TitleSection title="Rethinking&nbsp;<br>presentations." subtitle="Our timeline"/>
  <section class="h-screen"></section>
  
  <section class="absolute z-20 w-full bg-primary grid grid-cols-2 gap-1" style="grid-template-columns: 1fr, 10rem, 1fr;">
    <div class="bg-background flex flex-col items-end" style="">
      <div class="h-screen"></div>
      <div class="h-screen grid"></div>
    </div>
    <div class="border-l-4 bg-background flex flex-col items-start">
      <div class="h-screen"></div>
      <div class="h-screen grid">
        <div class="relative p-8">
          <div class="absolute -top-4 w-6 h-6 border-4 rounded-full bg-background" style="left: -0.875rem;"></div>
          <div>dgxgxdfgxdfg</div>
        </div>
      </div>
    </div>
  </section>
</main>