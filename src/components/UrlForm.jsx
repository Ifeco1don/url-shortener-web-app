import React, { useState } from "react";

const UrlForm = ({ setUrls }) => {
  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!longUrl) return;

    setLoading(true);

    try {
      const response = await fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_REBRANDLY_API_KEY,
        },
        body: JSON.stringify({
          destination: longUrl,
          slashtag: customAlias || undefined,
          domain: { fullName: "rebrand.ly" },
        }),
      });

      const data = await response.json();
      console.log("API Key:", import.meta.env.VITE_REBRANDLY_API_KEY);

      if (data.shortUrl) {
        setUrls((prev) => [
          ...prev,
          {
            id: data.id,
            shortUrl: "https://" + data.shortUrl,
            destination: data.destination,
            clicks: data.clicks,
          },
        ]);
      }
      setLongUrl("");
      setCustomAlias("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        name="url"
        type="url"
        placeholder="Paste your long URL here..."
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <input
        name="custom-alias"
        type="text"
        placeholder="Optional custom alias (e.g. my-link)"
        value={customAlias}
        onChange={(e) => setCustomAlias(e.target.value)}
      />
      <button className="submit-btn" type="submit" disabled={loading}>
        {loading ? "Shortening..." : "Shorten URL"}
      </button>
    </form>
  );
};

export default UrlForm;
