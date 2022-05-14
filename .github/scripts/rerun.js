module.exports = async ({github, context}) => {
  const pr_data = await github.rest.pulls.get({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number
  })

    console.log(pr_data)
  //const labels = pr_data.data.labels.map(e => e.name)
}
