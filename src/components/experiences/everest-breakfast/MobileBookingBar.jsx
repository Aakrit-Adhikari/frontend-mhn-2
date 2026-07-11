import Link from "next/link";

export default function MobileBookingBar() {
  return (
    <>
      <div
        role="region"
        aria-label="Quick booking"
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 border-t border-[#E2E8F0] bg-white p-3 shadow-[0_-8px_24px_rgba(0,51,102,0.12)] lg:hidden"
      >
        <div className="min-w-0 flex-1 pl-2">
          <p className="font-fraunces text-lg font-semibold leading-none text-[#003366]">
            Everest Breakfast
          </p>

          <p className="mt-1 text-[11px] text-[#475569]">
            Approximately 4–5 hours
          </p>
        </div>

        <Link
          href="/contact"
          className="flex min-h-11 shrink-0 items-center rounded-xl bg-[#F2B632] px-6 py-3.5 text-sm font-bold text-[#003366]"
        >
          Reserve →
        </Link>
      </div>

      <div className="h-20 lg:hidden" />
    </>
  );
}