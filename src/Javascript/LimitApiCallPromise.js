// Simulated API call function
function makeAPICall(input) {
    // Simulated delay for API call
    const delay = Math.random() * 1000; // Random delay up to 1 second
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Response for ${input}`);
        }, delay);
    });
}

// Function to make API calls for each input array element in parallel with a maximum concurrency of 2
async function makeAPICallsInParallel(inputs,MAX_CONSURRENT_API_CALL) {
    try {
        const semaphore = new Semaphore(MAX_CONSURRENT_API_CALL); // Maximum concurrency of 2

        // Map each input to a Promise representing an API call
        const apiPromises = inputs.map(async input => {
            await semaphore.acquire();
            try {
                const response = await makeAPICall(input);
                console.log(response); // Handle each response
            } finally {
                semaphore.release();
            }
        });

        // Wait for all API calls to finish
        await Promise.all(apiPromises);
    } catch (error) {
        console.error("Error making API calls:", error);
    }
}

// Semaphore implementation to control concurrency
class Semaphore {
    constructor(capacity) {
        this.capacity = capacity;
        this.count = 0;
        this.waitQueue = [];
    }

    acquire() {
        return new Promise(resolve => {
            if (this.count < this.capacity) {
                this.count++;
                resolve();
            } else {
                this.waitQueue.push(resolve);
            }
        });
    }

    release() {
        if (this.waitQueue.length > 0) {
            const nextResolve = this.waitQueue.shift();
            nextResolve();
        } else {
            this.count--;
        }
    }
}

// Example array of inputs
const inputs = ['input1', 'input2', 'input3', 'input4', 'input5'];

// Make API calls for each input in parallel with a maximum concurrency of 2
makeAPICallsInParallel(inputs,2);
