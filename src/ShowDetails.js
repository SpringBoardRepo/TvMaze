import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowDetails.css";
import { Button } from "react-bootstrap";

function ShowDetails() {
  const params = useParams();
  const [showInfo, setShowInfo] = useState("");
  const missingImageUrl = "https://tinyurl.com/tv-missing";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function showSeasons() {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/shows/${params.id}`
        );
        console.log(response.data);
        setShowInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    showSeasons();
  }, [params.id]);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h3 className="title">{showInfo.name}</h3>
          <div className="img-textContainer">
            <img
              src={showInfo.image ? showInfo.image.medium : missingImageUrl}
              alt=""
            />
            <div className="summary">
              <div>
                <b>Genre:</b>
                {showInfo.genres &&
                  showInfo.genres.map((genre) => (
                    <Button
                      key={genre}
                      variant="success"
                      size="sm"
                      className="buttons"
                    >
                      {genre}
                    </Button>
                  ))}
              </div>
              <div>
                <b>Language:</b>
                {showInfo.language && (
                  <Button variant="warning" size="sm" className="buttons">
                    {showInfo.language}
                  </Button>
                )}
              </div>
              <div>
                {showInfo.status && (
                  <span>
                    {" "}
                    <b>Status :</b>{" "}
                    <Button variant="secondary" size="sm" className="buttons">
                      {" "}
                      {showInfo.status}
                    </Button>
                  </span>
                )}
              </div>

              <div
                contentEditable="true"
                dangerouslySetInnerHTML={{ __html: showInfo.summary }}
              ></div>
              <div>
                <b>OfficialSite : </b>
                {showInfo.officialSite ? (
                  <a
                    href={showInfo.officialSite}
                    target="_blank"
                    rel="noreferer noreferrer"
                  >
                    {showInfo.officialSite}
                  </a>
                ) : (
                  "No offical Site"
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowDetails;
