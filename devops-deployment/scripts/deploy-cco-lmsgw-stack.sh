#!/bin/bash

# colors
red="\e[1;31m"
blue="\e[1;34m"
no_color="\e[0m"

# function to display errors in RED color
displayError() {
    error=$1
    echo -e -n $red
    echo -n \-\>$error
    echo -e $no_color
}

# exit function for erroneous executions
exitFunc() {
    exit_code=$1
    if [ $exit_code -ne 0 ]; then
        displayError "Error occured :("
    fi
    exit $exit_code
}


# activation of cco_lmsgw_v12 nodeenv
nodeenv_dir=~/node_env/cco_s3_deploy
if [ ! -d $nodeenv_dir ]; then
    displayError "nodeenv - not set up! Please create ccco_s3_deploy."
    exit 1
fi
echo -e $blue\===Activating nodeenv===$no_color
source $nodeenv_dir/bin/activate

# Check node version
node -v

echo "cco_s3_deploy nodeenv activated!"

# deployment of NAS Agent Lambda GW
echo -e $blue\===S3 Serverless Deployment===$no_color
if [ "$dep_nas" = true ]; then
    cd cco_s3_deploy_package/simple-calculator
   
    sls deploy || exitFunc $?
else
    echo "Skipped"
fi

# deactivation of nodeenv
deactivate_node
