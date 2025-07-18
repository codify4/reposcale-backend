# Repository Sharing API Documentation

## Overview

The Repository Sharing API allows users to create secure share links for their private GitHub repositories with comprehensive access controls and security features.

## Authentication

Most endpoints require JWT authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### 1. Create Share Link

**POST** `/links`

Creates a new share link for a repository.

**Request Body:**
```json
{
  "repositoryId": 123,
  "name": "My Share Link",
  "description": "Optional description",
  "password": "optional-password",
  "expiresAt": "2024-12-31T23:59:59Z",
  "maxViews": 100,
  "allowMembers": false
}
```

**Response:**
```json
{
  "success": true,
  "message": "Share link created successfully",
  "data": {
    "id": "clx1234567890",
    "token": "a1b2c3d4e5f6...",
    "name": "My Share Link",
    "description": "Optional description",
    "shareUrl": "http://localhost:3000/share/a1b2c3d4e5f6...",
    "expiresAt": "2024-12-31T23:59:59Z",
    "maxViews": 100,
    "viewCount": 0,
    "isActive": true,
    "allowMembers": false,
    "repository": {
      "id": 123,
      "name": "my-repo",
      "description": "Repository description"
    },
    "user": {
      "id": 1,
      "username": "john_doe",
      "name": "John Doe"
    }
  }
}
```

### 2. List Share Links

**GET** `/links`

Lists all share links for the authenticated user.

**Response:**
```json
{
  "success": true,
  "message": "Share links retrieved successfully",
  "data": [
    {
      "id": "clx1234567890",
      "token": "a1b2c3d4e5f6...",
      "name": "My Share Link",
      "description": "Optional description",
      "shareUrl": "http://localhost:3000/share/a1b2c3d4e5f6...",
      "expiresAt": "2024-12-31T23:59:59Z",
      "maxViews": 100,
      "viewCount": 5,
      "isActive": true,
      "allowMembers": false,
      "repository": {
        "id": 123,
        "name": "my-repo",
        "description": "Repository description"
      },
      "_count": {
        "views": 5
      }
    }
  ]
}
```

### 3. Get Share Link Details

**GET** `/links/:id`

Gets details of a specific share link.

**Response:**
```json
{
  "success": true,
  "message": "Share link retrieved successfully",
  "data": {
    "id": "clx1234567890",
    "token": "a1b2c3d4e5f6...",
    "name": "My Share Link",
    "description": "Optional description",
    "shareUrl": "http://localhost:3000/share/a1b2c3d4e5f6...",
    "expiresAt": "2024-12-31T23:59:59Z",
    "maxViews": 100,
    "viewCount": 5,
    "isActive": true,
    "allowMembers": false,
    "repository": {
      "id": 123,
      "name": "my-repo",
      "description": "Repository description"
    },
    "views": [
      {
        "id": "clx1234567891",
        "ipAddress": "192.168.1.1",
        "userAgent": "Mozilla/5.0...",
        "viewedAt": "2024-01-15T10:30:00Z"
      }
    ],
    "_count": {
      "views": 5
    }
  }
}
```

### 4. Update Share Link

**PUT** `/links/:id`

Updates a share link.

**Request Body:**
```json
{
  "name": "Updated Share Link",
  "description": "Updated description",
  "password": "new-password",
  "expiresAt": "2024-12-31T23:59:59Z",
  "maxViews": 200,
  "allowMembers": true
}
```

### 5. Delete Share Link

**DELETE** `/links/:id`

Deletes a share link.

**Response:** 204 No Content

### 6. Get Share Link Analytics

**GET** `/links/:id/analytics`

Gets analytics for a share link.

**Response:**
```json
{
  "success": true,
  "message": "Analytics retrieved successfully",
  "data": {
    "totalViews": 5,
    "recentViews": [
      {
        "id": "clx1234567891",
        "ipAddress": "192.168.1.1",
        "userAgent": "Mozilla/5.0...",
        "viewedAt": "2024-01-15T10:30:00Z"
      }
    ],
    "shareLink": {
      "id": "clx1234567890",
      "name": "My Share Link",
      "viewCount": 5,
      "maxViews": 100,
      "expiresAt": "2024-12-31T23:59:59Z",
      "isActive": true
    }
  }
}
```

