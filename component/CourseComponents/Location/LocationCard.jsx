const LocationCard = ({ city, mapSrc }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <h3 className="p-4 font-semibold text-lg text-center">{city}</h3>
      <iframe
        src={mapSrc}
        className="w-full h-64 border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationCard;