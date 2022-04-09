import React from 'react';
import cl from './MySelect.module.css'

const MySelect = ({option, selectedSort, onChange}) => {
    return (
        <select className={cl.select} value={selectedSort} onChange={e=>onChange(e.target.value)}>
            <option disabled>Сортировка по</option>
            {option.map(el => (<option key={el.value} value={el.value}>{el.name}</option>))}
        </select>
    );
};

export default MySelect;