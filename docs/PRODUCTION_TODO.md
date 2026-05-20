# Production TODO

## Important Note

This checklist assumes the goal is a production-ready product across:

- backend API
- web frontend
- Expo mobile app

The current repository is still an early-stage frontend prototype, so many items below are still greenfield work.

## 1. Backend TODO

### Foundation

- [ ] Choose the backend framework and repo structure
- [ ] Add environment configuration management
- [ ] Add database connection management
- [ ] Add migrations
- [ ] Add seed scripts for local/dev data
- [ ] Add API versioning strategy
- [ ] Add request validation
- [ ] Add centralized error handling
- [ ] Add structured logging
- [ ] Add rate limiting
- [ ] Add CORS configuration for web and mobile

### Database And Models

- [ ] Model users
- [ ] Model roles and permissions
- [ ] Model agents
- [ ] Model properties
- [ ] Model property images
- [ ] Model property features and categories
- [ ] Model locations
- [ ] Model blog posts
- [ ] Model pricing plans
- [ ] Model contact requests
- [ ] Model property inquiries
- [ ] Model tour requests
- [ ] Model favorites
- [ ] Model newsletter subscriptions
- [ ] Model push devices

### Authentication And Security

- [ ] Implement registration
- [ ] Implement login
- [ ] Implement refresh tokens
- [ ] Implement logout
- [ ] Implement password reset
- [ ] Implement email verification
- [ ] Implement RBAC for admin and customer roles
- [ ] Hash passwords securely
- [ ] Add brute-force protection
- [ ] Add API input sanitization
- [ ] Add CSRF strategy where relevant
- [ ] Add secrets management
- [ ] Add audit logging for admin actions

### Core Business Endpoints

- [ ] Build properties listing endpoint
- [ ] Build property details endpoint
- [ ] Build featured properties endpoint
- [ ] Build recent properties endpoint
- [ ] Build property search suggestions
- [ ] Build property types endpoint
- [ ] Build locations endpoint
- [ ] Build agents endpoints
- [ ] Build pricing plans endpoint
- [ ] Build blog endpoints
- [ ] Build contact request submission
- [ ] Build newsletter subscription submission
- [ ] Build property inquiry submission
- [ ] Build tour request submission
- [ ] Build favorites endpoints
- [ ] Build current-user profile endpoints
- [ ] Build push token registration for mobile

### Admin And CMS

- [ ] Build admin authentication flow
- [ ] Build admin dashboard metrics
- [ ] Build admin property CRUD
- [ ] Build admin property publish/archive workflow
- [ ] Build admin media upload flow
- [ ] Build admin agent CRUD
- [ ] Build admin blog CRUD
- [ ] Build admin pricing plan CRUD
- [ ] Build admin lead management for contact requests
- [ ] Build admin inquiry management
- [ ] Build admin tour request management
- [ ] Build admin user moderation tools

### Integrations

- [ ] Add email provider integration
- [ ] Add object storage integration
- [ ] Add push notification integration
- [ ] Add analytics event pipeline if needed
- [ ] Add CAPTCHA or bot protection for public forms

### Reliability And Operations

- [ ] Add health checks
- [ ] Add readiness and liveness checks
- [ ] Add monitoring and alerting
- [ ] Add tracing or request correlation IDs
- [ ] Add backup strategy
- [ ] Add restore strategy
- [ ] Add staging environment
- [ ] Add production deployment pipeline
- [ ] Add CI checks for lint, test, and build

### Testing

- [ ] Add unit tests
- [ ] Add service-level tests
- [ ] Add integration tests
- [ ] Add API contract tests
- [ ] Add auth security tests
- [ ] Add smoke tests for deployment

## 2. Web Frontend TODO

### Architecture

- [ ] Replace static data with API-driven data loading
- [ ] Add a shared API client layer
- [ ] Add loading, empty, and error states
- [ ] Add environment-aware API base URL configuration
- [ ] Add route guards for authenticated screens

### Product Features

- [ ] Connect the search form to live property search
- [ ] Build a dedicated property list page
- [ ] Build a property details page
- [ ] Add filter UI for price, type, location, and bedrooms
- [ ] Add user login and registration screens
- [ ] Add profile/account screen
- [ ] Add favorites/saved properties experience
- [ ] Connect contact form submission
- [ ] Connect newsletter subscription
- [ ] Connect property inquiry submission
- [ ] Connect tour booking submission
- [ ] Replace placeholder blog content with CMS content
- [ ] Replace placeholder pricing content with API data

