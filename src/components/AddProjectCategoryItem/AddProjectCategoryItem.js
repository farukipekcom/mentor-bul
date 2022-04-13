import "./AddProjectCategoryItem.scss";
function AddProjectCategoryItem({ item }) {
  const onChange = (e) => {
    console.log(e.target.id);
  };
  return (
    <div className="addProjectCategoryItem">
      <label>
        <input
          id={item.categoryId}
          type="radio"
          value={item.name}
          name="category"
          onChange={onChange}
        />
        <span className="active">{item.name}</span>
      </label>
    </div>
  );
}

export default AddProjectCategoryItem;
