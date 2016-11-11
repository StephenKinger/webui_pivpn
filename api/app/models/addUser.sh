#!/bin/sh
# Create OVPN Client through pivpn

addUser {

    # Override key def
    touch "${NAME}_creating"

    #Build the client key
    expect << EOF
    set timeout 90
    spawn  pivpn add
    expect "Enter a Name for the Client:  " { send "${NAME}\r" }
    expect "Enter the password for the client:  " { send "${PASSWD}\r" }
    expect "Enter the password again to verify:  " { send "${PASSWD}\r" }
    expect eof
EOF

    rm "${NAME}_creating"
}

if [[ $# -ne 2 ]]; then
    echo "Usage is ./addUser.sh <Name> <Passwd>"
    exit -1
fi


NAME=$1
PASSWD=$2

addUser
