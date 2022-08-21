import React from "react";
import styles from "../AllResturantsPage/.module.scss";
import PageHeader from "../../components/PageHeader";
import ResturantCard from "../../components/ResturantCard";

export default function PopularResturantsPage() {
  const dummyResturants = [
    { status: "discounted", saleValue: "50%" },
    { status: "new" },
    { status: "closed" },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <div className="popular__resturants__page__wrapper py-5">
      <PageHeader title={"Popular Resturents"} />
      <div className="row">
        {dummyResturants.map((item, i) => (
          <div key={i} className={`col-12 col-sm-6 col-lg-4 ${styles.col}`}>
            <ResturantCard status={item.status} saleValue={item.saleValue} />
          </div>
        ))}
      </div>
    </div>
  );
}
