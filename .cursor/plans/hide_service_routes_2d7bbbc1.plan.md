---
name: Hide service routes
overview: Remove the 5 service items (Video Production, Organic Campaign, Product Launch, Audit Services, Influencer Management) from the navbar dropdown and the landing page "More Services" grid, while keeping the actual route pages intact for direct URL access.
todos:
  - id: remove-nav-items
    content: Remove the 5 service entries from navItems in constants/data.ts and clean up unused imports
    status: completed
  - id: remove-more-services
    content: Remove the moreServices array and More Services Grid section from components/landing/services.tsx and clean up unused imports
    status: completed
  - id: todo-1771519607941-g9ecw4e5h
    content: link page for devrel at footer is broken 404
    status: completed
isProject: false
---

# Hide Service Routes from Public Navigation

## Scope

Remove public-facing links for these 5 services:

- Video Production
- Organic Campaign
- Product Launch
- Audit Services
- Influencer Management

The actual page files under `app/(services)/` will remain untouched so they're still accessible via direct URL.

## Changes

### 1. Remove from navbar dropdown -- [constants/data.ts](constants/data.ts)

Delete lines 68-92 from the `navItems` array, which contain the 5 service children entries under "Services". The "Blog as a Service" and "DevRel as a Service" entries (lines 58-67) will remain.

```68:92:constants/data.ts
      {
        title: "Video Production",
        path: "/video-production",
        icon: VideoCamera,
      },
      // ... through ...
      {
        title: "Influencer Management",
        path: "/influencer-management",
        icon: UsersThree,
      },
```

Also clean up the now-unused icon imports (`VideoCamera`, `TrendUp`, `Rocket`, `MagnifyingGlass`, `UsersThree`) from this file if they are only used by the removed entries.

### 2. Remove "More Services" grid -- [components/landing/services.tsx](components/landing/services.tsx)

- Delete the `moreServices` array (lines 18-43) entirely.
- Delete the "More Services Grid" section in the JSX (lines 146-180).
- Remove the unused icon imports (`VideoCamera`, `TrendUp`, `Rocket`, `MagnifyingGlass`) that are only used by the removed grid.

### Files NOT modified

- `app/(services)/video-production/page.tsx`
- `app/(services)/organic-campaign/page.tsx`
- `app/(services)/product-launch/page.tsx`
- `app/(services)/audit-services/page.tsx`
- `app/(services)/influencer-management/page.tsx`
- `app/sitemap.ts` (these routes are not listed there)

