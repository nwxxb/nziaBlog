+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
link = 'https://example.com/'
summary = 'put your summary here, this will appear on both the index and the show'
tags = ['language', 'framework', 'important-lib']
+++

- tags: only first 5 of the tags will get showed in index, and all of them will get showed in the detail page
- content: you can put content (and there will be a detail page) or remove all the content (and the index list will directly become a link)
