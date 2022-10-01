<script defer lang="ts">

  import { onMount } from 'svelte'
  import { fade, fly } from "svelte/transition"

  import * as scroller from "svelte-scrollto"
  import ChevronDown from "svelte-material-icons/ChevronDown.svelte"
  import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

	import "../.././app.postcss";
  import * as g from "../.././stores"

	import PrimaryButton from "../../components/buttons/primary.svelte";
	import SecondaryButton from "../../components/buttons/secondary.svelte";




  const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))
  const sleepSync = (delay: number) => {
    const end = new Date().getTime() + delay;
    while (new Date().getTime() < end) {}
  }





  // Function for typewriting transition. Values are in ms.   // TODO: Implement delay; Make parameters optional  // TODO: Move to stores.ts
  function typewrite(node: HTMLElement, { delay = 0, charDuration = g.defaultCharDuration }: any): __sveltets_2_SvelteTransitionReturnType {
    const text = node.textContent!
    const duration = text.length * charDuration
    return {
      duration: duration,
      tick:(t: number) => {
        node.textContent = text.slice(0, Math.floor(text.length * t))
      }
    }
  }




  const subheaderText = "I build and distribute blazingly fast, bleeding-edge cross-platform apps."
  
  
  
  
  // TODO: Change back to false
  
  let isVisibleHeader1 = g.debug;
  let isVisibleHeader2 = g.debug;
  let isVisibleSubheader = g.debug;
  let isVisibleRest = g.debug || true;




  onMount(() => {
    let currentDelay = 0
    currentDelay += 500
    setTimeout(() => isVisibleHeader1 = true, currentDelay)
    currentDelay += "Every presentation tool\n".length * g.defaultCharDuration
    setTimeout(() => isVisibleHeader2 = true, 0)
    currentDelay += "in one app.\n".length * ( 0.75 * g.defaultCharDuration ) + 10 * g.defaultCharDuration
    setTimeout(() => isVisibleSubheader = true, currentDelay)
    setTimeout(
      () => {
        g.isVisibleMenuStore.update(_ => true)
        isVisibleRest = true
      },
      g.debug || true ? 0 : subheaderText.length * ( g.defaultCharDuration / 5 ) + 40 * g.defaultCharDuration)
  })
</script>








<div class="size_screen -z-20 absolute flex_col_center">
  <div>
    <img class="mr-16" style="height: 36rem;" src="pm-mockup-dark-home.png" alt="The Presentation Master.">
  </div>
