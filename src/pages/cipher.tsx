import { requestPublicKey, decrypt, encrypt } from "@xld-sdk-react/cipher";

async function fetchData() {
  if (!window.ethereum) return;

  window.ethereum.enable();

  const account = window.ethereum.selectedAddress;

  if (!account) return;

  const pubkey = await requestPublicKey(account);

  const raw = encrypt(pubkey, "hello");
  console.log({ raw });

  const restored = await decrypt(account, raw);
  console.log({ restored });
}

export default function GasFeeTester() {
  fetchData();

  return null;
}
