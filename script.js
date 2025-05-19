 
document.getElementById('btn').addEventListener("click", async () => {
    const name = document.getElementById("text").value.trim();
    const delay = Number(document.getElementById("delay").value);

    const promise1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Resolving with:", name); // Debug log
                resolve(name);
            }, delay * 1000);
        });
    }

    try {
        const data = await promise1();
        document.getElementById('output').textContent = data;
        console.log("Output set to:", data); // Debug log
    } catch (err) {
        document.getElementById('output').textContent = err;
    }
});
	
 
