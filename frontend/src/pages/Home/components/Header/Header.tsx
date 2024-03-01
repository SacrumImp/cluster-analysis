import {
  Text,
} from "../../../../uikit";
import "./styles.scss";

export const Header = () => {

  return (
    <header className="header">
      <Text
        type="h1"
        className="header__text-title"
      >
        Cluster-Analysis
      </Text>
      <Text
        className="header__text-sub-title"
      >
        Computational Experiments to Compare New Methods for Choosing the Number of Clusters
      </Text>
    </header>
  )

}