import React, { useEffect, useRef, useState } from "react";
import styles from "./.module.scss";
import { RiSearchLine } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import Modal from "../../components/Modal";
import PopUpWrapper from "../../components/PopUpWrapper";
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import GoogleMap from "../GoogleMap";


export default function ShippingPopUp() {

  // const mapRef = useRef(null);
  // const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  // const { isLoaded, loadError } = useJsApiLoader({
  //   googleMapsApiKey: 'AIzaSyBAN5x7JAuNzLmv50ITXDUmxLr4s-8PC98'
  // });

  // const containerStyle = {
  //   width: '100%',
  //   height: '100%',
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
  //     setCoordinates({lat: latitude, lng: longitude});
  //   });    
  // }, []);

  // if (loadError) {
  //   return <div>Map cannot be loaded right now, sorry.</div>
  // };

  return (
    <Modal maxWidth="696px" id={"shipping__modal"}>
      <div className={styles.shipping__popup__wrapper}>
        <PopUpWrapper title={"Address for Shipping"}>
          <div className={styles.search__form__wrapper}>
            <form className={styles.search__form}>
              <RiSearchLine />
              <input
                type="text"
                className={styles.search__input}
                placeholder={"Find a location, a street, or a landmark..."}
              />
            </form>
          </div>
          <div className={styles.map__wrapper}>
            {/* {isLoaded ?
              <GoogleMap
                ref={mapRef}
                id="marker-example"
                mapContainerStyle={containerStyle}
                center={coordinates}
                zoom={10}
                // onBoundsChanged={() => {}}
                // onCenterChanged={() => {}}
                onBoundsChanged={() => {
                  setCoordinates({lat: mapRef.current.state.map.center.lat(), lng: mapRef.current.state.map.center.lng()})
                }}
                // onCenterChanged={() => mapRef.current && console.log(mapRef.current.props.center.lat)}
              >
              </GoogleMap>: <div>Loading...</div> 
              } */}
              <GoogleMap /> 
          </div>
          <footer className={styles.footer}>
            <button
              // data-bs-toggle="modal"
              // data-bs-target={`#shipping__modal`}
              className={styles.submit__btn}
            >
              <div>
                <HiLocationMarker />
                <span>Deliver Here</span>
              </div>
            </button>
            <p className={styles.shipping__address}>
              <span>Deliver to :</span> 10th of Ramadan - 16th District
            </p>
          </footer>
        </PopUpWrapper>
      </div>
    </Modal>
  );
}
