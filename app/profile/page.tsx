"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { clearTokens, isLoggedIn } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const { data } = await api.get("/profile");
        setProfile(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const logout = () => {
    clearTokens();
    router.push("/");
  };

  if (!profile)
    return (
      <div className="flex items-center justify-center h-screen">Loading...</div>
    );

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Your Profile</h1>

      <img
        src={profile.avatar}
        className="w-24 h-24 rounded-full border"
        alt="avatar"
      />

      <p className="text-xl">{profile.name}</p>
      <p className="text-gray-600">{profile.email}</p>

      <button
        onClick={logout}
        className="px-6 py-2 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
