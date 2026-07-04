export default function VideoSection() {
  return (
    <section className="w-full h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="/videos/Mvdo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}