import { useState, useEffect } from "react";
import { OPENWEATHER_API_KEY } from "./constants";

const useLocation = () => {
    const [location, setLocation] = useState("Location");

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // Latitude: 23.239124, Longitude: 77.38224366666665

        fetchData(latitude, longitude);
    }

    async function fetchData(latitude, longitude) {
        // http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}
        const LOCATION =
            "http://api.openweathermap.org/geo/1.0/reverse?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&limit=5&appid=" +
            OPENWEATHER_API_KEY;

        const data = await fetch(LOCATION);
        const json = await data.json();
        const city = json[0].name;
        const country = json[0].country;

        setLocation(city + ", " + country);
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }
    }, []);

    return location;
};

export default useLocation;
