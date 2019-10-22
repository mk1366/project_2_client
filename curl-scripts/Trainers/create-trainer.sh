#!/bin/bash

curl "http://localhost:4741/examples" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "Appointment": {
      "name": "'"${NAME}"'",
      "location": "'"${LOCATION}"'",
      "gym": "'"${GYM}"'",
      "Appointment_name": "'"${Appointment}"'",
      "date": "'"${DATE}"'"

    }
  }'
echo
