# API Endpoints

## Important Note

These endpoints are proposed for the production backend this project still needs. They are not implemented in the current repository yet.

The API design below is based on the features already visible in the web and mobile apps plus the minimum capabilities needed to make the product production-ready.

## Conventions

Base URL:

```text
/api/v1
```

Authentication:

- public endpoints require no token
- protected endpoints require `Authorization: Bearer <token>`
- admin endpoints require an authenticated admin user

Common response shape:

```json
{
  "success": true,
  "message": "Request completed successfully",
  "data": {}
}
```

Common error shape:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": ["Email is required"]
  }
}
```

Common query parameters:

- `page`
- `limit`
- `sort`
- `order`
- `search`
- `status`
- `featured`
- `city`
- `country`
- `propertyType`
- `listingType`
- `minPrice`
- `maxPrice`
- `minBedrooms`
- `maxBedrooms`

## 1. System And Public Configuration

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/health` | No | Health check for load balancers and uptime checks |
| GET | `/config/public` | No | Public app config for web and mobile |

Example `GET /config/public` response:

```json
{
  "success": true,
  "data": {
    "brandName": "RentUp",
    "supportEmail": "support@example.com",
    "contactPhone": "+1-800-555-0198",
    "currencies": ["USD"],
    "listingTypes": ["rent", "sale"],
    "propertyTypes": ["apartment", "villa", "office", "commercial"]
  }
}
```

## 2. Authentication

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| POST | `/auth/register` | No | Register a new customer |
| POST | `/auth/login` | No | Login with email and password |
| POST | `/auth/refresh` | No | Refresh access token |
| POST | `/auth/logout` | Yes | Logout current session |
| POST | `/auth/forgot-password` | No | Trigger reset email |
| POST | `/auth/reset-password` | No | Reset password using token |
| POST | `/auth/verify-email` | No | Verify email address |

Example `POST /auth/login` request:

```json
{
  "email": "jane@example.com",
  "password": "StrongPassword123!"
}
```

Example `POST /auth/login` response:

```json
{
  "success": true,
  "data": {
    "accessToken": "jwt-access-token",
    "refreshToken": "jwt-refresh-token",
    "user": {
      "id": "usr_123",
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "jane@example.com",
      "role": "customer"
    }
  }
}
```

## 3. Current User

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/me` | Yes | Get current user profile |
| PATCH | `/me` | Yes | Update current user profile |
| PATCH | `/me/password` | Yes | Change password |
| DELETE | `/me` | Yes | Deactivate own account |

## 4. Properties

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/properties` | No | List properties with filters and pagination |
| GET | `/properties/featured` | No | Get featured properties |
| GET | `/properties/recent` | No | Get recently added properties |
| GET | `/properties/search/suggestions` | No | Search suggestions for mobile/web search bars |
| GET | `/properties/:propertyId` | No | Get property details |
| GET | `/properties/:propertyId/similar` | No | Get similar properties |

Recommended filters for `GET /properties`:

- `search`
- `listingType`
- `propertyType`
- `city`
- `country`
- `minPrice`
- `maxPrice`
- `bedrooms`
- `bathrooms`
- `featured`

Example `GET /properties` response:

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "prop_001",
        "title": "Red Carpet Real Estate",
        "slug": "red-carpet-real-estate",
        "listingType": "rent",
        "propertyType": "apartment",
        "price": 3700,
        "currency": "USD",
        "city": "Toronto",
        "country": "Canada",
        "featured": false,
        "coverImageUrl": "https://cdn.example.com/properties/p-1.png"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 12,
      "total": 94,
      "totalPages": 8
    }
  }
}
```

## 5. Property Reference Data

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/property-types` | No | Property type reference list |
| GET | `/locations` | No | Locations available for browsing/filtering |

## 6. Property Inquiries And Tours

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| POST | `/properties/:propertyId/inquiries` | No | Submit property inquiry |
| POST | `/properties/:propertyId/tour-requests` | No | Request a tour or viewing |
| GET | `/me/inquiries` | Yes | Get current user's submitted inquiries |
| GET | `/me/tour-requests` | Yes | Get current user's tour requests |

Example `POST /properties/:propertyId/inquiries` request:

```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1-555-0100",
  "message": "I want to know if this property is still available."
}
```

Example `POST /properties/:propertyId/tour-requests` request:

```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1-555-0100",
  "preferredDate": "2026-05-02",
  "preferredTime": "14:30",
  "notes": "I prefer an afternoon slot."
}
```

## 7. Favorites

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/favorites` | Yes | List saved properties |
| POST | `/favorites` | Yes | Save a property |
| DELETE | `/favorites/:propertyId` | Yes | Remove a saved property |

Example `POST /favorites` request:

```json
{
  "propertyId": "prop_001"
}
```

## 8. Agents

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/agents` | No | List featured or filtered agents |
| GET | `/agents/:agentId` | No | Get agent profile |
| GET | `/agents/:agentId/properties` | No | Get properties assigned to an agent |

