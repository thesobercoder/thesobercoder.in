import { Slot, component$, useSignal } from "@builder.io/qwik";

export const CodeBlock = component$(() => {
  const disabled = useSignal(false);

  return (
    <>
      {" "}
      <div class="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-surface2 bg-crust py-2 pl-4 pr-2">
        <div class="flex items-center gap-4">
          <span class="inline-flex items-center gap-1.5">
            <span class="h-3 w-3 rounded-full bg-text"></span>
            <span class="h-3 w-3 rounded-full bg-text"></span>
            <span class="h-3 w-3 rounded-full bg-text"></span>
          </span>
        </div>
        <button class="inline-flex h-7 w-20 items-center justify-center gap-0.5 rounded-lg border border-surface2 px-2.5 text-xs font-medium text-text transition hover:bg-text hover:text-base hover:text-xs disabled:pointer-events-none disabled:opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-0.5"
            height="14"
            width="14"
            viewBox="0 0 448 512"
            fill="currentColor"
          >
            <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path>
          </svg>
          Copy
        </button>
      </div>
      <pre class="mt-0 overflow-x-auto break-normal rounded-t-none border-x border-b border-surface2 bg-[#232634] text-left">
        <Slot />
      </pre>
    </>
  );
});
