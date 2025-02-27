// public/test.js
async function testFetch() {
    try {
        const response = await fetch('/data/invitados.json');
        if (!response.ok) {
            console.error("Fetch failed:", response.status, response.statusText);
            return;
        }
        const data = await response.json();
        console.log("Fetch successful! Data:", data);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

testFetch();