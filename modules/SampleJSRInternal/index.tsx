import { Island } from "@hubspot/cms-components";
import MyButton from "./Island/index.js?island";
import "./global-samplejsr.css";
import styles from "./samplejsr.module.css";

export const Component = ({ fieldValues, hublParameters = {} }) => {
  const { defaultCount = 45 } = fieldValues;

  return (
    <div className="sampleJSRWrapper">
      <div className={styles["sample-jsr"]}>
        <h1>Sample JSR</h1>
        <p>Field Values: {JSON.stringify(fieldValues)}</p>
        <p>HubL Parameters: {JSON.stringify(hublParameters)}</p>
        <p>Module style classes: {JSON.stringify(styles)}</p>

        <Island module={MyButton} defaultCount={defaultCount} />
      </div>
    </div>
  );
};

export { fields } from "./fields.js";

export const meta = {
  /* Import meta */
  label: "Sample JSR Module",
  host_template_types: ["PAGE"],
  global: false,
};

export const defaultModuleConfig = {
  moduleName: "sample_jsr",
  version: 0,
};
