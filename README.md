website
=======

Source code for midwestjs.com

```
node app
```

To add a talk:

1. Add line in `data/talks.js` for the speaker and talk
1. Add the abstract markdown in `data/talk-abstracts/{name-of-talk}.md`
1. Add the speaker's picture in `public/images/speakers/{name-of-speaker}.jpg`

Note, the name of the talk and speaker should the same as the talk/speaker with the following changes:

- Lowercase
- Separated by dashes
- Remove non-file-safe characters and dots (.)