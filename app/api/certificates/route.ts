import certificates from "@/data/certificates.json";

export async function GET() {
  return Response.json({ certificates });
}