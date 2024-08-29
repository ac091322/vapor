import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkScreenshotsAdd } from "../../redux/screenshot";


function UploadScreenshots({ gameId }) {
  const dispatch = useDispatch();
  const [screenshotUrls, setScreenshotUrls] = useState([]); // state to store multiple files
  const [screenshotsLoading, setScreenshotsLoading] = useState(false);
  const [screenshotPreviewUrls, setScreenshotPreviewUrls] = useState([]); // state to store multiple preview URLs

  gameId = 100;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newScreenshots = selectedFiles.map((file, index) => {
      // update the filename format
      const newFilename = `screenshot_${gameId}_${Date.now()}_${index}.${file.name.split('.').pop()}`;
      // create a new file object with the updated filename
      return new File([file], newFilename, { type: file.type });
    });

    const newPreviews = selectedFiles.map(file => URL.createObjectURL(file));
    setScreenshotUrls(newScreenshots); // store the updated files
    setScreenshotPreviewUrls(newPreviews); // store the preview URLs
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const screenshotsData = new FormData();
    screenshotUrls.forEach((file, index) => {
      screenshotsData.append("screenshot_url", file);
      screenshotsData.append(`filename_${index}`, file.name);
    });
    screenshotsData.append("game_id", gameId);

    setScreenshotsLoading(true);
    await dispatch(thunkScreenshotsAdd(screenshotsData));
    setScreenshotsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <button type="submit">Submit</button>
      {screenshotsLoading && <p>Uploading screenshots...</p>}

      {screenshotPreviewUrls.length > 0 && (
        <div>
          {screenshotPreviewUrls.map((url, index) => (
            <img key={index} src={url} alt={`preview ${index + 1}`} width="100" />
          ))}
        </div>
      )}
    </form>
  );
}


export default UploadScreenshots;
