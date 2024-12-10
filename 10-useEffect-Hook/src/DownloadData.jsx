import axios from "axios";
import { useEffect, useState } from "react";

import "./DownloadData.css"; // Importing App.css

function DownloadData({ URL }) {
  const [isLoading, SetISLoading] = useState(true);
  const [data, setData] = useState({});

  // Function to fetch user details :---
  async function urlDetailes(url) {
    const response = await axios.get(url);
    const data = response.data; // Extracting-data-from-the-response
    console.log(data);
    setData(data);

    SetISLoading(false);
  }

  // Calling the function in "useEffect"
  useEffect(() => {
    urlDetailes(URL);
  }, [URL]);

  // Returning the main component :---
  return (
    <>
      <h1 className="main-heading">useEffect-Hook:---</h1>
      <div className="isLoading-container">
        {isLoading === true ? (
          <h1>Data Downloading...</h1>
        ) : (
          <>
            <h2>Data Downloaded!</h2>
            <div className="downloaded-data">
              <b>Downloaded-Data :</b> {JSON.stringify(data)}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DownloadData;
