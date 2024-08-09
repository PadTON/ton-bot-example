import axios from "axios";
import dotenv from "dotenv";
import TonWeb from "tonweb";

dotenv.config();

const apiBaseUrl = process.env.TON_API_BASE_URL!;
const apiKey = process.env.TON_API_KEY!;
const tonweb = new TonWeb(
  new TonWeb.HttpProvider(apiBaseUrl, { apiKey: apiKey })
);

export async function getLatestTransactions(address: string): Promise<any> {
  const response = await axios.get(`${apiBaseUrl}/getTransactions`, {
    params: {
      address,
      limit: 100,
      archival: true,
      api_key: apiKey,
    },
  });
  return response;
}
