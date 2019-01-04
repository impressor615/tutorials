#!/bin/bash
# declare an array called array and define 3 vales

path="s3://aptmtr-imgix/landing3"
ext="jpg"
dest="."
while getopts "p:e:d:" o; do
    case "${o}" in
        p)
            path="${path}/${OPTARG}"
            ;;
        e)
            ext=${OPTARG}
            ;;
        d)
            dest=${OPTARG}
            ;;
    esac
done


array=(joon jiwon yong bin bettie chu eun jungno hoo lys casoymilk hyeon ha jeanne bee jessica seji eb)
for i in "${array[@]}"
do
  eval "aws s3 cp "${path}/${i}-normal.${ext} ${dest}""
  eval "aws s3 cp "${path}/${i}-hover.${ext} ${dest}""
  eval "aws s3 cp "${path}/${i}-bg.${ext} ${dest}""
done


