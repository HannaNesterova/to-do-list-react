import React, { useState, useCallback } from 'react';

import styles from './index.module.scss';

export const InputPlus = ({onAdd}) => {

    const [inputValue, setInputValue] = useState('');

    const callValue = useCallback(() => {
        onAdd(inputValue),
        setInputValue('')
    },[inputValue])

    return (
        <div className={styles.inputPlus}>
            <input
            value={inputValue}
                type="text"
                className={styles.inputPlusValue}
                placeholder="Type here..."
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        callValue();
                  }
                }}
            />
            <button
                onClick={callValue}
                aria-label="Add"
                className={styles.inputPlusButton}
            />
        </div>
    );
}
