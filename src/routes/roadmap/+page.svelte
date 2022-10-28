<svelte:window bind:scrollY={scrollY}/>




<script lang="ts">

  import { onMount } from 'svelte'

  import * as scroller from "svelte-scrollto"

	import "../.././app.postcss"
  import * as g from "../.././stores"
	import PrimaryButton from "../../components/buttons/primary.svelte";
	import SecondaryButton from "../../components/buttons/secondary.svelte";
	import Point from "./timeline_point.svelte"
	import TitleSection from "../../components/sections/title.svelte"




  let scrollY = 0
  g.scrollYStore.update(_ => scrollY);
  g.scrollYStore.subscribe(value => scrollY = value);




  onMount(() => {})
</script>








<main class="flex_col_center">
  <TitleSection title="Rethinking&nbsp;<br>presentations." subtitle="Our timeline"/>
  <section class="h-screen"></section>
  
  <!--<section class="absolute z-20 w-4/5 -ml-16 bg-primary grid grid-cols-2 gap-2">    <!- mt-4 ->
    <div class="bg-background" style="">
      <div class="h-screen"></div>
      <div class="h-screen grid">
        <Point left={true} date="10/2022" title="Publishing website">
          <p2 class="text-secondary-400">We will publish this website.</p2>
        </Point>
        <div></div>
        <Point left={true}>left</Point>
        <div></div>
        <!-<Point left={true}>left</Point>->
      </div>
    </div>
    <div class="bg-background">
      <div class="h-screen"></div>
      <div class="h-screen grid">
        <div></div>
        <Point>vdfgdfgd</Point>
        <div></div>
        <Point>vdfgdfgd</Point>
        <!-<Point>vdfgdfgd</Point>->
      </div>
    </div>
  </section>-->
  <!--<section class="absolute z-20 size_screen flex flex-col items-stretch">
    <div class="h-screen"></div>
    <Point>vyydfvydfy</Point>
    <Point left={true}>vyydfvydfy</Point>
    <Point>vyydfvydfy</Point>
  </section>-->
  <section class="absolute z-20 top-0 size_screen bg-background grid" style="grid-template-columns: 1fr 10px 1fr">
    <div class="h-8"></div>
    <div class="bg-primary" style="grid-row: span 100;"></div>
    <Point date="10/2022" title="Publishing website">
      <span slot="description">
        <p2 class="text-secondary-400">We will publish this website.</p2>
      </span>
    </Point>
    <Point left={true}>ysdfysdfysd</Point>
    <div></div>
    <div></div>
    <Point>ysdfysdfysd</Point>
    <Point left={true}>ysdfysdfysd</Point>
    <div></div>
    <div></div>
    <Point date="02/2023" title="Beta launch">
      <span slot="description">
        <p2 class="text-secondary-400">Launch of the public test version of the Presentation Master 2.</p2>
      </span>
      <span slot="buttons">
        <PrimaryButton href="/beta" title="Become Tester">
          <p2 class="font-bold">Sign up for testing</p2>
        </PrimaryButton>
      </span>
    </Point>
    <Point left={true}>ysdfysdfysd</Point>
    <div></div>
    <div></div>
    <Point>ysdfysdfysd</Point>
    <Point left={true}>ysdfysdfysd</Point>
    <div></div>
    <div></div>
    <Point>ysdfysdfysd</Point>
    <Point left={true}>ysdfysdfysd</Point>
    <div></div>
    <div></div>
  </section>
</main>








<style lang="postcss">
  .timeline_grid_areas {
    display: grid;
    grid-template-areas: "l1 m r1";
  }
</style>