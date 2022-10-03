<svelte:window bind:scrollY={scrollY}/>




<script defer lang="ts">

  import { onMount } from 'svelte'
  import { fade, fly } from "svelte/transition"

  import Saos from "saos"
  import * as scroller from "svelte-scrollto"
  import ChevronDown from "svelte-material-icons/ChevronDown.svelte"
  import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

	import "../.././app.postcss";
  import * as g from "../.././stores"
	import PrimaryButton from "../../components/buttons/primary.svelte";
	import SecondaryButton from "../../components/buttons/secondary.svelte";
	import TitleSection from "../../components/sections/title.svelte";




  let wih: number



  
  type tBlurClass = "hidden" | "blur-0" | "blur-sm" | "blur" | "blur-md" | "blur-lg" | "blur-xl" | "blur-2xl" | "blur-3xl"
  function updateImage1Blur(y: number, firstY = 0, secondY = wih): tBlurClass {
    const range = secondY - firstY
    //return "blur-0"
    if (y < range * 0.1) return "blur-3xl"
    if (y < range * 0.3) return "blur-2xl"
    if (y < range * 0.5) return "blur-xl"
    if (y < range * 0.65) return "blur-lg"
    if (y < range * 0.8) return "blur-md"
    if (y < range * 0.9) return "blur"
    if (y < range * 0.95) return "blur-sm"
    if (y <= range) return "blur-0"
    if (y > range) return "blur-0"
    return "hidden"
    if (y < range * 0.1) return "blur-0"
    if (y < range * 0.3) return "blur-sm"
    if (y < range * 0.5) return "blur"
    if (y < range * 0.65) return "blur-md"
    if (y < range * 0.8) return "blur-lg"
    if (y < range * 0.9) return "blur-xl"
    if (y < range * 0.95) return "blur-2xl"
    if (y <= range) return "blur-3xl"
    if (y > range) return "blur-3xl"
    return "blur-0"
  }
  /*function updateImage1Opacity(y: number, firstY = 0, secondY = window.innerHeight) {
    const range = secondY - firstY
    const dezArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let n: number in dezArr) {
      if (y < range * 2 * n / 10) return `opacity-${n - 1}0`
    }
    if (y < range * 0.1) return "blur-3xl"
    if (y < range * 0.3) return "blur-2xl"
    if (y < range * 0.5) return "blur-xl"
    if (y < range * 0.65) return "blur-lg"
    if (y < range * 0.8) return "blur-md"
    if (y < range * 0.9) return "blur"
    if (y < range * 0.95) return "blur-sm"
    if (y <= range) return "blur-0"
    if (y > range) return "blur-0"
    return "hidden"
  }*/
  $: imageClass1 = `landing_image fixed ${updateImage1Blur(scrollY, 1 * wih)}`
  $: isImage1Visible = scrollY < 0.9 * wih

  let scrollY = 0
  g.scrollYStore.update(_ => scrollY);
  g.scrollYStore.subscribe(value => scrollY = value);




  onMount(() => {
    wih = window.innerHeight
  })
</script>








<main>
  <div class="size_screen absolute -z-10 -mt-16 md:mt-16 flex_col_center">
    {#if isImage1Visible}
      <div transition:fade={g.defaultFade} class={imageClass1}>
        <img
          src="pm-mockup-dark-home.png"
          alt="The Presentation Master."
          class="landing_image"
        >
      </div>
    {/if}
  </div>
  
  
  <TitleSection title="Every presentation tool<br>in one app."/>
  
  
  <TitleSection index={2} hasAnimation={true}/>
  
  
  <div class="size_screen absolute -z-20 -mt-16 md:mt-16" style="top: calc(2 * 100% - 4rem)">
    <div>
      <!--<img class="mt-24 mr-16" style="height: 36rem;" src="" alt="The Presentation Master.">-->
    </div>
  </div>
  <div class="md:max-h-screen flex flex-col items-center">
    <Saos once={true} animation={g.genDefaultScrollBottom(1000)}>
      <div class="size_screen flex flex-col sm:justify-evenly">
        <div></div>
        <div class="sm:mx-48 text-justify">
            <div class="h-8 sm:h-0"></div>
            <h2>The Presenter&nbsp;</h2>
            <p1>
              is an holistic presentation assistant for any device that functions as
              remote control for your PowerPoint presentation, shows your speaker notes, vibrates when you reach your time limit and much more.
              The main version is currently in development; scroll down to see what we already built.
            </p1>
        </div>
        {#if wih < 640}
          <div class="h-8"></div>
        {/if}
        <div class="sm:mx-48 flex flex-col sm:flex-row justify-evenly items-center">
          <PrimaryButton href="me" title="Become Tester">
            <p2 class="font-bold">Become Tester</p2>
          </PrimaryButton>
          <div class="h-8 sm:h-0"></div>
          <SecondaryButton hasUnderline={true} title="View Roadmap">
            <a href="/roadmap">
              <p2>View Roadmap</p2>
            </a>
          </SecondaryButton>
          <div class="h-8 sm:h-0"></div>
          <SecondaryButton hasUnderline={true} title="VRead FAQ">
            <p2>Read FAQ</p2>
          </SecondaryButton>
        </div>
      </div>
    </Saos>
    <button
      title="Scroll down"
      class="scroll_down_button relative bottom-24 right-8 opacity-20"
      on:click={() => scroller.scrollTo({ offset: 3 * window.innerHeight, duration: 1000 })}
    >
      <ChevronDown size=64 color="white"/>
    </button>
  </div>
  
  
  <div class="size_screen -z-20 md:absolute" style="top: calc(3 * 100% - 4rem)">
    <div class="h-full absolute right-0 flex_col_center">
      <img class="h-full mt-24" src="pm_mockup_video_landing.png" alt="The Presentation Master.">
    </div>
  </div>
  <Saos once={true} animation={g.defaultScrollBottom}>
  <div class="max-h-screen flex flex-col items-center">
     <div class="size_screen flex flex-col">
      <div>
        <h2>The Presentation Master...</h2>
        <div class="h-8"></div>
        <p1>
          <br>
          ...is the current, minimalist version of The Presenter.<br>
          <br>
          Every presentation tool in one app.<br>
          Remote control, timer, speaker notes and much more, directly on your phone.
        </p1>
        <div class="pt-32 flex flex-col">
          <div class="flex items-center">
            <PrimaryButton title="Download for Android">
              <div class="w-24 flex_row_center">
                <p2 class="font-bold">Android</p2>
              </div>
            </PrimaryButton>
            <div class="w-8"></div>
            <PrimaryButton title="Download for iOS">
              <div class="w-24 flex_row_center">
                <p2 class="font-bold">iOS</p2>
              </div>
            </PrimaryButton>
            <div class="w-16"></div>
            <SecondaryButton hasUnderline={true} title="Read FAQ">
              <p2>Read FAQ</p2>
            </SecondaryButton>
          </div>
          <div class="h-8"></div>
          <div class="flex items-center">
            <PrimaryButton title="Download Windows server" href="https://tavy-ai.web.app">
              <p2 class="font-bold">Windows (Required for remote control)</p2>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
    <button
      title="Scroll down"
      class="scroll_down_button relative bottom-24 right-8 opacity-20"
      on:click={() => scroller.scrollTo({ offset: 4 * window.innerHeight, duration: 1000 })}
    >
      <ChevronDown size=64 color="white"/>
    </button>
  </div>
  </Saos>
</main>