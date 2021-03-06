import React,{useState,useEffect} from 'react';
import { NativeSelect,FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countries} from '../../api';
const CountryPicker = ({handleCountryChange}) =>
{
    const [fetechedCountries, setFetchedCountries] = useState([]);
    useEffect(()=>{
        const fetchCountries = async()=>{
        setFetchedCountries(await countries());
    };
    fetchCountries();
    },[setFetchedCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={((e) => (handleCountryChange(e.target.value)))}>
                <option value="global">Global</option>
                {fetechedCountries.map((country, i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;