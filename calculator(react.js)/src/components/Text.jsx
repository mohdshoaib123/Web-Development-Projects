import styles from "./Text.module.css"
function Text({displayValue}){
  return (<div className={styles.text1}>
     <input type="text" className={styles.inputi} value={displayValue} readOnly/>
  
</div>)
}
export default Text;