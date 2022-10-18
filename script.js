// @ts-check

import { getLabels } from "./utils.js"

/**
 * Remove labels from all issues of given repositories
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param { {labels: string} } options Custom user options passed to the CLI
 */
export async function script(octokit, repository, options) {
    const labels = options.labels.split(",")
	const repoLabels = await getLabels(octokit, repository);
	const existingLabels = repoLabels.map((l) => l.name);
	const labelsToBeDeleted = labels.filter(
		(name) => existingLabels.find((label) => label === name),
	);

    if (labelsToBeDeleted.length > 0) {
        await Promise.all(labelsToBeDeleted.map(name => {
            octokit.request("DELETE /repos/{owner}/{repo}/labels/{name}", {
                repo: repository.name,
                owner: repository.owner.login,
                name,
            })
        }))
		octokit.log.info(`Labels ${labels} removed from ${repository.name}`);
    }
}
