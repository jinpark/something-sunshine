##How to add a new post

TLDR: Look at https://raw.githubusercontent.com/jinpark/something-sunshine/gh-pages/_posts/2015-01-28-welcome-to-jekyll.markdown?token=ABwyBIXHQcKm36PHHe0qebenp9LOoNegks5U0kcswA%3D%3D as an example

https://github.com/blog/1327-creating-files-on-github

Naming convention
`YYYY-MM-DD-episode-title.markdown`

#Front matter
```
---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-01-28 15:24:00
categories: jekyll update
soundcloud_id: 42618806
---
```

* `layout` is always `post`
* `title` is title of the episode
* `data` is when you posted. Please keep the same date/time conventions
* `categories` is the space separated list of categories that we can later use for filtering
* `soundcloud_id` is the track id from soundcloud. There is no simple way to get it but currently, the _easiest_ way is to go to the share -> embed on the track and it will copy something like 
```
<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/42618806&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
```
`...tracks/TRACKID&amp;auto_play=false...` is where the track ID is. If this is not added on the post, there will be an error on the soundcloud embed.

The rest of the post will be in markdown format. It is a fairly simple (this post was written in markdown!) markup language. Github does a much better job than me in explaining it

https://help.github.com/articles/github-flavored-markdown/

Check out any of the posts in the `_posts` folder to see an example post and feel free to copy and paste to use as a template.

Thanks and contact me on slack if you have any questions!
