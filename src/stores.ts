import { writable } from "svelte/store"




export const debug = false;

export const defaultFade =  { duration: 500 } // TODO: Change name to defaultFade
export const defaultCharDuration = 85;




export const isVisibleMenuStore = writable(debug)