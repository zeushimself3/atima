"use server";

import { createSupabaseClient } from "@/lib/supabase/server";

export type ConsultationInput = {
  name: string;
  phone: string;
  interest: string;
  message: string;
  channel: "whatsapp" | "email";
};

export type ConsultationResult = { ok: true } | { ok: false; error: string };

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function submitConsultation(input: ConsultationInput): Promise<ConsultationResult> {
  const row = {
    name: clean(input.name, 120),
    phone: clean(input.phone, 40),
    interest: clean(input.interest, 120),
    message: clean(input.message, 4000) || null,
    channel: input.channel === "email" ? "email" : "whatsapp",
  };

  if (!row.name || row.phone.length < 5 || !row.interest) {
    return { ok: false, error: "Please provide your name and a valid phone number." };
  }

  const { error } = await createSupabaseClient().from("consultation_requests").insert(row);
  if (error) {
    console.error("submitConsultation failed:", error.message);
    return { ok: false, error: "We couldn't save your request. Please try again." };
  }
  return { ok: true };
}
