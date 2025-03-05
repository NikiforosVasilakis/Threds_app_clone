import React from "react";

import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

const inter = Inter ({subsets: ["latin"]});

export default function Layout({children}:{children: React.ReactNode}){
    
    return(
        <ClerkProvider> 
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <main>                        
                        <div className="w-full nax-w-4xl">
                            {children}
                        </div>
                    </main>
                </body>
            </html>
        </ClerkProvider>
    );
}