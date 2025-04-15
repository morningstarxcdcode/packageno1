# Architecture

## New Features

### Notifications

- **File**: `notifications/email.js`

- **Purpose**: Handles email notifications using NodeMailer.

### Security

- **File**: `security/encryption.js`

- **Purpose**: Provides encryption and decryption utilities.

### Jobs

- **File**: `jobs/emailJob.js`

- **Purpose**: Processes email jobs for background tasks.

### Middleware

- **File**: `middleware/rateLimiter.js`

- **Purpose**: Implements rate limiting for Express apps.

### Utilities

- **File**: `utils/hash.js`

- **Purpose**: Adds password hashing and comparison utilities.

### Database

- **File**: `database/db.js`

- **Purpose**: Handles MongoDB connections using Mongoose.

### Notification Service

- **File**: `services/notificationService.js`

- **Purpose**: Sends notifications to users using the email module.

### User Service

- **File**: `services/userService.js`

- **Purpose**: Handles user creation and verification using the hash utility.

### CLI

- **File**: `src/cli.js`

- **Purpose**: Demonstrates the usage of `userService` and `notificationService` in a CLI context.
