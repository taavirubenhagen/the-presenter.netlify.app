// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({ locals }) {
  throw redirect(307, '/home');
}