## Public Access Endpoints

### 7. Get Share Link Info (Public)

**GET** `/public/share/:token/info`

Gets basic information about a share link without requiring password.

**Response:**
```json
{
  "success": true,
  "message": "Share link info retrieved successfully",
  "data": {
    "id": "clx1234567890",
    "name": "My Share Link",
    "description": "Optional description",
    "hasPassword": true,
    "allowMembers": false,
    "viewCount": 5,
    "maxViews": 100,
    "expiresAt": "2024-12-31T23:59:59Z",
    "repository": {
      "id": 123,
      "name": "my-repo",
      "description": "Repository description"
    },
    "user": {
      "username": "john_doe",
      "name": "John Doe"
    }
  }
}
```

### 8. Validate Share Link Access (Public)

**POST** `/public/share/:token/validate`

Validates access to a share link with optional password.

**Request Body:**
```json
{
  "password": "optional-password"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Access granted",
  "data": {
    "shareLink": {
      "id": "clx1234567890",
      "name": "My Share Link",
      "description": "Optional description",
      "allowMembers": false,
      "repository": {
        "id": 123,
        "name": "my-repo",
        "description": "Repository description"
      },
      "user": {
        "id": 1,
        "username": "john_doe",
        "name": "John Doe"
      }
    }
  }
}
```

### 9. Access Repository Content (Public)

**GET** `/public/share/:token/repository/:owner/:repo/contents/:path?`

Accesses repository content through a share link.

**Request Body:**
```json
{
  "password": "optional-password"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Repository content accessed successfully",
  "data": {
    "shareLink": {
      "id": "clx1234567890",
      "name": "My Share Link",
      "description": "Optional description"
    },
    "content": {
      "type": "file",
      "name": "README.md",
      "path": "README.md",
      "content": "# My Repository\n\nThis is a private repository...",
      "sha": "abc123...",
      "size": 1024
    }
  }
}
```

## Access Controls

### Password Protection
- Optional password protection for share links
- Passwords are hashed using bcrypt
- Required for access if set

### Time Limits
- Optional expiration date for share links
- Links become inactive after expiration
- Cannot set expiration in the past

### View Limits
- Optional maximum number of views
- Links become inactive after reaching the limit
- View count is tracked and incremented on each access

### Member Access
- Optional flag to allow repository members access
- Uses GitHub's repository membership for validation

## Security Features

### Rate Limiting
- 100 requests per 15-minute window per IP
- Rate limit headers included in responses
- Automatic cleanup of expired entries

### IP Tracking
- All access attempts are logged with IP address
- User agent information is captured
- View history is maintained for analytics

### Secure Tokens
- Cryptographically secure random tokens
- 64-character hexadecimal strings
- Unique across all share links

### Input Validation
- All inputs are validated using class-validator
- SQL injection protection through Prisma ORM
- XSS protection through proper encoding

## Error Responses

### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": "Expiration date must be in the future",
  "error": "Bad Request"
}
```

### 401 Unauthorized
```json
{
  "statusCode": 401,
  "message": "Password required",
  "error": "Unauthorized"
}
```

### 403 Forbidden
```json
{
  "statusCode": 403,
  "message": "Share link has expired",
  "error": "Forbidden"
}
```

### 404 Not Found
```json
{
  "statusCode": 404,
  "message": "Share link not found",
  "error": "Not Found"
}
```

### 429 Too Many Requests
```json
{
  "statusCode": 429,
  "message": "Rate limit exceeded. Please try again later.",
  "error": "Too Many Requests"
}
```

## Environment Variables

```env
FRONTEND_URL=http://localhost:3000
```

## Rate Limiting Headers

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642248600
``` 