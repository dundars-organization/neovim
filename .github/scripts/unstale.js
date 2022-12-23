module.exports = async ({github, context}) => {
  const commenter = context.actor
  const issue = await github.rest.issues.get({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
  });
  const author = issue.data.user.login

  if(author === commenter){
    octokit.rest.issues.removeLabel({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      name: 'needs:response',
    });
  }

  console.log(author)
  console.log(commenter)
}
