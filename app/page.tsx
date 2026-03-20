"use client";

import { motion, easeInOut } from "framer-motion";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <main className="flex flex-col flex-1 w-full max-w-2xl mx-auto px-4 py-24 gap-32">
      {/* Hero */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center gap-6 py-24 relative"
      >
        <div
          className="absolute inset-0 pointer-events-none select-none opacity-60 blur-2xl"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #a1a1aa33 0%, transparent 70%)",
          }}
        />

        <motion.p
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-zinc-400"
        >
          Product over code
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight"
        >
          Pablo Bottoni
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl text-zinc-500 dark:text-zinc-400 max-w-lg font-light"
        >
          I build digital products by aligning business goals, user needs, and
          technical execution.
          <br />
          <br />
          From idea to delivery, I focus on clarity, prioritization, and impact.
        </motion.p>
      </motion.section>

      {/* Experience */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-4 py-8"
      >
        <motion.h2
          variants={fadeUp}
          className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="text-zinc-800 dark:text-zinc-200 text-base font-light space-y-4"
        >
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
        </motion.div>
      </motion.section>

      {/* Approach */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-4 py-8"
      >
        <motion.h2
          variants={fadeUp}
          className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest"
        >
          Approach
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="text-zinc-600 dark:text-zinc-400 text-base font-light max-w-xl space-y-2"
        >
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
        </motion.div>
      </motion.section>

      {/* Selected Work */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-6 py-8"
      >
        <motion.h2
          variants={fadeUp}
          className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest"
        >
          Selected Work
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-3 text-zinc-800 dark:text-zinc-200 text-base font-light"
        >
          <h3 className="text-zinc-900 dark:text-zinc-100 transition-opacity duration-300 hover:opacity-70">
            From idea to shipped product
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400">
            Worked directly with stakeholders to define scope, break down
            features, and transform ideas into clear, executable tasks.
          </p>

          <p className="text-zinc-600 dark:text-zinc-400">
            Led the process from initial concept to delivery, ensuring alignment
            between business goals and technical execution.
          </p>

          <p className="text-zinc-500 text-sm mt-1">
            Focus: discovery · scope definition · delivery
          </p>
        </motion.div>
      </motion.section>

      {/* Contact */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-4 py-8 items-center text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest"
        >
          Contact
        </motion.h2>

        <motion.a
          variants={fadeUp}
          href="mailto:polches@gmail.com"
          className="text-zinc-600 dark:text-zinc-400 underline underline-offset-4 hover:opacity-70"
        >
          polches@gmail.com
        </motion.a>
      </motion.section>
    </main>
  );
}
