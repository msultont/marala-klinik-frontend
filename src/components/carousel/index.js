import React, { forwardRef } from "react";
import { Carousel } from "antd";

const CarouselComponent = ({ data, identifier }, ref) => {
  const loading = <h1 className="animation__blinking">LOADING</h1>;
  return (
    <Carousel dots={false} ref={ref} swipe={false}>
      {identifier !== 0
        ? data.map((key, value) => {
            return (
              <div key={key}>
                <h3 className="carousel-content">
                  <span style={{ fontSize: "400px", marginBottom: "200px" }}>{value === 0 ? loading : value}</span>
                  <span style={{ marginBottom: "-100px" }}>NOMOR ANTRIAN</span>
                </h3>
              </div>
            );
          })
        : null}
    </Carousel>
  );
};

export default forwardRef(CarouselComponent);
