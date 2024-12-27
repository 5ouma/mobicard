import QRCode from "qrcode";

/**
 * Generate QR code from URL.
 *
 * @param url The URL to generate the QR code for.
 * @returns QR code as SVG string
 *
 * @example
 * ```ts
 * import { generateQRCode } from "./libs/qrcode.ts";
 * const qrCode = await generateQRCode("https://example.com");
 * console.log(qrCode);
 * ```
 */
export const generateQRCode = async (url: string): Promise<string> =>
  await QRCode.toString(url, {
    type: "svg",
    margin: 0,
    color: { light: "#00000000" },
  });
