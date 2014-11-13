Midwest JS Website
==================

Source code for midwestjs.com

Setup
-----
The application requires MongoDB and you can set the connection string in `models/mongo-connection.js` for your development environment. Currently the only part that uses Mongo though is the call for papers.

Run
---

```
npm install
node app
```

Notes
-----
The talks data is static (not pulled from Mongo) right now:

- Add line in `data/talks.js` for the speaker and talk
- Add the abstract markdown in `data/talk-abstracts/{name-of-talk}.md`
- Add the speaker's picture in `public/images/speakers/{name-of-speaker}.jpg`

Note, the name of the speaker and title of the talk should be the same as what's used in these file paths with the following changes:

- Lowercase
- Separated by dashes
- Remove non-file-safe characters and dots (.)
