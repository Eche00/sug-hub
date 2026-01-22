"use client";

import React from "react";
import Link from "next/link";
import {
    LocalActivityOutlined,
    Message,
    SendTimeExtension,
} from "@mui/icons-material";
import { useAnnouncementLogic } from "@/utils/logics/createAnnouncementLogic";
import { anonymousMessageLogic } from "@/utils/logics/anonymousMessageLogic";

function EventsCta() {
    const {
        announcements,
        loadingAnnouncements,
        viewAnnouncements,
    } = useAnnouncementLogic();

    const {
        messages,
        loadingMessages,
    } = anonymousMessageLogic();

    return (
        <div className="hidden lg:flex flex-1 bg-white rounded-lg h-fit p-5 flex-col shadow-sm overflow-hidden">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                    Campus Updates
                </h2>
                <SendTimeExtension className="w-5 h-5 text-gray-400" />
            </div>

            {/* ================= ANNOUNCEMENTS ================= */}
            <div className="flex flex-col gap-3 border-b border-gray-200 pb-4 mb-4">
                <p className="text-sm font-semibold text-gray-700">
                    Recent Announcements
                </p>

                {loadingAnnouncements ? (
                    <div className="flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : announcements.slice(0, 2).map((ann) => (
                    <div
                        key={ann.id}
                        onClick={() => viewAnnouncements(ann.id)}
                        className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
                            <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center">
                                <LocalActivityOutlined className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 line-clamp-2">
                                {ann.title}
                            </p>
                            <span className="text-xs text-gray-400">
                                {ann.createdAt
                                    ? ann.createdAt.toDate().toLocaleDateString()
                                    : "Unknown date"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= STUDENT VOICE ================= */}
            <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-gray-700">
                    Student Voice
                </p>

                {loadingMessages ? (
                    <div className="flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : messages.slice(0, 2).map((msg) => (
                    <div
                        key={msg.id}
                        className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-50 transition"
                    >
                        <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
                            <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center">
                                <Message className="w-4 h-4 text-white" />
                            </div>
                        </div>

                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 line-clamp-2">
                                {msg.title}
                            </p>
                            <span className="text-xs text-gray-400">
                                {msg.createdAt
                                    ? msg.createdAt.toDate().toLocaleDateString()
                                    : "Unknown date"}
                            </span>
                        </div>
                    </div>
                ))}

                <Link
                    href="/studentvoice"
                    className="text-white bg-[#1B7339] hover:bg-[#1B7339]/90 font-semibold py-2 px-6 rounded-lg w-fit"
                >
                    View More
                </Link>
            </div>
        </div>
    );
}

export default EventsCta;
