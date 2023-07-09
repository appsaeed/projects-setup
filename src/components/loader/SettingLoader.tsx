import Loaders from "./Loaders";
import style from "./css/Loader.module.css";

export default function SettingLoader() {
  return (
    <>
      <Loaders className={style?.profile} />
      <Loaders className={style?.setting_list} />
      <Loaders className={style?.setting_list} />
      <Loaders className={style?.setting_list} />
      <Loaders className={style?.setting_list} />
      <Loaders className={style?.setting_list} />
      <Loaders className={style?.setting_list} />
    </>
  );
}
