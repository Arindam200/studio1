"use client";

import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  ArrowSquareOut,
  ArrowsClockwise,
  Buildings,
  CalendarBlank,
  CaretDown,
  CurrencyDollar,
  GlobeHemisphereWest,
  MagnifyingGlass,
  MapPin,
  Megaphone,
  RocketLaunch,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { staggerChildren, itemVariants } from "@/lib/animations";
import {
  DEVREL_JOB_SUBMIT_URL,
  getDevRelJobCategories,
  getDevRelJobLevels,
  getDevRelJobLocations,
  getDevRelJobTypes,
  isNewDevRelJob,
  type DevRelJob,
  type DevRelJobCategory,
  type DevRelJobWorkplace,
} from "@/lib/devrel-jobs";
import {
  glassCardEdgeHighlight,
  glassCardFrame,
  glassCardHoverWash,
  sideBeamGlowLeftMuted,
  sideBeamGlowRightMuted,
} from "@/lib/shadows";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

const capsuleClassName =
  "rounded-full px-3.5 py-1.5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground border border-border/40 dark:border-white/15 bg-white/55 dark:bg-white/[0.08] backdrop-blur-md shadow-[0_6px_18px_-4px_hsl(var(--primary)/0.32)] dark:shadow-[0_6px_18px_-4px_hsl(var(--primary)/0.22)]";

const JOBS_PER_PAGE = 12;

const heroAnimation = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

const workplaceIcons: Record<
  DevRelJobWorkplace,
  React.ComponentType<{ className?: string; weight?: "duotone" }>
> = {
  Remote: GlobeHemisphereWest,
  Hybrid: ArrowsClockwise,
  "On-site": Buildings,
  Unspecified: MapPin,
};

type FilterDropdownProps = {
  id: string;
  label: string;
  value: string | null;
  options: string[];
  allLabel: string;
  onChange: (value: string | null) => void;
  className?: string;
};

