"use client";

import { motion, easeInOut } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const fadeBlurUp = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
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
        staggerChildren: 0.05,
        delayChildren: 0.12,
      },
    },
  };

  return (
    <main className="flex flex-col flex-1 w-full max-w-2xl mx-auto px-4 py-24 gap-32 scroll-smooth">
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
          variants={fadeBlurUp}
          className="text-sm uppercase tracking-widest text-zinc-400"
        >
          Product over code
        </motion.p>

        <motion.h1
          variants={fadeBlurUp}
          className="text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight"
        >
          Pablo Bottoni
        </motion.h1>

        <motion.p
          variants={fadeBlurUp}
          className="text-xl text-zinc-500 dark:text-zinc-400 max-w-lg font-light leading-relaxed"
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
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col gap-4 py-8"
      >
        <motion.h2
          variants={fadeBlurUp}
          className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={fadeBlurUp}
          className="text-zinc-800 dark:text-zinc-200 text-base font-light space-y-6 leading-relaxed max-w-prose"
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
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col gap-4 py-8"
      >
        <motion.h2
          variants={fadeBlurUp}
          className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest"
        >
          Approach
        </motion.h2>

        <motion.div
          variants={fadeBlurUp}
          className="text-zinc-600 dark:text-zinc-400 text-base font-light max-w-prose space-y-3 leading-relaxed"
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
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col gap-6 py-8"
      >
        <motion.h2
          variants={fadeBlurUp}
          className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest"
        >
          Selected Work
        </motion.h2>

        <motion.div
          variants={fadeBlurUp}
          className="flex flex-col text-zinc-800 dark:text-zinc-200 text-base font-light leading-relaxed max-w-prose"
        >
          {/* CLICKABLE HEADER */}
          <button
            onClick={() => setOpen(!open)}
            className="text-left group cursor-pointer"
          >
            <h3 className="text-zinc-900 dark:text-zinc-100 transition-all duration-300 group-hover:opacity-70 group-hover:translate-x-1">
              From idea to shipped product
            </h3>
          </button>

          {/* EXPANDABLE CONTENT */}
          <motion.div
            initial={false}
            animate={{
              height: open ? "auto" : 0,
              opacity: open ? 1 : 0,
              marginTop: open ? 16 : 0,
              filter: open ? "blur(0px)" : "blur(4px)",
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden flex flex-col gap-4"
          >
            <div className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-200">
                Context:
              </strong>{" "}
              Worked with stakeholders to turn an early-stage idea into a
              functional product with clear priorities and defined scope.
            </div>

            <div className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-200">
                Problem:
              </strong>{" "}
              The initial idea lacked structure, making it difficult for the
              team to execute and deliver consistently.
            </div>

            <div className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-200">
                Actions:
              </strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Defined scope and broke down features into clear tasks</li>
                <li>Aligned stakeholders around priorities and expectations</li>
                <li>Organized delivery in short, iterative cycles</li>
              </ul>
            </div>

            <div className="text-zinc-600 dark:text-zinc-400">
              <strong className="text-zinc-800 dark:text-zinc-200">
                Outcome:
              </strong>{" "}
              Delivered a functional product with improved clarity, faster
              execution, and better alignment between business and development.
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Final Phrase */}
      <motion.div
        variants={fadeBlurUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="text-center"
      >
        <p className="text-zinc-400 text-sm">Less features. More impact.</p>
      </motion.div>

      {/* Contact */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="flex flex-col gap-4 py-8 items-center text-center"
      >
        <motion.h2
          variants={fadeBlurUp}
          className="text-lg font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-widest"
        >
          Contact
        </motion.h2>

        <motion.a
          variants={fadeBlurUp}
          href="mailto:polches@gmail.com"
          className="text-zinc-600 dark:text-zinc-400 underline underline-offset-4 hover:opacity-70 transition-all duration-300"
        >
          polches@gmail.com
        </motion.a>
      </motion.section>

      {/* Bottom spacing */}
      <div className="h-24" />
    </main>
  );
}
