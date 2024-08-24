"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";

const SideBar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link
                    href="/"
                    className="mb-12 cursor-pointer items-center gap-2 flex"
                >
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Horizon Logo"
                        className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>
                {sidebarLinks.map((link) => {
                    const isActive =
                        pathname === link.route ||
                        pathname.startsWith(`${link.route}/`);
                    return (
                        <Link
                            key={link.label}
                            href={link.route}
                            className={cn("sidebar-link", {
                                "bg-bankGradient": isActive,
                            })}
                        >
                            <div className="relative size-6">
                                <Image
                                    src={link.imgURL}
                                    alt={link.label}
                                    fill
                                    className={cn({
                                        "brightness-[3] invert-0": isActive,
                                    })}
                                />
                            </div>
                            <p
                                className={cn("sidebar-label", {
                                    "!text-white": isActive,
                                })}
                            >
                                {link.label}
                            </p>
                        </Link>
                    );
                })}

                <PlaidLink user={user} />
            </nav>
            <Footer user={user} />
        </section>
    );
};

export default SideBar;