## 9. Blog And Marketing Content

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/blog/posts` | No | List blog posts |
| GET | `/blog/posts/:slug` | No | Get blog post details |
| GET | `/plans` | No | Get pricing/service plans |

Recommended `GET /blog/posts` filters:

- `page`
- `limit`
- `search`
- `tag`
- `status`

## 10. Contact And Newsletter

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| POST | `/contact-requests` | No | Submit general contact form |
| POST | `/newsletter/subscriptions` | No | Subscribe email to newsletter |

Example `POST /contact-requests` request:

```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1-555-0100",
  "subject": "Need help choosing a plan",
  "message": "Please contact me about the standard plan."
}
```

Example `POST /newsletter/subscriptions` request:

```json
{
  "email": "jane@example.com"
}
```

## 11. Mobile Device Registration

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| POST | `/devices/push-tokens` | Yes | Register or update mobile push token |
| DELETE | `/devices/push-tokens/:deviceId` | Yes | Remove a mobile push token |

Example `POST /devices/push-tokens` request:

```json
{
  "platform": "ios",
  "deviceToken": "ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]",
  "appVersion": "1.0.0"
}
```

## 12. Admin Dashboard

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/admin/dashboard/summary` | Admin | Dashboard stats |
| GET | `/admin/dashboard/activity` | Admin | Recent admin activity and lead activity |

Suggested summary fields:

- total properties
- total active agents
- total inquiries
- total tour requests
- total users
- new contact requests
- newsletter subscriptions

## 13. Admin Properties

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/admin/properties` | Admin | List all properties |
| POST | `/admin/properties` | Admin | Create property |
| GET | `/admin/properties/:propertyId` | Admin | Get property for editing |
| PATCH | `/admin/properties/:propertyId` | Admin | Update property |
| DELETE | `/admin/properties/:propertyId` | Admin | Archive or delete property |
| PATCH | `/admin/properties/:propertyId/status` | Admin | Publish, unpublish, archive |

Minimum property create/update payload should support:

- title
- slug
- description
- listingType
- propertyType
- price
- currency
- address
- location
- bedrooms
- bathrooms
- area
- features
- assignedAgentId
- imageIds
- featured
- status

## 14. Admin Media Uploads

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| POST | `/admin/uploads` | Admin | Upload media directly if backend handles files |
| POST | `/admin/uploads/presign` | Admin | Get presigned upload URL for object storage |
| DELETE | `/admin/uploads/:uploadId` | Admin | Remove uploaded media |

## 15. Admin Agents

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/admin/agents` | Admin | List agents |
| POST | `/admin/agents` | Admin | Create agent |
| GET | `/admin/agents/:agentId` | Admin | Get agent details |
| PATCH | `/admin/agents/:agentId` | Admin | Update agent |
| DELETE | `/admin/agents/:agentId` | Admin | Deactivate or remove agent |

## 16. Admin Blog Posts

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/admin/blog/posts` | Admin | List all posts |
| POST | `/admin/blog/posts` | Admin | Create post |
| GET | `/admin/blog/posts/:postId` | Admin | Get post details |
| PATCH | `/admin/blog/posts/:postId` | Admin | Update post |
| DELETE | `/admin/blog/posts/:postId` | Admin | Delete post |
| PATCH | `/admin/blog/posts/:postId/status` | Admin | Draft, publish, archive |

## 17. Admin Pricing Plans

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/admin/plans` | Admin | List plans |
| POST | `/admin/plans` | Admin | Create plan |
| GET | `/admin/plans/:planId` | Admin | Get plan details |
| PATCH | `/admin/plans/:planId` | Admin | Update plan |
| DELETE | `/admin/plans/:planId` | Admin | Remove or deactivate plan |

## 18. Admin Leads And Support

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/admin/contact-requests` | Admin | List contact form submissions |
| PATCH | `/admin/contact-requests/:contactRequestId` | Admin | Update lead status |
| GET | `/admin/inquiries` | Admin | List property inquiries |
| PATCH | `/admin/inquiries/:inquiryId` | Admin | Update inquiry status |
| GET | `/admin/tour-requests` | Admin | List tour requests |
| PATCH | `/admin/tour-requests/:tourRequestId` | Admin | Update tour request status |
| GET | `/admin/newsletter/subscriptions` | Admin | List newsletter subscribers |

Lead statuses to support:

- new
- in_progress
- contacted
- converted
- closed
- spam

## 19. Admin Users

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/admin/users` | Admin | List users |
| GET | `/admin/users/:userId` | Admin | Get user details |
| PATCH | `/admin/users/:userId` | Admin | Update user role or profile flags |
| PATCH | `/admin/users/:userId/status` | Admin | Suspend, activate, verify |

## 20. Endpoint Priority

If implementation needs to be phased, build these first:

### Phase 1 Endpoints

- `GET /health`
- `GET /config/public`
- `POST /auth/register`
- `POST /auth/login`
- `GET /me`
- `GET /properties`
- `GET /properties/:propertyId`
- `GET /properties/featured`
- `GET /properties/recent`
- `GET /property-types`
- `GET /locations`
- `GET /agents`
- `GET /blog/posts`
- `GET /plans`
- `POST /contact-requests`
- `POST /properties/:propertyId/inquiries`
- `POST /newsletter/subscriptions`

### Phase 2 Endpoints

- `POST /properties/:propertyId/tour-requests`
- `GET /favorites`
- `POST /favorites`
- `DELETE /favorites/:propertyId`
- `POST /devices/push-tokens`
- admin property CRUD
- admin inquiry/contact management

### Phase 3 Endpoints

- blog CMS CRUD
- pricing plan CRUD
- agent CRUD
- analytics/dashboard endpoints
- advanced push and notification workflows
