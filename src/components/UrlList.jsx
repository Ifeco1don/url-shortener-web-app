import React from "react";

const UrlList = ({ urls }) => {
  if (!urls.length) return <p className="no-links">No links shortened yet.</p>;

  return (
    <div className="url-list">
      <h2>Shortened URLs</h2>
      {urls.map((url) => (
        <div key={url.id} className="url-item">
          <p className="my-links">
            <strong>Original:</strong>{" "}
            <a href={url.destination} target="_blank">
              {url.destination}
            </a>
          </p>
          <p>
            <strong>Short:</strong>{" "}
            <a href={url.shortUrl} target="_blank">
              {url.shortUrl}
            </a>
          </p>
          <p>
            <strong>Clicks:</strong> {url.clicks ?? 0}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UrlList;
