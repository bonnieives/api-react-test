import React, { useEffect, useState } from 'react'
import styles from './FootballInfo.module.css'
import { useFetchFootballData } from '../hooks/fetchFootballData'

const FootballInfo = () => {
    const {data, fetchInfo} = useFetchFootballData();

    useEffect(() => {
        fetchInfo();
    }, [])

  return (
    <div className={styles.football_info}>
        <h1>Football Data</h1>
            {data.length > 0 ? (
            <div>
                {data.map((item, index) => (
                    <div key={index}>
                        <h3>{item.campeonato.nome}</h3>
                        <p>{item.data_realizacao} - {item.hora_realizacao}</p>
                        <p>Stadium: {item.estadio.nome_popular}</p>
                        <p>{item.status}</p>
                        <div className={styles.placar}>
                            <img src={item.time_mandante.escudo}/>
                            <p>{item.placar}</p>
                            <img src={item.time_visitante.escudo}/>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
        <p>Loading football data...</p>
        )}
    </div>
  )
}

export default FootballInfo
