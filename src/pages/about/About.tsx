import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-10 min-h-screen px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 font-poppins font-semibold text-[#5d2a1d] dark:text-[#d9a79a] text-xl md:text-3xl text-center mt-10">
          Welcome to the Rick and Morty Episode Guide!
        </h2>
        <div className="font-poppins text-center md:text-left">
          <h5 className="mb-1 font-semibold text-lg">Who We Are</h5>
          <p>
            We are a passionate group of Rick and Morty enthusiasts who share a
            deep love for the show's unique blend of science fiction, humor, and
            mind-bending adventures. Our mission is to provide fans with an
            all-in-one platform to explore, discover, and keep track of their
            favorite episodes from this beloved animated series.
          </p>

          <h5 className="mt-5 mb-1 font-semibold text-lg">Our Purpose</h5>
          <p>
            At the heart of our website is a commitment to making it easier for
            fans like you to immerse themselves in the world of Rick and Morty.
            We understand the excitement of diving into the multiverse and the
            need to keep track of the episodes you've watched or plan to watch.
          </p>

          <h5 className="mt-5 mb-1 font-semibold text-lg">What We Offer</h5>
          <p>
            <strong>Episode Database:</strong> Our website offers an extensive
            database of all Rick and Morty episodes, complete with detailed
            information about each one. You can find information about air
            dates, episode titles, synopses, and more.
          </p>

          <p className="mt-2">
            <strong>Watchlist:</strong> We provide a personalized experience by
            allowing you to create and manage your own watchlist. You can easily
            mark episodes as "Watching," "Watched," or "To Watch." Never miss
            out on your favorite moments or hilarious quotes from the show.
          </p>

          <p className="mt-2">
            <strong>Community and Interaction:</strong> Connect with other fans
            through our community features. Share your thoughts, theories, and
            favorite moments from the show in our discussion forums. You can
            also see what episodes other users are watching and discussing.
          </p>

          <p className="mt-2">
            <strong> User-Friendly Experience:</strong> We have designed our
            website to be user-friendly and accessible on various devices.
            Whether you're at home or on the go, you can conveniently browse the
            world of Rick and Morty.
          </p>

          <h5 className="mt-5 mb-1 font-semibold text-lg">Our Commitment</h5>
          <p>
            We are committed to providing a seamless and enjoyable experience
            for all fans of Rick and Morty. Our team is dedicated to keeping the
            website up to date with the latest episodes, news, and features that
            enhance your experience. We value your feedback and suggestions, so
            please don't hesitate to reach out to us.
          </p>

          <p className="mt-10">
            Thank you for choosing us as your go-to source for Rick and Morty
            episode information. We hope you have a fantastic time exploring the
            vast, interdimensional adventures of Rick and Morty! Feel free to
            contact us at
            <span className="text-blue-500 mx-1">
              contact@rickandmortyepisodes.com
            </span>
            for any inquiries, feedback, or partnership opportunities.
          </p>

          <p className="mt-2">Happy watching!</p>
          <p className="text-[#5d2a1d] dark:text-[#d9a79a] font-semibold">
            The Rick and Morty Episode Guide Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
