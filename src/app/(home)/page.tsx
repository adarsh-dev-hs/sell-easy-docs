import Link from 'next/link';
import {
  BotIcon,
  CodeIcon,
  CompassIcon,
  GaugeIcon,
  IndianRupeeIcon,
  MilestoneIcon,
  NetworkIcon,
  RadioTowerIcon,
  SendIcon,
  TargetIcon,
} from 'lucide-react';

const pillars = [
  {
    icon: RadioTowerIcon,
    title: 'Signals',
    body: 'Intent topics, website visits, hiring, funding and job changes — unified per account.',
  },
  {
    icon: GaugeIcon,
    title: 'Fit + intent scoring',
    body: 'Your ICP and your weights. Every account is re-scored as new signals arrive.',
  },
  {
    icon: BotIcon,
    title: 'Orchestration agent',
    body: 'Playbooks route owners, draft outreach, enroll sequences and open deals.',
  },
  {
    icon: SendIcon,
    title: 'Outreach & pipeline',
    body: 'Sequences, reply inbox, deliverability, kanban pipeline and CRM sync.',
  },
];

const sections = [
  {
    icon: CompassIcon,
    title: 'Product',
    href: '/docs/product',
    audience: 'Product managers & GTM',
    body: 'Problem, personas, core concepts, end-to-end journeys, a guide to every feature, roles, metrics and status.',
  },
  {
    icon: NetworkIcon,
    title: 'Product architecture',
    href: '/docs/architecture',
    audience: 'Stakeholders & leads',
    body: 'The layers, capability maturity, data flows, the integration landscape, environments and the target AWS platform.',
  },
  {
    icon: TargetIcon,
    title: 'MVP scope',
    href: '/docs/mvp-scope',
    audience: 'Everyone',
    body: 'What the first customer-ready release includes and excludes, acceptance criteria, success metrics and launch checklist.',
  },
  {
    icon: MilestoneIcon,
    title: 'Roadmap (3 months)',
    href: '/docs/roadmap',
    audience: 'Planning',
    body: 'Month-by-month delivery plan for a three-engineer, AI-assisted team, with gates, dependencies and risks.',
  },
  {
    icon: IndianRupeeIcon,
    title: 'Team & cost',
    href: '/docs/team-and-cost',
    audience: 'Founders & finance',
    body: 'The three-person team plan and the estimated budget in rupees: people, infrastructure, vendors and AI.',
  },
  {
    icon: CodeIcon,
    title: 'Engineering',
    href: '/docs/engineering',
    audience: 'Developers',
    body: 'Local setup, architecture, data model, the full API reference, the frontend data layer, configuration and deployment.',
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-16">
      <section className="flex flex-col items-center gap-5 text-center">
        <span className="rounded-full border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
          Product & engineering documentation
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">SellEasy</h1>
        <p className="max-w-2xl text-lg text-fd-muted-foreground">
          The agentic GTM platform that turns buying signals into pipeline. Learn what it does, how it works, what ships
          first, and what it takes to build.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
          >
            Start reading
          </Link>
          <Link
            href="/docs/product"
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-fd-accent"
          >
            <CompassIcon className="size-4" /> Product docs
          </Link>
          <Link
            href="/docs/engineering"
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-fd-accent"
          >
            <CodeIcon className="size-4" /> Engineering docs
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-xl border bg-fd-card p-5">
            <p.icon className="mb-3 size-5 text-fd-primary" />
            <h2 className="font-semibold">{p.title}</h2>
            <p className="mt-1 text-sm text-fd-muted-foreground">{p.body}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">All documentation</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="rounded-xl border p-5 transition-colors hover:bg-fd-accent">
              <s.icon className="mb-3 size-5 text-fd-primary" />
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-xs text-fd-muted-foreground">{s.audience}</p>
              <p className="mt-2 text-sm text-fd-muted-foreground">{s.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
