// Title.tsx
import React from "react";
// import "./Title.css";
// const Title: React.FC = () => {
//   return (
//     <div className="title-container">
//       <h1 className="title">Weather App</h1>
//       <p className="subtitle">Welcome to the Weather App!</p>
//     </div>
//   );

// {}付きの書き方
// const Title: React.FC = () => {
//   return (
//     <div className="title-container">
//       <h1 className="title">Weather App</h1>
//       <p className="subtitle">Welcome to the Weather App!</p>
//     </div>
//   );
// };

// {}なしの書き方
const Title: React.FC = () => (
  <div className="title-container">
    <h1 className="title">World Weather App</h1>
  </div>
);
export default Title;
