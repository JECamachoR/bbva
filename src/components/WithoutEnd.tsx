import React, { useState } from 'react'

const WithoutEnd = () => {

    const [mensualidad, setMensualidad] = useState(1000)
    const [months, setMonths] = useState(12*30)
    const [vehicle, setVehicle] = useState<number>(0)

    const rate = vehicle / 12

    const pv = mensualidad * ((1+rate)**months -1) / rate

    const normal = (mensualidad*months).toFixed(2)

    const inputStyle = {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#010101",
        fontSize: 18,
        width: "100%"
    }

    const labelStyle = {
        fontSize: 24,
    }

    return (
        <div
        style={{
            display: "flex",
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
            padding: 24,
        }}
        >
            <form style={labelStyle}>
                Al mes juntaré
                <br />
                <input style={inputStyle} type="number" min="1" step="any" value={mensualidad} onChange={v => setMensualidad(Number(v.target.value))} />
                <br />
                <br />
                Durante (meses)
                <br />
                <input style={inputStyle} type="number" min="1" step="any" value={months} onChange={v => setMonths(Number(v.target.value))} />
                <br />
                <br />

                Usando el instrumento:
                <br />
                <select style={inputStyle} value={vehicle} onChange={v => setVehicle(Number(v.target.value))}>
                    <option value={0}>ninguno</option>
                    <option value={0.04}>cetes</option>
                    <option value={0.24}>bienes raices</option>
                    <option value={0.176}>préstamos</option>
                    <option value={0.07}>UDIs</option>
                </select> = {(100*vehicle).toFixed(2)}%
                <br />
                <br />

                normalmente tendría ${normal}
                <br />
                <br />
                pero por usar este instrumento tendrás ${(pv || mensualidad*months).toFixed(2) }
                {
                    (pv > mensualidad*months) && <><br/><br/>por lo tanto habrás ganado ${(pv - mensualidad*months).toFixed(2)}</>
                }
        </form>
    </div>
    )
}

export default WithoutEnd