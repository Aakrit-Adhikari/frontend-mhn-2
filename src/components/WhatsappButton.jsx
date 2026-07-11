export default function WhatsappButton() {
  const phoneNumber = "9712082949";
  const message =
    "Hi — I have a quick question about a Mountain Helicopters flight.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-[9999] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 sm:bottom-6 sm:right-5 sm:h-[56px] sm:w-[56px]"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="sm:h-[32px] sm:w-[32px]"
      >
        <path
          fill="white"
          d="M16.04 4C9.42 4 4.04 9.32 4.04 15.86c0 2.1.56 4.15 1.62 5.95L4 28l6.36-1.62a12.1 12.1 0 0 0 5.68 1.42C22.66 27.8 28 22.48 28 15.94 28 9.36 22.66 4 16.04 4Zm0 21.78c-1.82 0-3.6-.5-5.14-1.46l-.36-.22-3.78.96 1-3.64-.24-.38a9.82 9.82 0 0 1-1.5-5.18c0-5.42 4.5-9.84 10.02-9.84 5.5 0 9.98 4.44 9.98 9.92 0 5.42-4.48 9.84-9.98 9.84Zm5.48-7.36c-.3-.14-1.76-.86-2.04-.96-.28-.1-.48-.14-.68.14-.2.3-.78.96-.96 1.16-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.14-.6.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.14-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.08-.8.38-.28.3-1.06 1.04-1.06 2.52s1.08 2.92 1.24 3.12c.16.2 2.12 3.22 5.14 4.52.72.3 1.28.48 1.72.62.72.22 1.38.18 1.9.12.58-.08 1.76-.72 2-1.42.24-.7.24-1.3.18-1.42-.08-.12-.28-.2-.58-.34Z"
        />
      </svg>
    </a>
  );
}