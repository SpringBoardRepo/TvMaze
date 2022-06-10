import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowDetails.css";

function ShowDetails() {
  const params = useParams();
  const [showInfo, setShowInfo] = useState("");
  const missingImageUrl = "https://tinyurl.com/tv-missing";

  useEffect(() => {
    async function showSeasons() {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/shows/${params.id}`
        );
        console.log(response.data);
        setShowInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    showSeasons();
  }, [params.id]);

  return (
    <>
      <h3 className="title">{showInfo.name}</h3>
      <div className="img-textContainer">
        <img
          src={showInfo.image ? showInfo.image.medium : missingImageUrl}
          alt=""
        />

        <p
          contentEditable="true"
          dangerouslySetInnerHTML={{ __html: showInfo.summary }}
        ></p>
      </div>
    </>
  );
}

export default ShowDetails;
