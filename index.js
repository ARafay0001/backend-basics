const express = require('express')
const app = express()
require('dotenv').config()
const port = 3000
const data = {
  "login": "ARafay0001",
  "id": 160882252,
  "node_id": "U_kgDOCZbeTA",
  "avatar_url": "https://avatars.githubusercontent.com/u/160882252?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ARafay0001",
  "html_url": "https://github.com/ARafay0001",
  "followers_url": "https://api.github.com/users/ARafay0001/followers",
  "following_url": "https://api.github.com/users/ARafay0001/following{/other_user}",
  "gists_url": "https://api.github.com/users/ARafay0001/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ARafay0001/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ARafay0001/subscriptions",
  "organizations_url": "https://api.github.com/users/ARafay0001/orgs",
  "repos_url": "https://api.github.com/users/ARafay0001/repos",
  "events_url": "https://api.github.com/users/ARafay0001/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ARafay0001/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abdul Rafay Imran",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 36,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2024-02-22T15:10:44Z",
  "updated_at": "2025-10-25T03:06:37Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login or click to signup</h2>")
})
app.get('/github', (req, res) => {
    res.json(data)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
