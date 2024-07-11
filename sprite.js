let personaCount = 0;
let intervals = [];  // Array para almacenar los intervalos

function enviarDatos() {
    const ini = parseInt(document.getElementById("start").value);
    const fin = parseInt(document.getElementById("end").value);

    if (isNaN(ini) || isNaN(fin)) {
        document.querySelector("#c_resultado").innerHTML = `<h4>No hay dato</h4>`;
    } else {
        personaCount++;
        // Determinar la clase CSS según el número de persona
        let clase = "bg_primary";
        if (personaCount % 4 === 0) {
            clase = "bg_fourth";
        } else if (personaCount % 3 === 0) {
            clase = "bg_thirth";
        } else if (personaCount % 2 === 0) {
            clase = "bg_secondary";
        }

        document.querySelector("#c_resultado").innerHTML += `
        <div class="Character">
            <div class="node_number ${clase}">
                <small class="color_bg"> Persona ${personaCount} </small>
                Intervalo: ${ini}
                Intervalo: ${fin}
            </div>
            <img class="Character_shadow pixelart" src="Shadow.png" alt="Shadow" />
            <img class="Character_spritesheet pixelart" src="sprite.png" alt="Character" />
        </div>
        `;

        // Guardar el intervalo en el array
        intervals.push({ start: ini, end: fin });
    }
    return false;
}