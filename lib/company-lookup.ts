import { Data } from "@/data";

const ALIASES: Record<string, string> = {
  Permit: "Permit.io",
};

function normalizeName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const companyByNormalized = new Map(
  Data.Companies.map((company) => [normalizeName(company.name), company]),
);

export type CompanyInfo = (typeof Data.Companies)[number];

export function getCompanyByName(name: string): CompanyInfo | undefined {
  const resolved = ALIASES[name] ?? name;
  const normalized = normalizeName(resolved);

  return (
    companyByNormalized.get(normalized) ??
    Data.Companies.find((company) =>
      normalizeName(company.name).includes(normalized),
    )
  );
}

export function getDomainFromUrl(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}
