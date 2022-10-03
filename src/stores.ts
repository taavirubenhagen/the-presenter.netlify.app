import { writable } from "svelte/store"




export const debug = false;

export const defaultFade =  { duration: 500 }
export const defaultCharDuration = 85;

export function genDefaultScrollBottom(delay = 500): string {
  return `scroll_bottom_fade 1s ease-out ${delay}ms both`
}
export const defaultScrollBottom = genDefaultScrollBottom()
export const defaultScrollFade = "scroll_fade 1s ease-out 1000ms both"




export const wih = writable(0)




export const scrollYStore = writable(0)


export const isVisibleMenuStore = writable(debug)