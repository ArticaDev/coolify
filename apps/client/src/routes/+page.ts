import { error } from '@sveltejs/kit';
import { trpc } from '$lib/store';
import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import Cookies from 'js-cookie';
export const ssr = false;

export const load: LayoutLoad = async ({ url }) => {
	try {
		return await trpc.dashboard.resources.query();
	} catch (err) {
		throw error(500, {
			message: 'An unexpected error occurred, please try again later.'
		});
	}
};
