import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [nasaData, setNasaData] = useState({
        hdurl: "",
    });

    useEffect(() => {
        const getImage = () => {
            return fetch(
                "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
                {
                    method: "GET",
                    accept: "*/*",
                }
            ).then((response) => {
                response.text().then((text) => {
                    const data = text && JSON.parse(text);
                    console.log("data", data);
                    return data;
                });
            });
        };
        setNasaData(getImage());
        console.log(getImage());
    }, []);
    return (
        <div className="App">
            <img src={nasaData.hdurl} />
        </div>
    );
}

export default App;
