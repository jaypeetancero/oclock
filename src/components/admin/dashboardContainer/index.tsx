import React, { useEffect, useRef } from "react";
import HeaderContainer from "./headerContainer";
import * as faceapi from "face-api.js";

export const DashboardContainer = () => {
  const videoRef: any = useRef();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.getUserMedia(
      {
        video: {},
      },
      (stream) => (videoRef.current.srcObject = stream),
      (err) => console.log(err)
    );
  };

  const handleVideoPlay = () => {
    const canvas: any = faceapi.createCanvasFromMedia(videoRef.current);
    document.body.append(canvas);
    const displaySize = {
      width: videoRef.current.width,
      height: videoRef.current.height,
    };
    faceapi.matchDimensions(canvas, displaySize);
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      console.log(detections);
      if(detections.length > 0){
        const face1 = detections[0];
        if(face1.expressions.happy > 0.8){
          alert("You're smiling boss neth")
        }
      }
    }, 100);
  };

  return (
    <div className="position-fixed h-100 w-100 bg-theme-primary">
    <video
              ref={videoRef}
              width="720"
              height="560"
              muted
              autoPlay
              onPlay={handleVideoPlay}
            />
      {/* <div className="row">
        <div className="col-12 d-flex flex-column">
          <HeaderContainer />
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-center">
            Content
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardContainer;
