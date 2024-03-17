"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import Profile from "@components/profile/Profile";

const MyProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(session);

  useEffect(() => {
    // If the status is not "loading" and there's no session, redirect
    if (status !== "loading" && !session) {
      router.push("/authflow");
    }
  }, [session, status, router]);

  return (
    <div>
      <Profile session={session} signOut={signOut} />
    </div>
  );
};

export default MyProfile;
