const runCode = async () => {
    const code = document.getElementById('code-area').value;
    const output = document.getElementById('output');
    output.textContent = '';

    try {
        const oldLog = console.log;
        console.log = (...args) => {
            output.textContent += args.join(' ') + '\n';
            oldLog.apply(console, args);
        };

        const script = new Function(`return (async () => { ${code} })()`);
        await script();

        console.log = oldLog;
    } catch (error) {
        output.textContent = 'Error: ' + error.message;
    }
};

const redirectToLink = () => {
    window.location.href = 'https://github.com/DarkRai087';
};

const clearCode = () => {
    document.getElementById('code-area').value = '';
    document.getElementById('output').textContent = '';
};

const copyCode = () => {
    const codeArea = document.getElementById('code-area');
    codeArea.select();
    codeArea.setSelectionRange(0, 99999);
    document.execCommand('copy');
};

const impCode = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt,.js';

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const contents = e.target.result;
                document.getElementById('code-area').value = contents;
            };
            reader.readAsText(file);
        }
    });

    fileInput.click();
};

const formatCode = () => {
    const codeArea = document.getElementById('code-area');
    const formattedCode = prettier.format(codeArea.value, {
        parser: "babel",
        plugins: prettierPlugins,
    });
    codeArea.value = formattedCode;
};
