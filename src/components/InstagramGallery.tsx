import { instagramPhotos } from "../data";

const InstagramGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
    

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {instagramPhotos.map((photo) => (
            <a
              key={photo.id}
              href={photo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={photo.image}
                alt="Instagram"
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;