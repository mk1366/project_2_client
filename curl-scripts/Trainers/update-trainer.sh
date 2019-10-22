# Ex: TOKEN=tokengoeshere ID=idgoeshere TEXT=textgoeshere sh curl-scripts/examples/update.sh

curl "http://localhost:4741/Appointments/${ID}" \
  --include \
  --request PATCH \
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
