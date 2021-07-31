UUID GENERATION IN JAVASCRIPT
=====================================

| Library         | Example                              | Format                                | Internal size (bit) | String size (byte) | Time to generate (1.000.000 UUIDs) | Notes                                         |
| --------------- | ------------------------------------ | ------------------------------------- | ------------------- | ------------------ | ---------------------------------- | --------------------------------------------- |
| short-uuid      | 75fb8b08-4309-433f-93bd-4eb215cf1d14 | RF4122 version 4                      | 128                 | 36                 | 700ms                              | Internally use nodejs crypto.randomFillSync() |
| UUID            | j4MtETuyqn673RUG96mSKW               | RF4122 version 4 flickrBase58 encoded | 176                 | 22                 | 8500ms                             | Generate and then encode                      |
| short-unique-id | uY61056136SFyk2                      | Length can be specified               | 120                 | 15                 | 1500ms                             | Timestamp can be extracted from UUID          |
