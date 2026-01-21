'use client'

import { useAnnouncementLogic } from "@/utils/logics/createAnnouncementLogic";
import EventsCta from "../components/EventsCta";
import AnnouncementDetail from "./announcement/AnnouncementDetail";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const {
    announcements,
    loadingAnnouncements } = useAnnouncementLogic()
  return (
    <div>
      <title>Home | SUG Announcements & Updates</title>
      <meta name="description" content="Latest announcements, updates, and important notices from the Student Union Government. Stay informed on what’s happening now." />

      <title>Home | SUG Announcements & Updates</title>
      <meta name="description" content="Latest announcements, updates, and important notices from the Student Union Government. Stay informed on what’s happening now." />

      <section className='flex gap-8'>
        {loadingAnnouncements || announcements.length < 1 ? <div className="md:flex-1/4 flex-1"><Loader /> </div> :
          <div className=" flex md:flex-1/4 w-full">
            <AnnouncementDetail />
          </div>
        }
        <EventsCta />
      </section>
    </div>
  );
}
