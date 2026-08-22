import { headers } from "next/headers";

const APEX_VERIFICATION = "dh=f8cff8989cd37217fa4d58576b01cdb0d109ee2c";
const WWW_VERIFICATION = "dh=f233b8008f9e5ac82b99f77c1cf4ec4c3eed85b5";

export function GET() {
  const host = headers().get("host")?.split(":")[0].toLowerCase();
  const verification = host === "www.amnr.bro.bd" ? WWW_VERIFICATION : APEX_VERIFICATION;

  return new Response(verification, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