### UX And Accessibility

- [ ] Improve keyboard accessibility
- [ ] Improve form labels and validation messages
- [ ] Improve semantic markup
- [ ] Add focus states
- [ ] Improve color contrast where needed
- [ ] Add accessible modals and drawers if introduced
- [ ] Add skeleton loaders for slower networks

### Quality And Performance

- [ ] Add linting and formatting enforcement
- [ ] Add component tests
- [ ] Add end-to-end tests
- [ ] Optimize image loading
- [ ] Add code splitting if app size grows
- [ ] Remove unused packages
- [ ] Add runtime error reporting
- [ ] Add analytics tracking

### SEO And Marketing

- [ ] Improve page metadata
- [ ] Add Open Graph tags
- [ ] Add structured data for properties and articles
- [ ] Add sitemap generation
- [ ] Add robots configuration

## 3. Mobile App TODO

### Architecture

- [ ] Add a proper navigation stack/tab structure
- [ ] Add a shared API client
- [ ] Add environment config for dev/staging/prod
- [ ] Add auth token persistence
- [ ] Add session refresh handling
- [ ] Add global loading and error handling

### Product Features

- [ ] Connect home screen data to live APIs
- [ ] Add property listing screen
- [ ] Add property details screen
- [ ] Add saved properties screen
- [ ] Add login, registration, forgot-password, and profile screens
- [ ] Connect contact form submission
- [ ] Connect property inquiry submission
- [ ] Connect tour booking submission
- [ ] Connect blog data to backend
- [ ] Connect pricing plans to backend

### Mobile-Specific Requirements

- [ ] Add push notification permission flow
- [ ] Register device tokens with backend
- [ ] Add deep linking support
- [ ] Add pull-to-refresh on key screens
- [ ] Add offline-friendly caching strategy
- [ ] Add image caching strategy
- [ ] Add network offline handling
- [ ] Add safe-area polish across devices
- [ ] Test on small Android devices
- [ ] Test on large Android devices
- [ ] Test on recent iPhones
- [ ] Test on tablets if supported

### Expo Release Readiness

- [ ] Configure EAS builds
- [ ] Configure app identifiers for iOS and Android
- [ ] Add production app icons and splash assets
- [ ] Add store metadata
- [ ] Add privacy policy and support URLs
- [ ] Add crash reporting
- [ ] Add OTA update strategy if using Expo Updates

### Quality

- [ ] Add component tests
- [ ] Add integration tests
- [ ] Add smoke tests on emulator/simulator
- [ ] Add release checklist for store submission

## 4. Shared Product And Design TODO

- [ ] Define the real brand, copy, and imagery instead of placeholders
- [ ] Define property status taxonomy
- [ ] Define pricing-plan business rules
- [ ] Define lead lifecycle and CRM workflow
- [ ] Define support ownership for contact requests and inquiries
- [ ] Define data retention rules
- [ ] Define analytics events and KPIs
- [ ] Define admin user roles and responsibilities

## 5. DevOps And Security TODO

- [ ] Separate dev, staging, and production environments
- [ ] Add secure secret storage
- [ ] Add dependency scanning
- [ ] Add static analysis
- [ ] Add containerization if needed
- [ ] Add infrastructure as code if deploying to cloud services
- [ ] Add HTTPS and custom domain setup
- [ ] Add WAF or edge protection if exposed publicly
- [ ] Add incident response and rollback plan
- [ ] Add privacy/legal review for collected user data

## 6. Suggested Delivery Order

### Must-Have First

- [ ] Backend auth and property APIs
- [ ] Dynamic property list and property detail pages
- [ ] Contact and inquiry submission
- [ ] Admin property management
- [ ] Basic monitoring and CI/CD

### Next

- [ ] Favorites and user accounts
- [ ] Blog CMS
- [ ] Tour booking
- [ ] Mobile push registration
- [ ] Analytics

### Later

- [ ] Advanced personalization
- [ ] Recommendation engine
- [ ] CRM integrations
- [ ] Payments if pricing plans become purchasable
