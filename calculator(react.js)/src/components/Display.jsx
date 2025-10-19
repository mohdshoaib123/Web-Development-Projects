import styles from "./Display.module.css"

function Display({onButtonClick}){
  let btn=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return(<div className={styles.btnContainer}>
    {btn.map(item=>(<button className={styles.button} key={item} onClick={onButtonClick}>{item}</button>))}
    </div>
  )

}
export default Display;