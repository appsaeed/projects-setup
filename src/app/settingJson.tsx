interface JsonDataType {
  name: string | null;
  title: string | null;
  lang: string | null;
  logo: string | null;
  desc: string | null;
  favicon: string | null;
  basename: string | null;
}
//json data selected from html elements
const selector: string = import.meta.env.VITE_DATADIV || "%VITE_DATADIV%";
const elem = document.getElementById(selector);
const json = elem?.textContent || "";
let json_data;
try {
  json_data = JSON.parse(json);
} catch (error) {
  console.warn("Appliction data error: ", error);
}
const data: JsonDataType = { ...json_data };
export default data;
