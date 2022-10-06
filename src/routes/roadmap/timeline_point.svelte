<script defer lang="ts">
  import "../.././app.postcss"




  export let left = false

  export let date = ""
  export let title = ""
</script>








<div class="{left ? "mr-8 border border-r-8 border-r-background" : "ml-8 border border-l-8 border-l-background"} rounded p-8 flex flex-col items-{left ? "end" : "start"}">   <!-- relative -my-4 -->
  <p1>{date}</p1>
  <div class="h-2"></div>
  <h4>{title}</h4>
  <div class="h-6"></div>
  <slot name="description"/>
  {#if $$slots.buttons != null}
    <div class="h-16"></div>
    <div class="flex">
      <slot name="buttons"/>
    </div>
    <div class="h-4"></div>
  {/if}
</div>