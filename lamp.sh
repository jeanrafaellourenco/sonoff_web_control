#!/usr/bin/bash

ACTION=$1
KEY="Coloque sua chave de api aqui"

[ "${ACTION}" == "" ] && {
    echo -e "\nComando não informado, use ex: ./lamp.sh on/off"
    exit 1
}

WEBHOOK=$(curl --silent https://maker.ifttt.com/trigger/lamp_${ACTION}/with/key/${KEY})
echo -e "${WEBHOOK}\n"
