// @ts-check

import { getLabels } from "./utils";

/**
 * Remove labels from all issues of given repositories
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param { {labels: string[]} } options Custom user options passed to the CLI
 */
export async function script(octokit, repository, { labels }) {
	const { owner, name } = repository;
	const repoLabels = await getLabels(octokit, repository);
	const labelNames = repoLabels.map((l) => l.name);
	const newLabels = labelNames.filter(
		(name) => !labels.find((label) => label === name),
    );
    let resultLabels = [];
    if (repoLabels.length != newLabels.length) {
        resultLabels = await octokit.rest.issues.deleteLabel({
            repo: repository.name,
            owner,
            name,
        });
        octokit.log.info(`Labels ${labels} removed from ${repository.name}`);
    }
    return resultLabels;
}
