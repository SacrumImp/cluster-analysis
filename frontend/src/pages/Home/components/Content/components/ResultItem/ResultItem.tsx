import { observer } from "mobx-react";
import {
  Accordion,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { useResultItem } from "./useResultItem";
import {
  PerformCalculationsButton,
} from "./components";
import "./styles.scss";

export const ResultItem = observer(() => {
  const {
    onClick,
    isLoading,
  } = useResultItem()

  return (
    <Accordion.Item eventKey={EAccordionItems.results}>
      <Accordion.Header>Results</Accordion.Header>
      <Accordion.Body>
        <section className="result-item__sections">
          <PerformCalculationsButton
            disabled={isLoading}
            isLoading={isLoading }
            onClick={onClick}
          />
        </section>
      </Accordion.Body>      
    </Accordion.Item>
  )
})