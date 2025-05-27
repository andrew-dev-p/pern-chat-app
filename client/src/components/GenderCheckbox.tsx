const GenderCheckbox = ({
  selectedGender,
  onCheckboxChange,
}: {
  selectedGender: string;
  onCheckboxChange: (gender: "MALE" | "FEMALE") => void;
}) => {
  return (
    <div className="flex gap-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "MALE"}
            onChange={() => onCheckboxChange("MALE")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "FEMALE"}
            onChange={() => onCheckboxChange("FEMALE")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
