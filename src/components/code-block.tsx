import { $, Slot, component$, useSignal } from "@builder.io/qwik";

export const CodeBlock = component$(() => {
  const copied = useSignal(false);
  const codeRef = useSignal<HTMLElement>();

  const clickHandler = $(async () => {
    copied.value = true;

    const formattedCode = Array.from(
      codeRef.value?.querySelectorAll("span.line") ?? [],
    )
      .map((e) => e.textContent || "")
      .join("\n");

    await navigator.clipboard.writeText(formattedCode || "");

    setTimeout(() => {
      copied.value = false;
    }, 3000);
  });

  return (
    <div class="mockup-window bg-base-300">
      <button
        onClick$={clickHandler}
        disabled={copied.value}
        class="absolute right-3 top-2 btn btn-outline btn-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-0.5"
          height="14"
          width="14"
          viewBox="0 0 448 512"
          fill="currentColor"
        >
          {copied.value ? (
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          ) : (
            <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
          )}
        </svg>
        {copied.value ? "Copied" : "Copy"}
      </button>
      <pre
        ref={codeRef}
        class="m-0 overflow-x-auto break-normal rounded-t-none text-left bg-[#292c3c]"
      >
        <Slot />
      </pre>
    </div>
  );
});
