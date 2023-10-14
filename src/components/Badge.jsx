import React from "react";

const Badge = ({ barTitle, badgeTitle }) => {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {barTitle}:
      {badgeTitle.map((badge) => (
        <p
          className={`badge ${
            barTitle === "Categories"
              ? "bg-primary"
              : barTitle === "Language"
              ? "bg-danger"
              : barTitle === "Companies"
              ? "bg-success"
              : null
          }`}
        >
          {badge.name}
        </p>
      ))}
    </div>
  );
};
export default Badge;
