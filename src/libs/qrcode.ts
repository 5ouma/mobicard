import QRCode from "qrcode";

export const generateQRCode = async (url: string): Promise<string> =>
  await QRCode.toString(url, {
    type: "svg",
    margin: 0,
    color: { light: "#00000000" },
  });
