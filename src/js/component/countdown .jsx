import React, { useState, useEffect } from 'react';
import SecondsCounter from './secondsCounter.jsx';
import '../../styles/countdown.css';

const Countdown = () => {
    const [time, setTime] = useState(10); // Tiempo inicial
    const [isRunning, setIsRunning] = useState(false); // Estado del contador
    const [alertTime, setAlertTime] = useState(5); // Tiempo para la alerta

    // Efecto para manejar el intervalo
    useEffect(() => {
        let interval = null;

        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval); // Limpiar el intervalo
    }, [isRunning, time]);

    // Mostrar alerta cuando se alcanza el tiempo especificado
    useEffect(() => {
        if (time === alertTime) {
            alert(`¡Tiempo alcanzado: ${alertTime} segundos!`);
        }
    }, [time, alertTime]);

    // Funciones para manejar el contador
    const start = () => setIsRunning(true);
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setTime(10); // Reinicia al tiempo inicial
    };
    const resume = () => setIsRunning(true);

    // Convertir el tiempo a formato de dígitos individuales
    const seis = Math.floor(time / 100000);
    const cinco = Math.floor(time / 10000);
    const cuatro = Math.floor(time / 1000);
    const tres = Math.floor((time % 1000) / 100);
    const dos = Math.floor((time % 100) / 10);
    const uno = Math.floor(time % 10);

    return (
        <div>
            <div className="controls">
                <button onClick={start}>Iniciar</button>
                <button onClick={stop}>Pausar</button>
                <button onClick={resume}>Reanudar</button>
                <button onClick={reset}>Reiniciar</button>
            </div>
            <SecondsCounter uno={uno} dos={dos} tres={tres} cuatro={cuatro} cinco={cinco} seis={seis} />
            <div className="set-alert">
                <label>
                    Establecer alerta en:
                    <input
                        type="number"
                        value={alertTime}
                        onChange={(e) => setAlertTime(parseInt(e.target.value) || 0)}
                    />
                </label>
            </div>
        </div>
    );
};

export default Countdown;
