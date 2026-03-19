export default function Home() {
  return (
    <main className="flex flex-col flex-1 w-full max-w-2xl mx-auto px-4 py-24 gap-32">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 py-24 relative">
        <div
          className="absolute inset-0 pointer-events-none select-none opacity-60 blur-2xl"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #a1a1aa33 0%, transparent 70%)",
          }}
        />

        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Product over code
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
          Pablo Bottoni
        </h1>

        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-lg font-light">
          I build digital products by aligning business goals, user needs, and
          technical execution.
          <br />
          <br />
          From idea to delivery, I focus on clarity, prioritization, and impact.
        </p>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col gap-4 py-8">
        <h2 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-1">
          Experience
        </h2>

        <div className="text-zinc-800 dark:text-zinc-200 text-base font-light space-y-4">
          <div>
            <div className="text-zinc-900 dark:text-zinc-100">Nomad Locals</div>
            <div className="text-zinc-500 text-sm">
              Team Leadership · Product Execution · Stakeholder Communication
            </div>
            <p className="mt-1">
              Led the development team in an agile environment, organizing
              priorities, aligning stakeholders, and ensuring consistent product
              delivery.
            </p>
          </div>

          <div>
            <div className="text-zinc-900 dark:text-zinc-100">Freelance</div>
            <div className="text-zinc-500 text-sm">
              End-to-end Product Ownership
            </div>
            <p className="mt-1">
              Managed projects from idea to delivery, working directly with
              clients to define scope, prioritize features, and ship functional
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="flex flex-col gap-4 py-8">
        <h2 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-1">
          Approach
        </h2>

        <div className="text-zinc-600 dark:text-zinc-400 text-base font-light max-w-xl space-y-2">
          <p>
            I focus on understanding the problem before proposing solutions.
          </p>
          <p>I prioritize based on impact, not complexity.</p>
          <p>
            I translate ideas into clear, actionable steps for development
            teams.
          </p>
          <p>
            I iterate quickly, using feedback to continuously improve outcomes.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col gap-4 py-8 items-center text-center">
        <h2 className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-1">
          Contact
        </h2>

        <a
          href="mailto:polches@gmail.com"
          className="text-zinc-600 dark:text-zinc-400 underline underline-offset-4 hover:opacity-70"
        >
          polches@gmail.com
        </a>
      </section>
    </main>
  );
}
