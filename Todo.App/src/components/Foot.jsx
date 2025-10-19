import styles from "./Foot.module.css"
function Foot({todoName,todoDate}) {
  return (
    <div className={styles.footDiv}>
    <div className="row">
      <div className="col">{todoName}</div>
      <div className="col">{todoDate}</div>
      <div className="col">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
    </div>
  );
}
export default Foot;
