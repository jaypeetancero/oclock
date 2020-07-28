import React, { useEffect, useRef, useState } from "react";
import HeaderContainer from "./headerContainer";
import * as faceapi from "face-api.js";

export const DashboardContainer = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isCaptured, setIsCaptured] = useState(false);
  const videoRef: any = useRef();
  const canvasRef1: any = useRef();
  const canvasRef2: any = useRef();

  useEffect(() => {
    const loadModels = async () => {
      setIsInitializing(true);
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
    canvasRef1.current.innerHTML = faceapi.createCanvasFromMedia(
      videoRef.current
    );
    const displaySize = {
      width: videoRef.current.width,
      height: videoRef.current.height,
    };
    faceapi.matchDimensions(canvasRef1.current, displaySize);
    setInterval(async () => {
      if (isInitializing) {
        setIsInitializing(false);
      }
      setIsCaptured(false);
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvasRef1.current
        .getContext("2d")
        .clearRect(0, 0, canvasRef1.current.width, canvasRef1.current.height);
      faceapi.draw.drawFaceExpressions(canvasRef1.current, resizedDetections);
      if (detections.length > 0) {
        const face1 = detections[0];
        if (face1.expressions.happy > 0.8) {
          captureSnapshot();
          setIsCaptured(true);
        }
      }
    }, 1000);
  };

  const captureSnapshot = () => {
    var ctx = canvasRef2.current.getContext("2d");
    var img = new Image();
    ctx.drawImage(videoRef.current, 0, 0, 360, 360);
    img.src = canvasRef2.current.toDataURL("image/png");
    img.width = 360;
    img.height = 360;
  };

  return (
    <div className="position-fixed h-100 w-100 bg-theme-primary">
      <span className="h3 d-flex justify-content-center">
        {isInitializing ? "Intitializing" : "Ready Smile"}
      </span>
      <div className="d-flex justify-content-around">
        <video
          ref={videoRef}
          className="bg-primary"
          width="360"
          height="360"
          muted
          autoPlay
          onPlay={handleVideoPlay}
        />
        <canvas
          ref={canvasRef1}
          width="360"
          height="360"
          className="position-absolute"
        />
      </div>
      <div className="d-flex justify-content-around">
        <i
          className={`fas fa-arrow-alt-circle-down fa-3x ${
            isCaptured && "text-danger"
          }`}
        ></i>
      </div>
      <div className="d-flex justify-content-around">
        <canvas
          ref={canvasRef2}
          width="360"
          height="360"
          className="animate__animated animate__fadeIn animate__delay-2s"
        />
      </div>
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
