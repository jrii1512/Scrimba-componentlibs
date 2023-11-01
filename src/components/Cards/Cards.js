import React from "react";
import Card from "./Card";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { IoCloudDoneOutline } from "react-icons/io5";

export default function Cards() {
  const cloudUpload = <HiOutlineCloudUpload />;
  const cloudDone = <IoCloudDoneOutline />;

  return (
    <div className="">
      <h1 className="title">Cards</h1>
      <div className="cards-container">
        
        <div className="card-container">
          <h3 className="card-title title">Ordinary</h3>
          <h3 className="card-header">Easy Deployment</h3>
          <span className="badge card-badge blue square" icon={cloudUpload} />
          <Card className="card-body" isHoverable={false} badgeColor="blue">
            Blaah blaah blaah blaah
          </Card>
        </div>
      
      </div>
    </div>
  );
}
