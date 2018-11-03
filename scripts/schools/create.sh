#!/bin/bash

API="http://localhost:4741"
URL_PATH="/schools"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "school": {
      "name": "'"${NAME}"'",
      "location": "'"${LOCATION}"'",
      "administrator": "'"${ADMIN}"'"
    }
  }'

echo
