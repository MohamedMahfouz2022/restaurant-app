"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

import "leaflet/dist/leaflet.css";

import { motion } from "framer-motion";
import { fadeIn } from "@/public/variants";

const markers = [
  {
    position: [34.052235, -118.243683],
    title: "Location 1",
    subtitles:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, minus.",
    image: "/map/1.png",
  },
  {
    position: [34.0211, -118.3965],
    title: "Location 2",
    subtitles:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, minus.",
    image: "/map/2.png",
  },
  {
    position: [33.9748, -118.3356],
    title: "Location 3",
    subtitles:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, minus.",
    image: "/map/3.png",
  },
];

const customIcon = new icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});
const Map = () => {
  return (
    <section>
      <MapContainer
        className="h-[100vh] z-10"
        center={[34.052235, -118.243683]}
        zoom={10}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}/{r}.png"
        />
      </MapContainer>
    </section>
  );
};

export default Map;
