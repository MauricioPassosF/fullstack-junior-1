import BookingForm from "@/components/bookingForm";
import Decoration from "@/components/decoration";
import NavBar from "@/components/navbar";
import Title from "@/components/title";

export default function Home() {
  return (
    <main className="flex flex-col w-[1920px] h-[1080px] overflow-hidden mx-auto">
        <Decoration />
        <NavBar />
        <Title />
        <BookingForm />
    </main>
  );
}
