import { Accordion, Form } from "../../../../../../uikit"
import { EAccordionItems } from "../../types"
import { SyntheticGeneration } from "./components"

export const DataPreparationItem = () => {
  return (
    <Accordion.Item eventKey={EAccordionItems.dataPreparation}>
      <Accordion.Header>Data preparation</Accordion.Header>
      <Accordion.Body>
        <Form>
          <SyntheticGeneration/>
        </Form>
      </Accordion.Body>      
    </Accordion.Item>
  )
}