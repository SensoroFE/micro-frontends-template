#!/bin/sh

yarn build

PWD=`pwd`
NGINX_DIR_PATH="/Users/king/Desktop/nginx-server";

dirs=$(ls "$PWD/packages")
for dir in ${dirs}
do
    echo  "release --- $dir"
    rm -rf $NGINX_DIR_PATH/$dir
    mkdir $NGINX_DIR_PATH/$dir
    cp $PWD/packages/$dir/dist/*   $NGINX_DIR_PATH/$dir
done