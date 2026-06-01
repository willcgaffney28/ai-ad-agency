"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitPost, type SubmitState } from "./actions";

const initialState: SubmitState = { ok: false, error: null, ts: 0 };

const roles = ["Student", "Faculty", "Staff", "Alumni", "Other"];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-dartmouth-green px-6 py-3 text-sm font-medium text-warm-white shadow-warm transition-colors hover:bg-dartmouth-green-hover disabled:cursor-wait disabled:opacity-70"
    >
      {pending ? "Posting…" : "Post to the board"}
    </button>
  );
}

export function DiscussionForm() {
  const [state, formAction] = useFormState(submitPost, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [count, setCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.ok && state.ts) {
      formRef.current?.reset();
      setCount(0);
      setShowSuccess(true);
      const t = setTimeout(() => setShowSuccess(false), 3500);
      return () => clearTimeout(t);
    }
  }, [state.ok, state.ts]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="relative rounded-2xl border-l-[6px] border-dartmouth-green bg-warm-white p-6 shadow-warm sm:p-8"
    >
      <p className="mb-1 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-dartmouth-green">
        <span aria-hidden className="inline-block h-px w-8 bg-dartmouth-green/70" />
        Add to the conversation
      </p>
      <h3 className="mb-6 font-serif text-2xl font-medium text-charcoal sm:text-3xl">
        What are you noticing?
      </h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
            Name <span className="normal-case tracking-normal text-charcoal/45">(optional)</span>
          </span>
          <input
            name="name"
            type="text"
            maxLength={60}
            placeholder="Anonymous"
            className="rounded-md border border-stone bg-warm-white px-3 py-2.5 text-base text-charcoal placeholder:text-charcoal/35 focus:border-dartmouth-green focus:outline-none focus:ring-2 focus:ring-dartmouth-green/30"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
            You are…
          </span>
          <select
            name="role"
            required
            defaultValue=""
            className="rounded-md border border-stone bg-warm-white px-3 py-2.5 text-base text-charcoal focus:border-dartmouth-green focus:outline-none focus:ring-2 focus:ring-dartmouth-green/30"
          >
            <option value="" disabled>
              Choose one
            </option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-xs uppercase tracking-[0.2em] text-charcoal/60">
          This is…
        </legend>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <label className="flex flex-1 cursor-pointer items-start gap-3 rounded-md border border-stone bg-warm-white p-3 transition-colors hover:border-dartmouth-green/60 [&:has(:checked)]:border-dartmouth-green [&:has(:checked)]:bg-dartmouth-green/[0.04]">
            <input
              type="radio"
              name="category"
              value="thought"
              required
              className="mt-1 h-4 w-4 accent-dartmouth-green"
            />
            <span>
              <span className="block font-serif text-lg text-charcoal">
                A thought on AI
              </span>
              <span className="block text-sm text-charcoal/65">
                A reflection, a worry, a question.
              </span>
            </span>
          </label>

          <label className="flex flex-1 cursor-pointer items-start gap-3 rounded-md border border-stone bg-warm-white p-3 transition-colors hover:border-dartmouth-green/60 [&:has(:checked)]:border-dartmouth-green [&:has(:checked)]:bg-dartmouth-green/[0.04]">
            <input
              type="radio"
              name="category"
              value="classroom"
              className="mt-1 h-4 w-4 accent-dartmouth-green"
            />
            <span>
              <span className="block font-serif text-lg text-charcoal">
                A use in the classroom
              </span>
              <span className="block text-sm text-charcoal/65">
                Something that's actually worked for you.
              </span>
            </span>
          </label>
        </div>
      </fieldset>

      <label className="mt-5 flex flex-col gap-1.5">
        <span className="flex items-baseline justify-between text-xs uppercase tracking-[0.2em] text-charcoal/60">
          Your post
          <span className="normal-case tracking-normal text-charcoal/45">
            {count} / 1200
          </span>
        </span>
        <textarea
          name="body"
          required
          minLength={4}
          maxLength={1200}
          rows={5}
          onChange={(e) => setCount(e.target.value.length)}
          placeholder="What have you noticed, tried, or wondered about? Plain language welcome."
          className="resize-y rounded-md border border-stone bg-warm-white px-3 py-2.5 text-base leading-relaxed text-charcoal placeholder:text-charcoal/35 focus:border-dartmouth-green focus:outline-none focus:ring-2 focus:ring-dartmouth-green/30"
        />
      </label>

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-charcoal/55">
          Posts are public on this page. Be kind. Be specific.
        </p>
        <SubmitButton />
      </div>

      {state.error && (
        <p
          role="alert"
          className="mt-4 rounded-md border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-charcoal"
        >
          {state.error}
        </p>
      )}

      {showSuccess && (
        <p
          role="status"
          className="mt-4 rounded-md border border-dartmouth-green/40 bg-dartmouth-green/10 px-4 py-3 text-sm text-charcoal"
        >
          Thanks — your post is up. Scroll down to see it on the board.
        </p>
      )}
    </form>
  );
}
