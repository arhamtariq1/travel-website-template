"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export function TravelNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-[120] px-4 md:px-8">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className={`mx-auto w-full ${open ? "max-w-[560px]" : "max-w-4xl"
            } rounded-2xl bg-[#f2efe8]/90 shadow-[0_12px_28px_-18px_rgba(0,0,0,0.45)] backdrop-blur-md`}
        >
          <div className="flex h-14 items-center justify-between px-5">
            <Link
              href="#"
              className="text-sm font-semibold tracking-[0.02em] text-[#2f2a26] md:text-base"
            >
              Aeralis Travel
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#4a433d] transition hover:text-[#241f1a]"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                key="expanded-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="overflow-hidden px-5 pb-5"
              >
                <nav className="overflow-hidden rounded-xl border border-black/10 bg-[#ebe7de]">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * i }}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-black/12 px-4 py-3 text-[1.9rem] leading-none text-[#2f2a26] transition hover:bg-black/[0.02] md:text-[2rem] last:border-b-0"
                    >
                      <span className="text-lg">{item.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-[#5a5149] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.a>
                  ))}
                </nav>

                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                  className="mt-4 flex w-full items-center justify-between rounded-xl bg-[#2f2722] px-4 py-3 font-medium text-[#f4efe6]"
                >
                  Plan your escape
                  <span className="rounded-md bg-white/10 px-2 py-1 text-sm">→</span>
                </motion.button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </header>
    </>
  );
}
