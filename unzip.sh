#!/bin/bash

unzip_d () {
    zipfile="$1"
    zipdir=${1%.zip}
    unzip -d "$zipdir" "$zipfile"
    rm -rf "$zipfile"
}

for file in 100-unzipped-webpages/*
do
    unzip_d $file
done
