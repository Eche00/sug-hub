import Announcement from "./announcement/Announcement";
import EventsCta from "../components/EventsCta";

export default function Home() {
  return (
    <div>
      <title>Home | SUG Announcements & Updates</title>
      <meta name="description" content="Latest announcements, updates, and important notices from the Student Union Government. Stay informed on what’s happening now." />

      <title>Home | SUG Announcements & Updates</title>
      <meta name="description" content="Latest announcements, updates, and important notices from the Student Union Government. Stay informed on what’s happening now." />

      <section className='flex gap-8'>
        <div className=" flex md:flex-1/4 w-full overflow-scroll">
          <Announcement />
        </div>
        <EventsCta />
      </section>
    </div>
  );
}
