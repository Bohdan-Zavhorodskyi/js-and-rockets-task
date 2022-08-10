## Test task

## Exercise

Using the past launches endpoint from the SpaceX API consolidate a list of all the missions that were launched in 2018 that carried a payload that belonged to NASA. Missions should appear in inverse chronological order with the exception that those that carried more payloads that should appear first.

Display the outcome of your solution by rendering the list to the screen as JSON while keeping an indentation of 2 spaces. To make the evaluation process simpler we only care to see the flight number, the mission name and the amount of payloads carried by each mission.

## Expected output

Your solution is expected to render the following:

```json
[
  {
    "flight_number": 62,
    "mission_name": "Iridium NEXT Mission 6",
    "payloads_count": 2
  },
  {
    "flight_number": 72,
    "mission_name": "CRS-16",
    "payloads_count": 1
  },
  {
    "flight_number": 64,
    "mission_name": "CRS-15",
    "payloads_count": 1
  },
  {
    "flight_number": 60,
    "mission_name": "TESS",
    "payloads_count": 1
  },
  {
    "flight_number": 59,
    "mission_name": "CRS-14",
    "payloads_count": 1
  }
]
```

## Clarifications:

- You can use any **utility** library you see fit (please don't use React, Angular or Vue)
- Make sure the tests are green
- You can request the data from `https://api.spacexdata.com/v3/launches/past`, but you are not allowed to use any of the filter parameters provided by the SpaceX API.
- It doesn't matter to which NASA program each payload belongs to as long as NASA is the customer.
- Payloads are carried in the second stage of a rocket and they can belong to multiple customers.
- Please use UTC dates for anything time related.

## Helpful link:

- [SpaceX API Docs][spacex-api]

[spacex-api]: https://docs.spacexdata.com/?version=latest#fce450d6-e064-499a-b88d-34cc22991bcc
