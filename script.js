
async function runCode() {
    const code = document.getElementById('code-area').value;
    const output = document.getElementById('output');
    output.textContent = '';

    try {
        const oldLog = console.log;
        console.log = function(...args) {
            output.textContent += args.join(' ') + '\n';
            oldLog.apply(console, args);
        };

        const script = new Function(`return (async () => { ${code} })()`);
        await script();

        console.log = oldLog;
    } catch (error) {
        output.textContent = 'Error: ' + error.message;
    }
}

function redirectToLink() {
    window.location.href = 'https://github.com/DarkRai087/Onlinejs'; 
}

function clearCode() {
    document.getElementById('code-area').value = '';
    document.getElementById('output').textContent = '';
}

function copyCode() {
    const codeArea = document.getElementById('code-area');
    codeArea.select();
    codeArea.setSelectionRange(0, 99999); 
    document.execCommand('copy');
}

function impCode() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt,.js';

    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const contents = e.target.result;
                document.getElementById('code-area').value = contents;
            };
            reader.readAsText(file);
        }
    });

    fileInput.click();
}

function formatCode() {
    const codeArea = document.getElementById('code-area');
    const formattedCode = prettier.format(codeArea.value, {
        parser: "babel",
        plugins: prettierPlugins,
    });
    codeArea.value = formattedCode;
}
