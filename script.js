 

document.getElementById('btn').addEventListener("click", async () => {
	const name = document.getElementById("text").value.trim();
const delay = document.getElementById("delay").value;

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, delay * 1000);
    });
}
    try {
        const data = await promise1();
        document.getElementById('output').textContent = data;
        document.getElementById('output').style.color = "black";
    } catch (err) {
        document.getElementById('output').textContent = err;
    }
});
	
 
