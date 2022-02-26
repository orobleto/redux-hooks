import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2'
import Charts from 'chart.js/auto';
import Tendencias from '../../recursos/archivos/tendencias.json';





function Grafico() {

    const [etiquetas, setEtiquetas] = useState([]);
    const [valores2021, setValores2021] = useState([]);
    const [valores2022, setValores2022] = useState([]);

    useEffect(() => {
        setEtiquetas(Tendencias.map((e) => e.mes));
        setValores2021(Tendencias.map((e) => e.cantidad2021));
        setValores2022(Tendencias.map((e) => e.cantidad2022));

    }, [])

    const opciones = {
        responsive: true,
        title: {
            display: true,
            text: "Meses del año"
        }
    }

    const datos = {
        labels: etiquetas,
        datasets: [
            {
                label: "2021",
                data: valores2021,
                backgroundColor: "#8520CB",
                borderColor: "#26E38B",
                borderWidth: 2
            },
            {
                label: "2022",
                data: valores2022,
                backgroundColor: "#D292F1",
                borderColor: "#26E38B",
                borderWidth: 2
            }
        ]
    }



    return (<>
        <div style={{ height: "300px", width: "80%" }} >
            <Bar options={opciones} data={datos} />

        </div>
    </>)
}

export default Grafico;