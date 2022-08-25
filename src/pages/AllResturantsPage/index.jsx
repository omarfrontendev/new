import React from "react";
import styles from "./.module.scss";
import PageHeader from "../../components/PageHeader";
import ResturantCard from "../../components/ResturantCard";

export default function ResturantsPage() {
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
    <div className="all__resturants__page__wrapper py-5">
      <PageHeader
        filter={true}
        span={true}
        spanText={"Sort By"}
        title={"All Resturants"}
        categories={[
          { category: "Recommended", active: true },
          { category: "Is Featured" },
          { category: "New" },
          { category: "Ratings" },
          { category: "Newest" },
          { category: "A to Z" },
          { category: "Z to A" },
        ]}
      />
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
