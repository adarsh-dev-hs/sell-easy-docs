import Link from 'next/link';
import { BotIcon, CodeIcon, CompassIcon, GaugeIcon, RadioTowerIcon, SendIcon } from 'lucide-react';

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

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-16">
      <section className="flex flex-col items-center gap-5 text-center">
        <span className="rounded-full border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
          Product & engineering documentation
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">SellEasy</h1>
        <p className="max-w-2xl text-lg text-fd-muted-foreground">
          The agentic GTM platform that turns buying signals into pipeline. Learn what it does, how it works, and how
          it is built.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/product"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
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

      <section className="grid gap-4 sm:grid-cols-2">
        <Link href="/docs/product" className="rounded-xl border p-6 transition-colors hover:bg-fd-accent">
          <h2 className="text-lg font-semibold">For product managers</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">
            Problem, personas, core concepts, end-to-end journeys, a guide to every feature, roles, metrics and
            roadmap.
          </p>
        </Link>
        <Link href="/docs/engineering" className="rounded-xl border p-6 transition-colors hover:bg-fd-accent">
          <h2 className="text-lg font-semibold">For developers</h2>
          <p className="mt-2 text-sm text-fd-muted-foreground">
            Local setup, architecture, data model, backend internals, full API reference, frontend data layer,
            configuration, testing and deployment.
          </p>
        </Link>
      </section>
    </main>
  );
}
