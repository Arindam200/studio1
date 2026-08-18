CREATE TABLE "job_applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"job_id" text NOT NULL,
	"job_title" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"resume_url" text NOT NULL,
	"portfolio_url" text,
	"message" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
