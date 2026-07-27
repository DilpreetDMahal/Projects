async function fetchData(){
    const loadingText = document.getElementById("loading");
    const dataText = document.getElementById("data");


    loadingText.style.display = "block";
    dataText.textContent = " ";

    try {
        const response = await new Promise((resolve, reject) =>{
            setTimeout(() => Math.random() > 0.5 ? resolve("Data laoding successfully"): reject(), 3000)
        });
        loadingText.style.display = "none";
        dataText.textContent = response;
    } catch (error) {
        dataText.textContent = "Error loading data";
    } finally {
        loadingText.style.display = "none";
    }
}