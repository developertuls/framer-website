
"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PricingGate({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Wrapper */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="
              fixed top-0 left-0 right-0 z-50 mx-auto
              w-full max-w-3xl
              rounded-b-3xl bg-[#0a0a1e]
              shadow-2xl
              max-h-[90vh]
              flex flex-col
            "
          >
            {/* Header (fixed) */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-white">
                💰 Pricing Guide
              </h3>

              <button
                onClick={onClose}
                className="rounded-full bg-white px-4 py-1.5 text-sm text-black transition hover:opacity-80"
              >
                Close
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-10 text-sm sm:text-base text-white">
              <p className="opacity-80 leading-relaxed">
                We also offer favors for weddings, engagements, baby showers & other special occasions.
                Orders must be placed at least <strong>3 weeks in advance</strong>.
              </p>

              <Section title="Engagement Trays">
                <PriceRow
                  title="13 inch Engagement Tray"
                  price="from $115"
                  note="Includes ring box & handles"
                />
                <PriceRow
                  title="10 inch Engagement Tray"
                  price="from $100"
                  note="Includes ring box & handles"
                />
              </Section>

              <Section title="Accessories">
                <PriceRow title="Car Hanger" price="$20" />
                <PriceRow title="4 Coasters (No Base)" price="$50" />
                <PriceRow title="4 Coasters (With Base)" price="$60" />
              </Section>

              <Section title="Flower Preservation">
                <PriceRow title="Heart Shape" price="$120" />
              </Section>
            </div>

            {/* Footer (fixed) */}
            <div className="px-6 py-4 bg-gray-100 text-xs sm:text-sm text-[#1B1464] rounded-b-3xl">
              Final price depends on size, design, personalization & packaging.
              <br />
              All prices are in USD.
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* -------- Components -------- */

function Section({ title, children }) {
  return (
    <div>
      <h4 className="mb-4 text-lg font-semibold text-[#f5c16c]">
        {title}
      </h4>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function PriceRow({ title, price, note }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-black hover:scale-[1.01] transition">
      <div>
        <p className="font-medium">{title}</p>
        {note && <p className="text-xs opacity-70">{note}</p>}
      </div>
      <span className="font-semibold text-[#1B1464]">{price}</span>
    </div>
  );
}
