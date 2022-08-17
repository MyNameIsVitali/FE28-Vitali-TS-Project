import React from "react";
// @ts-ignore
import styles from "./App.module.css";

const Button = ({ title, onClick, className }: any) => {
    // const onClick = () => {};
    // const title = "Push";
    return (
        <div onClick={onClick} className={`${styles.button} ${className}`}>
            {title}
        </div>
    );
};

export const App = () => {
    return (
        <div className={styles.app}>
            <Button
                title={"ONE"}
                onClick={() => alert("Privet!")}
                className={styles.colorOne}
            />
            <Button
                title={"TWO"}
                onClick={() => alert("Kak dela?")}
                className={styles.colorTwo}
            />
            <Button
                title={"THREE"}
                onClick={() => alert("ok")}
                className={styles.colorThree}
            />
            <button
                title="fff"
                className={`${styles.button} ${styles.colorTwo}`}
                disabled={false}
            />
        </div>
    );
};

export default App;
