# Project Documentation

## Purpose

This repository currently contains a real estate marketing product with:

- a web app built with React and Create React App
- a mobile app built with Expo and React Native

The current implementation is mostly presentational. It shows listings, agents, pricing plans, blog-style cards, and contact forms, but it does not yet have a backend, database, authentication, CMS, or live integrations.

This document explains:

- what exists today
- how the repository is organized
- the current product capabilities
- the missing pieces
- the recommended target architecture for a production-ready system

## Current State

### Web App

Location: repository root

Main characteristics:

- React 18 application
- Client-side routing with `react-router-dom`
- Shared static data in `src/components/data/Data.js`
- Plain CSS per section/component
- Static assets served from `public/`

Current web routes:

- `/`
- `/about`
- `/services`
- `/blog`
- `/pricing`
- `/contact`

Current web feature status:

- Navigation works
- Pages render correctly
- Content is hardcoded
- Search form is UI-only
- Contact form is UI-only
- Newsletter form is UI-only
- Authentication buttons are UI-only

### Mobile App

Location: `mobile/`

Main characteristics:

- Expo app for Android and iOS
- React Native UI
- Local image assets copied into `mobile/assets/`
- Lightweight screen switching instead of a remote-backed navigation flow

Current mobile screens:

- Home
- About
- Services
- Blog
- Pricing
- Contact

Current mobile feature status:

- Screen rendering is implemented
- Shared content is local in `mobile/src/data/content.js`
- Forms and actions are presentational only
- No backend integration yet
- No authentication yet
- No push notifications yet

## Repository Structure

```text
.
|-- README.md
|-- docs/
|   |-- API_ENDPOINTS.md
|   |-- PRODUCTION_TODO.md
|   `-- PROJECT_DOCUMENTATION.md
|-- mobile/
|   |-- App.js
|   |-- app.json
|   |-- assets/
|   `-- src/
|-- public/
|-- src/
|-- package.json
`-- package-lock.json
```

## Functional Scope Represented In The UI

Even though the project is static right now, the UI already implies the following product areas:

- property discovery
- property categories
- location browsing
- featured agents
- pricing/service plans
- blog/content marketing
- contact and lead capture
- newsletter signup
- favorites or saved items
- account/authentication entry points

That means the backend should support much more than simple page delivery.

## Recommended Production Architecture

### High-Level Architecture

```text
Web App (React) ------\
                       \
Mobile App (Expo) ------> REST API / BFF ---> PostgreSQL
                        |                    |
                        |                    +--> Redis
                        |                    +--> Object Storage (S3/Cloudinary)
                        |                    +--> Email Provider
                        |                    +--> Push Notification Service
                        |                    +--> Analytics / Logging / Monitoring
                        |
Admin Dashboard --------/
```

### Recommended Backend Responsibilities

- authentication and session management
- property CRUD and search
- property images and media management
- agent profiles and agent-property relationships
- blog/CMS content management
- pricing plan management
- contact request handling
- property inquiry handling
- viewing/tour request handling
- favorites/saved properties
- newsletter subscriptions
- push notification device registration for mobile
- admin reporting and moderation

## Core Domain Models

These are the main entities the backend should manage.

### User

- id
- first_name
- last_name
- email
- phone
- password_hash
- role
- status
- email_verified_at
- created_at
- updated_at

### Agent

- id
- full_name
- email
- phone
- bio
- avatar_url
- office_location
- verified
- active
- created_at
- updated_at

### Property

- id
- title
- slug
- description
- status
- listing_type
- property_type
- price
- currency
- country
- city
- address_line
- latitude
- longitude
- bedrooms
- bathrooms
- area_value
- area_unit
- featured
- published_at
- created_by
- assigned_agent_id
- created_at
- updated_at

### Property Image

- id
- property_id
- file_url
- alt_text
- sort_order
- created_at

### Inquiry

- id
- property_id
- user_id nullable
- full_name
- email
- phone
- message
- source
- status
- created_at

### Tour Request

- id
- property_id
- user_id nullable
- preferred_date
- preferred_time
- notes
- status
- created_at

### Favorite

- id
- user_id
- property_id
- created_at

### Blog Post

- id
- title
- slug
- excerpt
- body
- cover_image_url
- status
- published_at
- author_id
- created_at
- updated_at

### Pricing Plan

- id
- name
- price
- billing_cycle
- feature_list
- highlighted
- active
- created_at
- updated_at

### Contact Request

- id
- full_name
- email
- phone
- subject
- message
- source
- status
- created_at

### Newsletter Subscription

- id
- email
- status
- source
- created_at

### Push Device

- id
- user_id nullable
- platform
- device_token
- app_version
- created_at
- updated_at

## Current Gaps

The following are still missing from the repository:

- backend service
- database schema and migrations
- API contract implementation
- admin dashboard
- real authentication
- role-based access control
- live search
- favorites persistence
- inquiry/tour workflows
- email delivery
- image upload pipeline
- mobile push support
- test coverage
- CI/CD
- observability
- environment management
- production deployment setup

## Suggested Delivery Phases

### Phase 1

- build backend foundation
- add database and authentication
- make properties dynamic
- connect contact and inquiry forms

### Phase 2

- add favorites and user profiles
- add admin property management
- add blog CMS
- add media upload flow

### Phase 3

- add tour scheduling
- add notifications and push tokens
- add analytics, monitoring, and performance hardening
- prepare store release pipelines for mobile

## Related Documents

- `docs/API_ENDPOINTS.md`
- `docs/PRODUCTION_TODO.md`
- `README.md`
- `mobile/README.md`
