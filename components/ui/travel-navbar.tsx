"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

/** Delay (ms) after mount before logo + menu are shown — keeps bar “empty” while scaleX runs */
const NAV_CONTENT_DELAY_MS = 560;

export function TravelNavbar() {
  const [open, setOpen] = useState(false);
  const [showChrome, setShowChrome] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShowChrome(true), NAV_CONTENT_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-[120] px-4 md:px-8">
        <motion.div
          layout
          style={{ transformOrigin: "center center" }}
          initial={{ scaleX: 0.34 }}
          animate={{ scaleX: 1 }}
          transition={{
            scaleX: {
              type: "tween",
              duration: 0.82,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.06,
            },
            layout: {
              type: "spring",
              stiffness: 280,
              damping: 28,
            },
          }}
          className={`mx-auto w-full ${open ? "max-w-[560px]" : "max-w-4xl"
            } rounded-2xl border border-sky-100 bg-sky-50/95 shadow-[0_12px_40px_-22px_rgba(56,189,248,0.18)] backdrop-blur-md`}
        >
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={
              showChrome
                ? { opacity: 1, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(8px)" }
            }
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className={`flex h-14 items-center justify-between px-5 ${open ? "border-b border-sky-100" : ""} ${showChrome ? "pointer-events-auto" : "pointer-events-none"}`}
            aria-hidden={!showChrome}
          >
            <Link
              href="#"
              tabIndex={showChrome ? 0 : -1}
              className="text-sm font-semibold tracking-[0.02em] text-sky-950 md:text-base"
            >
              Aeralis Travel
            </Link>
            <button
              type="button"
              tabIndex={showChrome ? 0 : -1}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-sky-700 transition hover:bg-sky-100/80 hover:text-sky-950"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </motion.div>

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
                <nav className="overflow-hidden rounded-xl bg-white/55">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * i }}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-sky-200/70 px-4 py-3 text-[1.9rem] leading-none text-sky-950 transition hover:bg-sky-50/90 md:text-[2rem]"
                    >
                      <span className="text-lg">{item.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-sky-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-800" />
                    </motion.a>
                  ))}
                </nav>

                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                  className="mt-4 flex w-full items-center justify-between rounded-xl bg-sky-600 px-4 py-3 font-medium text-white shadow-md shadow-sky-500/25 transition hover:bg-sky-700"
                >
                  Plan your escape
                  <span className="rounded-md bg-white/20 px-2 py-1 text-sm">→</span>
                </motion.button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </header>
    </>
  );
}
