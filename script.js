const name = document.getElementById("text").value.trim();
const delay = Number(document.getElementById("delay").value); // Convert to a number

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, delay * 1000);
    });
}

document.getElementById('btn').addEventListener("click", async () => {
    try {
        const data = await promise1();
        document.getElementById('output').textContent = data;
        document.getElementById('output').style.color = "black";
    } catch (err) {
        document.getElementById('output').textContent = err;
    }
});
	
});
