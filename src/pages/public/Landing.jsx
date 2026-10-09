import {
  ScanSearch,
  Tag,
  Truck,
  Award,
  Upload,
  Sparkles,
  Recycle,
  Leaf,
  ShieldCheck,
  BookOpen,
  TriangleAlert,
  ChartColumn,
} from 'lucide-react';
import Button from '../../components/ui/Button';
import { CATEGORIES } from '../../utils/constants';
import { useAuth } from '../../hooks/useAuth';

const HIGHLIGHTS = [
  {
    icon: ScanSearch,
    title: 'AI Waste Identification',
    text: 'Upload a photo and get the waste category with safe disposal advice.',
  },
  { icon: Tag, title: 'Sell Recyclables', text: 'List recyclable materials and e-waste for verified recyclers.' },
  { icon: Truck, title: 'Request Pickup', text: 'Schedule a doorstep collection and track it step by step.' },
  { icon: Award, title: 'Earn EcoPoints', text: 'Get rewarded every time you dispose of waste responsibly.' },
];

const STEPS = [
  { icon: Upload, title: 'Upload a photo', text: 'Take or upload a picture of the waste item.' },
  { icon: Sparkles, title: 'AI identifies it', text: 'EcoSort classifies it into one of five categories.' },
  { icon: Recycle, title: 'Choose an action', text: 'Sell it, request a pickup or follow the disposal guide.' },
  { icon: Leaf, title: 'Track your impact', text: 'Earn EcoPoints and see your estimated environmental impact.' },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    text: 'Firebase Authentication, role-based access and security rules.',
  },
  { icon: Truck, title: 'Live pickup tracking', text: 'Real-time status updates from request to completion.' },
  { icon: BookOpen, title: 'Disposal guide', text: 'Searchable guide that works even without AI.' },
  { icon: TriangleAlert, title: 'Report problems', text: 'Report illegal dumping, burning or uncollected waste.' },
  { icon: ChartColumn, title: 'Dashboards', text: 'Clear analytics for users, collectors and administrators.' },
  { icon: Award, title: 'Rewards', text: 'EcoPoints and eco levels from Eco Starter to Green Champion.' },
];

export default function Landing() {
  const { user } = useAuth();

  return (
    <>
      <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(18,109,82,0.12),_transparent_32%),linear-gradient(135deg,_#f6fbf8_0%,_#ffffff_35%,_#eefaf3_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(43,182,115,0.12),_transparent_30%)]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <span className="inline-flex rounded-full border border-[#cfe9dc] bg-[#edfaf4] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[#0a5c45] uppercase">
              AI-Enabled Smart Waste Management
            </span>
            <h1 className="mt-5 text-4xl leading-tight font-extrabold tracking-[-0.04em] text-slate-900 md:text-5xl lg:text-6xl">
              Sort Smart.
              <span className="mt-2 block bg-gradient-to-r from-[#0d7554] via-[#0f8a62] to-[#3db77b] bg-clip-text text-transparent">
                Recycle Better.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              EcoSort helps you identify waste, choose the right disposal method, sell recyclable materials and request
              convenient collection—all from one simple platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" icon={ScanSearch} to={user ? '/identify' : '/login'} className="shadow-lg shadow-brand-600/20">
                Identify My Waste
              </Button>
              <Button size="lg" variant="outline" icon={Truck} to={user ? '/pickups/new' : '/login'}>
                Request Pickup
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="rounded-full border border-[#dfeee7] bg-white/80 px-3 py-2 shadow-sm">
                <span className="font-bold text-[#0a4b3a]">5</span> waste categories
              </div>
              <div className="rounded-full border border-[#dfeee7] bg-white/80 px-3 py-2 shadow-sm">
                <span className="font-bold text-[#0a4b3a]">24/7</span> support
              </div>
              <div className="rounded-full border border-[#dfeee7] bg-white/80 px-3 py-2 shadow-sm">
                <span className="font-bold text-[#0a4b3a]">EcoPoints</span> rewards
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-emerald-200/60 blur-2xl" />
            <div className="absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-brand-200/70 blur-2xl" />

            <div className="relative rounded-[28px] border border-[#dfeee7] bg-white/80 p-5 shadow-[0_35px_90px_rgba(9,42,35,0.12)] backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/70"
                  >
                    <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 p-2.5 text-white shadow-sm shadow-emerald-600/20">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-[#0b1f1a] p-5 text-white shadow-[0_20px_40px_rgba(6,28,23,0.25)]">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Impact this week</span>
                  <span className="font-medium text-emerald-300">+24.6%</span>
                </div>
                <div className="mt-4 flex items-end gap-2">
                  {[35, 52, 46, 68, 82, 95].map((bar, index) => (
                    <div key={bar} className="flex-1 rounded-t-xl bg-gradient-to-t from-emerald-500 to-lime-300" style={{ height: `${bar}px`, opacity: 0.7 + index * 0.05 }} />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                  <span>EcoPoints earned</span>
                  <span className="font-semibold text-white">1,420</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">How it works</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Turn waste into action in four easy steps</h2>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-brand-100 text-brand-700">
                <Icon size={24} aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Step {i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="categories" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Waste categories</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">Built for smarter sorting</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CATEGORIES.map((c) => (
              <div
                key={c.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                style={{ borderTopColor: c.color, borderTopWidth: '4px' }}
              >
                <p className="text-3xl" aria-hidden="true">
                  {c.emoji}
                </p>
                <h3 className="mt-3 font-semibold text-slate-900">{c.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{c.description}</p>
                <p className="mt-3 text-xs font-medium text-slate-400">{c.examples.slice(0, 3).join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Features</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Everything you need to manage waste responsibly</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-gradient-to-r from-brand-700 to-emerald-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">About EcoSort</p>
          <h2 className="mt-3 text-3xl font-bold">Smarter waste systems for cleaner communities</h2>
          <p className="mt-4 text-lg text-emerald-50/90">
            EcoSort connects households, waste collectors and administrators on one platform so more waste gets sorted,
            recycled and diverted from landfills.
          </p>
          {!user && (
            <div className="mt-8 flex justify-center gap-3">
              <Button size="lg" variant="light" to="/register" className="shadow-md shadow-emerald-900/20">
                Create free account
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
