import "./AddProjectCategoryItem.scss";
function AddProjectCategoryItem({ value }) {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="addProjectCategoryItem">
      <label>
        <input
          id="category"
          type="radio"
          value={value}
          name="category"
          onChange={onChange}
        />
        <span className="active">{value}</span>
      </label>
    </div>
  );
}

export default AddProjectCategoryItem;
