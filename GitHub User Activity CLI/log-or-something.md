# Get all type of event type

```javascript
const data = [];

const res = await fetch("https://api.github.com/users/kamranahmedse/events", {
    headers: {
        "accept": "application/vnd.github+json"
    }
});
const json = await res.json();

json.forEach((d) => {
    data.push(d.type);
})

console.log(new Set(data))
```

# List of actions and explanation from doc

```javascript
// https://docs.github.com/en/rest/using-the-rest-api/github-event-types?apiVersion=2022-11-28
[
  'PushEvent', // Commiting push on a repo
  'WatchEvent', // When someone stars a repository
  'IssueCommentEvent', // Activity related to an issue or pull request comment
  'IssuesEvent', // Activity related to an issue
  'PullRequestEvent', // Activity related to pull requests
  'PullRequestReviewEvent', // Activity related to pull request reviews
  'PullRequestReviewCommentEvent' // Activity related to pull request review comments in the pull request's unified diff
]
```