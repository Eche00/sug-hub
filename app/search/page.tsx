"use client";

import Loader from "@/components/ui/Loader";
import { anonymousMessageLogic } from "@/utils/logics/anonymousMessageLogic";
import { useAnnouncementLogic } from "@/utils/logics/createAnnouncementLogic";
import { Search } from "@mui/icons-material";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, Suspense } from "react";

function SearchResults() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("query")?.toLowerCase() || "";

    const [searchTerm, setSearchTerm] = useState(query);

    useEffect(() => {
        setSearchTerm(query);
    }, [query]);

    const { announcements, loadingAnnouncements, viewAnnouncements } = useAnnouncementLogic();
    const { messages, loadingMessages } = anonymousMessageLogic();
    const loading = loadingAnnouncements || loadingMessages;

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
    };

    const results = useMemo(() => {
        if (!query) return [];

        const announcementResults = announcements
            .filter(a => a.title?.toLowerCase().includes(query))
            .map(a => ({
                id: a.id,
                title: a.title,
                imageUrl: a.imageUrl,
                createdAt: a.createdAt,
                type: "announcement",
            }));

        const messageResults = messages
            .filter(m => m.title?.toLowerCase().includes(query))
            .map(m => ({
                id: m.id,
                title: m.title,
                imageUrl: null,
                createdAt: m.createdAt,
                type: "message",
            }));

        return [...announcementResults, ...messageResults].sort((a, b) => {
            const tA = a.createdAt?.seconds || 0;
            const tB = b.createdAt?.seconds || 0;
            return tB - tA;
        });
    }, [query, announcements, messages]);

    return (
        <div className="max-w-6xl mx-auto  py-8 sm:py-0 px-4 sm:px-0">
            {/* Search Input */}
            <form
                onSubmit={handleSearch}
                className="fixed top-15 left-0 w-full mb-8 md:hidden flex gap-3 bg-white p-4 rounded-b-2xl shadow-sm z-10"
            >
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search announcements & messages..."
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-green-500 min-w-2"
                />
                <button type="submit" className="hover:text-[#1B7339] cursor-pointer">
                    <Search />
                </button>
            </form>

            {/* TITLE */}
            <h1 className="sm:text-2xl text-lg font-semibold sm:mb-6">
                Search results for <span className="text-[#1B7339]">"{query}"</span>
            </h1>

            {loading ? (
                <Loader />
            ) : results.length === 0 ? (
                <p className="text-gray-500">No results found.</p>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 z-0">
                    {results.map(item => (
                        <div
                            key={`${item.type}-${item.id}`}
                            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer hover:scale-[1.02] duration-300"
                            onClick={item.type === "announcement" ? () => viewAnnouncements(item.id) : undefined}
                        >
                            <img
                                src={item.imageUrl || "https://www.pictorem.com/uploads/collection/K/KU10ITO7AEI/900_Andreas-Wonisch_DSC_0035.jpg"}
                                alt=""
                                className="h-40 w-full object-cover"
                            />
                            <div className="p-4">
                                <p className="font-semibold text-sm line-clamp-2">{item.title}</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {item.createdAt
                                        ? item.createdAt.toDate().toLocaleDateString()
                                        : "Unknown date"}
                                </p>
                                <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-green-100 text-[#1B7339]">
                                    {item.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function SearchPageWrapper() {
    return (
        <Suspense fallback={<Loader />}>
            <SearchResults />
        </Suspense>
    );
}