</div>
<div class="max-h-screen flex flex-col items-center">
  <div class="size_screen flex_col_center">
    {#if isVisibleHeader2}
      <h1 transition:fade={g.defaultFade}>Every presentation tool<br/>in one app.</h1>
    {:else}
      <!-- svelte-ignore a11y-missing-content -->
      <h1></h1>
    {/if}
    <!--
      Blazingly fast
      Bleeding-Edge
      Next-gen
      Holistic approach
      Highly interactive
    -->
  </div>
  {#if isVisibleRest}
    <button
      title="Scroll down"
      class="scroll_down_button relative bottom-24 right-8 opacity-20"
      transition:fade={g.defaultFade}
      on:click={() => scroller.scrollTo({ offset: window.innerHeight, duration: 1000 })}
    >
      <ChevronDown size=64 color="white"/>
    </button>
  {/if}
</div>


<div class="size_screen -z-20 absolute top-full flex_col_center">
  <div>
    <img class="mr-16" style="height: 36rem;" src="pm-mockup-dark-home.png" alt="The Presentation Master.">
  </div>
</div>
<div class="max-h-screen flex flex-col items-center">
  <div class="size_screen flex_col_center">
    <h1 transition:fade={g.defaultFade}>The Presenter.</h1>
  </div>
  {#if isVisibleRest}
    <button
      title="Scroll down"
      class="scroll_down_button relative bottom-24 right-8 opacity-20"
      transition:fade={g.defaultFade}
      on:click={() => scroller.scrollTo({ offset: 2 * window.innerHeight, duration: 1000 })}
    >
      <ChevronDown size=64 color="white"/>
    </button>
  {/if}
</div>


<div class="size_screen -z-20 absolute" style="top: calc(2 * 100% - 4rem)">
  <div>
    <!--<img class="mt-24 mr-16" style="height: 36rem;" src="" alt="The Presentation Master.">-->
  </div>
</div>
<div class="max-h-screen flex flex-col items-center">
  <div class="size_screen flex flex-col justify-evenly">
    <div></div>
    <div class="px-48 text-justify">
      <h2 transition:fade={g.defaultFade}>The Presenter&nbsp;</h2>
      <p1>
        is an holistic presentation assistant for any device that functions as
        remote control for your PowerPoint presentation, shows your speaker notes, vibrates when you reach your time limit and much more.
      </p1>
    </div>
    <div class="px-48 flex justify-evenly items-center">
      <PrimaryButton title="Become Tester">
        <p2 class="font-bold">Become Tester</p2>
      </PrimaryButton>
      <SecondaryButton hasUnderline={true} title="View Roadmap">
        <p2>View Roadmap</p2>
      </SecondaryButton>
      <SecondaryButton hasUnderline={true} title="View Roadmap">
        <p2>Read FAQ</p2>
      </SecondaryButton>
    </div>
  </div>
  {#if isVisibleRest}
    <button
      title="Scroll down"
      class="scroll_down_button relative bottom-24 right-8 opacity-20"
      transition:fade={g.defaultFade}
      on:click={() => scroller.scrollTo({ offset: 3 * window.innerHeight, duration: 1000 })}
    >
      <ChevronDown size=64 color="white"/>
    </button>
  {/if}
</div>


<div class="size_screen -z-20 absolute" style="top: calc(3 * 100% - 4rem)">
  <div class="h-full absolute right-0 flex_col_center">
    <img class="h-full mt-24" src="pm_mockup_video_landing.png" alt="The Presentation Master.">
  </div>
</div>
<div class="max-h-screen flex flex-col items-center">
   <div class="size_screen flex flex-col">
    <div>
      <h2 transition:fade={g.defaultFade}>The Presentation Master...</h2>
      <div class="h-8"></div>
      <p1>
        <br>
        ...is the minimalist forerunner for The Presenter.<br>
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
          <PrimaryButton title="Download Windows server">
            <p2 class="font-bold">Windows (Required for remote control)</p2>
          </PrimaryButton>
        </div>
      </div>
    </div>
  </div>
  {#if isVisibleRest}
    <button
      title="Scroll down"
      class="scroll_down_button relative bottom-24 right-8 opacity-20"
      transition:fade={g.defaultFade}
      on:click={() => scroller.scrollTo({ offset: 3 * window.innerHeight, duration: 1000 })}
    >
      <ChevronDown size=64 color="white"/>
    </button>
  {/if}
</div>


<div class="size_screen">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
    {#each
      [
        [
          "The Presentation Master.",
          [
            "Every presentation tool in one app.",
            "Remote control, timer, speaker notes and much more, directly on your phone.",
          ],
        ],
        [
          "The Presenter.",
          [
            "Yes, Presentation Master can be even better. Sign up for Beta testing now.",
          ],
          //"There are many counter apps in the app stores to count pushups, votes, rounds, anything;&nbsp but none of them are designed for humans.&nbsp The Simplest counter is as simple as possible for maximum focus."
        ],
      ]
      as texts, _
    }
    <div
      class="
        border border-gray-500 rounded-lg p-8
        flex flex-col
      "
    >
      <div class="flex justify-center">
        <button title={texts[0].toString()}>
          <a href={texts[1].toString()}>
            <h4 class="text-center">{texts[0]}</h4>
          </a>
        </button>
      </div>
      <div class="h-4"></div>
      {#each texts[1] as paragraph}
        <p1>{paragraph}</p1>
      {/each}
    </div>
    {/each}
  </div>
  {#if isVisibleRest}
    <button
      title="Scroll down"
      class="scroll_down_button relative bottom-24 opacity-20 w-full"
      transition:fade={g.defaultFade}
      on:click={() => scroller.scrollTo({ offset: window.outerHeight, duration: 1000 })}
    >
      <ChevronDown size=64 color="white"/>
    </button>
  {/if}
</div>


<div class="size_screen default_margin flex flex-col justify-start items-start">
  <button
    title="Projects"
    transition:fade={g.defaultFade}
    on:click={() => {}}
  >
    <a class="clickable_headline" href="/projects">
      <h2>Projects</h2>
      <ChevronRight size=64 color="white"/>
    </a>
  </button>
  <div class="h-16"></div>
  <div
    class="inner_size_screen grid gap-8"
    style="
      min-height: 0;
      grid-template-columns: repeat(auto-fit, minmax(400px, calc(( 100vw - 2 * 4rem - 2rem ) / 2)));
    "
  >
    {#each
      [
        [
          "The Presentation Master",
          [
            "Every presentation tool in one app.",
            "Remote control, timer, speaker notes and much more, directly on your phone.",
          ],
        ],
        [
          "The Simplest Counter",
          [
            "Count anything. As simple as possible.",
          ],
          //"There are many counter apps in the app stores to count pushups, votes, rounds, anything;&nbsp but none of them are designed for humans.&nbsp The Simplest counter is as simple as possible for maximum focus."
        ],
        [
          "Tavy Components for Flutter",
          [
            "Custom dart functions and flutter widgets designed to simplify and standardize the development of my Flutter apps.",
          ],
        ],
        [
          "Personal Website",
          [
            "You see it here.",
          ],
          //"There are many counter apps in the app stores to count pushups, votes, rounds, anything;&nbsp but none of them are designed for humans.&nbsp The Simplest counter is as simple as possible for maximum focus."
        ],
      ]
      as texts, _
    }
    <div
      class="
        border border-gray-500 rounded-lg p-8
        flex flex-col
      "
    >
      <div class="flex justify-center">
        <button title={texts[0].toString()}>
          <a href={texts[1].toString()}>
            <h4 class="text-center">{texts[0]}</h4>
          </a>
        </button>
      </div>
      <div class="h-4"></div>
      {#each texts[1] as paragraph}
        <p1>{paragraph}</p1>
      {/each}
    </div>
    {/each}
  </div>
</div>