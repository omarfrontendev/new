import React from "react";
import ResturantDetailsHeader from "../../components/ResturantDetailsHeader";
import ItemDetailsRow from "../../components/ItemDetailsRow";

import ResturantInfoList from "../../components/ResturantInfoList";

export default function ResturantInfoPage() {
  return (
    <div className="res__info__page__wrappper py-5">
      <ResturantDetailsHeader />
      <ItemDetailsRow active='info' />
      <div className="pt-3">
        <ResturantInfoList />
      </div>
    </div>
  );
}
