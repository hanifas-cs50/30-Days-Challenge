// const data = [];

const res = await fetch("https://api.github.com/users/kamranahmedse/events", {
    headers: {
        "accept": "application/vnd.github+json"
    }
});
const json = await res.json();

json.forEach((d) => {
    // data.push(d);
    console.log(d, "\n")
})

// console.log(data.filter(d => d.type == "PullRequestReviewCommentEvent"));

// if type and repo.name (and payload.action if available) same then add and or increase the count

// PushEvent
// type = "PushEvent"
// repo.name

// WatchEvent
// type = "WatchEvent"
// repo.name

// IssueCommentEvent
// type = "IssueCommentEvent"
// repo.name

// IssuesEvent
// type = "IssuesEvent"
// repo.name
// payload.action

// PullRequestEvent
// type = "PullRequestEvent"
// repo.name
// payload.action

// PullRequestReviewEvent
// type = "PullRequestReviewEvent"
// repo.name
// payload.action

// PullRequestReviewCommentEvent
// type = "PullRequestReviewCommentEvent"
// repo.name

// https://docs.github.com/en/rest/using-the-rest-api/github-event-types?apiVersion=2022-11-28
// [
//   'PushEvent', // Commiting push on a repo
//   'WatchEvent', // When someone stars a repository
//   'IssueCommentEvent', // Activity related to an issue or pull request comment
//   'IssuesEvent', // Activity related to an issue
//   'PullRequestEvent', // Activity related to pull requests
//   'PullRequestReviewEvent', // Activity related to pull request reviews
//   'PullRequestReviewCommentEvent' // Activity related to pull request review comments in the pull request's unified diff
// ]