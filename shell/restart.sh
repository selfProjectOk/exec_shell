#!/bin/bash
function get_base_path(){
    #bash get current file directory
    local DIR;
    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
    echo "$DIR";
}
function get_file_name(){
    #bash get current file name
    local DIR;
    DIR="$( basename "${BASH_SOURCE[0]}" )"
    echo "$DIR";
}
echo "Hello world";
filePath=`get_base_path`
fileName=`get_file_name`
logPath="$filePath/../log"
cd ${logPath}
touch "${"${fileName}"%.sh}.log"