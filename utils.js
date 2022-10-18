/**
 * Remove labels from all issues of given repositories
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 */
export const getLabels = async (octokit, repository) => {
	const fetchedLabels = [];
	let currentPage = 1;
	let continueFetching = true;

	while (continueFetching) {
		const currentPageFetched = await octokit.rest.issues.listLabelsForRepo({
			owner: repository.owner,
			repo: repository.name,
			per_page: 100,
			page: currentPage,
		});
		const currentFetchedData = currentPageFetched.data;

		fetchedLabels.push(...currentFetchedData);

		if (currentFetchedData.length === 100) {
			currentPage += 1;
		} else {
			continueFetching = false;
		}
	}

	return fetchedLabels;
};
