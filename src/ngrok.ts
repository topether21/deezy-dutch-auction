import * as ngrok from "ngrok";

export const useNgrok = async (port: number) => {
  if (process.env.NODE_ENV === "development") {
    const url = await ngrok.connect({
      addr: port,
      authtoken: process.env.NGROK_AUTH_TOKEN,
    });
    console.log(`Server listening on http://localhost:${port}`);
    console.log(`Ngrok Tunnel: ${url}`);
  }
};
