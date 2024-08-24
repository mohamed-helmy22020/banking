"use client";
import {
    createLinkToken,
    exchangePublicToken,
} from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
    PlaidLinkOnSuccess,
    PlaidLinkOptions,
    usePlaidLink,
} from "react-plaid-link";
import { Button } from "./ui/button";
const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState("");
    useEffect(() => {
        const getToken = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken);
        };
        getToken();
    }, [user]);

    const onSuccess = useCallback<PlaidLinkOnSuccess>(
        async (publicToken: string) => {
            await exchangePublicToken({
                publicToken,
                user,
            });

            router.push("/");
        },
        [user]
    );

    const config: PlaidLinkOptions = {
        token,
        onSuccess,
    };

    const { open, exit, ready } = usePlaidLink(config);

    return (
        <>
            {variant === "primary" ? (
                <Button
                    className="plaidlink-primary"
                    onClick={() => open()}
                    disabled={!ready}
                >
                    Connect bank
                </Button>
            ) : variant === "ghost" ? (
                <Button
                    className="plaidlink-ghost"
                    onClick={() => open()}
                    disabled={!ready}
                    variant="ghost"
                >
                    <Image
                        src="/icons/connect-bank.svg"
                        alt="Connect Bank"
                        width={24}
                        height={24}
                    />
                    <p className="text-[16] font-semibold text-black-2 hidden xl:block">
                        Connect bank
                    </p>
                </Button>
            ) : (
                <Button className="plaidlink-default" onClick={() => open()}>
                    <Image
                        src="/icons/connect-bank.svg"
                        alt="Connect Bank"
                        width={24}
                        height={24}
                    />
                    <p className="text-[16] font-semibold text-black-2">
                        Connect bank
                    </p>
                </Button>
            )}
        </>
    );
};

export default PlaidLink;
