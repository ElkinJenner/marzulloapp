function calcular() {
    // Verificar si no hay intervalos ingresados
    if (intervals.length === 0) {
        document.getElementById("result_calculo").innerHTML = "<h4>No hay intervalos para calcular</h4>";
        return false;
    }

    // Crear un array para almacenar los puntos de inicio y fin de cada intervalo
    let points = [];

    // Usar forEach para recorrer cada intervalo y agregar los puntos de inicio y fin al array de puntos
    intervals.forEach(interval => {
        points.push({ time: interval.start, type: 'start' });
        points.push({ time: interval.end, type: 'end' });
    });

    // Ordenar los puntos por tiempo; en caso de empate, los puntos de 'end' van antes que los puntos de 'start'
    points.sort((a, b) => a.time - b.time || (a.type === 'end' ? -1 : 1));

    // Inicializar variables para el cálculo del intervalo óptimo
    let maxCount = 0; // Mayor cantidad de intervalos superpuestos
    let currentCount = 0; // Conteo actual de intervalos superpuestos
    let bestIntervalStart = 0; // Inicio del mejor intervalo encontrado
    let bestIntervalEnd = 0; // Fin del mejor intervalo encontrado
    let intervalStarted = false; // Indica si se ha iniciado un nuevo intervalo óptimo

    // Usar forEach para recorrer los puntos ordenados
    points.forEach(point => {
        if (point.type === 'start') {
            // Incrementar el conteo actual al encontrar un punto de inicio
            currentCount++;
            // Si el conteo actual es mayor que el máximo, actualizar los valores del intervalo óptimo
            if (currentCount > maxCount) {
                maxCount = currentCount;
                bestIntervalStart = point.time;
                intervalStarted = true;
            }
        } else {
            // Al encontrar un punto de fin, cerrar el intervalo óptimo actual si estaba iniciado
            if (intervalStarted) {
                bestIntervalEnd = point.time;
                intervalStarted = false;
            }
            // Decrementar el conteo actual al encontrar un punto de fin
            currentCount--;
        }
    });

    // Mostrar el resultado en la interfaz
    const outputDiv = document.getElementById('result_calculo');
    outputDiv.innerHTML = `El intervalo óptimo es [${bestIntervalStart}, ${bestIntervalEnd}] con ${maxCount} intervalos superpuestos.`;

    return false;
}