import HeaderBox from "@/components/HeaderBox";
import RighSideBar from "@/components/RighSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
    const loggedIn = {
        firstName: "Mohamed",
        lastName: "Helmy",
        email: "petxtv@gmail.com",
    };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcom"
                        user={loggedIn?.firstName || "guest"}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                recent transactions
            </div>
            <RighSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1260.5 }, { currentBalance: 5020.2 }]}
            />
        </section>
    );
};

export default Home;
