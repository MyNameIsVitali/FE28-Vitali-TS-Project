import React from "react";
// @ts-ignore
import styles from "./App.module.css";

const Button = ({ title, onClick, className, disabled, classNameDis }: any) => {
    return (
        <div
            onClick={disabled ? () => {} : onClick}
            className={`${disabled ? classNameDis : className} ${
                styles.button
            }`}
        >
            {title}
        </div>
    );
};

export const App = () => {
    return (
        <div className={styles.app}>
            <Button
                title={"Primary"}
                onClick={() => alert("Privet!")}
                className={styles.colorOne}
            />
            <Button
                title={"Primary"}
                onClick={() => alert("Privet!")}
                className={styles.colorOne}
                classNameDis={styles.buttondis}
                disabled={true}
            />
            <Button
                title={"Secondary"}
                onClick={() => alert("Kak dela?")}
                className={styles.colorTwo}
            />
            <Button
                title={"Secondary"}
                onClick={() => alert("Kak dela?")}
                className={styles.colorTwo}
                classNameDis={styles.buttondis}
                disabled={true}
            />
            <Button
                title={"Error"}
                onClick={() => alert("ok")}
                className={styles.colorThree}
            />
            <Button
                title={"Error"}
                onClick={() => alert("ok")}
                className={styles.colorThree}
                disabled={true}
            />
        </div>
    );
};

export default App;
