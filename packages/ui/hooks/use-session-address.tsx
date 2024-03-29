import { useWallet } from "@solana/wallet-adapter-react";
import { useSession } from "next-auth/react";

/**
 * A custom hook that returns the current user's wallet address from the session.
 */
export const useSessionAddress = () => {
  const { publicKey: address } = useWallet();

  const session = useSession();

  const connected = session && !!session.data?.user?.name && !!address;

  const sessionAddress = session?.data?.user?.name as string | undefined;

  return { address: sessionAddress, isConnected: !!connected };
};
