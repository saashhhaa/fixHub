import { useEffect, useState } from "react";
import { Navigation } from "../../components/Navigation";

navigator.geolocation.getCurrentPosition((pos) => {
  const { latitude, longitude } = pos.coords;
  console.log(latitude, longitude);
});

export const Map = () => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setCoords({ latitude, longitude });
    });
  }, []);

  if (!coords) return <div>Определяю геолокацию…</div>;

  const { latitude, longitude } = coords;

  const mapURL = `https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`;
  return (
    <>
      <Navigation />
      <iframe
        src={mapURL}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </>
  );
};
