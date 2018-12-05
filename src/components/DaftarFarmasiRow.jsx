import React from 'react';
import { Link } from "react-router-dom";

export const DaftarFarmasiRow = (props) => {
    return (
        <tbody>
            {props.listFarmasi.map(farmasi => {
                return (
                    <tr key={farmasi.id}>
                        <td>{farmasi.nama}</td>
                        <td>{farmasi.jenis}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}