function FilterDropdown({
  id,
  label,
  value,
  options,
  allLabel,
  onChange,
  className,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={menuRef} className={cn("relative min-w-0", className)}>
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 w-full items-center justify-between gap-3 rounded-xl border border-border/60 bg-white/70 px-3 text-sm font-medium text-foreground transition-colors hover:border-primary/35 hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:ring-offset-0 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
      >
        <span className="truncate">{value ?? allLabel}</span>
        <CaretDown
          aria-hidden
          className={cn(
            "size-3.5 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          weight="bold"
        />
      </button>

      {isOpen ? (
        <div
          role="listbox"
          aria-label={label}
          className="absolute left-0 top-[calc(100%+0.5rem)] z-50 w-full min-w-48 overflow-hidden rounded-xl border border-border/60 bg-background p-1 shadow-[0_18px_40px_-16px_hsl(var(--primary)/0.38)] dark:border-white/10"
        >
          <button
            type="button"
            role="option"
            aria-selected={value === null}
            onClick={() => {
              onChange(null);
              setIsOpen(false);
            }}
            className={cn(
              "flex w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-primary/10 hover:text-primary",
              value === null && "bg-primary/10 text-primary",
            )}
          >
            {allLabel}
          </button>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={value === option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={cn(
                "flex w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-primary/10 hover:text-primary",
                value === option && "bg-primary/10 text-primary",
              )}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function formatPostedDate(value: string, locale: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;

  return parsed.toLocaleDateString(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function JobCard({ job, locale }: { job: DevRelJob; locale: string }) {
  const t = useTranslations("DevRelJobsPage");
  const WorkplaceIcon = workplaceIcons[job.workplace];
  const isNew = isNewDevRelJob(job);
  const [hasLogoError, setHasLogoError] = useState(false);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl",
        glassCardFrame,
        "transition-all duration-500 ease-out hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none",
      )}
    >
      <div aria-hidden className={glassCardEdgeHighlight} />
      <div aria-hidden className={glassCardHoverWash} />

      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${job.title} at ${job.company}`}
        className="relative z-[1] flex flex-1 flex-col rounded-2xl p-6 outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      >
        <div className="flex items-start gap-3.5">
          <span
            aria-hidden
            className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/20 bg-white p-2 dark:bg-white/90"
          >
            {job.logo && !hasLogoError ? (
              <span className="relative block size-7">
                <Image
                  src={job.logo}
                  alt=""
                  fill
                  sizes="28px"
                  unoptimized
                  className="object-contain"
                  onError={() => setHasLogoError(true)}
                />
              </span>
            ) : (
              <span className="font-primary text-lg font-semibold text-primary">
                {job.company.charAt(0)}
              </span>
            )}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">
              {job.company}
            </p>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5 shrink-0" weight="duotone" />
              <span className="truncate">{job.location}</span>
            </p>
          </div>
          <ArrowSquareOut
            className="size-4.5 shrink-0 text-muted-foreground/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transform-none"
            weight="duotone"
          />
        </div>

        <h3 className="mt-4 font-inter text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
          {job.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            {job.category}
          </span>
          {isNew ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              {t("newBadge")}
            </span>
          ) : null}
        </div>

        <div className="mt-auto">
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/50 pt-4 text-xs font-medium text-muted-foreground dark:border-white/[0.06]">
            <span className="inline-flex items-center gap-1.5">
              <WorkplaceIcon
                className="size-4 shrink-0 text-primary"
                weight="duotone"
              />
              {job.workplace}
            </span>
            {job.salary ? (
              <span className="inline-flex items-center gap-1.5">
                <CurrencyDollar
                  className="size-4 shrink-0 text-primary"
                  weight="duotone"
                />
                {job.salary}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1.5">
              <CalendarBlank
                className="size-4 shrink-0 text-primary"
                weight="duotone"
              />
              {formatPostedDate(job.postedDate, locale)}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

type DevRelJobsPageProps = {
  jobs: DevRelJob[];
};

export function DevRelJobsPage({ jobs }: DevRelJobsPageProps) {
  const t = useTranslations("DevRelJobsPage");
  const locale = useLocale();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<DevRelJobCategory | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const categories = useMemo(() => getDevRelJobCategories(jobs), [jobs]);
  const types = useMemo(() => getDevRelJobTypes(jobs), [jobs]);
  const locations = useMemo(() => getDevRelJobLocations(jobs), [jobs]);
  const levels = useMemo(() => getDevRelJobLevels(jobs), [jobs]);
  const companyCount = useMemo(
    () => new Set(jobs.map((job) => job.company)).size,
    [jobs],
  );

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return jobs.filter((job) => {
      if (selectedCategory && job.category !== selectedCategory) return false;
      if (selectedType && job.type !== selectedType) return false;
      if (selectedLocation && job.location !== selectedLocation) return false;
      if (selectedLevel && job.level !== selectedLevel) return false;
      if (!normalizedQuery) return true;

      const haystack = [
        job.title,
        job.company,
        job.location,
        job.category,
        ...job.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [jobs, query, selectedCategory, selectedType, selectedLocation, selectedLevel]);

  const hasActiveFilters =
    query.trim() !== "" ||
    selectedCategory !== null ||
    selectedType !== null ||
    selectedLocation !== null ||
    selectedLevel !== null;

  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / JOBS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE,
  );

  const clearFilters = () => {
    setQuery("");
    setSelectedCategory(null);
    setSelectedType(null);
    setSelectedLocation(null);
    setSelectedLevel(null);
    setPage(1);
  };

  const gridKey = `${query}-${selectedCategory ?? "all"}-${selectedType ?? "all"}-${selectedLocation ?? "all"}-${selectedLevel ?? "all"}-${currentPage}`;

  return (
    <section className="overflow-x-hidden">
      <div className="relative mx-auto max-w-7xl">
        <div aria-hidden className={sideBeamGlowLeftMuted} />
        <div aria-hidden className={sideBeamGlowRightMuted} />

        {/* Hero */}
        <section className="relative flex flex-col px-4 pb-10 pt-32 sm:px-6 sm:pt-36 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={itemVariants}>
              <Badge className="mx-auto mb-6 flex w-fit items-center gap-2 bg-[color-mix(in_hsl,hsl(var(--primary-surface))_85%,hsl(var(--primary))_15%)] pb-1 hover:bg-[color-mix(in_hsl,hsl(var(--primary-surface))_85%,hsl(var(--primary))_15%)] dark:hover:bg-primary">
                <RocketLaunch className="size-4" weight="fill" />
                {t("badge")}
              </Badge>
            </motion.div>

            <motion.h1
              className="font-primary text-4xl font-normal tracking-tight sm:text-5xl md:text-6xl"
              variants={itemVariants}
            >
              {t("titlePrefix")}{" "}
              <span className="serif-accent bg-gradient-to-br from-primary via-primary1 to-primary bg-clip-text font-accent font-normal italic text-transparent">
                {t("titleHighlight")}
              </span>
            </motion.h1>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
              variants={itemVariants}
            >
              <span className={capsuleClassName}>
                <Megaphone
                  weight="fill"
                  className="size-4 shrink-0 text-primary"
                />
                {t("statsRoles", { count: jobs.length })}
              </span>
              <span className={capsuleClassName}>
                <Buildings
                  weight="fill"
                  className="size-4 shrink-0 text-primary"
                />
                {t("statsCompanies", { count: companyCount })}
              </span>
              <span className={capsuleClassName}>
                <ArrowsClockwise
                  weight="fill"
                  className="size-4 shrink-0 text-primary"
                />
                {t("statsUpdated")}
              </span>
            </motion.div>
          </motion.div>
        </section>

        {/* Jobs */}
        <motion.section
          id="devrel-jobs"
          className="mx-auto max-w-6xl scroll-mt-28 px-4 pb-24 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerChildren}
        >
          {/* Sticky toolbar */}
          <motion.div
            variants={itemVariants}
            className="sticky top-24 z-30 mx-auto mb-8 w-full max-w-4xl"
          >
            <div className="relative mx-auto w-full">
              <div className="relative mx-auto min-w-0 w-full max-w-xl">
                <MagnifyingGlass
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                  weight="duotone"
                />
                <Input
                  type="search"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setPage(1);
                  }}
                  placeholder={t("searchPlaceholder")}
                  aria-label={t("searchLabel")}
                  className="h-10 rounded-xl border-border/60 bg-white/70 pl-9 pr-9 text-sm shadow-none focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:ring-offset-0 dark:border-white/10 dark:bg-white/[0.06]"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label={t("clearFilters")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <XCircle className="size-4" weight="fill" />
                  </button>
                ) : null}
              </div>

              <div className="mx-auto mt-3 grid w-full max-w-xl grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                <FilterDropdown
                  id="job-category"
                  label={t("categoryFilter")}
                  value={selectedCategory}
                  options={categories}
                  allLabel={t("allCategories")}
                  onChange={(value) =>
                    {
                      setSelectedCategory(value as DevRelJobCategory | null);
                      setPage(1);
                    }
                  }
                  className="w-full"
                />

                <FilterDropdown
                  id="job-type"
                  label={t("typeFilter")}
                  value={selectedType}
                  options={types}
                  allLabel={t("allTypes")}
                  onChange={(value) => {
                    setSelectedType(value);
                    setPage(1);
                  }}
                  className="w-full"
                />
                <FilterDropdown
                  id="job-location"
                  label={t("locationFilter")}
                  value={selectedLocation}
                  options={locations}
                  allLabel={t("allLocations")}
                  onChange={(value) => {
                    setSelectedLocation(value);
                    setPage(1);
                  }}
                  className="w-full"
                />
                <FilterDropdown
                  id="job-level"
                  label={t("levelFilter")}
                  value={selectedLevel}
                  options={levels}
                  allLabel={t("allLevels")}
                  onChange={(value) => {
                    setSelectedLevel(value);
                    setPage(1);
                  }}
                  className="w-full"
                />
              </div>

              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mx-auto mt-2 h-8 rounded-lg px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {t("clearFilters")}
                </button>
              ) : null}
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            aria-live="polite"
            className="mb-5 text-sm font-medium text-muted-foreground"
          >
            {t("showing", {
              shown: filteredJobs.length,
              total: jobs.length,
            })}
          </motion.p>

          {filteredJobs.length > 0 ? (
            <>
              <motion.div
                key={gridKey}
                className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
              >
                {paginatedJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    className="min-w-0"
                    variants={itemVariants}
                  >
                    <JobCard job={job} locale={locale} />
                  </motion.div>
                ))}
              </motion.div>
              {totalPages > 1 ? (
                <nav
                  aria-label={t("pagination")}
                  className="mt-8 flex items-center justify-center gap-3"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPage((value) => Math.max(1, value - 1))}
                    disabled={currentPage === 1}
                  >
                    {t("previousPage")}
                  </Button>
                  <span className="text-sm font-medium text-muted-foreground">
                    {t("pageOf", { page: currentPage, total: totalPages })}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setPage((value) => Math.min(totalPages, value + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    {t("nextPage")}
                  </Button>
                </nav>
              ) : null}
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <MagnifyingGlass
                className="size-10 text-muted-foreground/50"
                weight="duotone"
              />
              <div>
                <p className="font-inter text-lg font-semibold text-foreground">
                  {t("emptyTitle")}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("emptyDescription")}
                </p>
              </div>
              {hasActiveFilters ? (
                <Button variant="outline" onClick={clearFilters}>
                  {t("clearFilters")}
                </Button>
              ) : null}
            </div>
          )}

          {/* Submit CTA */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "relative mt-14 overflow-hidden rounded-2xl p-8 text-center sm:p-10",
              glassCardFrame,
            )}
          >
            <div aria-hidden className={glassCardEdgeHighlight} />
            <div className="relative z-[1] mx-auto flex max-w-2xl flex-col items-center">
              <h2 className="font-primary text-2xl font-normal tracking-tight sm:text-3xl">
                {t("submitTitle")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t("submitDescription")}
              </p>
              <Button variant="gradient" size="cta" className="mt-6" asChild>
                <a
                  href={DEVREL_JOB_SUBMIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("submitCta")}
                  <ArrowSquareOut className="size-4" weight="bold" />
                </a>
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                {t("submitNote")}
              </p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}
