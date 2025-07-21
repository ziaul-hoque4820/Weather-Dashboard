const data = [
    { location: "USA", latitude: 40.730610, longitude: -73.935242 },
    { location: "France", latitude: 48.864716, longitude: 2.349014 },
    { location: "Egypt", latitude: 30.033333, longitude: 31.233334 },
    { location: "Australia", latitude: -33.865143, longitude: 151.209900 },
    { location: "Japan", latitude: 35.658581, longitude: 139.745438 },
    { location: "London", latitude: 51.509865, longitude: -0.118092 },
    { location: "Russia", latitude: 55.751244, longitude: 37.618423 },
    { location: "Brazil", latitude: -22.906847, longitude: -43.172897 },
    { location: "Canada", latitude: 43.651070, longitude: -79.347015 },
    { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
    { location: "Thailand", latitude: 13.756331, longitude: 100.501762 },
    { location: "Germany", latitude: 52.520008, longitude: 13.404954 },
    { location: "Italy", latitude: 41.902782, longitude: 12.496366 },
    { location: "Turkey", latitude: 41.008240, longitude: 28.978359 },
    { location: "South Korea", latitude: 37.566536, longitude: 126.977966 },
    { location: "Barura", latitude: 23.375, longitude: 91.055 },
    { location: "Shahrasti", latitude: 23.229, longitude: 90.9503 },
];

export function getLocation() {
    return data;
};


function getLocationByName(location) {
    if (!location) return null;

    const filtered = data.filter((item) => item.location === location);

    if (filtered.length > 0) {
        return filtered[0];
    } else {
        const defaultLocation = {
            location: "",
            latitude: 0,
            longitude: 0,
        }
        return defaultLocation;
    }
}

export default getLocationByName