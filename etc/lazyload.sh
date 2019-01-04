#!/bin/bash

for filename in ./*/index.js; do
  content=$(<"$filename")
  replace1="${content/src/'data-src'}"
  replace2="${replace1/srcSet/'data-srcset'}"
  replace3="${replace2/"};"/  className: 'lazyload',\n}}"
  result="$replace3;\n"

  # delete file
  rm $filename

  # write file
  printf "$result" >> $filename
done