/**
 * 1. Crea una página en la que representarás 2 gráficas diferentes haciendo uso de Google Charts sobre los siguientes conjuntos de datos:
 *    a) Representación en el Congreso de los Diputados por partidos en las últimas elecciones generales. Estos datos los deberás representar mediante un gráfico de barras y mediante uno de sectores (PieChart).
 *    b) Ránking mundial de países más turísticos (por número de visitantes). Deberás representar estos datos mediante un gráfico Geográfico.
 */

google.charts.load("current", {
    "packages": ["corechart", "geochart"],
    "mapsApiKey": "AIzaSyAZ6Zglfvct1Nxh3VAZdCwnYwhOu1gaX6k"
});

// Dibujar gráfico diputados
google.charts.setOnLoadCallback(graficoDiputados);
// Dibujar gráfico paises turísticos
google.charts.setOnLoadCallback(graficoPaises);

function graficoDiputados() {
    // Elementos donde dibujar
    let divSectores = document.getElementById("sectores");
    divSectores.style.width = "45vw";
    divSectores.style.height = "50vh";
    let divBarras = document.getElementById("barras");
    divBarras.style.width = "45vw";
    divBarras.style.height = "50vh";

    // Crear tabla desde array de datos
    let data = google.visualization.arrayToDataTable([
        ["Partido", "Diputados", { role: "style" }],
        ["PSOE", 120, "#E31313"],
        ["PP", 89, "#0393D3"],
        ["VOX", 52, "#54D404"],
        ["PODEMOS-IU", 35, "#A444B4"],
        ["ERC-SOBIRANISTES ", 13, "#FFAF1F"],
        ["Cs", 10, "#FF6F0F"],
        ["JxCAT-JUNTS", 8, "#E55575"],
        ["EAJ-PNV", 6, "#079767"],
        ["EH Bildu", 5, "#B4C404"],
        ["MÁS PAÍS", 3, "#0A7565"],
        ["CUP-PR", 2, "#292929"],
        ["CCa-PNC-NC", 2, "#E6D228"],
        ["NA+", 2, "#8F5F5F"],
        ["BNG", 1, "#72B2E2"],
        ["PRC", 1, "#7C7C4C"],
        ["¡TERUEL EXISTE!", 1, "#037252"]
    ]);


    // Opciones del gráfico
    let pieOptions = {
        "title": "Representación en el Congreso de los Diputados",
        "colors": ["#E31313", "#0393D3", "#54D404", "#A444B4", "#FFAF1F", "#FF6F0F", "#E55575", "#079767", "#B4C404", "#0A7565", "#292929", "#E6D228", "#8F5F5F", "#72B2E2", "#7C7C4C", "#037252"],
        "pieSliceText": "value",
    };

    let barOptions = {
        "title": "Representación en el Congreso de los Diputados",
        legend: "none",
    };

    // Dibujar gráfico de sectores
    let pieChart = new google.visualization.PieChart(divSectores);
    pieChart.draw(data, pieOptions);

    // Dibujar gráfico de barras
    let barChart = new google.visualization.BarChart(divBarras);
    barChart.draw(data, barOptions);
}

function graficoPaises() {
    // Elemento donde dibujar
    let div = document.getElementById("turismo");
    div.style.height = "45vh";

    // Crear tabla de datos
    var data = new google.visualization.DataTable();
    data.addColumn("string", "Pais");
    data.addColumn("number", "Visitantes (millones)");
    data.addRows([
        ["France", 89.4],
        ["Spain", 83.7],
        ["United States", 79.3],
        ["China", 65.7],
        ["Italy", 64.5],
        ["Turkey", 51.2],
        ["Mexico", 45.0],
        ["Thailand", 39.8],
        ["Germany", 39.6],
        ["United Kingdom", 39.4]
    ]);


    // Opciones del gráfico
    let options = {
        "title": "Paises más turísticos en 2019 (por número de visitantes)",
        backgroundColor: "#81D4FA",
        datalessRegionColor: "#DCDCDC",
        colorAxis: { colors: ["#92C591", "#559E54", "#305A30"] }
    };

    // Dibujar gráfico
    let geoChart = new google.visualization.GeoChart(div);
    geoChart.draw(data, options);
}

// Volver a dibujar el gráfico para adaptarlo al viewport si se cambia el tamaño de la pantalla
window.addEventListener("resize", () => {
    graficoDiputados();
    graficoPaises();
});