import React from "react";
import ActivityTitle from "./ActivityTitle";
import ActivityContents from "./ActivityContents";

interface NftActivity {
  from : string,
  to : string
}

interface INftActivityProps{
  activityData : NftActivity;
}

const NftActivity:React.FC<INftActivityProps> = ({activityData}) => {
  console.log("웡", activityData);
  return (
    <div className="border-gray border-[1px] rounded-xl bg-white">
      <ActivityTitle />
      <ActivityContents
        txnHash={""}
        age={""}
        action={""}
        price={""}
        from={""}
        to={""}
      />
    </div>
  );
};

export default NftActivity;
