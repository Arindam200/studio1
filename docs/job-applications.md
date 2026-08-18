# Job Applications

The careers job detail pages (`/careers/[id]`) include an application form
below the job description. Submissions are stored in Neon Postgres via
Drizzle ORM. The form is hidden for roles with an "Opening soon" status.

## Setup

1. Create a Neon project and copy its connection string.
2. Create `.env.local` (see `.env.example`):

   ```
   DATABASE_URL="postgresql://USER:PASSWORD@HOST/DBNAME?sslmode=require"
   ```

3. Create the table:

   ```
   pnpm db:migrate
   ```

## Reviewing submissions

- Neon dashboard (Tables view), or
- `pnpm db:studio` — Drizzle Studio, a local UI for browsing/editing rows.

## Schema

Table: `job_applications` (see `lib/db/schema.ts`)

| Column          | Type        | Notes                       |
| --------------- | ----------- | --------------------------- |
| id              | uuid        | auto-generated primary key  |
| job_id          | text        | e.g. `growth-intern`        |
| job_title       | text        | e.g. `Growth Intern`        |
| name            | text        | applicant name              |
| email           | text        | lowercased                  |
| resume_url      | text        | required link               |
| portfolio_url   | text        | optional                    |
| message         | text        | optional, max 2000 chars    |
| created_at      | timestamptz | auto-set on insert          |

## Schema changes

Edit `lib/db/schema.ts`, then:

```
pnpm db:generate   # create a migration in drizzle/
pnpm db:migrate    # apply it (requires DATABASE_URL)
```

## Key files

- `components/careers/job-application-form.tsx` — the form (client component)
- `app/careers/[id]/actions.ts` — `submitJobApplication` server action + validation
- `lib/db/index.ts` — Neon + Drizzle client
- `lib/db/schema.ts` — table definition
- `drizzle.config.ts` — drizzle-kit configuration
