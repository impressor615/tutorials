regex=""
icon=false
width=100
while getopts "w:r:i" o; do
    case "${o}" in
        r)
            regex=${OPTARG}
            ;;
        i)
            icon=true
            ;;
        w)
            width=${OPTARG}
            ;;
    esac
done


for file in ./*
do
  filename=$(basename ${file})
  if [[ $file = *${regex}* ]]; then
    if [ $icon = true ]; then
      eval "~/etc/convert_image/convert.sh -i -w ${width} ${filename}"
      continue
    fi
    eval "~/etc/convert_image/convert.sh -w ${width} ${filename}"
  fi
done

