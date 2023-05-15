import styles from "./Grid.module.css";
import cityDevil from "../assets-grid/city-devil.svg";
import cityFront from "../assets-grid/city-front-side.svg";
import busStop from "../assets-grid/bus-stop.svg";
import goldenRatio from "../assets-grid/golden-ratio.svg";
import space from "../assets-grid/space.svg";
import bedRoom from "../assets-grid/bedroom.svg";
import kitchenTop from "../assets-grid/kitchen-top-down.svg";
import abstract from "../assets-grid/abstract.svg";
import geometricSpace from "../assets-grid/geometric-space.svg";
import squirtle from "../assets-grid/squirtle.svg";
import karby from "../assets-grid/karby.svg";
import vaporwave from "../assets-grid/vaporwave.svg";
import geralt from "../assets-grid/geralt.svg";
import cinnamonDevil from "../assets-grid/cinnamon-devil.svg";
import stars from "../assets/stars.svg";

import { Card } from "./Card";
import { ParallaxBanner } from "react-scroll-parallax";

const images = [
  { assetSrc: cityDevil, gridPosition: "span1" },
  { assetSrc: cityFront, gridPosition: "span2" },
  { assetSrc: busStop, gridPosition: "span3" },
  { assetSrc: goldenRatio, gridPosition: "span2" },
  { assetSrc: space, gridPosition: "span2" },
  { assetSrc: bedRoom, gridPosition: "span4" },
  { assetSrc: kitchenTop, gridPosition: "span4" },
  { assetSrc: abstract, gridPosition: "span5" },
  { assetSrc: geometricSpace, gridPosition: "span5" },
  { assetSrc: squirtle, gridPosition: "span4" },
  { assetSrc: karby, gridPosition: "span4" },
  { assetSrc: vaporwave, gridPosition: "span4" },
  { assetSrc: geralt, gridPosition: "span4" },
  { assetSrc: cinnamonDevil, gridPosition: "span4" },
];

export function Grid() {
  return (
    <ParallaxBanner
      layers={[
        {
          image: stars,
          speed: -150,
          expanded: false,
          className: "starsParallax",
        },
      ]}
      className={styles.parallax}
    >
      <nav className={styles.gridWrapper}>
        <div className={styles.gridContainer}>
          {images.map((image) => {
            return <Card src={image.assetSrc} style={image.gridPosition} />;
          })}
        </div>
      </nav>
    </ParallaxBanner>
  );
}
