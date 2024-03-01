import { observer } from "mobx-react";
import {
  Accordion,
  Form,
} from "../../../../../../uikit";
import { EAccordionItems } from "../../types";
import { EMethods } from "../DataPreparationItem/types";
import {
  SyntheticGenerationParams,
  UnknownParams,
} from "./components";
import { useAdditionalParamsItem } from "./useAdditionalParamsItem";
import "./styles.scss";

const getContent = (type: EMethods) => {
  switch(type) {
    case EMethods.SyntheticGeneration:
      return <SyntheticGenerationParams/>
    default:
      return <UnknownParams/>
  }
}

export const AdditionalParamsItem = observer(() => {

  const { method } = useAdditionalParamsItem()

  return (
    <Accordion.Item eventKey={EAccordionItems.additionalParams}>
      <Accordion.Header>Additional Method Params</Accordion.Header>
      <Accordion.Body>
        <Form className="additional-params__form">
          {getContent(method)}
        </Form>
      </Accordion.Body>      
    </Accordion.Item>
  )

})