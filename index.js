require('dotenv').config()
const express=require ('express')
const app=express()
const port=3000

const github= {
    "login": "ShreYansHSachan11",
    "id": 113329941,
    "node_id": "U_kgDOBsFHFQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/113329941?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ShreYansHSachan11",
    "html_url": "https://github.com/ShreYansHSachan11",
    "followers_url": "https://api.github.com/users/ShreYansHSachan11/followers",
    "following_url": "https://api.github.com/users/ShreYansHSachan11/following{/other_user}",
    "gists_url": "https://api.github.com/users/ShreYansHSachan11/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ShreYansHSachan11/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ShreYansHSachan11/subscriptions",
    "organizations_url": "https://api.github.com/users/ShreYansHSachan11/orgs",
    "repos_url": "https://api.github.com/users/ShreYansHSachan11/repos",
    "events_url": "https://api.github.com/users/ShreYansHSachan11/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ShreYansHSachan11/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Shreyansh Sachan",
    "company": "DSC-AKGEC",
    "blog": "https://github.com/ShreYansHSachan11",
    "location": "Ghaziabad, India",
    "email": null,
    "hireable": null,
    "bio": "Student at AKGEC, Ghaziabad || Competitive Programming Enthusiast || Web Developer @dsc-akgec",
    "twitter_username": null,
    "public_repos": 32,
    "public_gists": 0,
    "followers": 5,
    "following": 4,
    "created_at": "2022-09-12T05:34:29Z",
    "updated_at": "2024-09-18T14:18:30Z"
  }

app.get('/',(req,res)=>{
    res.send("HEllo Backend")
})

app.get('/github',(req,res)=>{
    res.json(github)
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at my backend</h1>')
})

app.get('/chai',(req,res)=>{
    res.send("chai peelo guys")
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`)
})
