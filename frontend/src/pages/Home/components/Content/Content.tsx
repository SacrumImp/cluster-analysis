import { Accordion } from "../../../../uikit";
import { DataPreparationItem } from "./components";
import { ResultItem } from "./components/ResultItem/ResultItem";
import "./styles.scss";
import { EAccordionItems } from "./types";

export const Content = () => {

  return (
    <div className="content">
      <Accordion defaultActiveKey={[EAccordionItems.dataPreparation]}>
        <DataPreparationItem/>
        <ResultItem/>
      </Accordion>
    </div>
  )

}