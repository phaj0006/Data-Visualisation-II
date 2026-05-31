vegaEmbed("#vis", "tourism_dashboard.vg.json", {
    renderer: "svg"
})
    .then(console.log)
    .catch(console.error);