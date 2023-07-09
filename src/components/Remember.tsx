export default function Remember({ name = "Remember this device" }) {
  return (
    <div className="form-check" style={{ cursor: "pointer" }}>
      <input className="form-check-input" type="checkbox" value="" id="r-me1" />
      <label className="form-check-label" htmlFor="r-me1">
        {name}
      </label>
      <div className="invalid-feedback">You must agree before submitting.</div>
    </div>
  );
}
