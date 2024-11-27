import { remult } from 'remult';
import type { LayoutLoad } from './$types';
import { TasksController } from 'shared';

export const load = (async ({ fetch }) => {
	//remult.apiClient.httpClient = fetch;
	remult.useFetch(fetch);
	const tasks = await TasksController.findAll();
	console.log('tasks', tasks);
	return {
		user: remult.user
	};
}) satisfies LayoutLoad;
