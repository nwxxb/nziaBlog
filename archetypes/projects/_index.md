+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
link = 'https://example.com/'
summary = 'put your summary here, this will appear on both the index and the show'
tags = ['language', 'framework', 'important-lib']
+++

you can put main content for a project with scratchpad here
- tags: only first 5 of the tags will get showed in index, and all of them will get showed in the detail page
