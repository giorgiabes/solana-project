import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("ACCOUNT_001_SECRET_KEY");

console.log(`✅ Finished! We've loaded our secret key securely, using an .env file!`,);
