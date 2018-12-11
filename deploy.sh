#!/bin/bash
#rm ./*.*~
rm -r /Library/WebServer/Documents/*
cp -r ./* /Library/WebServer/Documents/
cd frontend
npm run build
cp -r ./build/* /Library/WebServer/Documents/
cd ..
chmod -R 755 /Library/WebServer/Documents/*
