#!/bin/bash

API="http://localhost:4741"
URL_PATH="/students"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "student": {
      "name": {
        "firstName": "'"${FIRSTNAME}"'",
        "lastName": "'"${LASTNAME}"'"
      }
    }
  }'

echo
