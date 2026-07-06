import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  const { name, email, phone, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ ok: false, error: "Completa los campos requeridos." }, { status: 422 });
  }

  void phone;

  // TODO: conectar a un proveedor de email/CRM (p. ej. Resend) para enviar el mensaje.
  return NextResponse.json({ ok: true });
}
