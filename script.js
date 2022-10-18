// @ts-check

/**
 * Remove labels from all issues of given repositories
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {object} options
 * @param {string} options.repositories One or multiple space-separated repositories in the form of repo-owner/repo-name. repo-owner/* will find all repositories for one owner. * will find all repositories the user has access to. Will prompt for repositories if not set
 */
export async function script(octokit, repository, { repositories }) {}
