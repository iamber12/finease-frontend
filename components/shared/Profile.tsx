"use client";
import useDropdown from "@/utils/useDropdown";
import {
  IconLifebuoy,
  IconLogout,
  IconMessage,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
export const profileLinks = [
  {
    icon: <IconUser size={18} />,
    url: "/settings/profile",
    title: "My Profile",
  },
  {
    icon: <IconMessage size={18} />,
    url: "/private/chat",
    title: "Meassages",
  },
  {
    icon: <IconLifebuoy size={18} />,
    url: "/support/help-center",
    title: "Help",
  },
  {
    icon: <IconSettings size={18} />,
    url: "/settings/security",
    title: "Settings",
  },
  {
    icon: <IconLogout size={18} />,
    url: "/auth/sign-in",
    title: "Logout",
  },
];
const Profile = () => {
  const { open, ref, toggleOpen } = useDropdown();
  return (
    <div className="relative shrink-0" ref={ref}>
      <div className="cursor-pointer w-10 md:w-12" onClick={toggleOpen}>
        <Image
          src="/images/user-big-4.png"
          className="rounded-full"
          width={48}
          height={48}
          alt="profile img"
        />
      </div>
      <div
        className={`bg-n0 z-20  dark:bg-bg4 ltr:origin-top-right rtl:origin-top-left rounded-md ltr:right-0 rtl:left-0 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] absolute top-full duration-300 ${
          open ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-0"
        }`}
      >
        <div className="flex flex-col text-center items-center lg:p-4 p-3 border-b dark:border-n500">
          <Image
            src="/images/user-big-4.png"
            width={60}
            height={60}
            className="rounded-full"
            alt="profile img"
          />
          <h6 className="h6 mt-2">William James</h6>
          <span className="text-sm">james@mail.com</span>
        </div>
        <ul className="flex flex-col w-[250px] p-4">
          {profileLinks.map(({ icon, title, url}) => (
            <li key={title}>
              <Link
                href={url}
                className="flex items-center gap-2 p-2 rounded-md duration-300 hover:bg-primary hover:text-n0"
              >
                <span>{icon}</span>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
