import styles from "./Grid.module.css";
import cityDevil from "../assets-grid/city-devil.svg";
import cityFront from "../assets-grid/city-front-side.svg";
import busStop from "../assets-grid/bus-stop.gif";
import goldenRatio from "../assets-grid/golden-ratio.svg";
import space from "../assets-grid/space.gif";
import bedRoom from "../assets-grid/bedroom.svg";
import kitchenTop from "../assets-grid/kitchen-top-down.svg";
import abstract from "../assets-grid/abstract.svg";
import geometricSpace from "../assets-grid/geometric-space.svg";
import squirtle from "../assets-grid/squirtle.svg";
import karby from "../assets-grid/karby.svg";
import vaporwave from "../assets-grid/vaporwave.gif";
import geralt from "../assets-grid/geralt.svg";
import cinnamonDevil from "../assets-grid/cinnamon-devil.svg";

import { Card } from "./Card";

const images = [
  { img: cityDevil, name: "span1" },
  { img: cityFront, name: "span2" },
  { img: busStop, name: "span3" },
  { img: goldenRatio, name: "span2" },
  { img: space, name: "span2" },
  { img: bedRoom, name: "span4" },
  { img: kitchenTop, name: "span4" },
  { img: abstract, name: "span5" },
  { img: geometricSpace, name: "span5" },
  { img: squirtle, name: "span4" },
  { img: karby, name: "span4" },
  { img: vaporwave, name: "span4" },
  { img: geralt, name: "span4" },
  { img: cinnamonDevil, name: "span4" },
];

export function Grid() {
  return (
    <nav className={styles.gridWrapper}>
      <div className={styles.gridContainer}>
        {images.map((image) => {
          return <Card src={image.img} style={image.name} />;
        })}
      </div>
    </nav>
  );
}
