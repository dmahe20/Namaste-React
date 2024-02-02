const p1 = () => new Promise(r => setTimeout(r, 3000, 1));
const p2 = () => new Promise(r => setTimeout(r, 1000, 2));

function* u() {
    yield p1();
    yield p2();
}

// Using async/await
async function executeGenerator() {
    const generator = u();

    const result1 = await generator.next().value;
    console.log(result1);

    const result2 = await generator.next().value;
    console.log(result2);
}

executeGenerator();

// Using .then()
function executeGeneratorThen() {
    const generator = u();

    generator.next().value.then(result1 => {
        console.log(result1);
        generator.next().value.then(result2 => {
            console.log(result2);
        });
    });
}

executeGeneratorThen();
//output 1, 2