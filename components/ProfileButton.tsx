import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";

const ProfileButton = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      {user.email ? (
        <Button variant={"secondary"}>
          {user.email} <LogOut className="ml-1.5" size={20} />
        </Button>
      ) : (
        <Link href={"/login"}>
          <Button size={"icon"} variant={"outline"}>
            <LogIn size={20} />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ProfileButton;
