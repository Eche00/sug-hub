"use client";

import React from "react";
import Loader from "@/components/ui/Loader";
import { useUserInfo } from "@/utils/logics/userLogic";
import { motion } from "framer-motion";

export default function Page() {
    const { user, loading, handleLogOutUser } = useUserInfo();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className=" flex items-center justify-center sm:mb-0 mb-22">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="max-w-3xl w-full mx-auto"
            >
                {/* HEADER */}
                <div className="mb-8"> <h1 className="sm:text-3xl text-2xl font-semibold text-gray-900"> Profile </h1> <p className="mt-2 text-sm text-gray-500"> None of your cresidentials can be updated as of now. </p> </div>
                <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 space-y-7">

                    {/* SECTION HEADER */} <div className="pb-4 border-b"> <h2 className="text-lg font-medium text-gray-800"> Student Details </h2> </div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 rounded-full bg-black text-white border-2 border-[#1B7339] flex items-center justify-center text-2xl font-bold">
                            {user?.firstName?.charAt(0) || "U"}
                        </div>

                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">
                                {user?.firstName} {user?.lastName}
                            </h1>
                            <p className="text-sm text-gray-500">
                                {user?.type?.toUpperCase() || "STUDENT"}
                            </p>
                        </div>
                    </div>

                    {/* Info Card */}
                    <div className="space-y-4">
                        <InfoRow label="Email" value={user?.email} />
                        <div className="flex flex-col sm:flex-row gap-4">
                            <InfoRow label="First Name" value={user?.firstName} />
                            <InfoRow label="Last Name" value={user?.lastName} />
                        </div>
                        <InfoRow label="Account Type" value={user?.type} />
                    </div>

                    {/* Divider */}
                    <div className="my-8 border-t" />

                    {/* Actions */}
                    <div className=" flex items-center justify-end">
                        <button
                            onClick={handleLogOutUser}
                            className="w-fit py-3 px-8 rounded-lg bg-red-700 text-white font-medium hover:bg-red-700/80 transition cursor-pointer duration-300"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

/*  Helper */
function InfoRow({ label, value }: { label: string; value?: string }) {
    return (
        <div className="relative flex-1">
            <p className="absolute left-4 top-2 text-xs text-gray-500 peer-focus:text-[#1B7339] transition">{label}</p>
            <p className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1B7339]">
                {value || "-"}
            </p>
        </div>
    );
}
